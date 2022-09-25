import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  Name: String,
  NameOfFather: String,
  DOB: Date,
  AadharcardNo: Number,
  Address: String,
  Taluka: String,
  District: String,
  County: String,
  State: String,
  Pincode: Number,
  MobileNo: Number,
  Gender: String,
  picName: {
    type: [String],
  },
  picPath: {
    type: [String],
  },
  picType: {
    type: [String],
  },
  picSize: {
    type: [String],
  },
  ServicedOn: { type: Date, default: Date.now },
});

export default mongoose.model("submitedForm", userSchema);
