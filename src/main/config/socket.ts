import { Express } from "express"
import http from "http";
import { Server } from "socket.io";
import chatbotSocket from "../socket/chatbotSocket";
export const setupSocket = (app: Express): void => {

    const server = http.createServer(app);
    const io = new Server(server);
    chatbotSocket(io);
}
