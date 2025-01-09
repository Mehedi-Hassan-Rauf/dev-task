import mongoose from "mongoose";

const WorkSchema = new mongoose.Schema({
  cases: [
    {
      title: String,
      image: String,
      link: String,
      isLatest: Boolean,
      tags: [String],
    },
  ],
});

export default mongoose.models.Work || mongoose.model("Work", WorkSchema);
