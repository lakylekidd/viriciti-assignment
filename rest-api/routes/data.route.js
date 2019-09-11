// Import required modules
const { Router } = require('express');
const { getData, getById } = require('../controllers/data.controller');

// Create the new router
const router = new Router();

// Set GET requests
router.get('/', getData);

// Set GET requests
router.get('/:id', getById);

// Export the router 
module.exports = router;