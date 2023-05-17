import React from 'react';
import { FcGoogle } from "react-icons/fc";


const LoginWithGoogle = () => {
    return (
        <div className='mt-5 flex items-center gap-5'>
            
            <button className='px-5 py-2 border flex items-center gap-2 rounded-full border-main border-opacity-50 shadow-md text-sm focus:bg-mainyhover focus:font-bold focus:text-white'>
                <FcGoogle className='text-2xl'/>
                Continue With Google
            </button>
        </div>
    );
};

export default LoginWithGoogle;