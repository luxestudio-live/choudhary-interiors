import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBYz84VF1DokOpvkwmCl7vtaaWPKweTYmA",
  authDomain: "choudhary-interiors.firebaseapp.com",
  projectId: "choudhary-interiors",
  storageBucket: "choudhary-interiors.firebasestorage.app",
  messagingSenderId: "140181290223",
  appId: "1:140181290223:web:c68a448410cfd401172f1a",
  measurementId: "G-EHBJ2B9M3Y"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
