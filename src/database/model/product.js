import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  product: { type: String, required: true },
  color: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true },
  description: { type: String, required: true },
  brand: { type: String, required: true },
  occasion: { type: String, required: false },
  image: { type: String, required: true }
});

const ProductSchema = mongoose.model("Product", productSchema);

export default ProductSchema;

