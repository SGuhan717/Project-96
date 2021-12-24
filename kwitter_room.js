// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAEKYcTMOSOAkfkYDF4Y_6LuYKTv1tjD7k",
  authDomain: "project-93-32f1d.firebaseapp.com",
  databaseURL: "https://project-93-32f1d-default-rtdb.firebaseio.com",
  projectId: "project-93-32f1d",
  storageBucket: "project-93-32f1d.appspot.com",
  messagingSenderId: "1088653578706",
  appId: "1:1088653578706:web:e2fb3f0e153d977cd8f80b"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;

             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}