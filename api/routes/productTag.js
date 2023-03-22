import express from 'express'
import { createProductTag, getAllProductTag, getsigleProductTag, updateProductTag ,deleteProductTag} from '../controllers/ProductTagController.js'
 



//creacte router
const router=express.Router()
 


// routes
router.get('/Tag',getAllProductTag)
router.post('/Tag',createProductTag)
router.put('/Tag/:id',updateProductTag)
router.delete('/Tag/:id',deleteProductTag)
router.get('/Tag/:slug',getsigleProductTag)




// exprot
export default router