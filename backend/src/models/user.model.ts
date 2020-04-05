import mongoose, { Schema, Document } from "mongoose";
import jwt from "jsonwebtoken";
import config from "config";

export interface IUser extends Document {
  mobile: string;
  password: string;
  isAdmin: boolean;
  generateAuthToken: () => string;
}

export const userSchema: Schema = new Schema({
  mobile: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10
  },
  password: { type: String, required: true, minlength: 3, maxlength: 1024 },
  isAdmin: Boolean
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    config.get("jwtPrivateKey")
  );
  return token;
};

export const User = mongoose.model<IUser>("User", userSchema);
