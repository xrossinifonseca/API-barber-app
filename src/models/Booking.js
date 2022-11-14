import mongoose from "mongoose";

const UseEschema = new mongoose.Schema({
  service: {
    type: String,
    required: true,
  },
  barber: {
    type: String,
    required: true,
  },
  date: { type: String, required: true },
  hour: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const booking = mongoose.model("booking", UseEschema);
export default booking;
