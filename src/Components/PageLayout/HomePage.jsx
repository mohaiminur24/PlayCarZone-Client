import React from 'react';
import Slider from '../ShareableComponents/Homepagecomponent/Slider';
import GallerySection from '../ShareableComponents/Homepagecomponent/GallerySection';
import Subcatagorysection from '../ShareableComponents/Homepagecomponent/Subcatagorysection';

const HomePage = () => {
    return (
        <div>
            <Slider/>
            <GallerySection/>
            <Subcatagorysection/>
            
        </div>
    );
};

export default HomePage;