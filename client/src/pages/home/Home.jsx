import React from 'react'
import { BsCurrencyDollar, BsFillClockFill, BsFillSuitHeartFill, BsSearchHeart, BsStar, BsStarFill, BsTruck } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    

    <div className='w-full h-[400px] ' style={{backgroundImage:'url(https://wallpaperaccess.com/full/32822.jpg)',backgroundSize:'cover'}}>
    

    {/* banner part  */}
    <div className='container py-24'>

               <p className='text-5xl text-white'>Bests Colloction For <br /> Mobile And Asscoritse</p>
                 <p className=' my-3 text-white'>Lorem ipsum, dolor sit  elit. Sunt commodi maiores Lorem ipsum dolor sit amet. <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nostrum! soluta  repellat molestias.</p>
                <p className='w-32 p-2 text-white font-poppins rounded-md hover:bg-white font-bold mt-5  transition border border-primary hover:text-primary text-center bg-primary'>Shop now</p>

    </div>
</div>
    {/* service part  */}
    <div className='container flex items-center justify-center gap-8 p-16 '>
      
       <div className='border flex  border-primary py-3 px-6 gap-4 rounded-md'>
           <div className=''>
               <BsTruck className='text-primary text-5xl'/>
           </div>
           <div>
            <p className='font-semibold text-lg text-secondary '>Free deleviary</p>
            <p className='text-sm '>Let your products for</p>
           </div>
       </div>
       <div className='border flex  border-primary py-3 px-6 gap-4 rounded-md'>
           <div className=''>
               <BsCurrencyDollar className='text-primary text-5xl'/>
           </div>
           <div>
            <p className='font-semibold text-lg text-secondary '>Meony back</p>
            <p className='text-sm '>Let your products for</p>
           </div>
       </div>
       <div className='border flex  border-primary py-3 px-6 gap-4 rounded-md'>
           <div className=''>
               <BsFillClockFill className='text-primary text-5xl'/>
           </div>
           <div>
            <p className='font-semibold text-lg text-secondary '>24/7 support</p>
            <p className='text-sm '>Let your products for</p>
           </div>
       </div>

    </div>


    {/* shop by cataroy  */}


    <div className='container '> 
        <p className='font-semibold text-2xl py-8'>SHOP BY CATAGROYS</p>
        
        <div className="grid grid-cols-3 gap-3">

  
             <div className='relative rounded-sm overflow-hidden group'>
                 <img src="https://media.istockphoto.com/id/1264323513/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=jYMbmLtLDOezPThalkXCfrKjbgkYHpQX2oY3-vjPhVI=" alt="" />
                    <div className='absolute inset-0 flex items-center justify-center text-white text-xl bg-black hover:bg-opacity-60  transition bg-opacity-40'>Badroom</div>
              </div>
 
  
             <div className='relative rounded-sm overflow-hidden group'>
                 <img src="https://media.istockphoto.com/id/1264323513/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=jYMbmLtLDOezPThalkXCfrKjbgkYHpQX2oY3-vjPhVI=" alt="" />
                    <div className='absolute inset-0 flex items-center justify-center text-white text-xl bg-black hover:bg-opacity-60  transition bg-opacity-40'>Badroom</div>
              </div>
 
  
             <div className='relative rounded-sm overflow-hidden group'>
                 <img src="https://media.istockphoto.com/id/1264323513/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=jYMbmLtLDOezPThalkXCfrKjbgkYHpQX2oY3-vjPhVI=" alt="" />
                    <div className='absolute inset-0 flex items-center justify-center text-white text-xl bg-black hover:bg-opacity-60  transition bg-opacity-40'>Badroom</div>
              </div>
 
  
             <div className='relative rounded-sm overflow-hidden group'>
                 <img src="https://media.istockphoto.com/id/1264323513/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=jYMbmLtLDOezPThalkXCfrKjbgkYHpQX2oY3-vjPhVI=" alt="" />
                    <div className='absolute inset-0 flex items-center justify-center text-white text-xl bg-black hover:bg-opacity-60  transition bg-opacity-40'>Badroom</div>
              </div>
 
  
             <div className='relative rounded-sm overflow-hidden group'>
                 <img src="https://media.istockphoto.com/id/1264323513/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=jYMbmLtLDOezPThalkXCfrKjbgkYHpQX2oY3-vjPhVI=" alt="" />
                    <div className='absolute inset-0 flex items-center justify-center text-white text-xl bg-black hover:bg-opacity-60  transition bg-opacity-40'>Badroom</div>
              </div>
 
  
             <div className='relative rounded-sm overflow-hidden group'>
                 <img src="https://media.istockphoto.com/id/1264323513/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=jYMbmLtLDOezPThalkXCfrKjbgkYHpQX2oY3-vjPhVI=" alt="" />
                    <div className='absolute inset-0 flex items-center justify-center text-white text-xl bg-black hover:bg-opacity-60  transition bg-opacity-40'>Badroom</div>
              </div>
 

        </div>


    </div>


{/* new aribale  */}
 <div className='container'>

   <p  className='font-semibold text-2xl py-8'>New Ariveal</p>

         <div className="grid grid-cols-4 gap-5">

                   <div className='card rounded-md overflow-hidden'>
                           <div className="card-header relative group">
                              <img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2022-05/sdc-201-sofa-cum-bed.jpg" alt="" />
                               <div className="icon absolute opacity-0 text-white gap-2 group-hover:opacity-100 bg-opacity-40  transition bg-black inset-0 flex items-center justify-center">
                                  <Link to={`/${1}`}>
                                     <BsSearchHeart className='h-6 w-6 rounded-full p-1 hover:bg-white hover:text-primary transition   bg-primary'/>
                                  </Link>
                                  
                                     <BsFillSuitHeartFill  className='h-6 w-6 rounded-full p-1  hover:bg-white hover:text-primary transition  bg-primary' />
                               </div>
                           </div>
                           <div className="card-footer border">
                               <p className='px-4 text-lg font-semibold hover:text-primary transition cursor-pointer'>Badroom</p>
                               <p className='px-4 text-primary font-semibold'>4500 tk<span className='ml-1 text-secondary line-through text-sm font-semibold '> 6500 tk</span></p>
                               <p className='text-secondary font-semibold px-4 flex items-center gap-1'>
                                <BsStarFill className='text-yellow-300' />
                                <BsStarFill className='text-yellow-300' />
                                <BsStarFill className='text-yellow-300' />
                                <BsStar className='text-yellow-300' />
                                 (4)</p>
                               <button className='border border-primary py-1 w-full text-primary hover:bg-primary hover:text-white transition font-semibold mt-2'>Add to Cart</button>
                           </div>

                   </div>
 
   

                   <div className='card rounded-md overflow-hidden'>
                           <div className="card-header relative group">
                              <img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2022-05/sdc-201-sofa-cum-bed.jpg" alt="" />
                               <div className="icon absolute opacity-0 text-white gap-2 group-hover:opacity-100 bg-opacity-40  transition bg-black inset-0 flex items-center justify-center">
                               <Link to={`/${2}`}>
                                     <BsSearchHeart className='h-6 w-6 rounded-full p-1 hover:bg-white hover:text-primary transition   bg-primary'/>
                                  </Link>                                     <BsFillSuitHeartFill  className='h-6 w-6 rounded-full p-1  hover:bg-white hover:text-primary transition  bg-primary' />
                               </div>
                           </div>
                           <div className="card-footer border">
                               <p className='px-4 text-lg font-semibold hover:text-primary transition cursor-pointer'>Badroom</p>
                               <p className='px-4 text-primary font-semibold'>4500 tk<span className='ml-1 text-secondary line-through text-sm font-semibold '> 6500 tk</span></p>
                               <p className='text-secondary font-semibold px-4 flex items-center gap-1'>
                                <BsStarFill className='text-yellow-300' />
                                <BsStarFill className='text-yellow-300' />
                                <BsStarFill className='text-yellow-300' />
                                <BsStar className='text-yellow-300' />
                                 (4)</p>
                               <button className='border border-primary py-1 w-full text-primary hover:bg-primary hover:text-white transition font-semibold mt-2'>Add to Cart</button>
                           </div>

                   </div>
 
   

                   <div className='card rounded-md overflow-hidden'>
                           <div className="card-header relative group">
                              <img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2022-05/sdc-201-sofa-cum-bed.jpg" alt="" />
                               <div className="icon absolute opacity-0 text-white gap-2 group-hover:opacity-100 bg-opacity-40  transition bg-black inset-0 flex items-center justify-center">
                               <Link to={`/${3}`}>
                                     <BsSearchHeart className='h-6 w-6 rounded-full p-1 hover:bg-white hover:text-primary transition   bg-primary'/>
                                  </Link>                                     <BsFillSuitHeartFill  className='h-6 w-6 rounded-full p-1  hover:bg-white hover:text-primary transition  bg-primary' />
                               </div>
                           </div>
                           <div className="card-footer border">
                               <p className='px-4 text-lg font-semibold hover:text-primary transition cursor-pointer'>Badroom</p>
                               <p className='px-4 text-primary font-semibold'>4500 tk<span className='ml-1 text-secondary line-through text-sm font-semibold '> 6500 tk</span></p>
                               <p className='text-secondary font-semibold px-4 flex items-center gap-1'>
                                <BsStarFill className='text-yellow-300' />
                                <BsStarFill className='text-yellow-300' />
                                <BsStarFill className='text-yellow-300' />
                                <BsStar className='text-yellow-300' />
                                 (4)</p>
                               <button className='border border-primary py-1 w-full text-primary hover:bg-primary hover:text-white transition font-semibold mt-2'>Add to Cart</button>
                           </div>

                   </div>
 
   

                   <div className='card rounded-md overflow-hidden'>
                           <div className="card-header relative group">
                              <img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2022-05/sdc-201-sofa-cum-bed.jpg" alt="" />
                               <div className="icon absolute opacity-0 text-white gap-2 group-hover:opacity-100 bg-opacity-40  transition bg-black inset-0 flex items-center justify-center">
                               <Link to={`/${4}`}>
                                     <BsSearchHeart className='h-6 w-6 rounded-full p-1 hover:bg-white hover:text-primary transition   bg-primary'/>
                                  </Link>                                     <BsFillSuitHeartFill  className='h-6 w-6 rounded-full p-1  hover:bg-white hover:text-primary transition  bg-primary' />
                               </div>
                           </div>
                           <div className="card-footer border">
                               <p className='px-4 text-lg font-semibold hover:text-primary transition cursor-pointer'>Badroom</p>
                               <p className='px-4 text-primary font-semibold'>4500 tk<span className='ml-1 text-secondary line-through text-sm font-semibold '> 6500 tk</span></p>
                               <p className='text-secondary font-semibold px-4 flex items-center gap-1'>
                                <BsStarFill className='text-yellow-300' />
                                <BsStarFill className='text-yellow-300' />
                                <BsStarFill className='text-yellow-300' />
                                <BsStar className='text-yellow-300' />
                                 (4)</p>
                               <button className='border border-primary py-1 w-full text-primary hover:bg-primary hover:text-white transition font-semibold mt-2'>Add to Cart</button>
                           </div>

                   </div>
 
   
   
   
  

         </div>
    
       
 </div>



    </>
  )
}

export default Home