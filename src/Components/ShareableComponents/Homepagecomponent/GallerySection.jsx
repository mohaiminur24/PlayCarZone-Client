import React, { useEffect, useState } from 'react';
import LoadingData from '../LoadingData';

const GallerySection = () => {
    const [toyimg, setToyimg] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:5000/galleryimg").then(res=>res.json())
        .then(data=>{
            setToyimg(data);
        })
    },[]);

    if(!toyimg){
        return <LoadingData/>;
    };

    return (
        <div>
            <div className='text-center my-20 space-y-2'>
                <h1 className='text-4xl text-main font-header font-bold'>Toys Gallery</h1>
                <p className='w-3/5 mx-auto text-sm text-secound opacity-70'>From cuddly companions to action-packed heroes, our Toys Gallery is a gateway to endless playtime possibilities.Let your imagination run wild as you explore a universe of dolls, cars, puzzles, and everything in between.</p>
            </div>

            <div className='grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 my-10'>
                <div>
                    <img className='shadow-md p-3 w-full h-full hover:scale-105 duration-200' src={toyimg[0]?.thumbnail} alt="" />
                </div>
                <div className='grid grid-cols-2 gap-2'>
                    <img className='shadow-md p-3 w-full h-full hover:scale-105 duration-200' src={toyimg[1]?.thumbnail} alt="" />
                    <img className='shadow-md p-3 w-full h-full hover:scale-105 duration-200' src={toyimg[2]?.thumbnail} alt="" />
                    <img className='shadow-md p-3 w-full h-full hover:scale-105 duration-200' src={toyimg[3]?.thumbnail} alt="" />
                    <img className='shadow-md p-3 w-full h-full hover:scale-105 duration-200' src={toyimg[4]?.thumbnail} alt="" />
                </div>
                <div>
                    <img className='shadow-md p-3 w-full h-full hover:scale-105 duration-200' src={toyimg[10]?.thumbnail} alt="" />
                </div>
                <div className='grid grid-cols-2 gap-2'>
                    <img className='shadow-md p-3 w-full h-full hover:scale-105 duration-200' src={toyimg[5]?.thumbnail} alt="" />
                    <img className='shadow-md p-3 w-full h-full hover:scale-105 duration-200' src={toyimg[6]?.thumbnail} alt="" />
                    <img className='shadow-md p-3 w-full h-full hover:scale-105 duration-200' src={toyimg[7]?.thumbnail} alt="" />
                    <img className='shadow-md p-3 w-full h-full hover:scale-105 duration-200' src={toyimg[8]?.thumbnail} alt="" />
                </div>
                <div>
                    <img className='shadow-md p-3 w-full h-full hover:scale-105 duration-200' src={toyimg[9]?.thumbnail} alt="" />
                </div>
                <div className='grid grid-cols-2 gap-2'>
                    <img className='shadow-md p-3 w-full h-full hover:scale-105 duration-200' src={toyimg[11]?.thumbnail} alt="" />
                    <img className='shadow-md p-3 w-full h-full hover:scale-105 duration-200' src={toyimg[12]?.thumbnail} alt="" />
                    <img className='shadow-md p-3 w-full h-full hover:scale-105 duration-200' src={toyimg[13]?.thumbnail} alt="" />
                    <img className='shadow-md p-3 w-full h-full hover:scale-105 duration-200' src={toyimg[14]?.thumbnail} alt="" />
                </div>
                
            </div>
            
        </div>
    );
};

export default GallerySection;