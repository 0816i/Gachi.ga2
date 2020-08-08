import socketIO, { Socket } from "socket.io";
import http, { Server } from "http";

const io = new socketIO();

export default io;
const listenIO = (httpServer: Server) => {
  io.attach(httpServer);
};
export { listenIO };

io.on("connection", (socket: Socket) => {
  console.log("on");
});
