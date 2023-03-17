import express from 'express'
import { createProductBrand, getAllProductBrand, getsigleProductBrand, updateProductBrand ,deleteProductBrand} from '../controllers/ProductBrandController.js'
import { productbBrandMulter } from '../utils/multer.js'



//creacte router
const router=express.Router()
 


// routes
router.get('/brand',getAllProductBrand)
router.post('/brand',productbBrandMulter,createProductBrand)
router.put('/brand/:id',productbBrandMulter,updateProductBrand)
router.delete('/brand/:id',deleteProductBrand)
router.get('/brand/:slug',getsigleProductBrand)




// exprot
export default router