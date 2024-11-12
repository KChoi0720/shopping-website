import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // email is unique here.
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }, // the carddata is object type
  },
  { minimize: false }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
