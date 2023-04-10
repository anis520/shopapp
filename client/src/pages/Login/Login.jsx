import React from 'react'
import { Link } from 'react-router-dom'
import Loginimg from '../../img/regester1.png'

const Login = () => {
  return (
    <div className='container flex'>
        
        <div className='w-4/12 space-y-2  py-10'>
          <p className='uppercase text-2xl font-bold text-secondary'>login</p>
          <p className='font-semibold opacity-60'>Loreadipisicing elit. Quaerat, quidem.</p>
          <div>
               <p className='text-secondary font-semibold'>Emaill Address :</p>
               <input type="email" placeholder='enter your email . .' className='p-1 ps-2 my-2 rounded-md focus:outline-none text-secondary placeholder:text-secondary border w-full' />
          </div>
          <div>
               <p className='text-secondary font-semibold'>Enter Passoword :</p>
               <input type="password" placeholder='enter your password . .' className='p-1 ps-2 my-2 rounded-md focus:outline-none text-secondary placeholder:text-secondary border w-full' />
          </div>
          <div className='flex justify-between items-center'>
              <p><input type="checkbox" name="" id="" /> Rememver me </p><p className='text-red-500 font-semibold'>Forget password ?</p>
          </div>
           <div className='w-full py-2 text-center text-white font-semibold rounded-md bg-primary'>Login</div>
           <div className='w-full flex justify-between  py-2 text-secondary font-semibold '><span>Dont have an accout ?</span> <Link to={'/regester'} className='text-red-500'>Regester ?</Link></div>
        </div>

        <div className='w-8/12 flex items-center justify-center'> 
         <img className=' w-9/12' src={Loginimg} alt="" />
    </div>

    </div>
  )
}

export default Login