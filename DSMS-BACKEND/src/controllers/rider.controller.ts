// Create Rider
import express from "express";
import CustomResponse from "../dtos/custom.response";
import RiderModel from "../models/rider.model";

// Save a Rider
export const addRider = async (req: express.Request, res: any) => {

    try {
        let req_body = req.body;
        let riderModel = new RiderModel({
              riderName:  req_body.riderName,
                riderNIC:  req_body.riderNIC,
                riderAddress:  req_body.riderAddress,
                riderPhoneNumber:  req_body.riderPhoneNumber,
                riderEmail:  req_body.riderEmail,
                riderGender:  req_body.riderGender,
                riderVehicleType:  req_body.riderVehicleType,
                riderAccountHolderName:  req_body.riderAccountHolderName,
                riderAccountNumber:  req_body.riderAccountNumber,
                riderBranchName:  req_body.riderBranchName,
                riderBankName:  req_body.riderBankName,
        });
        await riderModel.save().then((r: any) => {
            res.status(200).send(
                new CustomResponse(200, "Rider created successfully.")
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

// Get All Rider
export const getRider = async (req: express.Request, res: any) => {
    try {
        let rider = await RiderModel.find();
        console.log('Branch data:', rider);
        res.status(200).send(
            new CustomResponse(200, "Rider are found successfully", rider)
        )
    } catch (error) {
        res.status(100).send("Error");
    }
}

// Update Rider
export const updateRider = async (req: express.Request, res: any) => {
    try {
        let req_body: any = req.body
        let rider = await RiderModel.find({ _id: req_body.id })
        if (rider) {
            await RiderModel.findOneAndUpdate({ _id: req_body.id }, {
                riderName:  req_body.riderName,
                riderNIC:  req_body.riderNIC,
                riderAddress:  req_body.riderAddress,
                riderPhoneNumber:  req_body.riderPhoneNumber,
                riderEmail:  req_body.riderEmail,
                riderGender:  req_body.riderGender,
                riderVehicleType:  req_body.riderVehicleType,
                riderAccountHolderName:  req_body.riderAccountHolderName,
                riderAccountNumber:  req_body.riderAccountNumber,
                riderBranchName:  req_body.riderBranchName,
                riderBankName:  req_body.riderBankName,
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

// Delete Rider
export const deleteRider = async (req: express.Request, res: any) => {
    try {
        let riderId: string = req.params.id;
        let rider = await RiderModel.find({ _id: riderId })
        if (rider) {
            await RiderModel.deleteOne({ _id: riderId }).then((r: any) => {
                res.status(200).send(
                    new CustomResponse(200, "Rider is deleted successfully.")
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

//find count
export const findCount = async (req: express.Request, res: any) => {
    try {
        let rider = await RiderModel.countDocuments()
        console.log('Rider data:', rider);
        res.status(200).send(
            new CustomResponse(200, "Rider are found successfully", rider)
        )
    } catch (error) {
        res.status(100).send("Error");
    }
}
