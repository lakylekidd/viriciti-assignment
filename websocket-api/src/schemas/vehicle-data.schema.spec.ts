// Import required modules
import * as mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { expect } from 'chai';
import VehicleData, { IVehicleData } from './vehicle-data.schema';

// Begin Vehicle Data Model Test
describe("Vehicle Data Model", () => {
    // In-Memory mongo database and options
    let mongoServer: MongoMemoryServer;
    const opts = { useNewUrlParser: true };

    // Seed the database
    const seed = [
        {
            "_id": new mongoose.Types.ObjectId(),
            "energy": 53.2,
            "gps": ["52.820394800192048|5.11929894021840"],
            "odo": 88526.413,
            "soc": 72.8,
            "speed": 0,
            "time": 1511436338000,
            "vehicle": "vehicle-1"
        },
        {
            "_id": new mongoose.Types.ObjectId(),
            "energy": 53.2,
            "gps": ["52.820394800192048|5.11929894021840"],
            "odo": 88526.414,
            "soc": 72.8,
            "speed": 23,
            "time": 1511436338000,
            "vehicle": "vehicle-2"
        }
    ]

    // To be performed before tests are ran
    before(async () => {
        // Create mongodb memory database
        mongoServer = new MongoMemoryServer();
        const mongoUri = await mongoServer.getConnectionString();
        await mongoose.connect(mongoUri, opts, err => { });
        // Seed in memory db if necessary
        await Promise.all([
            VehicleData.create(seed[0]),
            VehicleData.create(seed[1])
        ]);
    });
    // To be performed after tests are ran
    after(async () => {
        // Close connection
        mongoose.connection.close();
        mongoServer.stop();
    });
    // The empty vehicle data model should throw validation error
    it("Should throw validation errors", () => {
        const data = new VehicleData();
        expect(data.validate).to.throw();
    });

})