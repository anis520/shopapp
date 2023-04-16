import lodingbar from '../../img/loadinglogo3.gif' 
const Loading = () => {

 



  return (
    <>
 
        <div className=" bg-white absolute  inset-0 z-50 h-screen w-screen flex items-center justify-center     ">

           <img src={lodingbar} className='w-6/12 h-3/6 object-cover' alt="" />
        </div>
 
    </>
  );
};

export default Loading;
