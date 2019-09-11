// Import required modules
const { models } = require('./../mongo-connect');

/**
 * Returns a list of vehicle data by vehicle name
 */
const getByVehicleName = (req, res) => {
    // Retrive the vehicle name
    const vehicleName = req.params.vehicle;
    // Retrieve the list of data for vehicle
    const data = models.VehicleData.find({ "vehicle": vehicleName });
    // Return the response
    if (data) {
        console.log("Data: ", data);
        return res.status(200).text(data);
    }

}
/**
 * Returns a single entry of vehicle data by ID
 */
const getById = (req, res) => {
    throw new Error("Not implemented");
}

// Export the functions
module.exports = { getById, getByVehicleName }