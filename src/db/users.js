import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  created_at: { type: Date, default: Date.now },
  authentication: {
    salt: { type: String, required: true },
    password: { type: String, required: true, select: false },
    session_token: { type: String, required: true },
  },
});

export const UserModel = mongoose.model("User", userSchema);

export const createUser = async (values) => {
  return UserModel(values)
    .save()
    .then((user) => user.toObject());
};
