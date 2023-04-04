import React, { useState } from 'react'
import { BsCartFill, BsFillHeartFill, BsPersonFill, BsSearch } from "react-icons/bs";
const Header = () => {
    const [search ,setsearch]=useState(false)

  const seachhandeler=()=>{


   setsearch(true)


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
            search &&(

  
              <div className="searchdiv absolute  top-11 bg-white rounded-lg left-0 p flex flex-col gap-3  p-5 max-h-72 overflow-scroll border w-full">
                   
                   <div className='flex justify-between items-center'>
                       <img src="https://media.4rgos.it/s/Argos/1187238_R_SET?w=270&h=270&qlt=75&fmt.jpeg.interlaced=true" className='w-24 border rounded-lg' alt="" />
                       <div>

                       <p>name of products </p>
                       <p>
                        <span className='mr-2'>111 tk</span>
                        <span className='line-through'>455 tk</span>
                        </p>
                       </div>
                       <div>See more</div>

                   </div>
                   
                   <div className='flex justify-between items-center'>
                       <img src="https://media.4rgos.it/s/Argos/1187238_R_SET?w=270&h=270&qlt=75&fmt.jpeg.interlaced=true" className='w-24 border rounded-lg' alt="" />
                       <div>

                       <p>name of products </p>
                       <p>
                        <span className='mr-2'>111 tk</span>
                        <span className='line-through'>455 tk</span>
                        </p>
                       </div>
                       <div>See more</div>

                   </div>
                   
                   <div className='flex justify-between items-center'>
                       <img src="https://media.4rgos.it/s/Argos/1187238_R_SET?w=270&h=270&qlt=75&fmt.jpeg.interlaced=true" className='w-24 border rounded-lg' alt="" />
                       <div>

                       <p>name of products </p>
                       <p>
                        <span className='mr-2'>111 tk</span>
                        <span className='line-through'>455 tk</span>
                        </p>
                       </div>
                       <div>See more</div>

                   </div>

              </div>
                  )

        } 
        
         </div>

         {/* icons  */}
         <div className='flex justify-between space-x-3'>
                <div className='relative group'>
                    <BsFillHeartFill className='group-hover:text-primary text-3xl mx-auto'/>
                    <p className='text-sm text-secondary font-semibold group-hover:text-primary'>Wish List</p>
                    <p className=' rounded-full bg-primary text-sm h-5 w-5 flex items-center justify-center text-white absolute bottom-10 right-1'>1</p>
                </div>
                <div className='relative group'>
                    <BsCartFill className='text-3xl mx-auto group-hover:text-primary'/>
                    <p className='text-sm text-secondary font-semibold group-hover:text-primary'>Cart</p>
                    <p className=' rounded-full bg-primary text-sm h-5 w-5 flex items-center justify-center text-white absolute bottom-10 left-5'>1</p>
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