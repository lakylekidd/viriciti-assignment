// Use local env secret variables
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');

// The server configuration
const config = {
    name: 'dockerized-express-api',
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
};

// Setup app and logging
const app = express();
const logger = log({
    console: true,
    file: false,
    label: config.name
});

// Import the Vehicle Stream module
const vehicleStream = require('./vehicle-stream')(logger);
vehicleStream.connect();

// Setup server
app.use(bodyParser.json());
app.use(cors());
app.use(ExpressAPILogMiddleware(logger, { request: true }));

// Setup initial root route
app.get('/', (req, res) => {
    // Return 200
    res.status(200).send('Api is running!!!');
})

// Set up port
app.listen(config.port, config.host, (e) => {
    if (e) {
        throw new Error('Internal Server Error');
    }
    // Log server is running
    logger.info(`${config.name} running on ${config.host}:${config.port}`);
})