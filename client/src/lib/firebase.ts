import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBTE-aR_Dt1oZTwRu3cx7o5nGL_lSzNTow",
  authDomain: "snow-1c17f.firebaseapp.com",
  projectId: "snow-1c17f",
  storageBucket: "snow-1c17f.firebasestorage.app",
  messagingSenderId: "901785562091",
  appId: "1:901785562091:web:8694663f8dbd952d28c7ae"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Export Firestore instance
export const db = getFirestore(app);