import express from 'express'
import { createProductCatagory, getAllProductCatagory, getsigleProductCatagory, updateProductCatagory ,deleteProductCatagory,updateProductCatagoryStatus} from '../controllers/ProductCatagoryController.js'
import { productCategoryMulter } from '../utils/multer.js'



//creacte router
const router=express.Router()
 


// routes
router.get('/category',getAllProductCatagory)
router.post('/category',productCategoryMulter,createProductCatagory)
router.put('/category/:id',productCategoryMulter,updateProductCatagory)
router.delete('/category/:id',deleteProductCatagory)
router.get('/category/:slug',getsigleProductCatagory)
router.patch('/category/:id',updateProductCatagoryStatus)




// exprot
export default router