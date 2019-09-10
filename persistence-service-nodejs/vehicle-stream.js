// Import required modules
const NATS = require('nats');

module.exports = (logger) => {
	const connect = () => {
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
		nats.subscribe('vehicle.test-bus-1', (data) => {
			// Check if connected
			if (!reconnecting) {
				// Add data to the database
				addToDatabase(data);
			}
		});

		/**
         * Adds the received data to the database
         * @param {Object} data The received data
         */
		const addToDatabase = (data) => { };
	};

	return { connect };
};
