import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,OAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCtCM5sYHPpNxNrAK4cJlyXS6I8XgmKdbQ",
  authDomain: "auth-43322.firebaseapp.com",
  projectId: "auth-43322",
  storageBucket: "auth-43322.appspot.com",
  messagingSenderId: "35279392164",
  appId: "1:35279392164:web:5bcb175e4bc5ff053f0531"
};

const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
export const appleProvider = new OAuthProvider('apple.com');
export const yahooProvider = new OAuthProvider('yahoo.com');
export const auth = getAuth(app);