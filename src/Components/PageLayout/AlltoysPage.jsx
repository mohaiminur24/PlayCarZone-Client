import React, { useEffect, useState } from 'react';
import LoadingData from '../ShareableComponents/LoadingData';
import SingleToy from '../ShareableComponents/Homepagecomponent/SingleToy';

const AlltoysPage = () => {
    const [toys, setToys] = useState(null);
    useEffect(()=>{
            fetch('http://localhost:5000/alltoysdata').then(res=>res.json())
            .then(data=> setToys(data));
    },[]);

    if(!toys){
        return <LoadingData/>;
    };

    return (
        <div className="overflow-x-auto w-full my-10">
            <table className="table w-full">
                <tbody>
                    {
                        toys && toys.map(toy=> <SingleToy key={toy._id} toys={toy}/>)
                    }
                </tbody>
                
            </table>
        </div>
    );
};

export default AlltoysPage;