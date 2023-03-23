import express from 'express'
import { createProductTag, getAllProductTag, getsigleProductTag, updateProductTag ,deleteProductTag} from '../controllers/ProductTagController.js'
 



//creacte router
const router=express.Router()
 


// routes
router.route('/tag').get(getAllProductTag).post(createProductTag)
router.put('/tag/:id',updateProductTag)
router.delete('/tag/:id',deleteProductTag)
router.get('/tag/:slug',getsigleProductTag)




// exprot
export default router