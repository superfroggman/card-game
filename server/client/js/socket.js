const socket = io();

socket.on("connect", () => {
    socket.emit("msg", "cool");
    socket.on("msg", function (msg) {
        console.log(msg)
      });
});