import React, { useState } from 'react'
import Popup from '../../../components/Popup/Popup';
import { MdDoDisturb, MdEditLocationAlt, MdOfflinePin, MdRemoveRedEye, MdRestoreFromTrash } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import productimg from '../../../img/photo.gif'
import productgallary from '../../../img/gallary.gif'
import { ToastContainer, toast } from 'react-toastify';
import { Createproducts,updatestatus } from '../../../redux/ShopReduser/Action';



export const Products = () => {
  const [status,setstatus]=useState(false)
  const [checkbox,setcheckbox]=useState([])
  const [view,setview]=useState({})
  const [input,setinput]=useState({

     name:'',
     price:null,
     stock:null,
     brand:'',
     dis:''
     

  })
  const dispatch = useDispatch();

  const {categorys,tags,brands,products } = useSelector((state) => state.shop);


  const [popup, setpopup] = useState({
    type: "",
    show: false,
    edit:{}
  });
  // const [input, setinput] = useState("");
  // const [popup,setpopup] = useState();
  const [photo, setphoto] = useState(null);
  const [photoS, setphotoS] = useState(null);
  
  const [gallary, setgallary] = useState({

    gallary1:null,
    gallary2:null,
    gallary3:null,
    gallary4:null

  });
const handlegallary=(e)=>{
 let b= e.target
  setphotoS(b)


 setgallary({

    gallary1:b.files[0],
    gallary2:b.files[1],
    gallary3:b.files[2],
    gallary4:b.files[3]

 })
} 
const handlecloseimg=()=>{}


  
const handleview=(e)=>{
  
    setpopup({

    type:'view',
     show:true

    })
    setview(products.find(x => x._id == e))
    console.log(view)


}
  
const handlecrate=()=>{
  
    setpopup({

    type:'create',
     show:true

    })

}


const handlecheckbox=(e)=>{

  const {value,checked}=e.target
  // console.log(value,checked);

  if(checked){
    setcheckbox([...checkbox,value])
  }else{
    setcheckbox(checkbox.filter((e)=> e !== value))
  }
}

const handleinput=(e)=>{
  setinput({
    ...input,
    [e.target.name]: e.target.value
 })}


const handlesubmit=(e)=>{
  e.preventDefault();
// alert('all')
let from_data=new FormData()
from_data.append("photo", photo);
from_data.append("name", input.name);
from_data.append("regular_price", input.price);
from_data.append("stock", input.stock);
from_data.append("brand", input.brand);
from_data.append("slug", 'n');
from_data.append("desc", input.dis);
from_data.append("catagorys", checkbox);
from_data.append("tags", checkbox);
from_data.append("gallary",photoS);
console.log(photo,photoS);
if (!input.name ||!input.price || !input.stock || !input.brand || !input.dis || !photo ) {
 toast(`all field are requred`);
 } else {
  dispatch(Createproducts(from_data));
 
  toast(`Catagory created successfull`);
  setpopup({
   type:''

  })
  setinput({})


} 
}
const handlestatus=(e)=>{

console.log(e);

dispatch(updatestatus(e))

}

  return (
<> 
    
<ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
 {popup.type=='view' &&(

   
   

    <Popup   action={{ popup, setpopup }} ><div  className='w-[500px]  flex group'>
      
            <img className='w-7/12 h-32  object-contain border' src={`http://localhost:9000/product/${view.photo}`} alt="" />
             <div className='text-lg font-semibold space-y-2  pl-2'>
              <p>{view.name}</p>
              <p className='text-base font-normal'>catagory of proudct</p>
              <p>{view.regular_price}</p>

             </div>
      
 </div></Popup>


   )
}
 {popup.type=='create' &&(

   
   

    <Popup   action={{ popup, setpopup }} ><div  className='w-[800px]  flex group'>
      
    <div className='w-full flex'>

       <div className='  p-2 w-6/12'>
        <input type="file" onChange={(e)=>setphoto(e.target.files[0])} className='hidden' name="photo" id="photo" />
          <label htmlFor="photo">

          <img src={ !photo?productimg:URL.createObjectURL(photo)} className='h-[250px] w-full object-cover border rounded-md shadow-lg' alt="" />
          </label>
          
          <p className='bg-blue-500 text-white font-semibold text-center my-2 w-4/12 rounded-md'>Photo</p>
          <div className='grid grid-cols-4 gap-3  h-1/6'>
            <img src={!gallary.gallary1?productgallary:URL.createObjectURL(gallary.gallary1)} className='border rounded-md h-14 object-cover w-full shadow-lg'  alt="" />
            <img src={!gallary.gallary2?productgallary:URL.createObjectURL(gallary.gallary2)} className='border rounded-md shadow-lg h-14 object-cover w-full '  alt="" />
            <img src={!gallary.gallary3?productgallary:URL.createObjectURL(gallary.gallary3)} className='border rounded-md shadow-lg h-14 object-cover w-full '  alt="" />
            <img src={!gallary.gallary4?productgallary:URL.createObjectURL(gallary.gallary4)} className='border rounded-md shadow-lg h-14 object-cover w-full '  alt="" />

          </div>
          <label htmlFor="gallary">
            <input type="file" multiple   onChange={handlegallary} name="gallary" id="gallary" className='hidden' />
            <p className='bg-blue-500 text-white font-semibold text-center my-2 w-4/12 rounded-md'>Gallary</p>
          </label>
       </div>
       <div className='w-6/12 p-2 pt-3'>

        <input type="text" name='name' onChange={handleinput}  value={input.name} placeholder='name of product . . .' className='border w-full p-1  rounded-md focus:outline-dashed outline-gray-500 ' />
        <p className='py-2 flex items-center justify-between gap-2'>     
              <input type="number"  name='price' onChange={handleinput} value={input.price}  placeholder='price of product . . .' className='border w-7/12 p-1  rounded-md focus:outline-dashed outline-gray-500 ' />
              <input type="number" name='stock'  onChange={handleinput} value={input.stock} placeholder='stock . . .' className='border w-5/12 p-1  rounded-md focus:outline-dashed outline-gray-500 ' />
        </p>
        <p className='font-semibold text-secondary pb-2'>Catagorys</p>
        <p className='pb-2 flex gap-3 flex-wrap'>
          {categorys.map((item,index)=>(
            
            <label key={index} className='flex items-center gap-2 border w-fit px-2 rounded-md font-semibold'><span className=''>{item.name}</span>
          <input type="checkbox" onChange={handlecheckbox} name={item.name} value={item._id} />
          </label>
          ))}
           {!categorys&&'no catagroys aviable'}

        </p>   
          <p className='font-semibold text-secondary pb-2'>Tags</p>
        <p className='pb-2 flex gap-3 flex-wrap'>
          {tags.map((item,index)=>(
            
            <label key={index} className='flex items-center gap-2 border w-fit px-2 rounded-md font-semibold'><span className=''>{item.name}</span>
          <input type="checkbox" name="man"  />
          </label>
          ))}
             
        </p>
         <p className='pb-3'>
         <label className=' font-semibold mr-4' for="cars">Brand</label>

<select name='brand' id="cars"  onChange={handleinput}  className='w-10/12 focus:outline-none border rounded-md'>
  <option value='' >--Chouse your brand--</option>
   
  {brands.map((item,index)=>(

    <option key={index} value={item._id}>{item.name}</option>
  ))}
  
</select>
          
          </p>    

          <p className='pb-2'>
          <textarea name="dis"   onChange={handleinput} value={input.dis} placeholder='Product descraption . . .' className='border focus:outline-none w-full p-2  rounded-md '   id="" ></textarea>
          </p>
          <p onClick={handlesubmit} className='w-full bg-blue-500 p-1 text-white font-semibold text-center rounded-md'>Save</p>
     </div>
        </div>
      
 </div></Popup>


   )
}

    <div className='flex items-center justify-between p-2 '>

    <p className='text-2xl text-secondary  font-bold'>Products</p>
     
    <p className='text-lg text-secondary font-semibold cursor-pointer'  onClick={() => {
            setpopup({ type: "create", show: true,edit:{} });
          }}>Create +</p>

    </div>

    
    <div className='w-full p-2 grid grid-cols-4 gap-4'  >


     {products.map((item,index)=>(
      
      
       
       <div key={index} className='p-2 rounded-md border-2 border-gray-400 group h-60 bg-gray-300  bg-opacity-40 hover:bg-opacity-80 transition-all'>
         
            <img className='w-full border-2 border-gray-400  h-3/6 transition-all duration-300 group-hover:scale-x-105 group-hover:scale-y-110 object-cover rounded-md' src={`http://localhost:9000/product/${item.photo}`} alt="" />
              <p className='text-sm font-semibold font-poppins text-center my-2'>{item.name}</p>
              <p className='text-sm  font-poppins text-center pb-2'>[Brand : { brands.find(x => x._id ==item.brand).name} ]</p>
              {/* <p className='text-sm font-semibold font-poppins text-center my-1'> slug of prducts</p> */}
               <p className='flex items-center justify-center gap-2 mt-2'>
                <MdRemoveRedEye onClick={()=>handleview(item._id)} className='bg-indigo-500 text-white h-6 p-1 rounded-md w-6  hover:scale-125 transition-all cursor-pointer' />
                <MdEditLocationAlt  className='bg-yellow-400 text-white h-6 p-1 rounded-md w-6  hover:scale-125 transition-all cursor-pointer'/>
                <MdRestoreFromTrash  className='bg-red-500 text-white h-6 p-1 rounded-md w-6  hover:scale-125 transition-all cursor-pointer'/>
              <span onClick={()=>handlestatus(item)}>

               {item.status?(
                 <MdOfflinePin  className='bg-green-400 text-white h-6 p-1 rounded-md w-6  hover:scale-125 transition-all cursor-pointer'/>
                 
                 ):(
                   
                 <MdDoDisturb  className='bg-gray-500 text-white h-6 p-1 rounded-md w-6  hover:scale-125 transition-all cursor-pointer'/>
                 )
              
               }
              </span>
               </p>
       </div>
))}

  



    </div>
</>
  )
}
