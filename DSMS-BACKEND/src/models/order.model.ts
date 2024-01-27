import mongoose from "mongoose";
import {ObjectId} from "mongodb";
import * as SchemaType from "../types/SchemaTypes";

const OrderSchema = new mongoose.Schema<SchemaType.IOrder>({
    
    senderName:  {type: String, required: true},
    senderNIC:  {type: String, required: true},
    senderAddress:  {type: String, required: true},
    senderPhoneNumber:  {type: String, required: true},
    senderEmail:  {type: String, required: true},
    senderDistrict: {type: String, required: true},
    senderCity: {type: String, required: true},

    receiverName:  {type: String, required: true},
    receiverNIC:  {type: String, required: true},
    receiverAddress:  {type: String, required: true},
    receiverPhoneNumber:  {type: String, required: true},
    receiverEmail:  {type: String, required: true},
    receiverDistrict: {type: String, required: true},
    receiverCity: {type: String, required: true},

    orderNo: {type: String, required: true},
    orderWillbillNo: {type: String, required: true},
    orderDescription: {type: String, required: true},
    productValue: {type: String, required: true},
    codfee: {type: String, required: true},

    senderAccountHolderName:  {type: String, required: true},
    senderAccountNumber:  {type: String, required: true},
    senderBranchName:  {type: String, required: true},
    senderBankName:  {type: String, required: true},
    activeStatus:{type:String,required:true}

})

const OrderModel = mongoose.model('Order', OrderSchema);
export default OrderModel;