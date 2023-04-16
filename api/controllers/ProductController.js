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
      Product: data,
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
    let { name, slug,regular_price,stock,brand,catagorys,tags,desc } = req.body;
    slug =createSlug(name)
    // let galleryarray=[] 
    // for (let i of req.files.gallary) {
      //   galleryarray.push(i.filename)
      
      // }
    let cat = catagorys.split(",")
    let tag = tags.split(",")

// console.log(req.files.photo);
    const data = await Product.create( 
      {
      name,
      slug,stock,brand,
      // gallary:galleryarray,
      regular_price:regular_price, catagorys:cat,tags:tag,long_desc:desc,short_desc:desc.slice(0,40),
      photo:req.files.photo[0].filename,


    } 
    
    );

 
    res.status(200).json({
      Product: data,
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





export const productstatus=async(req,res,next)=>{

  try {
    const { id } = req.params;
    const { status } = req.body;
    const data = await Product.findByIdAndUpdate(
      id,
      {
 status
      },
      { new: true }
    );
    console.log(req.body);
    res.status(200).json({
      product: data,
      message: "product status updated successfull",
    });
  } catch (error) {
   next(error)
  }


}