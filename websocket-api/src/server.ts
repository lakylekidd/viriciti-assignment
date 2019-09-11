// Import required modules
import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import * as mongoose from 'mongoose';
import VehicleData, { IVehicleData } from './schemas/vehicle-data.schema';

// Initialize the express app
const app = express();

// Initialize a simple http server
const server = http.createServer(app);

// Initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

// // Add on connect event to web socket server
// wss.on('connection', (ws: WebSocket) => {

//     // Add on message event (for testing purposes)
//     ws.on('message', (message: string) => {
//         // Log the received message 
//         console.log("Received message: ", message);
//         // Send the message back to the client
//         ws.send(`You sent: ${message}`);
//     });

//     // WS Server is connected -- Send feedback
//     ws.send(`You have connected to the WebSocket Server!`);
// });

// Start our server
server.listen(5000, () => {

    // Connect to mongo server
    mongoose.connect("mongodb+srv://lakylekidd:Hermes%401986@cluster0-aysvk.mongodb.net/test?retryWrites=true&w=majority", {
        useNewUrlParser: true
    }, err => {
        // Log connection successfull
        console.log("MongoDB Connected!");

        // Once connection to the database is established
        // We need to allow clients to connect to the Web Socket and receive
        // vehicle data
        wss.on('connection', (ws: WebSocket) => {
            // Start watching the vehicle data and send to client
            VehicleData.watch().on('change', data => {
                // Log data sent to client
                //console.log("Data Sent to Client");
                // Send data to client
                ws.send(JSON.stringify(data));
            });
            // WS Server is connected -- Send feedback
            ws.send(`You have connected to the WebSocket Server!`);
        });
    });

    // Log server is listening
    console.log(`Server started on port 5000`);
});