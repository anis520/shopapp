import React from 'react'
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
  return (
     <div className=''> 
    <Header />
    <Navbar />

    <Outlet/>
    <Footer />


    </div>
 

  )
}
export default Layouts;