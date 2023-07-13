import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCt4EcIXivRHEZGj6riuhGQ7gA2MPuZeNM",
  authDomain: "chain-web.firebaseapp.com",
  projectId: "chain-web",
  storageBucket: "chain-web.appspot.com",
  messagingSenderId: "791052614877",
  appId: "1:791052614877:web:62da0041d5b96db6162f34",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
