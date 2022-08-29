import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA1-LlVs7aignqlj4pIEww_2vQrQUWZNyg",
    authDomain: "musicstore-8167a.firebaseapp.com",
    projectId: "musicstore-8167a",
    storageBucket: "musicstore-8167a.appspot.com",
    messagingSenderId: "877848038591",
    appId: "1:877848038591:web:1a7a6e66075bcf913f4a0a",
    measurementId: "G-W7XVK9147Q"
}

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);