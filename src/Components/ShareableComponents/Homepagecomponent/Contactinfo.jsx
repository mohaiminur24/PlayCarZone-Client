import React from 'react';
import Swal from 'sweetalert2';

const Contactinfo = () => {

    const contactus = event =>{
        event.preventDefault();
        event.target.reset();
        Swal.fire(
            'Good job!',
            'We received your message!',
            'success'
          );
    };

    return (
        <div className='my-10'>
            <div className='text-center my-10 space-y-2'>
                <h1 className='text-4xl text-main font-header font-bold'>Contact with us</h1>
                <p className='w-3/5 mx-auto text-sm text-secound opacity-70'>From cuddly companions to action-packed heroes, our Toys Gallery is a gateway to endless playtime possibilities.Let your imagination run wild as you explore a universe of dolls, cars, puzzles, and everything in between.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center'>
                <img className='w-3/5 mx-auto' src="https://msingermany.co.in/wp-content/uploads/elementor/thumbs/Contact-Us-p1z8tvpw2dx8p65b50kbxdbzbppdjx19j2mlw7nrcc.png" alt="" />
                <div className='border p-5 border-secound border-opacity-10 rounded-md'>
                    <form onSubmit={contactus}>
                        <div className='flex gap-5 sm:flex-row flex-col'>
                            <div className='w-full'>
                                <label className='font-header text-sm' htmlFor="name">Name</label>
                                <input className='border rounded-md block outline-none mt-2 w-full border-secound border-opacity-30 py-2 px-3 text-sm' type="text" placeholder='Name' name="name" id="name"/>
                            </div>
                            <div className='w-full'>
                                <label className='font-header text-sm' htmlFor="name">Email Address</label>
                                <input className='border rounded-md block outline-none mt-2 w-full border-secound border-opacity-30 py-2 px-3 text-sm' type="email" placeholder='Email Address' name="email" id="email"/>
                            </div>
                        </div>

                        <div className='my-3'>
                            <label className='font-header text-sm' htmlFor="name">Your message</label>
                            <textarea className='border outline-none w-full block border-secound border-opacity-25 rounded-md my-2 p-3 text-sm' name="message" id="message" cols="30" rows="5" placeholder='Enter your message'></textarea>
                        </div>

                        <input className='w-full py-2 bg-button rounded-md outline-none text-white tracking-tighter' type="submit" value="Send Message" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contactinfo;