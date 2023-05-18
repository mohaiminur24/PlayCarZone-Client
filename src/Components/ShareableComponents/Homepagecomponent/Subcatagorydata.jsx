import React from 'react';
import { NavLink } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Subcatagorydata = ({data}) => {
    console.log(data);
    const {thumbnail,name,price,rating,_id} =data;
    return (
        <div className='shadow-md p-5 rounded-md font-para'>
            <img className='rounded-md w-full h-52 mb-3 shadow-sm' src={thumbnail} alt="" />
            <h1 className='font-bold text-lg'>{name}</h1>
            <h1 className='text-sm flex items-center gap-2'>
            <span>Rating:</span>
                <Rating
                style={{ maxWidth: 80 }}
                value={rating}
                readOnly={true}
                />
            {rating}</h1>
            <h2 className='text-sm'><span>Price: </span><span>${price}</span></h2>
            <NavLink to={`/toydetails/${_id}`}>
            <button className='px-5 py-2 bg-button rounded-md font-bold text-white mt-3 hover:bg-buttonhover'>View Details</button>
            </NavLink>
        </div>
    );
};

export default Subcatagorydata;