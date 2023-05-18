import React, { useContext } from 'react';
import { AuthContext } from '../AuthConfigrationLayout/AuthConfigration';
import Swal from 'sweetalert2';

const AddNewToy = () => {
    const {user} = useContext(AuthContext);

    const addnewtoy = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const thumbnail = form.thumbnail.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const catagory = form.catagory.value;
        const quantity = form.quantity.value;
        const sellername = form.sellername.value;
        const selleremail = user.email; 
        const object = {name,price,thumbnail,description,rating,catagory,quantity,sellername,selleremail};

        fetch("http://localhost:5000/inserttoy",{
                method: "POST",
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(object)
        }).then(res=> res.json()).then(data=>{
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'success...',
                    text: 'Your New Toy add successfully!',
                  })
                  form.reset();
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })
            }
        })
    };

    return (
        <div className='my-10 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5'>
            <img className='w-4/5 mx-auto' src="https://www.clipartmax.com/png/full/231-2316780_free-pick-up-toys-clipart-download-free-clip-art-free-clean-car.png" alt="" />
            <div className='p-10 shadow-md rounded-md'>
                <form onSubmit={addnewtoy}>
                    <h1 className='text-3xl font-bold font-header text-main mb-5'>Add New Toy</h1>
                    <div className='flex flex-col sm:flex-row gap-5'>
                        <div className='w-full'>
                            <label className='text-sm font-semibold' htmlFor="Name">Name</label>
                            <input className='border rounded-md my-2 outline-none text-secound border-secound border-opacity-30 px-3 py-2 text-sm w-full block' type="text" placeholder='Toy Name' name="name" id="name" />
                        </div>
                        <div className='w-full'>
                            <label className='text-sm font-semibold' htmlFor="Name">Price</label>
                            <input className='border rounded-md my-2 outline-none text-secound border-secound border-opacity-30 px-3 py-2 text-sm w-full block' type="text" placeholder='Regular Price' name="price" id="price" />
                        </div>
                    </div>
                    <div className='w-full'>
                            <label className='text-sm font-semibold' htmlFor="Name">Thumbanail URL</label>
                            <input className='border rounded-md my-2 outline-none text-secound border-secound border-opacity-30 px-3 py-2 text-sm w-full block' type="text" placeholder='Photo URL' name="thumbnail" id="thumbnail" />
                    </div>
                    <div className='w-full'>
                            <label className='text-sm font-semibold' htmlFor="Name">Seller Name</label>
                            <input className='border rounded-md my-2 outline-none text-secound border-secound border-opacity-30 px-3 py-2 text-sm w-full block' type="text" placeholder='Enter Seller Name' defaultValue={user?.displayName} name="sellername" id="sellername" />
                    </div>
                    <div className='w-full'>
                            <label className='text-sm font-semibold' htmlFor="Name">Description</label>
                            
                            <textarea className='border rounded-md my-2 outline-none text-secound border-secound border-opacity-30 px-3 py-2 text-sm w-full block' name="description" id="description" cols="30" rows="5" placeholder='Toy Description'></textarea>
                    </div>

                    <div className='mt-5 space-y-3'>
                        <div className='flex justify-start items-center'>
                            <label className='text-sm font-semibold mr-2' htmlFor="catagory">Rating</label>
                            <input className='border w-3/5 rounded-md my-2 outline-none text-secound border-secound border-opacity-30 px-3 py-2 text-sm' type="text" defaultValue={((Math.random()*3)+2).toFixed(2)} name="rating" id="rating" />
                        </div>
                        <div>
                            <label className='text-sm font-semibold mr-2' htmlFor="catagory">Toy catagory</label>
                            <select className='border-b p-1 text-sm border-secound border-opacity-10 outline-none' name="catagory" id="catagory">
                                <option value="sportcar">Sport Car</option>
                                <option value="truck">Truck</option>
                                <option value="regularcar">Regular Car</option>
                                <option value="minifirecar">Mini Fire Truck</option>
                                <option value="minipolicecar">Mini Police Car</option>
                            </select>
                        </div>
                        <div>
                            <label className='text-sm font-semibold mr-2' htmlFor="catagory">Quantity</label>
                            <select className='border rounded-md p-1 text-sm border-secound border-opacity-10 outline-none' name="quantity" id="quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        
                    </div>
                    <input className='w-full py-2 bg-button mt-5 hover:bg-buttonhover rounded-md font-bold text-white' type="submit" value="Add New Toy" />

                </form>

            </div>
        </div>
    );
};

export default AddNewToy;