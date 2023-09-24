// import {mongoose} from "@dolphjs/dolph/packages"

import { Schema, Document, model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  age: number;
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});

export const Users = model<IUser>("users", UserSchema);
