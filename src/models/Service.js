import mongoose from "mongoose";

const UseEschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: { type: String, required: true },
  price: { type: String },
  info: { type: String },
});

const service = mongoose.model("service", UseEschema);
export default service;
