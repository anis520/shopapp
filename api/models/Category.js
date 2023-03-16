import mongoose from "mongoose";



//schema
const categorySchema=mongoose.Schema({

name:{
    type:String,
    required:true,
    trim:true,
    unique:true 
},
slug:{
    type:String,
    required:true,
    trim:true,
    unique:true
},
photo:{
    
    type:String,
    trim:true,
    default:null,
 
},
status:{
   type:String,
   default:true
 
},
trash:{
   type:String, 
   default:false
}

},
{
    timestamps:true 
})


 


///exprot model 

export default mongoose.model("Category",categorySchema)