import { socketIOAdapter } from "@main/adpaters/socket-io-adapter";
import { Server } from "socket.io";

export default (io: Server): void => {
  io.on("connection", (socket) => {
    //socketIOAdapter(socket);
    // console.log("A user connected");
    // socket.on("disconnect", () => {
    //     console.log("A user disconnected");
    // });
    // socket.on("chat message", (message) => {
    //     console.log("Recived mesage:", message), io.emit("chat message", message);
    // });
  });
};
