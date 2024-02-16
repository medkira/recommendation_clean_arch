import { BaseController } from '@infra/http/controllers/BaseController';
import { Socket } from 'socket.io';

export const socketIOAdapter = (socket: Socket, process: Function) => {
    socket.on('message', async (data) => {

        // let processed = await manager.process(message);
        // socket.emit("process", { processed: processed, message: message });
    });

};
