import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  ServiceId: { type: String, required: true },
  Uid: { type: String, required: true },
  Name: String,
  NameOfFather: String,
  DOB: Date,
  AadharcardNo: Number,
  Address: String,
  Village: String,
  Taluka: String,
  District: String,
  County: String,
  State: String,
  Pincode: Number,
  MobileNo: Number,
  Gender: String,
  status:{type:Boolean,default:false},
  docFilePic: [
    {
      titleP: String,
      pathP: String,
      status: { type: Number, default: 0 },
    },
  ],
  ServicedOn: { type: Date, default: Date.now },
});

export default mongoose.model("submitedForm", userSchema);
