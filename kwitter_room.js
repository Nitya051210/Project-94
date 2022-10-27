const firebaseConfig = {
    apiKey: "AIzaSyBa8SrHJgUc2IR8v3AxOr-DFnJx38uOKcE",
    authDomain: "web-app-eb4d5.firebaseapp.com",
    projectId: "web-app-eb4d5",
    storageBucket: "web-app-eb4d5.appspot.com",
    messagingSenderId: "333220241619",
    appId: "1:333220241619:web:1e7e5dd0932cd9ec6e3426"
  };

  const app = initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML="Welcome" + user_name +"!";

  function addRoom() {
      room_name = document.getElementById(room_name).Value;
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding Room_name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_room.html";
        }

        function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
            Room_names = childKey;
           console.log("Roomname= " + Room_name);
           row="<div class='room_name' id="+ Room_names + " onclick='redirectToRoomname(this.id)'>#"+ Room_names+"</div><hr>";
           document.getElementById("output").innerHTML+=row;
           });});}
     getData();

     function redirectToRoomname(name){
         console.log(name);
         localStorage.setItem("room_name", room_name)
         window.location="kwitter_room.html"
     }

     function logout(){
         localStorage.removeItem("user_name");
         localStorage.removeItem("room_name");
         window.location="index.html";

     }