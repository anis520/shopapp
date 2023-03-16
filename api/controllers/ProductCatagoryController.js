import Category from "../models/Category.js";
import { createError } from "../utils/createError.js";

// get all product catagory
export const getAllProductCatagory = async (req, res,next) => {
  
 const err=createError('bad reasuts',400)
  try {
    const data = await Category.find();
    res.status(200).json({
      categories: data,
      message: "get all data success",
    });
  } catch (error) {
   
 next(err)
  }
};

// find single product catagory
export const getsigleProductCatagory = async (req, res,next) => {
  try {
    const { slug } = req.params;
    const data = await Category.findOne({ slug });
 
    res.status(200).json({
      categories: data,
      message: "get single data success",
    });
  } catch (error) {
    // console.log(`${error.message}`.bgRed.black);
    next(createError('not bad',404))
  }
};

/// creat sigle product catagroy
export const createProductCatagory = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const data = await Category.create({
      name,
      slug,
      photo: req.file.filename, 
    });
    res.status(200).json({
      category: data,
      message: "Category added successfull",
    });
  } catch (error) {
    res.status(200).json({
      categories: [],
      message: "something was wrong",
      error: error.message,
    });
    console.log(`${error.message}`.bgRed.black);
  }
};

/// update sigle product catagroy
export const updateProductCatagory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Category.findByIdAndUpdate(
      id,
      {
        name,
        slug,
      },
      { new: true }
    );
    res.status(200).json({
      category: data,
      message: "Category updated successfull",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

/// delete sigle product catagroy
export const deleteProductCatagory = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Category.findByIdAndDelete(id);
    res.status(200).json({
      category: data,
      message: "Category deleted successfull",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};
