import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../AuthConfigrationLayout/AuthConfigration';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const LoginWithGoogle = () => {
    const {handlegooglelogin} = useContext(AuthContext);
    const navigation = useNavigate();
    const googleLogin =()=>{
        handlegooglelogin().then(res=>{
            Swal.fire({
                icon: 'success',
                title: 'Successfully Done...',
                text: 'Login with google successfully!',
              })
              navigation('/');
        }).catch(error=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        })
    }
    return (
        <div className='mt-5 flex items-center gap-5'>
            
            <button onClick={googleLogin} className='px-5 py-2 border flex items-center gap-2 rounded-full border-main border-opacity-50 shadow-md text-sm focus:bg-mainyhover focus:font-bold focus:text-white'>
                <FcGoogle className='text-2xl'/>
                Continue With Google
            </button>
        </div>
    );
};

export default LoginWithGoogle;