// Import required modules
const { Router } = require('express');
const { getById, getByVehicleName } = require('../controllers/data.controller');

// Create the new router
const router = new Router();

// Set GET requests
router.get('/bydataid', getById);

// Set GET requests
router.get('/byvehiclename', getByVehicleName);

// Export the router 
module.exports = router;