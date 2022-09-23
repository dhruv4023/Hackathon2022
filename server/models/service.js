import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  ServiceName: String,
  ReqDoc: { type: [String] },
  commentOn: { type: Date, default: Date.now },
});

export default mongoose.model("Services", userSchema);
