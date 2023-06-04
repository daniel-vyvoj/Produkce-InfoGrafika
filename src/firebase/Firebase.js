// @ts-ignore
import { initializeApp } from "firebase/app";
// @ts-ignore
import { getAuth } from "firebase/auth";
// @ts-ignore
import { getDatabase} from "firebase/database";
// @ts-ignore
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAmlSfM56nhS6SiZLwNKUWnkSq6-nlBswU",
    authDomain: "info-dashboar.firebaseapp.com",
    databaseURL: "https://info-dashboar-default-rtdb.firebaseio.com",
    projectId: "info-dashboar",
    storageBucket: "info-dashboar.appspot.com",
    messagingSenderId: "481469338924",
    appId: "1:481469338924:web:64ec977415da39189a4889"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);


export { app, auth, db, storage };