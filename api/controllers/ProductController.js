import Product  from "../models/Product.js";
import { createError } from "../utils/createError.js";
import fs from'fs'
import Tag from "../models/Tag.js";
import { createSlug } from "../helper/slugCreate.js";
// import {unlink} from'fs/promises'

// get all product Tag
export const getAllProduct = async (req, res,next) => {
  
 const err=createError('bad reasuts',400)
  try {
    const data = await Product.find();
    res.status(200).json({
      Tag: data,
      message: "get all product data success",
    });
  } catch (error) {
   
 next(err)
  }
};

// find single product Tag
export const getsigleProductTag = async (req, res,next) => {
  try {
    const { slug } = req.params;
    const data = await Tag.findOne({ slug });
 
    res.status(200).json({
      Tag: data,
      message: "get single data success",
    });
  } catch (error) {
    // console.log(`${error.message}`.bgRed.black);
    next(createError('not bad',404))
  }
};

/// create sigle product catagroy
export const createProduct = async (req, res,next) => {
  try {
    let { name, slug,regular_price } = req.body;
    slug =createSlug(slug)

let galleryarray=[] 
for (let i of req.files.gallary) {
  galleryarray.push(i.filename)

}


console.log(req.files.photo);
    const data = await Product.create( 
      {
      name,
      slug,
      gallary:galleryarray,
      regular_price,
      photo:req.files.photo[0].filename,


    } 
    
    );

 
    res.status(200).json({
      Tag: data,
      message: "product added successfull",
    });
  } catch (error) { 
   next(error)
  }
};

/// update sigle product catagroy
export const updateProductTag = async (req, res,next) => {
  try {
    const { id } = req.params;
    const { name, slug ,status } = req.body;
    
 

 
    const data = await Tag.findByIdAndUpdate(
      id,
      {
        name,
        slug, 
 status
      },
      { new: true }
    );
    res.status(200).json({
      Tag: data,
      message: "Tag updated successfull",
    });
  } catch (error) {
   next(error)
  }
};

/// delete sigle product catagroy
export const deleteProductTag = async (req, res,next) => {
  try {
    const { id } = req.params;


    const data = await Tag.findByIdAndDelete(id);
 
    res.status(200).json({
      Tag: data?data:'no item',
      message: data?"Tag deleted successfull":'no item found',
    });
  } catch (error) {
   next(error)
  }
};
