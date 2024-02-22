import express from "express";
import productRoute from "./routes/productRoute.js";
import Product from "./database/model/product.js";
import extractProductDetails from "./utils/extracter.js";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

import connectDB from "./database/db.js";
dotenv.config();
const app = express();
app.use(bodyParser.json());

const url = process.env.MONGO_URL;
connectDB(url);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/api/products", async (req, res) => {
  // const {size, color, category} = extractProductDetails(req.body.query);
  const categories = req.body.data;

  try {
    const products = await Product.find({
      category: {
        $in: categories.map((category) => new RegExp(category, "i")),
      },
    });

    if (products.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No products found for the specified query.",
      });
    }

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});
app.use("/api/products", async (req, res) => {
  console.log(req.body);
  const { size, color, category } = extractProductDetails(req.body.query);
  res.status(200).json({ success: true, data: { size, color, category } });
});

app.get("/", async (req, res) => {
  res.send("hello from the server");
});

const startServer = async () => {
  try {
    app.listen(3000, () => console.log("server has started on port 3000"));
  } catch (err) {
    console.log(err);
  }
};
startServer();
export default app;
