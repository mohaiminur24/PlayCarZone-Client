import React from 'react';

const LoadingData = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="h-12 w-12 border-4 border-main border-dashed rounded-full animate-spin"></div>
      <h2 className="text-xl text-gray-800 font-semibold mt-4 animate-pulse">Loading...</h2>
      <p className="text-gray-500 mt-2">Please wait while we prepare something amazing for you!</p>
    </div>
    );
};

export default LoadingData;