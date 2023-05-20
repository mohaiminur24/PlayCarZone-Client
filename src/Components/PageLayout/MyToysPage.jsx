import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthConfigrationLayout/AuthConfigration';
import LoadingData from '../ShareableComponents/LoadingData';
import Mytoysdetails from '../ShareableComponents/Mytoysdetails';
import Swal from 'sweetalert2';

const MyToysPage = () => {
    const {user} = useContext(AuthContext);
    const [mytoys, setMytoys] = useState(null);

    
        useEffect(()=>{
            fetch(`http://localhost:5000/mytoysdata?email=${user.email}`).then(res=>res.json())
            .then(data=> setMytoys(data));
        },[user]);

    if(!mytoys){
        return <LoadingData/>;
    };

    const deletetoys = (id)=>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deletetoy/${id}`,{
                    method: "DELETE",
                }).then(res=> res.json())
                .then(data=>{
                    if(data.deletedCount){
                        const filter = mytoys.filter(toy=> toy._id !== id);
                        setMytoys(filter);
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          );
                    };
                });
            }
          })
        
    };

    return (
        <div className='my-10'>
        <h1 className='font-para font-bold text-sm border-b border-secound border-opacity-10 pb-2'>Total Toys: <span className='font-normal'>{mytoys.length}</span></h1>

        <div className='w-full overflow-x-auto'>
            <table className="table w-full">
                <tbody>
                        { mytoys && mytoys.map(toy=> <Mytoysdetails key={toy._id} deletetoy={deletetoys} toys={toy}/>)}
                </tbody>    
            </table>
        </div>
        </div>
    );
};

export default MyToysPage;