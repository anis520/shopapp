import React, { useState } from 'react'
import { BsCartFill, BsFillHeartFill, BsFillTrashFill, BsPersonFill, BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import{removewish,removecard}from '../../redux/ShopReduser/Action'
import { Link } from 'react-router-dom';
const Header = () => {
    const [search ,setsearch]=useState(false)
    const [found ,setfound]=useState([])
    const [wish,setwish]=useState(false)
    const [cart,setcart]=useState(false)
    const {cardnow,wishlist ,products} = useSelector((state) => state.shop);
    const dispatch=useDispatch()
    const [input,setinput]=useState('')


  const  handlecart=()=>{

setcart(!cart)
setwish(false)


  }
  const  handlewish=()=>{

setwish(!wish)
setcart(false)


  }
const handleremovewish=(e)=>{
dispatch(removewish(e))

}
const handleremovecard=(e)=>{
dispatch(removecard(e))

}
const seachhandeler=(e)=>{
let m=e.target.value
 
setinput(m)


let find =products.filter(word => word.name == input)
setfound(find)


console.log(products);
 console.log(find);

 

 
  }
    return ( 
    <div className='py-4 container shadow-sm  flex items-center justify-between'>

         {/* logo */}
         <div className='text-3xl font-semibold'><span className='text-primary  font-semibold'>Re</span>mosion</div>
         
         {/* seach bar */}
         <div className='w-full max-w-xl relative flex'>
              <BsSearch className='absolute left-4 top-3 text-lg text-gray-400'  />
              <input onChange={seachhandeler} type="text" placeholder='search' className='w-full border border-primary  border-r-0 pl-12 pr-3 py-2 rounded-l-md focus:outline-none' />
              <button className='bg-primary border border-primary text-white px-8 
              rounded-r-md hover:bg-transparent hover:text-primary transition
              '>Search</button>
         
       {/* seacch ietm  */}
     
        {
             [...found].length>0 &&(

  
              <div className="searchdiv absolute  top-11 bg-white rounded-lg left-0 p flex flex-col gap-3  p-5 max-h-72  border w-full">

             {
             

                <div className='flex justify-between items-center'>
                       <img src={`http://localhost:9000/product/${found[0]?.photo}`} className='w-24 border rounded-lg' alt="" />
                       <div>

                       <p>{found[0]?.name} </p>
                       <p>
                        <span className='mr-2'>{found[0]?.regular_price}</span>
                        <span className='line-through'>{found[0]?.regular_price+300} tk</span>
                        </p>
                       </div>
                       <div>
                        <Link to={`/${found[0]._id}`}>
                        <p className='bg-indigo-500 rounded-md text-white cursor-pointer px-2' onClick={()=>setfound([])} >See more</p>
                        </Link>
                        </div>

                   </div>
      
                     }             

              </div>
                  )

        } 
        
         </div>

         {/* icons  */}
         <div className='flex justify-between space-x-3 z-30'>
                <div className='relative group cursor-pointer' >
                
                    <BsFillHeartFill className='group-hover:text-primary text-3xl mx-auto' onClick={handlewish}/>
                    <p className='text-sm text-secondary font-semibold group-hover:text-primary' >Wish List</p>
                    
                   {[...wishlist].length>0&&<p className=' rounded-full bg-primary text-sm h-5 w-5 flex items-center justify-center text-white absolute bottom-10 right-1'>{[...wishlist].length}</p>}
                       
                  <div className={`absolute transition-all duration-300 ${!wish&&'top-[-500px]'} ${wish&&'top-28'}  right-[-260px] bg-white   w-[500px] rounded-md border `}>
                     <p className='text-center text-lg font-semibold text-secondary my-2'>Wish list</p>
                     <hr className='my-2 w-10/12 h-1 bg-opacity-80 rounded-md bg-secondary mx-auto' />
                     <dir className='w-11/12 space-y-2'>
                     
                     {wishlist?.map((item,index)=>(

             <p key={index} className='flex  items-center justify-between'> <img className='w-12 border' src={`http://localhost:9000/product/${item.photo}`} alt="" /><p className='text-secondary text-lg font-semibold'>{item.name}</p><BsFillTrashFill onClick={()=>handleremovewish(item)} className='bg-slate-500 cursor-pointer h-6 w-6 p-1 bg-opacity-50 rounded-md' /></p>
              
                     ))}
                     </dir>
              </div>
 
                        
                
                </div>
                <div className='relative group'>
                    <BsCartFill className='text-3xl mx-auto group-hover:text-primary' onClick={handlecart}/>
                    <p className='text-sm text-secondary font-semibold group-hover:text-primary'>Cart</p>
                    {[...cardnow].length>0&& <p className=' rounded-full bg-primary text-sm h-5 w-5 flex items-center justify-center text-white absolute bottom-10 left-5'>{[...cardnow].length}</p>
}

                    <div className={`absolute transition-all duration-300 ${!cart&&'top-[-500px]'}  right-[-220px] bg-white   w-[500px] rounded-md border  ${cart&&'top-28'}`}>
                     <p className='text-center text-lg font-semibold text-secondary my-2'>Cart</p>
                     <hr className='my-2 w-10/12 h-1 bg-opacity-80 rounded-md bg-secondary mx-auto' />
                     <dir>
                     {cardnow?.map((item,index)=>(
                       
                       <p key={index} className='flex w-11/12  items-center justify-between my-1'> <img className='w-12 border' src={`http://localhost:9000/product/${item.photo}`} alt="" /><p className='text-secondary text-lg font-semibold'>{item.name}</p><BsFillTrashFill onClick={()=>handleremovecard(item)} className='bg-slate-500 cursor-pointer h-6 w-6 p-1 bg-opacity-50 rounded-md' /></p>
                       
                       ))}
                       <hr className='my-2 w-11/12 h-1 bg-opacity-80 rounded-md bg-secondary ' />
        <p className='bg-primary w-4/12 mx-auto text-center font-semibold text-white rounded-md p-1 mt-3'>Checkout</p>
                     </dir>
              </div>
                </div>
                <div className='group'>
                    <BsPersonFill className='text-3xl mx-auto group-hover:text-primary'/>
                    <p className='text-sm text-secondary font-semibold group-hover:text-primary'>Account</p>
                 </div>

         </div>


    </div>
 
  
  )
}

export default Header