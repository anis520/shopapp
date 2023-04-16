import mongoose from "mongoose";



//schema
const productSchema=mongoose.Schema({

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
short_desc:{
    type:String,

    trim:true,
},
long_desc:{
    type:String, 

    trim:true,
},
regular_price:{
    type:Number,

    required:true,
},
sale_price:{
    type:Number,

 
},
stock:{
    type:Number,
    default:null,

 
},

photo:{
    
    type:String,
    trim:true,
    default:null,
 
},
gallary:{
    
    type:Array,
    trim:null,
    default:null,
 
},

catagorys:{

   type:[mongoose.Schema.Types.ObjectId]
   ,ref:"Category"

},
brand:{

   type:[mongoose.Schema.Types.ObjectId]
   ,ref:"Brand"

},
tags:{

   type:[mongoose.Schema.Types.ObjectId]
   ,ref:"MyTag"

},


status:{
   type:Boolean,
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

export default mongoose.model("Product",productSchema)