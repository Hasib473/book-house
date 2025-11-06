import React from 'react';
import Navbar from '../../Components/navigationbar/Navbar';
import Footer from '../../Components/footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
        <div className='md:w-11/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        <div>
            <Footer></Footer>
            
        </div>
        </div>
    );
};

export default Root;