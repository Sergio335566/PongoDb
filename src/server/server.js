console.log("starting socket server");
const net = require('net');
const Server = require('socket.io');
const express = require('express');
const bodyParser = require('body-parser');
const services = require('./mock-services');
const cors = require('cors');

class APIServer{

  constructor(){
      this.server = express();
      this.server.use(bodyParser.json());
      this.server.use(cors());

      this.server.get('/matches/:type', function (req, res) {
            let type = req.params.type;
            console.log('Get matches from ' + type);
            res.status(200).send(services.getMatchesByType(type));
        });

      this.server.post('/matches', function (req, res){
        let result = services.addMatch(req.body.gameplayType);
        res.status(200).send(result);
      });

      this.server.listen(3000, function(){
        console.log('APIServer listening on port 3000!')
      });
  }
}

class SocketServer {

    constructor(){
        // On crée un serveur de socket
        this.server = new Server(1337);
        this.server.on("connect",this.newConnectionHandler);

        // // On lance un message à toutes les connections
        // setInterval(this.echoTime, 1000);
        //
        // this.testConnection();
    };

    newConnectionHandler(socket){
        console.log("client connected ");
        socket.emit('welcome','welcome, you are connected to this websocket server');
    }

    echoTime() {
        let date = new Date();
        let dateString = date.getHours() + "h" + date.getMinutes()+"m"+date.getSeconds()+"s";
        SocketServer.server.sockets.emit("tick","Il est " + dateString);
    }

    testConnection(){
        let client = require("socket.io-client");
        let socket = client("ws://localhost:1337");
        socket.on("welcome",(data)=>console.log(data));
        socket.on("tick",(data)=>console.log(data));

    }

}



const server = new SocketServer();
const apiServer = new APIServer();
