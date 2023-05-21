import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LoadingData from '../LoadingData';
import Subcatagorydata from './Subcatagorydata';

const Subcatagorysection = () => {
    const [toys, setToys] = useState(null);

    useEffect(()=>{
        fetch("https://playcarzone-server.vercel.app/alltoys").then(res=> res.json())
        .then(data=> setToys(data));
    },[])

    if(!toys){
        return <LoadingData/>
    };

    const sportcar = toys.filter(toy => toy.catagory == "sportcar");
    const truck = toys.filter(toy => toy.catagory == "truck");
    const regularcar = toys.filter(toy => toy.catagory == "regularcar");
    const minifirecar = toys.filter(toy => toy.catagory == "minifirecar");
    const minipolicecar = toys.filter(toy => toy.catagory == "minipolicecar");


    return (
        <div className='my-32'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-main mb-2'>Toy Sub Catagory</h1>
                <p className='text-sm text-secound opacity-50'>For a comprehensive list of all Wikipedia toy articles, see Category:Toys and its subcategories. This article is a list of toys, toy sets, and toy systems</p>
            </div>

            <div className='w-full p-5 my-5 font-para'>
                <Tabs>
                    <TabList>
                    <span className='font-bold'>
                        <Tab>Sport Car</Tab>
                        <Tab>Regular Car</Tab>
                        <Tab>Truck</Tab>
                        <Tab>Mini fire truck</Tab>
                        <Tab>Mini Police Car</Tab>
                    </span>
                    </TabList>

                    {/* sport car catagory data is here */}
                    <TabPanel>
                        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                            {sportcar && sportcar.map(toy=> <Subcatagorydata key={toy._id} data={toy}/>)}
                        </div>
                    </TabPanel>

                    {/* regular car catagory data is here */}
                    <TabPanel>
                        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                            {regularcar && regularcar.map(toy=> <Subcatagorydata key={toy._id} data={toy}/>)}
                        </div>
                    </TabPanel>

                    {/* truck catagory data is here */}
                    <TabPanel>
                        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                            {truck && truck.map(toy=> <Subcatagorydata key={toy._id} data={toy}/>)}
                        </div>
                    </TabPanel>

                    {/* mini fire truck catagory data is here */}
                    <TabPanel>
                        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                            {minifirecar && minifirecar.map(toy=> <Subcatagorydata key={toy._id} data={toy}/>)}
                        </div>
                    </TabPanel>

                    {/* mini police car catagory data is here */}
                    <TabPanel>
                        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                            {minipolicecar && minipolicecar.map(toy=> <Subcatagorydata key={toy._id} data={toy}/>)}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Subcatagorysection;