
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD6EWjHvvnQmNBXj5oncqJuT7ptjL_x1iM",
      authDomain: "kwitter-ae778.firebaseapp.com",
      databaseURL: "https://kwitter-ae778-default-rtdb.firebaseio.com",
      projectId: "kwitter-ae778",
      storageBucket: "kwitter-ae778.appspot.com",
      messagingSenderId: "989607291373",
      appId: "1:989607291373:web:b1c419f09fb0fd8a919fe4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
