import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  Annoucement: { type: [String] },
  homeOn: { type: Date, default: Date.now },
});

export default mongoose.model("homes", userSchema);
