// Create Customer
import express from "express";
import CustomResponse from "../dtos/custom.response";
import BranchModel from "../models/branch.model";

// Save a Branch
export const addBranch = async (req: express.Request, res: any) => {

    try {

        let req_body = req.body;

        let branchModel = new BranchModel({
            branchName: req_body.branchName,
            branchAddress: req_body.branchAddress,
            branchPhoneNumber: req_body.branchPhoneNumber,
            branchEmail: req_body.branchEmail,


        });

        await branchModel.save().then((r: any) => {
            res.status(200).send(
                new CustomResponse(200, "Branch created successfully.")
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

// Get All Branch
export const getBranch = async (req: express.Request, res: any) => {
    try {

        let branch = await BranchModel.find();
        console.log('Branch data:', branch);

        res.status(200).send(
            new CustomResponse(200, "Branch are found successfully", branch)
        )

    } catch (error) {
        res.status(100).send("Error");
    }
}

// Update Branch
export const updateBranch = async (req: express.Request, res: any) => {
    try {

        let req_body: any = req.body

        let branch = await BranchModel.find({ _id: req_body.id })

        if (branch) {

            await BranchModel.findOneAndUpdate({ _id: req_body.id }, {
                branchName: req_body.branchName,
                branchAddress: req_body.branchAddress,
                branchPhoneNumber: req_body.branchPhoneNumber,
                branchEmail: req_body.branchEmail,
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

// Delete Branch
export const deleteBranch = async (req: express.Request, res: any) => {
    try {


        let branchId: string = req.params.id;

        let branch = await BranchModel.find({ _id: branchId })

        if (branch) {

            await BranchModel.deleteOne({ _id: branchId }).then((r: any) => {
                res.status(200).send(
                    new CustomResponse(200, "Branch is deleted successfully.")
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



        let branch = await BranchModel.countDocuments()
        console.log('Branch data:', branch);

        res.status(200).send(
            new CustomResponse(200, "Branch are found successfully", branch)
        )

    } catch (error) {
        res.status(100).send("Error");
    }


}
