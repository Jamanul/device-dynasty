import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
       <div>
         <div className='font-roboto max-w-7xl mx-auto'>
            <Navbar/>
            <Outlet/>
        </div>
        <Footer/>
        <ToastContainer />
       </div>
    );
};

export default Root;