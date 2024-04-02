import mongoose from "mongoose";
// import productsData from '../../test.js';
import ProductSchema from "./model/product.js";
const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.log(err));
};



const insertProducts = async () => {
  try{
    await ProductSchema.insertMany(newProducts);
    console.log("Product data inserted successfully");
  }catch(err){
    console.log("Error while inserting product data");
    console.error(err);

  }
}

// insertProducts();


export default connectDB;

