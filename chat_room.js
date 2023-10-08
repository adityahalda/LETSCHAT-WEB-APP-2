// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBOHMBxwvto1LbJWl3ohnRu8fFRx7Q6FOA",
    authDomain: "letschat-web-app-3acb9.firebaseapp.com",
    projectId: "letschat-web-app-3acb9",
    storageBucket: "letschat-web-app-3acb9.appspot.com",
    messagingSenderId: "969590648561",
    appId: "1:969590648561:web:2aa6858182658153bc8350"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
}
