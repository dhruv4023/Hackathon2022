import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  picName: {
    type: String,
    required: true,
  },
  picPath: {
    type: String,
    required: true,
  },
  picType: {
    type: String,
    required: true,
  },
  picSize: {
    type: String,
    required: true,
  },
  name: String,
  email: String,
  post: String,
  addedOn: { type: Date, default: Date.now },
});

export default mongoose.model("StaffDetails", userSchema);
