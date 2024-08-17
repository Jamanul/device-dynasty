import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = () => {
    return (
       <div>
         <div className='font-roboto max-w-7xl mx-auto'>
            <Navbar/>
            <Outlet/>
        </div>
        <Footer/>
       </div>
    );
};

export default Root;