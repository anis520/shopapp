import Brand from "../models/Brand.js";
import { createError } from "../utils/createError.js";
 
import { FileUnlink } from "../helper/unlinkFile.js";
import { createSlug } from "../helper/slugCreate.js";
 
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
  console.log(req);
  try {
    const { name, slug } = req.body;
    const data = await Brand.create({
      name,
     slug: createSlug(name),
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
    const { name, slug,status } = req.body;
    
    const sin = await Brand.findById(id);

   if(req.file && sin ){
 
      let makePath=`api/public/brand/${sin.photo}`
      FileUnlink(makePath)
  
    }
   
   


 
    const data = await Brand.findByIdAndUpdate(
      id,
      {
        name,
        status,
        slug:createSlug(name),
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




/// update sigle product catagroy
export const getsigleProductBrandstatus = async (req, res,next) => {
  try {
    const { id } = req.params;
    const {status} = req.body;
    


 
    const data = await Brand.findByIdAndUpdate(
      id,
      {
        status,
      
      },
      { new: true }
    );
    res.status(200).json({
      Brand: data,
      message: "Brand status updated successfull",
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
    //   fs.unlink(``,function(err){
    //   if(err) return console.log(err);
    //   console.log('file deleted successfully');
    //  }); 
    let makePath=`api/public/brand/${data.photo}`
    FileUnlink(makePath)

    res.status(200).json({
      Brand: data,
      message: "Brand deleted successfull",
    });
  } catch (error) {
   next(error)
  }
};
