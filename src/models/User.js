import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UseEschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true, lowercase: true },
  password: { type: String, required: true, select: false },
  avatar: { type: String, required: true },
  background: { type: String, required: true },
});

UseEschema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);

  next();
});

const user = mongoose.model("user", UseEschema);

export default user;
