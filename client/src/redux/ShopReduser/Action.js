import axios from "axios"
import { BRAND_CREATE, BRAND_DELETE, BRAND_EDIT, BRAND_FAILED, BRAND_REAUEST, BRAND_SUCCESS, CATAGORY_CREATE, CATAGORY_DELETE, CATAGORY_FAILED, CATAGORY_REAUEST, CATAGORY_SUCCESS ,CATAGORY_EDIT, TAG_REAUEST, TAG_SUCCESS, TAG_FAILED, TAG_CREATE, TAG_EDIT, TAG_DELETE, PRODUCT_REAUEST, PRODUCT_SUCCESS, PRODUCT_FAILED, PRODUCT_CREATE, PRODUCT_EDIT_STATUS, WISHLIST_CREATE, WISHLIST_REMOVE, CARDNOW_CREATE, CARDNOW_REMOVE} from "./Typeaction";





// get all brand aciton 

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






// create a brand aciton 

export const Createbrand =(data)=>async(dispatch)=>{
  await axios.post('http://localhost:9000/api/v1/product/brand',data).then((res)=>{

   dispatch({type:BRAND_CREATE,payload:res.data.Brand})


}).catch((error)=>{console.log(error.message);})


}






//delete a brand aciton 

export const Delterbrand =(data)=>async(dispatch)=>{
  await axios.delete(`http://localhost:9000/api/v1/product/brand/${data}`).then((res)=>{

   dispatch({type:BRAND_DELETE,payload:res.data})


}).catch((error)=>{console.log(error.message);})


}







//update a brand aciton

export const Editbrand =(id,data)=>async(dispatch)=>{
  await axios.put(`http://localhost:9000/api/v1/product/brand/${id}`,data).then((res)=>{

   dispatch({type:BRAND_EDIT,payload:res.data.Brand})


}).catch((error)=>{console.log(error.message);})


}






//update a brand  status aciton

export const Editbrandstatus=(id,data)=>async(dispatch)=>{
  await axios.patch(`http://localhost:9000/api/v1/product/brand/${id}`,{status:data}).then((res)=>{

   dispatch({type:BRAND_EDIT,payload:res.data.Brand})


}).catch((error)=>{console.log(error.message);})


}





// get all catagroy aciton 

export const getallcatagorys =()=>async(dispatch)=>{
 
  try{
    dispatch({type:CATAGORY_REAUEST}) 
    await axios.get('http://localhost:9000/api/v1/product/category').then((res)=>{
      dispatch({type:CATAGORY_SUCCESS,payload:res.data.categories})
    })
  }catch(e){
    dispatch({type:CATAGORY_FAILED,payload:e.response.message})
  }
  }
  
  
  
// create a brand aciton 

export const Createcategory =(data)=>async(dispatch)=>{
  await axios.post('http://localhost:9000/api/v1/product/category',data).then((res)=>{

   dispatch({type:CATAGORY_CREATE,payload:res.data.category})


}).catch((error)=>{console.log(error.message);})


}




//delete a catagroys aciton 

export const Deletecatagroy =(data)=>async(dispatch)=>{
  await axios.delete(`http://localhost:9000/api/v1/product/category/${data}`).then((res)=>{

   dispatch({type:CATAGORY_DELETE,payload:res.data})


}).catch((error)=>{console.log(error.message);})


}






//update a catagroys  status aciton

export const Editcatagroystatus=(id,data)=>async(dispatch)=>{
  await axios.patch(`http://localhost:9000/api/v1/product/category/${id}`,{status:data}).then((res)=>{

   dispatch({type:CATAGORY_EDIT,payload:res.data.category})


}).catch((error)=>{console.log(error.message);})


}





//update a brand aciton

export const Editcatagory =(id,data)=>async(dispatch)=>{
  await axios.put(`http://localhost:9000/api/v1/product/category/${id}`,data).then((res)=>{

   dispatch({type:CATAGORY_EDIT,payload:res.data.category})


}).catch((error)=>{console.log(error.message);})


}






// get all brand aciton 

export const getallTags =()=>async(dispatch)=>{
 
  try{
    dispatch({type:TAG_REAUEST}) 
    await axios.get('http://localhost:9000/api/v1/product/tag').then((res)=>{
      dispatch({type:TAG_SUCCESS,payload:res.data.Tag})
    })
  }catch(e){
    dispatch({type:TAG_FAILED,payload:e.response.message})
  }
  }
  

 
// create a brand aciton 

export const Creattag =(data)=>async(dispatch)=>{
  await axios.post('http://localhost:9000/api/v1/product/tag',data).then((res)=>{

   dispatch({type:TAG_CREATE,payload:res.data.Tag})


}).catch((error)=>{console.log(error.message);})


}


//update a brand aciton

export const Editagstatus =(id,data)=>async(dispatch)=>{
  await axios.put(`http://localhost:9000/api/v1/product/tag/${id}`,data).then((res)=>{

   dispatch({type:TAG_EDIT,payload:res.data.Tag})


}).catch((error)=>{console.log(error.message);})


}


//delete a catagroys aciton 

export const Deletetag =(data)=>async(dispatch)=>{
  await axios.delete(`http://localhost:9000/api/v1/product/tag/${data}`).then((res)=>{

   dispatch({type:TAG_DELETE,payload:res.data})


}).catch((error)=>{console.log(error.message);})


}









// get all brand aciton 

export const getallProducts =()=>async(dispatch)=>{
 
  try{
    dispatch({type:PRODUCT_REAUEST}) 
    await axios.get('http://localhost:9000/api/v1/product/').then((res)=>{
      dispatch({type:PRODUCT_SUCCESS,payload:res.data.Product})
    })
  }catch(e){
    dispatch({type:PRODUCT_FAILED,payload:e.response.message})
  }
  }
  
  
  
  
  
  
  // create a products aciton 
  
  export const  Createproducts=(data)=>async(dispatch)=>{
    await axios.post('http://localhost:9000/api/v1/product/',data).then((res)=>{
      console.log(data);
 
     dispatch({type:PRODUCT_CREATE,payload:res.data.Product})
  
  
  }).catch((error)=>{console.log(error.message)})
  
  
  }
  
  
  
  // update products status 
  export const updatestatus=(data)=>async(dispatch)=>{

    await axios.patch(`http://localhost:9000/api/v1/product/${data._id}`,{status:!data.status}).then((res)=>{
      // console.log(data);
 
     dispatch({type:PRODUCT_EDIT_STATUS,payload:res.data.product})
  
  
  }).catch((error)=>{console.log(error.message)})
  

  }


//wish list 


export const CreatewishList=(data)=>(dispatch)=>{


   dispatch({type:WISHLIST_CREATE,payload:data})


}

export const removewish=(data)=>(dispatch)=>{


   dispatch({type:WISHLIST_REMOVE,payload:data})


}
//wish card 


export const Createcardnow=(data)=>(dispatch)=>{


   dispatch({type:CARDNOW_CREATE,payload:data})


}

export const removecard=(data)=>(dispatch)=>{


   dispatch({type:CARDNOW_REMOVE,payload:data})


}
