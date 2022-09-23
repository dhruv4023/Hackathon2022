import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userId: String,
  doubtBody: String,
  userAsked: String,
  comments: { type: Number, default: 0 },
  doubtOn: { type: Date, default: Date.now },
});

export default mongoose.model("Doubts", userSchema);
