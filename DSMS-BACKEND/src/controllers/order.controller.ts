// Create Order
import express from "express";
import OrderModel from "../models/order.model";
import { ObjectId } from "mongodb";
import CustomResponse from "../dtos/custom.response";
import nodemailer from 'nodemailer';
import fs from 'fs';
import { PDFDocument, rgb } from 'pdf-lib';
import path from "path";

// Save a Order
export const addOrder = async (req: express.Request, res: any) => {

    try {

        let req_body = req.body;

        let ordermodel = new OrderModel({

            senderName: req_body.senderName,
            senderNIC: req_body.senderNIC,
            senderAddress: req_body.senderAddress,
            senderPhoneNumber: req_body.senderPhoneNumber,
            senderEmail: req_body.senderEmail,
            senderDistrict: req_body.senderDistrict,
            senderCity: req_body.senderCity,

            receiverName: req_body.receiverName,
            receiverNIC: req_body.receiverNIC,
            receiverAddress: req_body.receiverAddress,
            receiverPhoneNumber: req_body.receiverPhoneNumber,
            receiverEmail: req_body.receiverEmail,
            receiverDistrict: req_body.receiverDistrict,
            receiverCity: req_body.receiverCity,

            orderNo: req_body.orderNo,
            orderWillbillNo: req_body.orderWillbillNo,
            orderDescription: req_body.orderDescription,
            productValue: req_body.productValue,
            codfee: req_body.codfee,

            senderAccountHolderName: req_body.senderAccountHolderName,
            senderAccountNumber: req_body.senderAccountNumber,
            senderBranchName: req_body.senderBranchName,
            senderBankName: req_body.senderBankName,
            activeStatus: req_body.activeStatus


        });

        await ordermodel.save().then((r: any) => {
            res.status(200).send(
                new CustomResponse(200, "Order saved successfully.")
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

// Get All Order
export const getOrder = async (req: express.Request, res: any) => {
    try {

        let order = await OrderModel.find();
        console.log('Order data:', order);

        res.status(200).send(
            new CustomResponse(200, "Order are found successfully", order)
        )

    } catch (error) {
        res.status(100).send("Error");
    }
}

// Update Order
export const updateOrder = async (req: express.Request, res: any) => {
    try {

        let req_body: any = req.body

        let order = await OrderModel.find({ _id: req_body.id })

        if (order) {

            await OrderModel.findOneAndUpdate({ _id: req_body.id }, {
                senderName: req_body.senderName,
                senderNIC: req_body.senderNIC,
                senderAddress: req_body.senderAddress,
                senderPhoneNumber: req_body.senderPhoneNumber,
                senderEmail: req_body.senderEmail,
                senderDistrict: req_body.senderDistrict,
                senderCity: req_body.senderCity,

                receiverName: req_body.receiverName,
                receiverNIC: req_body.receiverNIC,
                receiverAddress: req_body.receiverAddress,
                receiverPhoneNumber: req_body.receiverPhoneNumber,
                receiverEmail: req_body.receiverEmail,
                receiverDistrict: req_body.receiverDistrict,
                receiverCity: req_body.receiverCity,

                orderNo: req_body.orderNo,
                orderWillbillNo: req_body.orderWillbillNo,
                orderDescription: req_body.orderDescription,
                productValue: req_body.productValue,
                codfee: req_body.codfee,

                senderAccountHolderName: req_body.senderAccountHolderName,
                senderAccountNumber: req_body.senderAccountNumber,
                senderBranchName: req_body.senderBranchName,
                senderBankName: req_body.senderBankName,
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

// Delete Order
export const deleteOrder = async (req: express.Request, res: any) => {
    try {


        let orderId: string = req.params.id;

        let order = await OrderModel.find({ _id: orderId })

        if (order) {

            await OrderModel.deleteOne({ _id: orderId }).then((r: any) => {
                res.status(200).send(
                    new CustomResponse(200, "Order is deleted successfully.")
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
            // user:EMAIL_USER,
            // pass:EMAIL_PASSWORD,
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
        let order = await OrderModel.countDocuments()
        console.log('Order data:', order);

        res.status(200).send(
            new CustomResponse(200, "Order are found successfully", order)
        )

    } catch (error) {
        res.status(100).send("Error");
    }


}






