console.log("client script");

// Create WebSocket connection.
const socket = io("ws://localhost:1337");

// Connection opened
socket.on("connect", function (event) {
    console.log("Socket Connected");
});

// Listen for messages
socket.on("welcome", function (data) {
      document.getElementById("messageDiv").innerHTML = data;
});
// socket.on("tick", function (data) {
//
// });
const getMatches = function(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:3000/matches/effef',true);
    xhr.onreadystatechange = function(event) {
        if (this.readyState === XMLHttpRequest.DONE) {
          let response = JSON.parse(this.response);
          console.log(response[0].id);
        }
    };
    xhr.send();
};

getMatches();

const createMatch = function(){
    let xhr = new XMLHttpRequest();
    xhr.open('POST','http://localhost:3000/matches',true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
        gameplayType: 'typedunexhr'
    }));
};

createMatch();
