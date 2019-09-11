// Import required modules
const mongoose = require('mongoose');

// Construct the vehicle data schema
const vehicleDataSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    vehicle: String,
    time: Number,
    energy: Number,
    gps: [],
    odo: Number,
    speed: Number,
    soc: Number
});

// Construct the model
const vehicleData = mongoose.model("VehicleData", vehicleDataSchema);

// Export the model
module.exports = vehicleData;