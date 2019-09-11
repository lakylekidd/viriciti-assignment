// Import required modules
const mongoose = require('mongoose');
const vehicleData = require('./schemas/vehicle-data.schema');

// Export the module
module.exports = (logger) => {
    // Function that returns a connected mongoose object
    const connectDb = () => {
        // Get the connection promise and db
        const connection = mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true });
        const db = mongoose.connection;
        // Add event on connection open
        db.on('open', () => {
            // Log connection
            logger.info(`MongoDB Connected!`);
        });
        // Add event on connection error
        db.on('error', (err) => {
            // Log error
            logger.error(`MongoDB Connection Error: ${err}`)
        });

        // Return a connected mongoose to specific connection string
        return connection;
    }

    // Variable that holds the available models
    const models = { vehicleData };

    return { connectDb, models }
};


// mongoose.connect('', { useNewUrlParser: true });

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     // Connection successful

// });