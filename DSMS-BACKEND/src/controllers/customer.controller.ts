// Create Customer
import express from "express";
import CustomerModel from "../models/customer.model";
import { ObjectId } from "mongodb";
import CustomResponse from "../dtos/custom.response";
import nodemailer from 'nodemailer';


// Save a Customer
export const addCustomer = async (req: express.Request, res: any) => {

    try {

        let req_body = req.body;

        let customermodel = new CustomerModel({
            bussinessName: req_body.bussinessName,
            bussinessUsername: req_body.bussinessUsername,
            bussinessEmail: req_body.bussinessEmail,
            bussinessAddress: req_body.bussinessAddress,
            bussinessPhoneNumber: req_body.bussinessPhoneNumber,
            sealItems: req_body.sealItems,
            accountHolderName: req_body.accountHolderName,
            accountNumber: req_body.accountNumber,
            branchName: req_body.branchName,
            bankName: req_body.bankName,
            pickUpAddress: req_body.pickUpAddress,
            pickUpPhoneNumber: req_body.pickUpPhoneNumber,
            activeStatus: req_body.activeStatus


        });

        await customermodel.save().then((r: any) => {
            res.status(200).send(
                new CustomResponse(200, "Customer created successfully.")
            )
        }).catch((e: any) => {
            console.log(e)
            res.status(100).send(
                new CustomResponse(100, "Something went wrongs")
            )
        });

    } catch (error) {
        res.status(100).send("Error");
    }
}

// Get All Customer
export const getCustomer = async (req: express.Request, res: any) => {
    try {

        let customer = await CustomerModel.find();
        console.log('Customer data:', customer);

        res.status(200).send(
            new CustomResponse(200, "Customer are found successfully", customer)
        )

    } catch (error) {
        res.status(100).send("Error");
    }
}

// Update Customer
export const updateCustomer = async (req: express.Request, res: any) => {
    try {

        let req_body: any = req.body

        let customer = await CustomerModel.find({ _id: req_body.id })

        if (customer) {

            await CustomerModel.findOneAndUpdate({ _id: req_body.id }, {
                bussinessName: req_body.bussinessName,
                bussinessUsername: req_body.bussinessUsername,
                bussinessEmail: req_body.bussinessEmail,
                bussinessAddress: req_body.bussinessAddress,
                bussinessPhoneNumber: req_body.bussinessPhoneNumber,
                sealItems: req_body.sealItems,
                accountHolderName: req_body.accountHolderName,
                accountNumber: req_body.accountNumber,
                branchName: req_body.branchName,
                bankName: req_body.bankName,
                pickUpAddress: req_body.pickUpAddress,
                pickUpPhoneNumber: req_body.pickUpPhoneNumber,
                activeStatus: req_body.activeStatus
            })

                .then((r: any) => {
                    res.status(200).send(
                        new CustomResponse(200, "Details update successfully.")
                    )
                }).catch((error: any) => {
                    console.log(error)
                    res.status(100).send(
                        new CustomResponse(100, "Something went wrong.")
                    )
                })

        } else {
            res.stat(401).send(
                new CustomResponse(401, "Access denied")
            )
        }


    } catch (error) {
        res.status(100).send("Error");
    }
}

// Delete Customer
export const deleteCustomer = async (req: express.Request, res: any) => {
    try {


        let customerId: string = req.params.id;

        let customer = await CustomerModel.find({ _id: customerId })

        if (customer) {

            await CustomerModel.deleteOne({ _id: customerId }).then((r: any) => {
                res.status(200).send(
                    new CustomResponse(200, "customer is deleted successfully.")
                )
            }).catch((e: any) => {
                res.status(100).send(
                    new CustomResponse(100, "Something went wrong.")
                )
            })

        } else {
            res.stat(401).send(
                new CustomResponse(401, "Access denied")
            )
        }

    } catch (error) {
        res.status(100).send("Error");
    }
}

// Send the active account email
export const sendEmail = async (req: express.Request, res: any) => {
    const { to, subject, text } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rashmisharmila6@gmail.com',
            pass: 'stdb ygyz smci ctlz',
        },
    });

    const mailOptions = {
        from: 'rashmisharmila6@gmail.com',
        to,
        subject,
        text,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Failed to send email' });
    }
}

//find count
export const findCount = async (req: express.Request, res: any) => {
    

    try {

        

        let customer = await CustomerModel.countDocuments()
        console.log('Customer data:', customer);

        res.status(200).send(
            new CustomResponse(200, "Customer are found successfully", customer)
        )

    } catch (error) {
        res.status(100).send("Error");
    }


}
