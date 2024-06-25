import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBauOHF0Vtd64576E88OyzAfQNRdrSJNFk",
  authDomain: "first-test-5cb7c.firebaseapp.com",
  databaseURL:
    "https://first-test-5cb7c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "first-test-5cb7c",
  storageBucket: "first-test-5cb7c.appspot.com",
  messagingSenderId: "660435885686",
  appId: "1:660435885686:web:62304cbdd2891a516ac957",
  measurementId: "G-STM148JSFZ",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  db,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  storage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
};
