import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  ServiceId: { type: String, required: true },
  Uid: { type: String, required: true },
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
  docFilePic: [
    {
      titleP: String,
      pathP: String,
    },
  ],
  picTitle: { type: [String] },
  picName: { type: [String] },
  picPath: { type: [String] },
  ServicedOn: { type: Date, default: Date.now },
});

export default mongoose.model("submitedForm", userSchema);
