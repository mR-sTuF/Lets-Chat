const firebaseConfig = {
      apiKey: "AIzaSyCiuwqnuEQjT3zrvXiYDvGLU-LLoZ3n-xI",
      authDomain: "lets-chat-43f74.firebaseapp.com",
      databaseURL: "https://lets-chat-43f74-default-rtdb.firebaseio.com",
      projectId: "lets-chat-43f74",
      storageBucket: "lets-chat-43f74.appspot.com",
      messagingSenderId: "211037057771",
      appId: "1:211037057771:web:6916957b7d87d1dd5b44ae"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome 🎉 " + user_name

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

                  console.log("Room Name - " + Room_names)
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToShowRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}

function redirectToShowRoomName(name) {
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}