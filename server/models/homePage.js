import mongoose from "mongoose";

const homePageSchema = mongoose.Schema({
  arryNm: { type: String },
  arryData: { type: String },
  PostedOn: { type: Date, default: Date.now },
});

export default mongoose.model("HomeData", homePageSchema);
