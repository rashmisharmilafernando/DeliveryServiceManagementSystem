import mongoose from "mongoose";
import {ObjectId} from "mongodb";
import * as SchemaType from "../types/SchemaTypes";

const CustomerSchema = new mongoose.Schema<SchemaType.ICustomer>({
    bussinessName: {type: String, required: true},
    bussinessUsername: {type: String, required: true},
    bussinessEmail: {type: String, required: true},
    bussinessAddress: {type: String, required: true},
    bussinessPhoneNumber: {type: String, required: true},
    sealItems: {type: String, required: true},
    accountHolderName: {type: String, required: true},
    accountNumber: {type: String, required: true},
    branchName: {type: String, required: true},
    bankName: {type: String, required: true},
    pickUpAddress: {type: String, required: true},
    pickUpPhoneNumber: {type:String, required: true},
    activeStatus:{type:String,required:true}
 
})

const CustomerModel = mongoose.model('Customer', CustomerSchema);
export default CustomerModel;