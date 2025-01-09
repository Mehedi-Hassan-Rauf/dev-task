import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema({
  heroTitle: {
    firstLine: {
      word1: String,
      word2: String,
    },
    secondLine: String,
  },
  stats: {
    number: String,
    text: String,
  },
  description: String,
  button: {
    text: String,
  },
});

export default mongoose.models.Banner || mongoose.model("Banner", BannerSchema);
