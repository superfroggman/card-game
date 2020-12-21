const express = require("express");
const app = express();
const port = 3000;
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const clientDir = __dirname + "/client";

app.use(express.static(clientDir));

io.on("connection", async (socket) => {
  console.log("New Connection to SocketIO");
  io.sockets.emit("msg", "Hello");

  socket.on("msg", async function (msg) {
    console.log(msg);
  });
});

server.listen(port, () => console.log(`Server listening on port ${port}!`));
