import Category from "../models/Category.js";
import { createError } from "../utils/createError.js";
import fs from'fs'
// get all product catagory
import { createSlug } from "../helper/slugCreate.js";
import { FileUnlink } from "../helper/unlinkFile.js";


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

/// create sigle product catagroy
export const createProductCatagory = async (req, res,next) => {
  try {
    const { name, slug } = req.body;
    const data = await Category.create({
      name,
      slug:createSlug(name),
      photo: req.file.filename, 
    });
    res.status(200).json({
      category: data,
      message: "Category added successfull",
    });
  } catch (error) {
   next(error)
  }
};

/// update sigle product catagroy
export const updateProductCatagory = async (req, res,next) => {
  try {
  const { id } = req.params;
  const { name } = req.body;
    
  const sin = await Category.findById(id);
 
   if(req.file && sin ){
      let makePath=`api/public/category/${sin.photo}`
      FileUnlink(makePath)
  }
  
  const data = await Category.findByIdAndUpdate(
      id,
      {
        name,
        slug:createSlug(name),
         photo: req.file?req.file.filename : sin.photo, 
      },
      { new: true }
    );
    res.status(200).json({
      category: data,
      message: "Catagory updated successfull",
    });
  } catch (error) {
   next(error)
  }
};

/// delete sigle product catagroy
export const deleteProductCatagory = async (req, res,next) => {
  try {
    const { id } = req.params;

    const data = await Category.findByIdAndDelete(id);
    res.status(200).json({
      category: data,
      message: "Category deleted successfull",
    });
  } catch (error) {
   next(error)
  }
};

/// update status of product catagroy 
export const updateProductCatagoryStatus = async (req, res,next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const data = await Category.findByIdAndUpdate(
      id,
      {
 status
      },
      { new: true }
    );
    res.status(200).json({
      category: data,
      message: "Category status updated successfull",
    });
  } catch (error) {
   next(error)
  }
};
