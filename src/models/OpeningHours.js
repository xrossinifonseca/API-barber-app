import mongoose from "mongoose";

const UseSchema = new mongoose.Schema({
  hours: {
    type: Array,
    items: {
      type: String,
    },
  },
});

const openingHours = mongoose.model("openingHours", UseSchema);
export default openingHours;
