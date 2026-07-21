// Firebase Configuration

const firebaseConfig = {
  apiKey: "AIzaSyBEddRhDj6EHTqW8uKyFRPaqvUGeJEs9Pk",
  authDomain: "ml-trivia-2026.firebaseapp.com",
  projectId: "ml-trivia-2026",
  storageBucket: "ml-trivia-2026.firebasestorage.app",
  messagingSenderId: "1005639731202",
  appId: "1:1005639731202:web:1e2ce5480e0b321d26ff1b",
  measurementId: "G-GQ2K6VXBNM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();
const auth = firebase.auth();