import React from 'react'
import { BsFillLampFill, BsList } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full bg-gray-700'>
        <div className='container flex '>

          
         {/* catagrouis  */}

           <div className='flex items-center gap-1 bg-primary text-white w-2/12 justify-center py-2 px-3 group relative'> <BsList/> <span>All Catagries</span>
           
           <div className='  bg-white absolute top-10 left-0 divide-y shadow-md opacity-0 group-hover:opacity-100 transition duration-700 divide-gray-600 divide-dashed w-full hidden group-hover:block'>

                    <div className='p-2 text-center text-secondary hover:bg-gray-200 flex justify-center gap-4 items-center'><BsFillLampFill/><span>Lamp</span></div>
                    <div className='p-2 text-center text-secondary hover:bg-gray-200 flex justify-center gap-4 items-center'><BsFillLampFill/><span>Lamp</span></div>
                    <div className='p-2 text-center text-secondary hover:bg-gray-200 flex justify-center gap-4 items-center'><BsFillLampFill/><span>Lamp</span></div>
                    <div className='p-2 text-center text-secondary hover:bg-gray-200 flex justify-center gap-4 items-center'><BsFillLampFill/><span>Lamp</span></div>
 
     
 
            
 
           </div>
           
           
           </div>

         {/* manuebar  */}
            <div className='flex justify-between text-white w-full items-center'>

                    <div className='flex  gap-6 ml-6'>
                        
                    <p>Home</p>    
                    <p>Shop</p>    
                    <p>About Us</p>    
                    <p>Contect Us</p>    
                    </div>              
                    <div>
                        
                        <span>login</span>
                        <span> / regester</span>
                        </div>  
                      



                </div>      
        </div>
          


    </div>
  )
}

export default Navbar