import React from 'react';
import NavbarLayout from './Components/ShareableComponents/NavbarLayout';
import { Outlet } from 'react-router-dom';
import Footer from './Components/ShareableComponents/Footer';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <NavbarLayout/>
            <div className='w-full min-h-[calc(100vh-300px)]'><Outlet/></div>
            <Footer/>
        </div>
    );
};

export default MainLayout;