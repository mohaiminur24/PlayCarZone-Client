import React from 'react';
import NavbarLayout from './Components/ShareableComponents/NavbarLayout';
import { Outlet } from 'react-router-dom';
import Footer from './Components/ShareableComponents/Footer';

const MainLayout = () => {

    return (
        <div>
            <NavbarLayout/>
            <div className='w-11/12 min-h-[calc(100vh-300px)] mx-auto'><Outlet/></div>
            <Footer/>
        </div>
    );
};

export default MainLayout;