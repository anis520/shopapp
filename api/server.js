import express from 'express'
import colors from "colors"
import dotenv from 'dotenv'




///init express
const app=express()
dotenv.config()


//envroment variable
const PORT =process.env.PORT || 5050;


 


//listen
app.listen(PORT,()=>{

console.log(`server was runing on port ${PORT}`.bgMagenta.white);



})