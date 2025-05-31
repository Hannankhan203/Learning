import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDh0K6Q6dtop50HEtWK1g7k09rLHdSeiTo",
  authDomain: "test-project-fab2e.firebaseapp.com",
  projectId: "test-project-fab2e",
  storageBucket: "test-project-fab2e.firebasestorage.app",
  messagingSenderId: "821795057658",
  appId: "1:821795057658:web:0899ceb21d421ad9b23e43",
  measurementId: "G-NZNKJJ4LVF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

let registerBtn = document.getElementById("register-btn");

registerBtn.addEventListener("click", function () {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;

      console.log("User ==> ", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log("Error ==> ", errorMessage);
      // ..
    });
});

let loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function () {
  let loginEmail = document.getElementById("login-email");
  let loginPassword = document.getElementById("login-password");

  signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      console.log("User ==> ", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log("Error ==> ", errorMessage);
    });
});
