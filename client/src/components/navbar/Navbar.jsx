import React from 'react'
import { BsFillLampFill, BsList } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {categorys } = useSelector((state) => state.shop);

  return (
    <div className='w-full bg-gray-700'>
        <div className='container flex '>

          
         {/* catagrouis  */}

           <div className='flex items-center z-20 gap-1 bg-primary text-white w-2/12 justify-center py-2 px-3 group relative cursor-pointer'> <BsList/> <span>All Catagries</span>
           
           <div className='  bg-white absolute top-10 left-0 divide-y shadow-md opacity-0 group-hover:opacity-100 transition duration-700 divide-gray-600 divide-dashed w-full hidden group-hover:block'>

            {categorys.map((item,index)=>(

              
                     <div key={index} className='p-2 text-center text-secondary hover:bg-gray-200 flex justify-center gap-4 items-center cursor-pointer'><BsFillLampFill/><span>{item.name}</span></div>
              ))}
 
     
 
            
 
           </div>
           
           
           </div>

         {/* manuebar  */}
            <div className='flex justify-between text-white w-full items-center'>

                    <div className='flex cursor-pointer  gap-6 ml-6'>
                        
                    <Link to={'/'}>Home</Link>    
                    <Link  to={'/shop'}>Shop</Link>    
                    <Link to={'/cart'}>About Us</Link>    
                    <Link to={'/admin'}>Admin</Link>    
                    </div>              
                    <div>
                        <Link to={'/login'}>
                        <span>login</span>
                        </Link>
                        <Link to={'/regester'}>
                        <span> / regester</span>
                        </Link>
                        </div>  
                      



                </div>      
        </div>
          


    </div>
  )
}

export default Navbar