import React from 'react'
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Topsroall/Topsroall';
import Loading from '../Loading/Loading';
import { useSelector } from 'react-redux';

const Layouts = () => {
  const { loader } = useSelector((state) => state.shop);

  return (
     <div className=' w-full  min-h-screen'> 

    {loader && 
    <Loading/>
    } 

    <Header />
    <Navbar />

 
    <Outlet/>
 

      
 
    <Footer />


    </div>
 

  )
}
export default Layouts;