import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import { getStorage} from 'firebase/storage'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBGif_FLQYtqRBamvJ9FSDyietNf1X05I",
  authDomain: "login-practice-664be.firebaseapp.com",
  projectId: "login-practice-664be",
  storageBucket: "login-practice-664be.appspot.com",
  messagingSenderId: "455922614921",
  appId: "1:455922614921:web:a31b87ee973d829b5ffc58"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app)
export const dataStorage = getStorage(app)