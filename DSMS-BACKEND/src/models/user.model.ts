import { Document, Schema, model } from "mongoose";
import * as SchemaType from "../types/SchemaTypes";

const userSchema = new Schema<SchemaType.Iuser>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

const UserModel = model("User", userSchema);
export default UserModel;