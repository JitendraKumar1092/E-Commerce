import mongoose from "mongoose";

const Product = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true },
  description: { type: String, required: true }
});

const ProductSchema = mongoose.model("Product", Product);

export default ProductSchema;
