import multer from "multer";



// create diskstrage
const storage = multer.diskStorage({
    filename:(req,file,cb)=>{

        cb(null,Date.now()+ "_" +file.originalname);  

    }
    ,destination:(req,file,cb)=>{

        if(file.fieldname=="category-photo"){

            cb(null,"api/public/category")
        }else if(file.fieldname=='photo'||file.fieldname=="gallary"){
            
            cb(null,"api/public/product")
        
        }else if(file.fieldname=="brand-photo"){
            
            cb(null,"api/public/brand")
        }
    
    
    
    }
})
   
export const productCategoryMulter=multer({storage}).single("category-photo")
export const productbBrandMulter=multer({storage}).single("brand-photo")
export const productMulter=multer({storage}).fields([
{
    name:"photo",
    maxCout:1

},
{
 name:'gallary',
 maxCout:10
}]

)
