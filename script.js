
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyChRrxkNn8QvJOb29Q3fraIj_kiS7-i4QI",
authDomain: "whiteboard-data-9bfc2.firebaseapp.com",
projectId: "whiteboard-data-9bfc2",
storageBucket: "whiteboard-data-9bfc2.appspot.com",
messagingSenderId: "957839364618",
appId: "1:957839364618:web:39e606c73e1c836bfa05f3",
measurementId: "G-ZXGLN916W3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//get ref to database services
const db = getDatabase(app);

document.getElementById("signup").addEventListener('click', function(e){

  set(ref(db, 'user/' + document.getElementById("email").value),
    {

      email: document.getElementById("email").value
        
    })
      
})

const forms= document.querySelector(".forms"), 
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
      
    })
})

links.forEach(link => {
    link.addEventListener("click", e =>{
        e.preventDefault();
        forms.classList.toggle("show-signup");
      })
})
