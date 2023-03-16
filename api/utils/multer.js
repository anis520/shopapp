import multer from "multer";



// create diskstrage
const storage = multer.diskStorage({
    filename:(req,file,cb)=>{

        cb(null,Date.now()+ "_" +file.originalname);  

    }
    ,destination:(req,file,cb)=>{
        cb(null,"api/public/product/category")
    }
})
   
export const productCategoryMulter=multer({storage}).single("category-photo")
