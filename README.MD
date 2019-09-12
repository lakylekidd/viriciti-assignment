# ViriCiti Job Application Assignment
This is the NodeJS project assigned to me by ViriCiti. It basically simulates the reception of raw vehicle data for which I am to demonstrate how to intercept and store in a MongoDB database and then send it to the browser via WebSocket.

## Description
For this project I have created 4 individual projects
- Persistence Service
- Rest API
- WebSocket API
- ViriCiti NodeJS Broadcast Server

### Broadcasts Server
This project was implemented by ViriCiti and it is used to transmit data using NATS over the internet

### Persistence Service
This project performs the simple task of subscribing to the stream of the broadcast server and persist the data in a MongoDB database. This project is built using JavaScript. It is also dockerized, check Project Readme for running with docker.

### Rest API
This project demonstrates how to fetch some data by vehicle name and data id through a RESTfull API. This project is built using JavaScript. It is also dockerized, check Project Readme for running with docker.

### WebSocket API
This project watches any changes made to the MongoDB and broadcasts a stream of changes to the subscribers. This project is built using TypeScript.

## Technologies Used
For these projects I used the following technologies:
- NodeJS
- Express
- JavaScript
- TypeScript
- WebSockets

## Installation
In order to demonstrate this project you need to do the following:
- Clone the repository `git clone https://github.com/lakylekidd/viriciti-assignment.git viriciti-project`
- Run `npm i` for all the sub projects inside the folder
- Enter the viriciti-nodejs project and run `npm run start-nats`
- Then enter the persistence-service-nodejs project and run `npm run dev`
- Then enter the websocket-api project and run `npm run dev`
- Open Chrome and install the [Smart Websocket Client](https://chrome.google.com/webstore/detail/smart-websocket-client/omalebghpgejjiaoknljcfmglgbpocdp) after installing it run it.
- Under Websocket address field enter `http://localhost:5000/`
- Confirm that you see the message `You have connected to the WebSocket Server!` in the lower input field
- Go back to the viricit-nodejs project and run `npm run start-broadcast`.
- Watch as the vehicle data is being transmitted through the WebSocket project back to the Smart Websocket Client tool on Chrome.

## Testing
The `rest-api` and `websocket-api` projects implement simple testing. In both projects you can run `npm run test` to see the output results. Coverage is not implemented.