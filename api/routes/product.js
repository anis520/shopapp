import express from 'express'
import { getAllProduct,createProduct, productstatus } from '../controllers/ProductController.js'
import { productCategoryMulter, productMulter } from '../utils/multer.js'
  



//creacte router
const router=express.Router()
 


// routes
// router.route('/').get(getAllProduct).post(createProduct)
router.get('/',getAllProduct)
router.post('/',productMulter,createProduct)
router.patch('/:id',productstatus)

// router.put('/tag/:id',updateProductTag)
// router.delete('/tag/:id',deleteProductTag)
// router.get('/tag/:slug',getsigleProductTag)




// exprot
export default router