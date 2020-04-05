import mongoose, { Schema, Document } from "mongoose";

export interface IPlayer extends Document {
  firstName: string;
  lastName: string;
  nickName: string;
  email: string;
  userId: string;
}

export const playerSchema: Schema = new Schema({
  firstName: { type: String, required: true, minlength: 3, maxlength: 100 },
  lastName: { type: String, required: true, minlength: 3, maxlength: 100 },
  nickName: { type: String, required: true, minlength: 2, maxlength: 50 },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 255
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

export const Player = mongoose.model<IPlayer>("Player", playerSchema);
