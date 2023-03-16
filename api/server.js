import express from 'express'
import colors from "colors"
import dotenv from 'dotenv'
import cors from 'cors'
import productCategoryRoute from "./routes/productCategory.js"
import mongoDBConnect from './config/db.js'
import { errorHandle } from './middlewares/errorHander.js'


///init express
const app=express()
dotenv.config()


/// middlewars
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


// set static
app.use(express.static("api/public"))




//routes
app.use('/api/v1/product',productCategoryRoute)




//envroment variable
const PORT =process.env.PORT || 5050;


app.use(errorHandle)



//listen
app.listen(PORT,()=>{
mongoDBConnect()
console.log(`server was runing on port ${PORT}`.bgCyan.white);



})