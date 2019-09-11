// Import required modules
import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

// Initialize the express app
const app = express();

// Initialize a simple http server
const server = http.createServer(app);

// Initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

// Add on connect event to web socket server
wss.on('connection', (ws: WebSocket) => {

    // Add on message event (for testing purposes)
    ws.on('message', (message: string) => {
        // Log the received message 
        console.log("Received message: ", message);
        // Send the message back to the client
        ws.send(`You sent: ${message}`);
    });

    // WS Server is connected -- Send feedback
    ws.send(`You have connected to the WebSocket Server!`);
});

// Start our server
server.listen(5000, () => {

    // Log server is listening
    console.log(`Server started on port 5000`);
});