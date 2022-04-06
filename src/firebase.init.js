// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCnMaHVRpPdWcIU31Qz8zbuU1Lps7_GQUo',
  authDomain: 'the-meals-route.firebaseapp.com',
  projectId: 'the-meals-route',
  storageBucket: 'the-meals-route.appspot.com',
  messagingSenderId: '681299661813',
  appId: '1:681299661813:web:ac207f0ae385e06f4f86bc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
