// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFK-c4B84i9JeS_mFCFx0-vNXoIPa41-0",
  authDomain: "einstein-ekde.firebaseapp.com",
  projectId: "einstein-ekde",
  storageBucket: "einstein-ekde.appspot.com",
  messagingSenderId: "856740794783",
  appId: "1:856740794783:web:0c77155c4791b4ce80edaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Wlcome" + user_name  + "!" ;

  function addRoom()
  {
   room_name = document.getElementById("room_name") .value;
   firebase.database().ref("/").child(room_name).upadate({
     purpose : "adding room name"
   });

   localStorage.setItem("room_name" , room_name);
   window.location = "kwitter_page.html";

  }

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(tis.id)'>#" + Room_names + "</div><hr>";

//End code
});});}
getData();


function redirectToRoomName(name) 
{
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html";
}