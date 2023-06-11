
import { initializeApp } from "firebase/app";

import { getFirestore} from "firebase/firestore"
import { getAuth} from "firebase/auth"
import { getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDb1tdA8O_KIRlCV4zfxORemWGD-XpMOaA",
  authDomain: "projet-ultime.firebaseapp.com",
  projectId: "projet-ultime",
  storageBucket: "projet-ultime.appspot.com",
  messagingSenderId: "160035079134",
  appId: "1:160035079134:web:ef10015a2b265cc576134f",
  measurementId: "G-TT5PSW5WB7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);


