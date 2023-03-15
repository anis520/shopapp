import express from 'express'
import colors from "colors"
import dotenv from 'dotenv'
import cors from 'cors'



///init express
const app=express()
dotenv.config()


/// middlewars
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


 
//envroment variable
const PORT =process.env.PORT || 5050;


 


//listen
app.listen(PORT,()=>{

console.log(`server was runing on port ${PORT}`.bgMagenta.white);



})