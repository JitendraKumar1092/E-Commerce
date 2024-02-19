import express from "express";
// import productRoute from "./database/routes/productRoute.js";
import Product from "./database/model/product.js";


import * as dotenv from "dotenv";

import connectDB from "./database/db.js";
dotenv.config();
const app = express();

const url = process.env.MONGO_URL;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});





app.use("/api/products/:query", async (req, res) => {
  const query = req.params.query;
console.log("requested data of " + query + "query");
try {
 
  const products = await Product.find({
    $or: [
      { name: { $regex: query, $options: "i" } },
      { category: { $regex: query, $options: "i" } },
      { description: { $regex: query, $options: "i" } }
    ]
  });

  if (products.length === 0) {
    return res.status(404).json({ success: false, message: 'No products found for the specified query.' });
  }

  res.status(200).json({ success: true, data: products });
} catch (error) {
  console.error(error); // Log the error
  res.status(500).json({ success: false, message: 'Internal Server Error' });
}
  
  

});

app.get("/", async (req, res) => {
  res.send("hello from the server");
});


connectDB(url);

const startServer = async () => {
  try {
    app.listen(3000, () => console.log("server has started on port 3000"));
  } catch (err) {
    console.log(err);
  }
};
startServer();
export default app;


