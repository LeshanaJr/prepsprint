/* Guest data stays on this device; authenticated caches are isolated by Firebase UID. */
(function () {
  "use strict";
  const guestKey = "prepsprint_progress_v1";
  let storageKey = guestKey;
  let state = { status: "loading", user: null };
  let hooks, defaults, cloudReady = false, timer, generation = 0, savingOwner = null;
  let message = "Checking account availability…", pendingRemote;
  const read = key => { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } };
  const write = (key, value) => { localStorage.setItem(key, JSON.stringify(value)); };
  const api = () => window.prepSprintAccount;
  const errorText = error => api()?.errorMessage(error) || "Cloud connection unavailable. Your practice remains on this device.";
  const dirtyKey = () => `${storageKey}:pending`;

  function refresh() {
    const panel = document.getElementById("account-panel");
    if (panel) panel.innerHTML = panelHTML();
  }

  function panelHTML() {
    const user = state.user;
    return `<div class="subject-card account-card">
      <div class="subject-card-title">${user ? "Your account" : "Study your way"}</div>
      <p>${user ? escapeHTML(user.displayName || user.email || "Google account") : "Practice as a guest, or continue with Google to keep private progress in your account."}</p>
      <p class="account-status" role="status" aria-live="polite">${escapeHTML(message)}</p>
      ${user ? `<button class="mode-btn dark-btn" data-action="accountSignOut()">Sign out</button>
        ${!cloudReady && !pendingRemote ? `<button class="mode-btn standard-btn" data-action="accountRetry()">Retry cloud connection</button>` : ""}
        ${cloudReady ? `<button class="mode-btn standard-btn" data-action="accountSync()">Save progress now</button>` : ""}` : `<button class="mode-btn google-btn" data-action="accountSignIn()" ${state.status === "loading" || state.status === "unavailable" ? "disabled" : ""}>Continue with Google</button>`}
      ${pendingRemote ? `<p>This device has unsaved progress. Choose which copy to keep for this account.</p><button class="mode-btn standard-btn" data-action="accountKeepLocal()">Keep this device’s progress</button><button class="mode-btn dark-btn" data-action="accountKeepCloud()">Use cloud progress</button>` : ""}
      ${user ? "<p class=privacy-note>Guest progress stays separate. Sign out on shared devices.</p>" : "<p class=privacy-note>Guest progress is saved only in this browser.</p>"}
    </div>`;
  }

  async function flush() {
    clearTimeout(timer);
    timer = null;
    if (!cloudReady || !state.user || savingOwner === generation || !hooks) return;
    const owner = generation, key = storageKey, snapshot = JSON.stringify(hooks.getProgress());
    savingOwner = owner;
    message = "Saving private progress…";
    refresh();
    try {
      await api().saveProgress(JSON.parse(snapshot));
      if (owner !== generation) return;
      if (snapshot === JSON.stringify(hooks.getProgress())) {
        localStorage.removeItem(`${key}:pending`);
        message = "Progress saved to your account.";
      } else {
        message = "Saving your latest changes…";
        timer = setTimeout(flush, 1500);
      }
    } catch (error) {
      if (owner === generation) message = errorText(error);
    } finally {
      if (savingOwner === owner) savingOwner = null;
      if (owner !== generation && cloudReady && read(dirtyKey())) timer = setTimeout(flush, 1500);
      refresh();
    }
  }

  async function loadCloud(owner) {
    cloudReady = false;
    pendingRemote = undefined;
    message = "Loading your private progress…";
    refresh();
    try {
      const remote = await api().loadProgress();
      if (owner !== generation) return;
      // A failed fetch never authorizes overwriting a potentially existing cloud record.
      if (read(dirtyKey()) && remote) {
        pendingRemote = remote;
        message = "Choose the progress you want to keep.";
      } else {
        if (remote) hooks.setProgress(remote);
        write(storageKey, hooks.getProgress());
        cloudReady = true;
        if (read(dirtyKey())) timer = setTimeout(flush, 1500);
        message = remote ? "Private progress loaded." : "Your account is ready. Start practicing to save progress.";
      }
      hooks.render();
    } catch (error) {
      if (owner === generation) { message = errorText(error); refresh(); }
    }
  }

  async function changeState(next) {
    const oldUid = state.user?.uid, newUid = next.user?.uid;
    state = next;
    if (oldUid === newUid && newUid && cloudReady) { refresh(); return; }
    const owner = ++generation;
    clearTimeout(timer);
    timer = null;
    cloudReady = false;
    pendingRemote = undefined;
    storageKey = newUid ? `prepsprint_progress_v2:${newUid}` : guestKey;
    if (oldUid !== newUid) {
      hooks.resetSession();
      hooks.setProgress(read(storageKey) || structuredClone(defaults));
    }
    if (next.status === "authenticated") {
      hooks.render();
      await loadCloud(owner);
    } else {
      message = next.error || (next.status === "loading" ? "Checking account availability…" : "Guest mode · progress saved on this device.");
      hooks.render();
    }
  }

  window.accountUI = {
    load(fallback) { defaults = fallback; return read(storageKey) || structuredClone(fallback); },
    save(progress, { housekeeping = false } = {}) {
      try {
        write(storageKey, progress);
        if (state.user && (!housekeeping || cloudReady)) write(dirtyKey(), true);
        if (cloudReady && !timer) timer = setTimeout(flush, 5000);
      } catch { message = "This browser could not save progress. Check available storage."; refresh(); }
    },
    reset() { try { localStorage.removeItem(storageKey); } catch {} },
    panel: () => `<section id="account-panel" aria-label="Account">${panelHTML()}</section>`,
    start(callbacks) {
      hooks = callbacks;
      const connect = () => {
        if (api()) { api().onChange(changeState); return; }
        state = { status: "unavailable", user: null };
        message = "Google sign-in could not load. You can still practice as a guest. Reload to retry.";
        refresh();
      };
      if (api()) connect();
      else { window.addEventListener("prepsprint-account-ready", connect, { once: true }); setTimeout(() => { if (!api()) connect(); }, 10000); }
      document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") void flush(); });
    },
    flush,
    getState: () => state
  };
  window.accountSignIn = async () => {
    message = "Opening Google sign-in…"; refresh();
    try { await api().signInWithGoogle(); }
    catch (error) { message = errorText(error); refresh(); }
  };
  window.accountSignOut = async () => {
    // Local pending data is already durable. Do not trap users in sign-out when offline.
    void flush();
    try { await api().signOut(); }
    catch (error) { message = errorText(error); refresh(); }
  };
  window.accountRetry = () => loadCloud(generation);
  window.accountSync = flush;
  window.accountKeepLocal = () => { pendingRemote = undefined; cloudReady = true; void flush(); };
  window.accountKeepCloud = () => {
    if (!pendingRemote) return;
    hooks.resetSession(); hooks.setProgress(pendingRemote); pendingRemote = undefined;
    try { write(storageKey, hooks.getProgress()); localStorage.removeItem(dirtyKey()); } catch {}
    cloudReady = true; message = "Cloud progress loaded."; hooks.render();
  };
})();
