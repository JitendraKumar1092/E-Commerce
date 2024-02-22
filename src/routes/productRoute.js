import express from "express";
import * as dotenv from "dotenv";


import Product from "../database/model/product.js";

dotenv.config();

const router = express.Router();

// GET ALL ProductS
router.get('/' , async (req, res) => {
  try {
    const category = req.params.category;
    console.log(category);
    const Products = await Product.find({ category});

    res.status(200).json({ success: true, data: Products });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});



export default router;
