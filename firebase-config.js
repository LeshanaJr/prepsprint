// These are public web-app identifiers, not secrets. Deployed rules and App
// Check enforcement are the security boundary. See SECURITY.md before enabling.
export const firebaseConfig = Object.freeze({
  apiKey: "AIzaSyCv-rlRM7C7kE6Qg9QMEfqJdHs8cMjYHyE",
  authDomain: "prepsprint-9dc9f.firebaseapp.com",
  projectId: "prepsprint-9dc9f",
  storageBucket: "prepsprint-9dc9f.firebasestorage.app",
  messagingSenderId: "435174056795",
  appId: "1:435174056795:web:d9463bb4c59a788a12707e"
});
export const accountConfig = Object.freeze({
  enabled: true,
  appCheckSiteKey: "6LfrjK0tAAAAADaBDf-XGAcIrR3ee9aBoejD8_KW",
  // Explicit loopback development only, using a demo project, never production.
  useEmulators: false
});
