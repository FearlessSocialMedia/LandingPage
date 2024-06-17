// var genChild = document.getElementsByClassName('genChild');

// function generate(){
//     genChild[0].innerHTML = "Play Rock Paper Scissors Lizard Spock with a Stranger";
//     genChild[1].style.display = "none";
// }

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDnuQntoOhzS8KifdMCTzjZDrtcA_FoCp4",
    authDomain: "codebuddy-4f58c.firebaseapp.com",
    projectId: "codebuddy-4f58c",
    storageBucket: "codebuddy-4f58c.appspot.com",
    messagingSenderId: "737471357174",
    appId: "1:737471357174:web:32b854502d6a4923b08cd7",
    measurementId: "G-XFN7ZKBZ7V"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const joinBtn = document.getElementById("joinBtn");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const inp = document.getElementById("inp");

joinBtn.addEventListener("click", (e) => { OnSignUp(0, e) })
async function OnSignUp(ind,e){
    e.preventDefault();
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    var email = inp.value;
    
    if(regex.test(email)){
        
        b1.style.display = "none";
        b2.style.display = "flex"
        const docRef = await addDoc(collection(db, "fearless"), {
            email: email
        });

    }
    else{
        // signUpError[ind].style
    }
}