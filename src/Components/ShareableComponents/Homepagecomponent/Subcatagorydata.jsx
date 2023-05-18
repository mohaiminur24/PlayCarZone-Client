import React from 'react';

const Subcatagorydata = ({data}) => {
    console.log(data);
    const {thumbnail,name,price,rating,_id} =data;
    return (
        <div className='shadow-md p-5 rounded-md font-para'>
            <img className='rounded-md w-full h-52 mb-3 shadow-sm' src={thumbnail} alt="" />
            <h1 className='font-bold text-lg'>{name}</h1>
            <h1 className='text-sm'><span>Rating:</span>{rating}</h1>
            <h2 className='text-sm'><span>Price: </span><span>${price}</span></h2>
            <button className='px-5 py-2 bg-button rounded-md font-bold text-white mt-3 hover:bg-buttonhover'>View Details</button>
        </div>
    );
};

export default Subcatagorydata;