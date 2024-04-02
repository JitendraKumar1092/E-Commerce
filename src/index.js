// import express from "express";
// import productRoute from "./routes/productRoute.js";
// import Product from "./database/model/product.js";
// import extractProductDetails from "./utils/extracter.js";
// import bodyParser from "body-parser";
// import * as dotenv from "dotenv";
// import path from "path";

// import connectDB from "./database/db.js";
// import { log } from "console";
// dotenv.config();
// const app = express();
// app.set("view engine", "ejs");
// app.set("views", path.join(new URL(".", import.meta.url).pathname, "views"));
// app.use(bodyParser.json());

// const url = process.env.MONGO_URL;
// connectDB(url);


// app.get("/", async (req, res) => {
//   res.status(200).render("homeRoute", { message: "Welcome to the HomePage" });
// });
// app.get("/api/products/:query", async (req, res) => {
//   const query = req.params.query;
//   try {
//     const products = await Product.find({
//       name: new RegExp(query, "i"),
//     });

//     if (products.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: "No products found for the specified query.",
//       });
//     }

//     res.status(200).json({ success: true, data: products });
//   } catch (error) {
//     console.error(error); // Log the error
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });
// app.post("/api/products", async (req, res) => {
//   const query = req.body.query;
//   log(query);
//   const { brand, category, size, color } = extractProductDetails(query);
//   console.log(brand, category, size, color);

//   const conditions = {};

//   //Add conditions for brand, category, size, and color if they are present
//   if (brand) {
//       conditions.brand = brand;
//   }
//   if (category) {
//       conditions.category = category;
//   }
//   if (size) {
//       conditions.size = size;
//   }
//   if (color) {
//       conditions.color = color;
//   }

//   try {
//       let products;

//       // Construct the query with $and operator
//       products = await Product.find(conditions);

//       if (products.length === 0) {
//           return res.status(404).json({
//               success: false,
//               message: "No products found for the specified query.",
//           });
//       }

//       res.status(200).json({ success: true, data: products });
//   } catch (error) {
//       console.error(error); // Log the error
//       res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });



// app.use((req, res, next) => {
//   res.status(404).render("errorRoute", { message: "Route not found" });
// });
// const startServer = async () => {
//   try {
//     app.listen(3000, () => console.log("server has started on port 3000"));
//   } catch (err) {
//     console.log(err);
//   }
// };
// startServer();
// export default app;
import express from "express";
import productRoute from "./routes/productRoute.js";
import Product from "./database/model/product.js";
import extractProductDetails from "./utils/extracter.js";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import path from "path";
import cors from "cors"; // Import the cors middleware

import connectDB from "./database/db.js";
import { log } from "console";
dotenv.config();
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(new URL(".", import.meta.url).pathname, "views"));
app.use(bodyParser.json());

const url = process.env.MONGO_URL;
connectDB(url);

// Use cors middleware to allow all requests
app.use(cors());

app.get("/", async (req, res) => {
  res.status(200).render("homeRoute", { message: "Welcome to the HomePage" });
});
app.get("/api/products/:query", async (req, res) => {
  const query = req.params.query;
  try {
    const products = await Product.find({
      name: new RegExp(query, "i"),
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
app.post("/api/products", async (req, res) => {
  const query = req.body.query;
  console.log(query);
  const { brand, category, size, color } = extractProductDetails(query);
  console.log(brand, category, size, color);

  const conditions = [];

  // Add conditions for brand, category, size, and color if they are present
  if (brand) {
    conditions.push({ brand });
  }
  if (category) {
    conditions.push({ category });
  }
  if (size) {
    conditions.push({ size });
  }
  if (color) {
    conditions.push({ color });
  }

  try {
    let products=[];

    // Construct the query with $or operator
    if (conditions.length > 0) {
      products = await Product.find({ $and: conditions });
    } 

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


app.use((req, res, next) => {
  res.status(404).render("errorRoute", { message: "Route not found" });
});
// const startServer = async () => {
//   try {
//     app.listen(3000, () => console.log("server has started on port 3000"));
//   } catch (err) {
//     console.log(err);
//   }
// };
// startServer();
export default app;

