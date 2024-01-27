import mongoose from "mongoose";
import {ObjectId} from "mongodb";
import * as SchemaType from "../types/SchemaTypes";

const BranchSchema = new mongoose.Schema<SchemaType.IBranch>({
    branchName: {type: String, required: true},
    branchAddress: {type: String, required: true},
    branchPhoneNumber: {type: String, required: true},
    branchEmail: {type: String, required: true},
  })

const BranchModel = mongoose.model('Branch', BranchSchema);
export default BranchModel;