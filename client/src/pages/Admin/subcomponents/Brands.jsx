import React, { useState } from 'react'
import Popus from '../../../components/Popus/Popus'

 
 

const Brands = () => {

  const [popup,setpopup]=useState(false)



  return (
    <>
    <div className='flex items-center  transition-all duration-150 justify-between p-2 '>


     <Popus  action={{popup,setpopup}} child={(<div className='w-80 space-y-2'>
      
         <p className='text-lg font-semibold capitalize'>name :</p>
         <input className='w-full p-1 rounded-md border focus:outline-none' type="text" />
            
         <p className='text-lg font-semibold capitalize'>price :</p>
         <input className='w-full p-1 rounded-md border focus:outline-none' type="text" />
          <button onClick={()=>setpopup(false)} className='text-white text-lg bg-blue-500 py-1 rounded-md font-semibold w-full text-center'>Save</button>   
      </div>)} />
      
      
         <p className='text-2xl text-secondary   font-bold'>Brands</p>
          
          <p className='text-lg text-secondary font-semibold cursor-pointer ' onClick={()=>setpopup(true)}>Create +</p>
              
    </div>
     </>
  )
}

export default Brands