import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <div className='text-center font-para'>
                <img className='w-32 mx-auto' src="https://assets.codepen.io/5506964/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1618365311&width=256" alt="" />
                <h1 className='text-3xl font-bold text-[red]'>{error?.status}</h1>
                <h1>{error?.statusText}</h1>
                <h1>{error?.data}</h1>
                <button className='px-5 py-2 bg-button focus:to-buttonhover rounded-md font-bold text-white mt-5'>Back to Home</button>
            </div> 
        </div>
    );
};

export default ErrorPage;