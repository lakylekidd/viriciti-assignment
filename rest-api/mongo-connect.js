// Import required modules
const mongoose = require('mongoose');
const VehicleData = require('./schemas/vehicle-data.schema');

// Function that returns a connected mongoose object
const connectDb = () => {
    // Return a connected mongoose to specific connection string
    return mongoose.connect('mongodb+srv://lakylekidd:Hermes%401986@cluster0-aysvk.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
}

// Variable that holds the available models
const models = { VehicleData };

// Export the module
module.exports = { models, connectDb };