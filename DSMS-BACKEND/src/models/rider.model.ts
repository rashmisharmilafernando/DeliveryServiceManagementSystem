import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import * as SchemaType from "../types/SchemaTypes";

const RiderSchema = new mongoose.Schema<SchemaType.IRider>({
    riderName: { type: String, required: true },
    riderNIC: { type: String, required: true },
    riderAddress: { type: String, required: true },
    riderPhoneNumber: { type: String, required: true },
    riderEmail: { type: String, required: true },
    riderGender: { type: String, required: true },
    riderVehicleType: { type: String, required: true },
    riderAccountHolderName: { type: String, required: true },
    riderAccountNumber: { type: String, required: true },
    riderBranchName: { type: String, required: true },
    riderBankName: { type: String, required: true },
})

const RiderModel = mongoose.model('Rider', RiderSchema);
export default RiderModel;