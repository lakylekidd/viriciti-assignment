// Import required modules
import * as mongoose from 'mongoose';
import { expect } from 'chai';
import VehicleData, { IVehicleData } from './vehicle-data.schema';

// Begin Vehicle Data Model Test
describe("Vehicle Data Model", () => {
    // To be performed before tests are ran
    before(async () => {
        // Connect to in-memory database
        await mongoose.connect("mongodb+srv://lakylekidd:Hermes%401986@cluster0-aysvk.mongodb.net/test?retryWrites=true&w=majority", {
            useNewUrlParser: true
        });
    });
    // To be performed after tests are ran
    after(async () => {
        // Close connection
        mongoose.connection.close();
    });
    // The empty vehicle data model should throw validation error
    it("Should throw validation errors", () => {
        const data = new VehicleData();
        expect(data.validate).to.throw();
    })
})