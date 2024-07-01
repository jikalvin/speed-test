import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8igmIYHqKFwbSKzJ2GFCImIZWGwEhWJQ",
  authDomain: "yocilab-blog.firebaseapp.com",
  projectId: "yocilab-blog",
  storageBucket: "yocilab-blog.appspot.com",
  messagingSenderId: "15910744391",
  appId: "1:15910744391:web:ad8753644984151d5d5c62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
