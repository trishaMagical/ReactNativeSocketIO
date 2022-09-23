const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());
const port =3005;
const server = http.createServer(app);

const io =new Server(server,{
    cors: {
      origin: "http://localhost:19006",
      methods: ["GET", "POST"],
    },
  });
server.listen(port, () => {
    console.log("SERVER RUNNING:" + port);
  });