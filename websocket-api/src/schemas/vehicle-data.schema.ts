// Import required module and types
import { Schema, model, Document, Types } from 'mongoose';

// Interface for vehicle data
export interface IVehicleData extends Document {
    _id: Types.ObjectId;
    vehicle: String;
    time: Number;
    energy: Number;
    gps: [];
    odo: Number;
    speed: Number;
    soc: Number;
}

// Construct the vehicle data schema
const vehicleDataSchema: Schema = new Schema({
    _id: Types.ObjectId,
    vehicle: String,
    time: Number,
    energy: Number,
    gps: [],
    odo: Number,
    speed: Number,
    soc: Number
});

// Export the model and return the IVehicleData interface
export default model<IVehicleData>("VehicleData", vehicleDataSchema);