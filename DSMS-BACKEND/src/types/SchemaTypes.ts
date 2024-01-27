import mongoose, { Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface Iuser extends Document {
    username: string,
    email: string,
    password: string,
}
export interface ICustomer extends mongoose.Document {
    bussinessName: string,
    bussinessUsername: string,
    bussinessEmail: string,
    bussinessAddress: string,
    bussinessPhoneNumber: string,
    sealItems: string,

    accountHolderName: string,
    accountNumber: string,
    branchName: string,
    bankName: string,

    pickUpAddress: string,
    pickUpPhoneNumber: string,
    activeStatus: string

}

export interface IBranch extends mongoose.Document {
    branchName: string,
    branchAddress: string,
    branchPhoneNumber: string,
    branchEmail: string,
}

export interface IRider extends mongoose.Document {
    riderName: string,
    riderNIC: string,
    riderAddress: string,
    riderPhoneNumber: string,
    riderEmail: string,
    riderGender: string,
    riderVehicleType: string,
    riderAccountHolderName: string,
    riderAccountNumber: string,
    riderBranchName: string,
    riderBankName: string,
}

export interface IOrder extends mongoose.Document {
    senderName: string,
    senderNIC: string,
    senderAddress: string,
    senderPhoneNumber: string,
    senderEmail: string,
    senderDistrict:string,
    senderCity:string,

    receiverName: string,
    receiverNIC: string,
    receiverAddress: string,
    receiverPhoneNumber: string,
    receiverEmail: string,
    receiverDistrict:string,
    receiverCity:string,

    orderNo:string,
    orderWillbillNo:string,
    orderDescription:string,
    productValue:string,
    codfee:string,

    senderAccountHolderName: string,
    senderAccountNumber: string,
    senderBranchName: string,
    senderBankName: string,
    activeStatus: string
}
