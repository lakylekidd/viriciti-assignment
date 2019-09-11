// Import required modules
import * as mongoose from 'mongoose';
import VehicleData, { IVehicleData } from './vehicle-data.schema';

// Begin Vehicle Data Model Test
describe("Vehicle Data Model", () => {

    // To be performed before tests are ran
    before(async () => {
        // Connect to in-memory database
        await mongoose.connect("", {
            useNewUrlParser: true
        });
    });

    // To be performed after tests are ran
    after(async () => {
        // Close connection
        mongoose.connection.close();
    });
})