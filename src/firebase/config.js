
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace with your actual Firebase project config
const firebaseConfig = {
    apiKey: "AIzaSyBLFin0djocgXKbF9iTGXrFrIxfAWsR67M",
    authDomain: "dip-to-white-website.firebaseapp.com",
    projectId: "dip-to-white-website",
    storageBucket: "dip-to-white-website.firebasestorage.app",
    messagingSenderId: "226781699903",
    appId: "1:226781699903:web:f8f8799d8f67d25f36bd8a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
