import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  items: [
    {
      quote: String,
      author: String,
      company: String,
    },
  ],
});

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);
