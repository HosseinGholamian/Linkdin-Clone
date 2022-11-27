// import firebase from "firebase"
// const firebaseConfig = {
//     apiKey: "AIzaSyCl-5LZxUps3i0RU3xErKZ4Kns2sGFt5l8",
//     authDomain: "linkdin-clone-b7441.firebaseapp.com",
//     projectId: "linkdin-clone-b7441",
//     storageBucket: "linkdin-clone-b7441.appspot.com",
//     messagingSenderId: "162731872792",
//     appId: "1:162731872792:web:78d193dc8b0a1f35daa96d"
// };

// const app = firebase.initializeApp(firebaseConfig);
// const db = app.firestore();
// const Auth = firebase.auth();


// export { db, Auth };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCl-5LZxUps3i0RU3xErKZ4Kns2sGFt5l8",
    authDomain: "linkdin-clone-b7441.firebaseapp.com",
    projectId: "linkdin-clone-b7441",
    storageBucket: "linkdin-clone-b7441.appspot.com",
    messagingSenderId: "162731872792",
    appId: "1:162731872792:web:78d193dc8b0a1f35daa96d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };