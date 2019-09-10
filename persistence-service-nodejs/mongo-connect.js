// Import required modules
const mongoose = require('mongoose');
const vehicleData = require('./schemas/vehicle-data.schema');

// Function that returns a connected mongoose object
const connectDb = () => {
    // Return a connected mongoose to specific connection string
    return mongoose.connect('mongodb+srv://lakylekidd:Hermes%401986@cluster0-aysvk.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
}

// Variable that holds the available models
const models = { vehicleData };

// Export the module
module.exports = { models, connectDb };


// mongoose.connect('', { useNewUrlParser: true });

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     // Connection successful

// });