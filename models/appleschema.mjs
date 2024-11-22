import mongoose from "mongoose";

//appleSchema
const appleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    min: 0,
    required: true,
  },
  readyToEat: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("Apples", appleSchema);
