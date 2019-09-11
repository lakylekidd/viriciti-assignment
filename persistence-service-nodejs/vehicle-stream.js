// Import required modules
const mongoose = require('mongoose');
const NATS = require('nats');
const vehicleName = 'vehicle.test-bus-1';

module.exports = (logger) => {
	const connect = (vehicleDataModel) => {
		// ** NATS CONFIG ** //
		const reconnecting = false;

		// Connect NATS
		const nats = NATS.connect({
			json: true
		});
		// Verify NATS connection
		nats.on('connect', () => {
			logger.info('NATS is now online!');
		});
		// Listen for messages from publisher
		nats.subscribe(vehicleName, (data) => {
			// Check if connected
			if (!reconnecting) {
				// Add data to the database
				addToDatabase(vehicleName, data);
			}
		});

		/**
         * Adds the received data to the database
         * @param {Object} data The received data
         */
		const addToDatabase = (vehicleName, data) => {
			// Create a vehicle data object
			// That will be saved in the db
			const vehicleData = vehicleDataModel({
				_id: new mongoose.Types.ObjectId(),
				vehicle: vehicleName,
				time: data.time,
				energy: data.energy,
				gps: data.gps,
				odo: data.odo,
				speed: data.speed,
				soc: data.soc
			});
			// Save to the database
			vehicleData.save().then(result => {
				// Log the result
				logger.info(`Vehicle saved with id: ${vehicleData._id}`)
			}).catch(err => {
				// Log the error
				logger.error(`Error: ${err}`);
			});
		};
	};

	return { connect };
};
