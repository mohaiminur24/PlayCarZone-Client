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
    console.log(data);
    const {} = data;
    return (
        <div>
            
        </div>
    );
};

export default UpdateToys;