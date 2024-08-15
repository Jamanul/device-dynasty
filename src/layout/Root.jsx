import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Root = () => {
    return (
        <div className='font-roboto'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;