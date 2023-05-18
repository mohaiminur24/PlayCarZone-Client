import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingData from '../LoadingData';

const ToysDetails = () => {
    const [toydetails, setToyDeatils] = useState(null);
    const {id} = useParams();

    if(id){
        useEffect(()=>{
            fetch(`http://localhost:5000/singletoydeatils/${id}`).then(res=> res.json())
            .then(data=>{
                setToyDeatils(data);
            });
        },[]);
    };

    if(!toydetails){
        return <LoadingData/>
    };

    const {catagory,description,name,price,quantity,rating,selleremail,sellername,thumbnail} = toydetails;


    return (
        <div className='grid md:grid-cols-2 grid-cols-1 my-20 font-para'>
            <img className='p-5 w-11/12 h-96 mx-auto' src={thumbnail} alt="" />
            <div>
                <h1 className='text-4xl font-bold text-main mb-3'>{name}</h1>
                <h2><span className='text-main font-semibold'>Seller Email: </span><span className='text-sm ml-2'>{selleremail}</span></h2>
                <h2><span className='text-main font-semibold'>Seller: </span><span className='text-sm ml-2'>{sellername}</span></h2>
                <h2><span className='text-main font-semibold'>Catagory:</span><span className='text-sm ml-2'>{catagory}</span></h2>
                <h2><span className='text-main font-semibold'>Rating:</span><span className='text-sm ml-2'>{rating}</span></h2>
                <h2><span className='text-main font-semibold'>Quantity: </span><span className='text-sm ml-2'>{quantity}</span></h2>
                <h2><span className='text-main font-semibold'>Price: </span><span className='text-sm ml-2'>{price}</span></h2>
                <p className='text-sm mt-2'>{description}</p>
                <button className='px-5 py-2 rounded-md bg-button mt-3 font-bold text-white hover:bg-buttonhover'>Add to Cart</button>

            </div>
        </div>
    );
};

export default ToysDetails;