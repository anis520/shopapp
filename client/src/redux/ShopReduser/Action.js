import axios from "axios"
import { BRAND_CREATE, BRAND_DELETE, BRAND_EDIT, BRAND_FAILED, BRAND_REAUEST, BRAND_SUCCESS } from "./Typeaction";





//brand aciton s

export const getallBrands =()=>async(dispatch)=>{
 
try{
  dispatch({type:BRAND_REAUEST}) 
  await axios.get('http://localhost:9000/api/v1/product/brand').then((res)=>{
    dispatch({type:BRAND_SUCCESS,payload:res.data.Brand})
  })
}catch(e){
  dispatch({type:BRAND_FAILED,payload:e.response.message})
}
}






//brand aciton s

export const Createbrand =(data)=>async(dispatch)=>{
  await axios.post('http://localhost:9000/api/v1/product/brand',data).then((res)=>{

   dispatch({type:BRAND_CREATE,payload:res.data.Brand})


}).catch((error)=>{console.log(error.message);})


}




//brand aciton s

export const Delterbrand =(data)=>async(dispatch)=>{
  await axios.delete(`http://localhost:9000/api/v1/product/brand/${data}`).then((res)=>{

   dispatch({type:BRAND_DELETE,payload:res.data})


}).catch((error)=>{console.log(error.message);})


}







//brand aciton s

export const Editbrand =(id,data)=>async(dispatch)=>{
  await axios.put(`http://localhost:9000/api/v1/product/brand/${id}`,data).then((res)=>{

   dispatch({type:BRAND_EDIT,payload:res.data.Brand})


}).catch((error)=>{console.log(error.message);})


}






//brand aciton s

export const Editbrandstatus=(id,data)=>async(dispatch)=>{
  await axios.patch(`http://localhost:9000/api/v1/product/brand/${id}`,{status:data}).then((res)=>{

   dispatch({type:BRAND_EDIT,payload:res.data.Brand})


}).catch((error)=>{console.log(error.message);})


}





