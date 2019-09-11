// Import required modules
const { models } = require('./../mongo-connect');

/**
 * Returns a list of vehicle data by vehicle name
 */
const getByVehicleName = (req, res) => {
    // Retrieve any pagination
    const { limit, skip } = req.query;
    // Retrive the vehicle name
    const vehicleName = req.query.vehicle;

    // Generate the find query
    let query = models.VehicleData.find({ "vehicle": vehicleName });
    // Check if limit is specified
    if (limit) { query = query.limit(parseInt(limit)); }
    // Check if skip is specified
    if (skip) { query = query.skip(parseInt(skip)); }
    // Return the search result
    return query
        .exec()
        .then(result => {
            // Return all the results
            return res.status(200).json({
                count: result.length,
                data: result
            });
        })
        .catch(err => {
            // Log error and return it
            return res.status(500).json({ error: err })
        });
}
/**
 * Returns a single entry of vehicle data by ID
 */
const getById = (req, res) => {
    // Retrive the entry id
    const id = req.query.id;

    // Generate the find query
    let query = models.VehicleData.findById(id);

    // Return the search result
    return query
        .exec()
        .then(result => {
            // Check if object was found
            if (result) {
                // Return the resulted object
                return res.status(200).json(JSON.stringify(result));
            } else {
                // Return 404 not found
                return res.status(404).json({
                    message: `The data object with id ${id} does not exist.`
                })
            }

        })
        .catch(err => {
            // Log error and return it
            return res.status(500).json({ error: err })
        });
}

// Export the functions
module.exports = { getById, getByVehicleName }