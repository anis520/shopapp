
import Category from "../models/Category.js"

// get all product catagory 
export const getAllProductCatagory= async(req,res)=>{

try {
 const data= await Category.find()
  res.status(200).json({
    categories:data,
    message:"get all data success"
  })
    
} catch (error) {
    
    console.log(`${error.message}`.bgRed.black);
 
} 


 
    }

// find single product catagory 
export const getsigleProductCatagory= async(req,res)=>{

try {
  const {slug}=req.params
 const data= await Category.findOne({slug})
  res.status(200).json({
    categories:data,
    message:"get single data success"
  })
    
} catch (error) {

    console.log(`${error.message}`.bgRed.black);
 
} 


 
    }




/// creat sigle product catagroy    
export const createProductCatagory= async(req,res)=>{

try {
    const{name,slug}=req.body
 const data= await Category.create({

   name,
   slug,
   photo:req.file.filename


 })
 res.status(200).json({

   category:data,
   message:'Category added successfull'


 })
 
   


    
} catch (error) {
  res.status(200).json({
    categories:[],
    message:"something was wrong"
    ,error:error.message
  })
    console.log(`${error.message}`.bgRed.black);
 
} 


 
    }