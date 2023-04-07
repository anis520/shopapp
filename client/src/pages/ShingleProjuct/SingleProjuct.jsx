import React, { useState } from 'react'
import { BsChevronRight, BsFillHouseFill } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import ReactImageMagnify, {}from 'react-image-magnify'
 
import{IoIosAdd, IoIosRemove}from'react-icons/io'

 
const SingleProjuct = () => {
   const [img,setimg]=useState(0)
   const [quanity,setquanity]=useState(0)
    const {id}=useParams()

    const allimg =['https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81z81TBkBJL.jpg','https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71sGhIn651L._AC_SL1500_.jpg','https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71auGzeAdsL._AC_SS450_.jpg','https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71dyyvVc5lL._AC_SX466_.jpg','https://a.1stdibscdn.com/finn-juhl-poet-sofa-by-house-of-finn-juhl-for-sale/f_14272/f_318551421671625028007/22792332_master.jpg?width=768']

const handleQuantiy=(type)=>{

  if(type==='inc'){

    setquanity(quanity+1)
}else{
    
  quanity ===0?setquanity(0) :setquanity(quanity-1)
 

}


}


   return (
    <div className='container pb-20 '>
    <p className='flex items-center gap-1  text-primary py-3 pl-2 cursor-pointer'><BsFillHouseFill/> <BsChevronRight/><span className='text-secondary hover:text-primary transition font-semibold'>Shop</span><BsChevronRight/>{id}</p>

    <div className='grid grid-cols-2 pb-10 gap-5'>
            
            <div className='    p-1'>
  <ReactImageMagnify className=' border h-[450px]  w-full object-cover rounded-md' {...{
    smallImage: {
         isFluidWidth: true,
        src: allimg[img]
    },
 
    largeImage: {
        src:allimg[img],
        width: 1200,
        height: 1600
    }
}} />  
 

                <div className='grid grid-cols-5 my-2 gap-3 mt-3'>
        <img  onClick={()=>setimg(0)} className={` ${img===0&&'border-primary'}  h-full  w-full border rounded-md object-cover`} src={`${allimg[0]}`} alt=""  />
        <img  onClick={()=>setimg(1)} className={` ${img===1&&'border-primary'}  h-full  w-full border rounded-md object-cover`} src={`${allimg[1]}`} alt=""  />
        <img  onClick={()=>setimg(2)} className={` ${img===2&&'border-primary'}  h-full  w-full border rounded-md object-cover`} src={`${allimg[2]}`} alt=""  />
        <img  onClick={()=>setimg(3)} className={` ${img===3&&'border-primary'}  h-full  w-full border rounded-md object-cover`} src={`${allimg[3]}`} alt=""  />
        <img  onClick={()=>setimg(4)} className={` ${img===4&&'border-primary'}  h-full  w-full border rounded-md object-cover`} src={`${allimg[4]}`} alt=""  />
 
                </div>
            </div>
            <div className='space-y-3'>
                   
                   <p className='text-3xl font-semibold uppercase '>Sofa of best badroom</p>
                    <p className='text-lg font-semibold'>Avallabity: <span className='text-green-500'>In Stock</span></p>   
                    <p  className='text-lg font-semibold'>Brand: <span className=''>aStock</span></p>   
                    <p  className='text-lg font-semibold'>Category: <span className=''>bcatat</span></p>   
                    <p  className='text-lg font-semibold'>Slug: <span className=''>bcatat-s-sgb-45s</span>
                    </p>
                    <p className='font-semibold text-xl py-4 text-primary'>4500 Tk <span className='text-secondary ml-2 line-through'>8000 Tk</span></p>
                     <p className='font-semibold text-secondary'>loermfa-rotate-180 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, repellendus. z</p>   
                     <p className='text-lg pt-2  font-semibold'>Quantity</p>
                     <p className='flex items-center w-24  justify-between'><button className=' transition-all'><IoIosAdd  onClick={()=>handleQuantiy('inc')}   className=' hover:scale-125 border h-7 w-7'/></button><span className='border h-7 w-7 text-center  font-semibold '>{quanity}</span><IoIosRemove onClick={()=>handleQuantiy('dnc')}  className='border h-7 w-7 hover:scale-125'/></p>
                     <p className='space-x-3 py-6'><span className='bg-primary hover:bg-transparent hover:text-primary font-semibold transition-all   border-primary border-2 rounded-sm text-white px-3 py-1 '>Add to Card</span><span  className='border rounded-sm text-secondary font-semibold px-3 py-1 '>Wish list</span></p>
                     <hr />
            </div>

    </div>
    
    <div>
       <p className='text-2xl text-secondary font-bold py-4'>Product details</p>
     <hr />
        <p className='pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt natus dolorum velit nisi laborum, quidem blanditiis nesciunt magnam tempore architecto sunt suscipit modi accusamus sequi reprehenderit facere, vero nemo!</p>
    </div>


    </div>
  )
}

export default SingleProjuct