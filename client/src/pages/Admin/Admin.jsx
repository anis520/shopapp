import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <>
    
    
           <div className='flex container gap-2'>
                <div className='  w-3/12  py-5 space-y-2 text-center'>

                  <Link to='dash' className='block'>
                   <p className='bg-slate-400  p-2 rounded-md text-white font-semibold hover:scale-105 transition-all cursor-pointer'>Dashbord</p>
                  </Link>

                  <Link className='block' to='products'>
                   <p className='bg-slate-400 p-2 rounded-md text-white font-semibold hover:scale-105 transition-all cursor-pointer'>Products</p>
                  </Link>
                  
                   <Link  to='brands' className='block'>
                   <p className='bg-slate-400 p-2 rounded-md text-white font-semibold hover:scale-105 transition-all cursor-pointer'>Brands</p>
                   </Link>

                   <Link to='categorys' className='block'>
                   <p className='bg-slate-400 p-2 rounded-md text-white font-semibold hover:scale-105 transition-all cursor-pointer'>Categorys</p>
                   </Link>

                   <Link to='tags' className='block' >
                   <p className='bg-slate-400 p-2 rounded-md text-white font-semibold hover:scale-105 transition-all cursor-pointer'>Tags</p>
                   </Link>


                </div>
                <div className=' border  rounded-md w-9/12 my-5 '>

                    <Outlet/>


                </div>
           </div>

    
    
    </>
  )
}

export default Admin