// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  increment,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv-rlRM7C7kE6Qg9QMEfqJdHs8cMjYHyE",
  authDomain: "prepsprint-9dc9f.firebaseapp.com",
  projectId: "prepsprint-9dc9f",
  storageBucket: "prepsprint-9dc9f.firebasestorage.app",
  messagingSenderId: "435174056795",
  appId: "1:435174056795:web:d9463bb4c59a788a12707e",
  measurementId: "G-FSQY1BY57E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function getGlobalUserId() {

  let userId = localStorage.getItem("prepsprint_user_id");

  if (!userId) {

    userId = crypto.randomUUID();

    localStorage.setItem("prepsprint_user_id", userId);

  }

  return userId;

}

window.trackQuestionAnswered = async function(subject, mode, category, correct) {

  try {

    const statsRef = doc(db, "globalStats", "main");

    await setDoc(statsRef, {

      totalQuestionsAnswered: increment(1),

      [`subjects.${subject}.questionsAnswered`]: increment(1),

      [`modes.${mode}.questionsAnswered`]: increment(1),

      [`categories.${category}.questionsAnswered`]: increment(1)

    }, { merge: true });

    if (correct) {

      await setDoc(statsRef, {

        totalCorrectAnswers: increment(1)

      }, { merge: true });

    }

  } catch (error) {

    console.error("Failed to track question:", error);

  }

};

window.trackUniqueUser = async function() {

  try {

    const userId = getGlobalUserId();

    await setDoc(doc(db, "users", userId), {

      userId,

      lastVisit: serverTimestamp()

    }, { merge: true });

    await setDoc(doc(db, "globalStats", "main"), {

      totalVisits: increment(1)

    }, { merge: true });

  } catch (error) {

    console.error("Failed to track user:", error);

  }

};

window.submitReviewToFirebase = async function(rating, comment) {

  try {

    await addDoc(collection(db, "reviews"), {

      userId: getGlobalUserId(),

      rating,

      comment,

      createdAt: serverTimestamp()

    });

  } catch (error) {

    console.error("Failed to submit review:", error);

  }

};
