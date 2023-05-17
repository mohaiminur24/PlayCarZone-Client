import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <div className='text-center font-para'>
                <img className='w-48 mx-auto mb-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCW_JOACSIQCEDYczbpfTQKCfLE77a4D5BjQ&usqp=CAU" alt="" />
                <h1 className='text-3xl font-bold text-[red]'>{error?.status}</h1>
                <h1>{error?.statusText}</h1>
                <h1>{error?.data}</h1>
                <button className='px-5 py-2 bg-button focus:to-buttonhover rounded-md font-bold text-white mt-5'>Back to Home</button>
            </div> 
        </div>
    );
};

export default ErrorPage;