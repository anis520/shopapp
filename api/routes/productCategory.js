import express from 'express'
import { createProductCatagory, getAllProductCatagory, getsigleProductCatagory } from '../controllers/ProductCatagoryController.js'
import { productCategoryMulter } from '../utils/multer.js'



//creacte router
const router=express.Router()
 


// routes
router.get('/category',getAllProductCatagory)
router.post('/category',productCategoryMulter,createProductCatagory)
router.get('/category/:slug',getsigleProductCatagory)




// exprot
export default router