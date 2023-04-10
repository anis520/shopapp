import React from 'react'
import { Link } from 'react-router-dom'
import Loginimg from '../../img/login1.png'

const Regester = () => {
  return (
    <div className='container flex'>
        
    <div className='w-4/12 space-y-2  py-10'>
      <p className='uppercase text-2xl font-bold text-secondary'>Regester</p>
      <p className='font-semibold opacity-60'>Regester isicing elit. Quaerat, quidem.</p>
      <div>
           <p className='text-secondary font-semibold'>Emaill Address :</p>
           <input type="email" placeholder='enter your email . .' className='p-1 ps-2 my-2 rounded-md focus:outline-none text-secondary placeholder:text-secondary border w-full' />
      </div>
      <div>
           <p className='text-secondary font-semibold'>Emaill Address :</p>
           <input type="text" placeholder='Full name . .' className='p-1 ps-2 my-2 rounded-md focus:outline-none text-secondary placeholder:text-secondary border w-full' />
      </div>
      <div>
           <p className='text-secondary font-semibold'>Passoword :</p>
           <input type="password" placeholder='enter your password . .' className='p-1 ps-2 my-2 rounded-md focus:outline-none text-secondary placeholder:text-secondary border w-full' />
      </div>
      <div>
           <p className='text-secondary font-semibold'>Conform Passoword :</p>
           <input type="password" placeholder='enter your password . .' className='p-1 ps-2 my-2 rounded-md focus:outline-none text-secondary placeholder:text-secondary border w-full' />
      </div>
      <div className='flex justify-between items-center'>
          <p><input type="checkbox" name="" id="" /> I have read all Agreement </p><p className='text-red-500 font-semibold'>Read more</p>
      </div>
       <div className='w-full py-2 text-center text-white font-semibold rounded-md bg-primary'>Creat Account</div>
       <div className='w-full flex justify-between  py-2 text-secondary font-semibold'>Already I have an account<Link to={'/login'} className='text-red-500 ml-2'>Login</Link></div>
    </div>
    <div className='w-8/12 flex items-center justify-center'> 
         <img className=' w-9/12' src={Loginimg} alt="" />
    </div>



</div>
  )
}

export default Regester