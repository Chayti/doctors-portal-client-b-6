// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  apiKey: "AIzaSyCn_I6heZkXnY-P-xI4FhvJycT_biUOw48",
  authDomain: "ema-john-react-site.firebaseapp.com",
  projectId: "ema-john-react-site",
  storageBucket: "ema-john-react-site.appspot.com",
  messagingSenderId: "817700730149",
  appId: "1:817700730149:web:e170a834430d67eeea56cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
