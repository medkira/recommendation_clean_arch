// Define interfaces for server-to-client, client-to-server, and inter-server events
export interface ServerToClientEvents {
    message: string;
    // Add more events as needed
}

export interface ClientToServerEvents {
    sendMessage: string;
    // Add more events as needed
}

export interface InterServerEvents {
    ping: () => void;
}