import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

const SingleToy = ({toys}) => {
    const {catagory,name,price,quantity,rating,sellername,thumbnail, _id,description} = toys;
    return (
        <>
            <tr>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask w-28 h-28 shadow-md p-2 rounded-md">
                        <img src={thumbnail} />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold text-lg">{name}</div>
                    <div className="text-sm opacity-50">Seller: {sellername}</div>
                    </div>
                </div>
                </td>
                <td>
                <span className='flex gap-2 items-center'>
                    <span className='font-bold'>Rating :</span>
                    <Rating
                    style={{ maxWidth: 80 }}
                    value={rating}
                    readOnly={true}
                    />
                    <span>{rating}</span>
                </span>
                <span><span className='font-bold'>Price: </span>${price}</span><br />
                <span><span className='font-bold'>Quantity: </span>{quantity}</span><br />
                <span><span className='font-bold'>Catagory: </span>{catagory}</span>
                </td>
                
                <th>
                    
                    <label htmlFor="my-modal-5" className="px-5 mr-3 py-2 bg-main rounded-md text-white shadow-md">
                    Update
                    </label>

                    <NavLink to={`/toydetails/${_id}`}>
                        <button className="px-5 py-2 bg-button rounded-md text-white shadow-md">Details</button>
                    </NavLink>
                </th>
            </tr>


            {/* update modal section is here */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">

                <div className='flex  w-full justify-between items-center border-b py-2 border-secound border-opacity-20'>
                    <h1 className='text-lg text-main uppercase font-bold font-header'>Update This Toy</h1>
                    
                    <label htmlFor="my-modal-5" className="px-2 mr-3 py-2 bg-[gray] rounded-full text-white shadow-md"><RxCross2/></label>
                </div>

                <form className='my-5 font-para'>
                    <div className='flex gap-5'>
                        <div className='w-full mb-3'>
                            <label className='font-bold'>New Price</label>
                            <input className='border my-1 border-secound border-opacity-30 w-full px-3 py-2 text-sm rounded-md outline-none' placeholder='New Price' type="text" defaultValue={price} name="price" id="price" />
                        </div>
                        <div className='w-full'>
                            <label className='font-bold'>New Quantity</label>
                            <input className='border my-1 border-secound border-opacity-30 w-full px-3 py-2 text-sm rounded-md outline-none' placeholder='New Quantity' type="text" name="quantity" defaultValue={quantity} id="quantity" />
                        </div>
                    </div>
                    <label className='font-bold'>Toy Description</label>
                    <textarea className='border my-1 border-secound border-opacity-30 w-full px-3 py-2 text-sm rounded-md outline-none'  name="description" id="description" cols="30" rows="10" defaultValue={description} placeholder='Description'></textarea>

                    <input className='w-full mt-3 text-white outline-none py-2 font-bold bg-button hover:bg-buttonhover rounded-md shadow-md' type="submit" value="Update" />
                </form>

            </div>
            </div>
        </>
    );
};

export default SingleToy;