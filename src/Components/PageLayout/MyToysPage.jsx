import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthConfigrationLayout/AuthConfigration';
import LoadingData from '../ShareableComponents/LoadingData';
import Mytoysdetails from '../ShareableComponents/Mytoysdetails';
import Swal from 'sweetalert2';
import { RxCross2 } from "react-icons/rx";
import PageTitle from '../PageTitle';

const MyToysPage = () => {
    const {user} = useContext(AuthContext);
    const [mytoys, setMytoys] = useState(null);
    const [update, setupdate] = useState(null);
    const [dataloadtoggle, setdatatoggle] = useState(false);
    const [recentupdate, setRecentUpdate] = useState(null);
    const [modal, setmodal] = useState(null);
    const [sorting, setSorting] = useState('assending');


    const openmodal = ()=>{
        setmodal(true);
    };

        useEffect(()=>{
            fetch(`http://localhost:5000/mytoysdata?email=${user.email}&sorting=${sorting}`).then(res=>res.json())
            .then(data=> setMytoys(data));
        },[sorting,user,dataloadtoggle]);

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

    const updatefunction =(id)=>{
        fetch(`http://localhost:5000/singletoydeatils/${id}`).then(res=> res.json())
        .then(data=> setupdate(data));
    };

    const updateData = (event) =>{
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const object = {price,quantity,description};
        
            fetch(`http://localhost:5000/updatetoy/${update._id}`,{
                method: "POST",
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(object),
            }).then(res=> res.json())
            .then(data=>{
                if(data.modifiedCount){
                    setdatatoggle(!dataloadtoggle);
                    setRecentUpdate(update._id);
                    setmodal(false);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your update has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }else{
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Something went wrong try again!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            });
        form.reset();
    }

    return (
        <div className='my-10'>
            <PageTitle>My Toys</PageTitle>
            <div className='border-b border-secound border-opacity-10 pb-2 flex items-center justify-between'>
                <h1 className='font-para font-bold text-sm'>Total Toys: <span className='font-normal'>{mytoys.length}</span></h1>
                <div>
                    <label className='mr-5 font-para font-bold text-lg text-main' >Sorting</label>
                    <select onChange={(e)=>{setSorting(e.target.value)}} className='border px-3 py-1 text-sm border-secound border-opacity-20 rounded-md shadow-md outline-none font-header' name='sorting'>
                        <option value="assending">Ascending</option>
                        <option value="descending ">Descending </option>
                    </select>
                </div>
            </div>

        <div className='w-full overflow-x-auto'>
            <table className="table w-full">
                <tbody>
                        { mytoys && mytoys.map(toy=> <Mytoysdetails key={toy._id} updatetoy ={updatefunction} deletetoy={deletetoys} toys={toy} recentupdate={recentupdate} modal ={openmodal}/>)}
                </tbody>    
            </table>
        </div>

                {/* update toy modal is here */}
                
                <input type="checkbox" checked={modal} id="my-modal-5" className="modal-toggle"/>
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div className='flex justify-between'>
                            <h1 className='font-header'>Update Data</h1>
                            <label onClick={()=>setmodal(false)} className="p-1 shadow-md opacity-70 border rounded-md text-[red]"><RxCross2/></label>
                        </div>
                        <div className='my-5'>
                            <form onSubmit={updateData}>
                                <div className='flex gap-5 items-center'>
                                    <div className='w-full space-y-1'>
                                        <label className='text-sm font-semibold' htmlFor="price">Toy Price</label>
                                        <input className='border border-secound border-opacity-30 px-3 py-2 rounded-md w-full text-sm outline-none' defaultValue={update?.price} type="text" name="price" id="price" />
                                    </div>
                                    <div className='w-full space-y-1'>
                                        <label className='text-sm font-semibold' htmlFor="price">Quantity</label>
                                        <select className='border border-secound border-opacity-30 px-3 py-2 rounded-md w-full text-sm outline-none' name="quantity" id="quantity">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='my-2'>
                                    <label className='text-sm font-semibold' htmlFor="price">Description</label>
                                    <textarea name="description" id="description" className='w-full min-h-16 max-h-32 border border-secound border-opacity-25 rounded-md outline-none mt-1 p-2 text-sm font-para tracking-tight text-justify text-[gray]' defaultValue={update?.description} rows="5"></textarea>
                                </div>

                                <div className='w-full text-right'>
                                    <input className='px-5 py-2 bg-button rounded-md font-bold text-white hover:bg-buttonhover' type="submit" value="Update" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default MyToysPage;