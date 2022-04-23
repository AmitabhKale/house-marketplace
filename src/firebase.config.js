// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA62WFchu9C6Zu7jRLz0CjHd1WkbYHrOvw",
  authDomain: "house-marketplace-app-89f5c.firebaseapp.com",
  projectId: "house-marketplace-app-89f5c",
  storageBucket: "house-marketplace-app-89f5c.appspot.com",
  messagingSenderId: "421662988418",
  appId: "1:421662988418:web:2b7d9d9ed22b2e14ce3c9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();