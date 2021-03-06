// Use local env secret variables
require('dotenv').config();
const { models, connectDb } = require('./mongo-connect');
const express = require('express');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/data.route');
const cors = require('cors');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');

// The server configuration
const config = require('config');

// Setup app and logging
const app = express();
const logger = log({
    console: true,
    file: false,
    label: config.name
});

// Setup server
app.use(bodyParser.json());
app.use(cors());

// Check if requests logging are enabled
let requestLogging = process.env.NODE_ENV === "dev" ? true : false;
app.use(ExpressAPILogMiddleware(logger, { request: requestLogging }));

// Setup initial root route
app.get('/', (req, res) => {
    // Return 200
    res.status(200).send('Api is running!!!');
});
// Setup directed routes
app.use('/api/data', dataRoutes);

// Connect to MongoDB
connectDb().then(async () => {
    // Set up port
    app.listen(config.port, config.host, (e) => {
        if (e) {
            throw new Error('Internal Server Error');
        }
        // Log server is running
        logger.info(`${config.name} running on ${config.host}:${config.port}`);
    });
});

// Export the server app
module.exports = app;