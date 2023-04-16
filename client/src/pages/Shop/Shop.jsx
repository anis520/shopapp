import React, { useState } from 'react'
import { BsChevronRight, BsFillHouseFill, BsFillSuitHeartFill, BsGrid3X2GapFill, BsListTask, BsSearchHeart, BsStar, BsStarFill } from 'react-icons/bs'
import {  useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CreatewishList,Createcardnow } from '../../redux/ShopReduser/Action'
import { ToastContainer, toast } from 'react-toastify'

const Shop = () => {
  // const {brands}=useSelector((state)=> state.shop)
  const {categorys,tags,brands,products,wishlist,cardnow } = useSelector((state) => state.shop);

  const [Layout,setLayout]=useState(true)
  const dispatch = useDispatch();


const handlewish=(e)=>{
 
  let check= wishlist.find((i)=> i._id === e._id)
 console.log(check);

   if(check){
     toast('Already in wish list') 

   }else{

     
     dispatch(CreatewishList(e)) 
     toast('Add to wish list') 
    }

}

const handlecard=(e)=>{
 
  let check= cardnow.find((i)=> i._id === e._id)
 console.log(check);

   if(check){
     toast('Already in card') 

   }else{

     
     dispatch(Createcardnow(e)) 
     toast('Add to Card') 
    }

}

  return (
<>
<ToastContainer
          position="top-center"
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

<div className='container'>
<p className='flex items-center gap-1 text-primary py-3 pl-2 cursor-pointer'><BsFillHouseFill/> <BsChevronRight/><span className='text-secondary hover:text-primary transition font-semibold'>Shop</span></p>

<div className="flex">
 
        <div className='w-3/12 p-5 font-roboto'>
         
             <p className=' font-semibold text-lg'>CATAGROIY</p>
             <div className='space-y-1 mt-2'>

     {categorys.map((item,index)=>(


   <p key={index} className='w-full flex justify-between'>
                 <span> <input type="checkbox" className='accent-primary' name="" id="" /> {item.name} </span><span className=''>(4)</span>
               </p>


     ))

     }
 
             </div>
             <hr  className='my-3 w-11/12 mx-auto'/>
             <p className=' font-semibold text-lg'>BRANDS</p>
             <div className='space-y-1 mt-2'>
              {brands.map((item,index)=>(

                <p key={index} className='w-full flex justify-between'>
                 <span> <input type="checkbox" className='accent-primary' name="" id="" /> {item.name} </span><span className=''>(4)</span>
               </p>
                 ))}
      
             </div>
               <p className='font-semibold text-lg my-2'>PRICE</p>
               <div className=' flex items-center'>
                   <input type="number" className='w-4/12 mr-2 border p-1 rounded-md focus:outline-none' placeholder='min' /> - <input type="number"  className= 'ml-2  w-4/12 border p-1 rounded-md focus:outline-none'  placeholder='max' />
               </div>

        </div>
        <div className='w-9/12 pb-5 px-2 '>

              <div className='flex items-center pb-3 font-semibold justify-between'><div>Default</div><div className='flex items-center gap-4'>
              <button onClick={()=>setLayout(true)}  className='text-primary  p-1 rounded-md text-lg   focus:text-white focus:bg-primary' >
              <BsGrid3X2GapFill/>

              </button>
              <button onClick={()=>setLayout(false)} className='text-primary p-1 rounded-md  text-lg focus:bg-primary focus:text-white'  >
              <BsListTask/>

              </button>
                </div></div>


                <div className='container'>

 
      <div className={`grid ${Layout?'grid-cols-3':'grid-cols-1 '}   gap-5  `}>

 
{

products.map((item,index)=>

{if(item.status==true){

  return(
    

        <div key={index} className={`card rounded-md overflow-hidden border  ${!Layout&& 'flex h-44  '}`}>
                        <div className={`card-header relative group overflow-hidden  ${!Layout&&'w-5/12'}` }>
                           <img className='h-44 w-full object-contain'    src={`http://localhost:9000/product/${item.photo}`} alt="" />
                            <div className="icon absolute opacity-0 text-white gap-2 group-hover:opacity-100 bg-opacity-40  transition bg-black inset-0 flex items-center justify-center">
                                <Link to={`/${item._id}`}>
                                  <BsSearchHeart  className='h-6 w-6 rounded-full p-1 hover:bg-white hover:text-primary transition   bg-primary'/>
                                </Link>
                                
                                  <BsFillSuitHeartFill onClick={()=>handlewish(item)}  className='h-6 w-6 rounded-full p-1  hover:bg-white hover:text-primary transition  bg-primary' />
                            </div>
                        </div>
                        <div className={`card-footer border ${!Layout &&'w-7/12 flex flex-col py-2 justify-between ' } `}>
                            <p className='px-4 text-lg font-semibold hover:text-primary  transition cursor-pointer'>{item.name}</p>
                            <p className='px-4 text-primary font-semibold'>{item.regular_price} tk<span className='ml-1 text-secondary line-through text-sm font-semibold '> {item.regular_price+200} tk</span></p>
                            <p className='text-secondary font-semibold px-4 flex items-center gap-1'>
                             <BsStarFill className='text-yellow-300' />
                             <BsStarFill className='text-yellow-300' />
                             <BsStarFill className='text-yellow-300' />
                             <BsStar className='text-yellow-300' />
                              (4)</p>
                            <button  onClick={()=>handlecard(item)}  className={`border border-primary py-1 w-full text-primary hover:bg-primary hover:text-white transition font-semibold mt-2 ${!Layout && 'w-1/2 ml-3  rounded-md mb-2'}`}>Add to Cart</button>
                        </div>

                </div>

 
  )
}
})

} 

        
 



      </div>
 
    
</div>




        </div>

</div>


</div>

</>
  )
}

export default Shop