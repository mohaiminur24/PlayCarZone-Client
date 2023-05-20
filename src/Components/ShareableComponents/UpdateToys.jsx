import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingData from './LoadingData';

const UpdateToys = () => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    useEffect(()=>{
        fetch(`http://localhost:5000/singletoydeatils/${id}`).then(res=> res.json())
        .then(data=> setData(data));
    },[])

    if(!data){
        return <LoadingData/>;
    };

    const {price,quantity,description} = data;
    return (
        <div>
            <h1 className='font-header text-2xl font-bold text-main'>Update your Toy Detatils</h1>

            
            
        </div>
    );
};

export default UpdateToys;