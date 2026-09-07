import { firebaseConfig, accountConfig } from "./firebase-config.js";

// Keep guest practice usable when Google is offline, blocked, or unconfigured.
const MAX_PROGRESS_BYTES = 262144;
const listeners = new Set();
let state = Object.freeze({ status: "loading", user: null, error: null });
let auth, db, sdk, appCheck, getAppCheckToken;
let usingEmulators = false;

function errorMessage(error) {
  const messages = {
    "auth/popup-blocked": "Allow pop-ups for PrepSprint, then try Google sign-in again.",
    "auth/popup-closed-by-user": "Sign-in was canceled. Your guest practice is still available.",
    "auth/cancelled-popup-request": "Another sign-in is already open. Finish that sign-in first.",
    "auth/unauthorized-domain": "Google sign-in is not configured for this website address yet.",
    "auth/operation-not-allowed": "Google sign-in has not been enabled for PrepSprint yet.",
    "auth/account-exists-with-different-credential": "This email already uses another sign-in method. Contact PrepSprint support to recover that account.",
    "auth/user-disabled": "This account is disabled. Contact PrepSprint support.",
    "auth/network-request-failed": "The connection failed. Check your internet connection and try again.",
    "auth/too-many-requests": "Too many attempts. Please wait before trying again.",
    "permission-denied": "Cloud access was refused. Your local progress is safe; contact PrepSprint support if this continues.",
    "unavailable": "Cloud storage is unavailable. Your local progress is safe; try again when connected.",
    "prepsprint/google-required": "Continue with a verified Google account to use cloud features.",
    "prepsprint/sign-in-required": "Sign in with Google to use this feature.",
    "prepsprint/account-changed": "The signed-in account changed. Please try again.",
    "prepsprint/not-configured": "Google accounts are awaiting secure server setup. You can study as a guest.",
    "prepsprint/progress-too-large": "This saved session is too large to sync. Your local progress is still available.",
    "prepsprint/invalid-progress": "Saved cloud progress could not be read. Your local progress has been kept.",
    "prepsprint/invalid-name": "Use a display name between 1 and 80 characters.",
    "prepsprint/invalid-review": "Choose a whole-star rating from 1 to 5 and keep your comment to 2,000 characters."
  };
  if (error?.code?.startsWith("appCheck/")) {
    return "App verification failed. Reload the page and try again; guest practice remains available.";
  }
  return messages[error?.code] || "That cloud action could not be completed. Please try again; your local progress is safe.";
}
function failure(code) {
  return Object.assign(new Error(errorMessage({ code })), { code });
}
function publish(next) {
  state = Object.freeze(next);
  for (const listener of listeners) {
    try { listener(state); } catch (error) { console.error("Account UI listener failed:", error); }
  }
}
function publicUser(user) {
  return user ? Object.freeze({ uid: user.uid, displayName: user.displayName || "", email: user.email || "" }) : null;
}
function requireUser() {
  if (!auth?.currentUser || state.status !== "authenticated" || state.user?.uid !== auth.currentUser.uid) throw failure("prepsprint/sign-in-required");
  return auth.currentUser;
}
async function verifyGoogleUser(user) {
  const token = await sdk.getIdTokenResult(user);
  if (token.claims.email_verified !== true || token.claims.firebase?.sign_in_provider !== "google.com") {
    throw failure("prepsprint/google-required");
  }
}
function checkSameUser(uid) {
  if (auth?.currentUser?.uid !== uid) throw failure("prepsprint/account-changed");
}
function checkRequestUser(uid) {
  checkSameUser(uid);
  if (state.status !== "authenticated" || state.user?.uid !== uid) throw failure("prepsprint/account-changed");
}
async function verifyCloudRequest() {
  if (usingEmulators) return;
  if (!appCheck || typeof getAppCheckToken !== "function") throw failure("appCheck/token-unavailable");
  // A cached, unexpired token is reused; the SDK refreshes it when necessary.
  // Firebase attaches it automatically. Console enforcement remains the server
  // security boundary; this preflight stops our client when attestation fails.
  const result = await getAppCheckToken(appCheck, false);
  if (typeof result?.token !== "string" || !result.token.trim()) throw failure("appCheck/token-unavailable");
}
function encodeProgress(progress) {
  if (!progress || typeof progress !== "object" || Array.isArray(progress)) throw failure("prepsprint/invalid-progress");
  let payload;
  try { payload = JSON.stringify(progress); } catch { throw failure("prepsprint/invalid-progress"); }
  if (new TextEncoder().encode(payload).length > MAX_PROGRESS_BYTES) throw failure("prepsprint/progress-too-large");
  return payload;
}
async function initialize() {
  try {
    const local = ["localhost", "127.0.0.1", "[::1]"].includes(location.hostname);
    if (accountConfig.useEmulators && !local) throw failure("prepsprint/not-configured");
    usingEmulators = accountConfig.useEmulators === true && local;
    if (!accountConfig.useEmulators && (!accountConfig.enabled || !accountConfig.appCheckSiteKey.trim())) {
      throw failure("prepsprint/not-configured");
    }
    const [appSDK, authSDK, firestoreSDK, appCheckSDK] = await Promise.all([
      import("https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js"),
      import("https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js"),
      import("https://www.gstatic.com/firebasejs/12.18.0/firebase-app-check.js")
    ]);
    sdk = { ...authSDK, ...firestoreSDK };
    const app = appSDK.initializeApp(accountConfig.useEmulators ? {
      apiKey: "demo-prepsprint-key", projectId: "demo-prepsprint", authDomain: "demo-prepsprint.firebaseapp.com"
    } : firebaseConfig);
    if (!accountConfig.useEmulators) {
      appCheck = appCheckSDK.initializeAppCheck(app, {
        provider: new appCheckSDK.ReCaptchaEnterpriseProvider(accountConfig.appCheckSiteKey),
        isTokenAutoRefreshEnabled: true
      });
      getAppCheckToken = appCheckSDK.getToken;
    }
    auth = authSDK.getAuth(app);
    db = firestoreSDK.initializeFirestore(app, { localCache: firestoreSDK.memoryLocalCache() });
    if (accountConfig.useEmulators) {
      authSDK.connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
      firestoreSDK.connectFirestoreEmulator(db, "127.0.0.1", 8088);
    }
    // Session-only identity limits exposure on shared school computers.
    await authSDK.setPersistence(auth, authSDK.browserSessionPersistence);
    await new Promise((resolve, reject) => {
      let initial = true;
      let generation = 0;
      authSDK.onIdTokenChanged(auth, async (user) => {
        const observed = ++generation;
        try {
          if (user) await verifyGoogleUser(user);
          if (observed !== generation || auth.currentUser?.uid !== user?.uid) return;
          publish({ status: user ? "authenticated" : "guest", user: publicUser(user), error: null });
        } catch (error) {
          if (observed !== generation || auth.currentUser?.uid !== user?.uid) return;
          publish({ status: "guest", user: null, error: errorMessage(error) });
        }
        if (initial) { initial = false; resolve(); }
      }, (error) => {
        if (initial) reject(error);
        else publish({ status: "unavailable", user: null, error: errorMessage(error) });
      });
    });
  } catch (error) {
    publish({ status: "unavailable", user: null, error: errorMessage(error) });
  }
  return state;
}
const api = {
  getState: () => state,
  onChange(listener) {
    listeners.add(listener);
    listener(state);
    return () => listeners.delete(listener);
  },
  errorMessage,
  async signInWithGoogle() {
    await api.ready;
    if (!auth || state.status === "unavailable") throw failure("prepsprint/not-configured");
    const provider = new sdk.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    const result = await sdk.signInWithPopup(auth, provider);
    await verifyGoogleUser(result.user);
    checkSameUser(result.user.uid);
    return publicUser(result.user);
  },
  async signOut() {
    await api.ready;
    if (auth) await sdk.signOut(auth);
  },
  async loadProgress() {
    const user = requireUser();
    await verifyCloudRequest();
    checkRequestUser(user.uid);
    // Offline/cache misses must never be confused with a missing cloud account.
    const snapshot = await sdk.getDocFromServer(sdk.doc(db, "users", user.uid, "progress", "main"));
    checkSameUser(user.uid);
    if (!snapshot.exists()) return null;
    const data = snapshot.data();
    if (data.schemaVersion !== 1 || typeof data.payload !== "string" || new TextEncoder().encode(data.payload).length > MAX_PROGRESS_BYTES) {
      throw failure("prepsprint/invalid-progress");
    }
    try {
      const progress = JSON.parse(data.payload, (key, value) => {
        if (["__proto__", "constructor", "prototype"].includes(key)) throw failure("prepsprint/invalid-progress");
        return value;
      });
      if (!progress || typeof progress !== "object" || Array.isArray(progress)) throw failure("prepsprint/invalid-progress");
      return progress;
    } catch { throw failure("prepsprint/invalid-progress"); }
  },
  async saveProgress(progress) {
    const user = requireUser();
    const payload = encodeProgress(progress);
    await verifyCloudRequest();
    checkRequestUser(user.uid);
    await sdk.setDoc(sdk.doc(db, "users", user.uid, "progress", "main"), {
      schemaVersion: 1, payload, updatedAt: sdk.serverTimestamp()
    });
    checkSameUser(user.uid);
  },
  async saveProfile(displayName) {
    const user = requireUser();
    const name = typeof displayName === "string" ? displayName.trim() : "";
    if (!name || name.length > 80) throw failure("prepsprint/invalid-name");
    await verifyCloudRequest();
    checkRequestUser(user.uid);
    await sdk.setDoc(sdk.doc(db, "users", user.uid), {
      schemaVersion: 1, displayName: name, updatedAt: sdk.serverTimestamp()
    });
    checkSameUser(user.uid);
    await verifyCloudRequest();
    checkRequestUser(user.uid);
    await sdk.updateProfile(user, { displayName: name });
    checkSameUser(user.uid);
    publish({ status: "authenticated", user: publicUser(user), error: null });
  },
  async submitReview(rating, comment) {
    const user = requireUser();
    if (!Number.isInteger(rating) || rating < 1 || rating > 5 || typeof comment !== "string" || comment.trim().length > 2000) {
      throw failure("prepsprint/invalid-review");
    }
    await verifyCloudRequest();
    checkRequestUser(user.uid);
    await sdk.setDoc(sdk.doc(db, "reviews", user.uid), {
      schemaVersion: 1, rating, comment: comment.trim(), updatedAt: sdk.serverTimestamp()
    });
    checkSameUser(user.uid);
  }
};
window.prepSprintAccount = api;
api.ready = initialize();
Object.freeze(api);
window.dispatchEvent(new Event("prepsprint-account-ready"));

