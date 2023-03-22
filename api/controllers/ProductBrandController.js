import Brand from "../models/Brand.js";
import { createError } from "../utils/createError.js";
import fs from'fs'
// import {unlink} from'fs/promises'

// get all product Brand
export const getAllProductBrand = async (req, res,next) => {
  
 const err=createError('bad reasuts',400)
  try {
    const data = await Brand.find();
    res.status(200).json({
      Brand: data,
      message: "get all data success",
    });
  } catch (error) {
   
 next(err)
  }
};

// find single product Brand
export const getsigleProductBrand = async (req, res,next) => {
  try {
    const { slug } = req.params;
    const data = await Brand.findOne({ slug });
 
    res.status(200).json({
      Brand: data,
      message: "get single data success",
    });
  } catch (error) {
    // console.log(`${error.message}`.bgRed.black);
    next(createError('not bad',404))
  }
};

/// create sigle product catagroy
export const createProductBrand = async (req, res,next) => {
  try {
    const { name, slug } = req.body;
    const data = await Brand.create({
      name,
      slug,
      photo: req.file.filename, 
    });
    res.status(200).json({
      Brand: data,
      message: "Brand added successfull",
    });
  } catch (error) {
   next(error)
  }
};

/// update sigle product catagroy
export const updateProductBrand = async (req, res,next) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    
    const sin = await Brand.findById(id);

   if(req.file && sin ){

     fs.unlink(`api/public/brand/${sin.photo}`,function(err){
       if(err) return console.log(err);
       console.log('file deleted successfully');
      });  
    }
    const data = await Brand.findByIdAndUpdate(
      id,
      {
        name,
        slug, 
         photo: req.file?req.file.filename : sin.photo, 
      },
      { new: true }
    );
    res.status(200).json({
      Brand: data,
      message: "Brand updated successfull",
    });
  } catch (error) {
   next(error)
  }
};

/// delete sigle product catagroy
export const deleteProductBrand = async (req, res,next) => {
  try {
    const { id } = req.params;

    const data = await Brand.findByIdAndDelete(id);
      fs.unlink(`api/public/brand/${data.photo}`,function(err){
      if(err) return console.log(err);
      console.log('file deleted successfully');
     });  
    res.status(200).json({
      Brand: data,
      message: "Brand deleted successfull",
    });
  } catch (error) {
   next(error)
  }
};
