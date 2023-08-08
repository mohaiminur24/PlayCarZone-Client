import React, { useContext } from 'react';
import Slider from '../ShareableComponents/Homepagecomponent/Slider';
import GallerySection from '../ShareableComponents/Homepagecomponent/GallerySection';
import Subcatagorysection from '../ShareableComponents/Homepagecomponent/Subcatagorysection';
import PageTitle from '../PageTitle';
import Discountsection from '../ShareableComponents/Homepagecomponent/Discountsection';
import Contactinfo from '../ShareableComponents/Homepagecomponent/Contactinfo';
import PopularBrand from '../ShareableComponents/Homepagecomponent/PopularBrand';

const HomePage = () => {
    
    return (
        <div>
            <PageTitle>Home</PageTitle>
            <Slider/>
            <GallerySection/>
            <Subcatagorysection/>
            <Discountsection/>
            <Contactinfo/>  
            <PopularBrand/>
        </div>
    );
};

export default HomePage;