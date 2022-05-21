
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAT917yTLM3z4xjpn7qhCv4EsjXBaEKxvY",
      authDomain: "kwitter-294c0.firebaseapp.com",
      projectId: "kwitter-294c0",
      storageBucket: "kwitter-294c0.appspot.com",
      messagingSenderId: "178974525396",
      appId: "1:178974525396:web:a25a73173c2dc6652ef841"
    };
    
    // Initialize Firebase
       firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
