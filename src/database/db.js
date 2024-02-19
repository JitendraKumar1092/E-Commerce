import mongoose from "mongoose";
import ProductSchema from "./model/product.js";const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.log(err));
};
const productsData =[]
const insertProducts = async () => {
  try{
    await ProductSchema.insertMany(productsData);
    console.log("Product data inserted successfully");
  }catch(err){
    console.log("Error while inserting product data");
    console.error(err);

  }
}
// insertProducts();


export default connectDB;

