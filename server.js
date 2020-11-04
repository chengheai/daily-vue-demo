const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
function MData(i) {
  return {
    columns: ["日期", "访问用户"],
    rows: [
      { 日期: "1/1", 访问用户: Math.floor(Math.random() * i) + i },
      { 日期: "1/2", 访问用户: Math.floor(Math.random() * i) + i },
      { 日期: "1/3", 访问用户: Math.floor(Math.random() * i) + i },
      { 日期: "1/4", 访问用户: Math.floor(Math.random() * i) + i },
      { 日期: "1/5", 访问用户: Math.floor(Math.random() * i) + i },
      { 日期: "1/6", 访问用户: Math.floor(Math.random() * i) + i }
    ]
  };
}
let timer = null;
clearInterval(timer);
io.on("connection", socket => {
  console.log("a user connected");
  socket.join("aaa");
  timer = setInterval(() => {
    io.to("aaa").emit("chaTmessage", MData(Math.floor(Math.random()*10+1)));
  }, 1000);

  // socket.on('hello', (message) => {
  //   socket.join(message.roomName)
  //   io.to(message.roomName).emit('chaTmessage', {img:"你在这"})
  // })
});

http.listen(2000, () => {
  console.log("listening on http://loaclhost:2000");
});
module.exports = app;
