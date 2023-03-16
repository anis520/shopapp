import mongoose from "mongoose";


/// create a mongodb connection

const mongoDBConnect=async()=>{

try { 
      
 const connection =await mongoose.connect(process.env.MONGO_URL)
  console.log(`mongodb conncted successful `.bgBlue.black)

 
} catch (error) {
    
  console.log(`${error.message}`.bgBlue.red);

}



}
///export 
export default mongoDBConnect