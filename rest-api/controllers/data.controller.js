// Import required modules
const { models } = require('./../mongo-connect');

/**
 * Returns a list of vehicle data by vehicle name
 */
const getData = (req, res) => {
    // Retrieve any pagination
    const { limit, skip, ...rest } = req.query;
    // Generate the find query
    let query = models.VehicleData.find(rest);
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
    const id = req.params.id;

    // Check if id is provided
    if (!id) return res.status(400).json({
        message: "Please provide a valid id."
    })

    // Generate the find query
    let query = models.VehicleData.findById(id);

    // Return the search result
    return query
        .exec()
        .then(result => {
            // Check if object was found
            if (result) {
                // Return the resulted object
                return res.status(200).json(result);
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
module.exports = { getById, getData }