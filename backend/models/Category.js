// models/Category.js
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  icon: { type: String },
  color: { type: String }
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
