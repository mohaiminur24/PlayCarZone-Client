import React, { useEffect, useState } from 'react';
import { Swiper,SwiperSlide } from 'swiper/react';
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css';
import {Pagination, Mousewheel, Keyboard,Autoplay,EffectFade } from "swiper";
import 'swiper/css/effect-fade';
import { Rating } from '@smastrom/react-rating';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Discountsection = () => {
    const [discounttoy, setDiscounttoy] = useState([]);

    useEffect(()=>{
        fetch('https://playcarzone-server.vercel.app/discounttoy').then(res=>res.json())
        .then(data=> setDiscounttoy(data));
    },[]);

    return (
        <div className='my-20'>
            <div className='text-center my-20 space-y-2'>
                <h1 className='text-4xl text-main font-header font-bold'>Discount Offers</h1>
                <p className='w-3/5 mx-auto text-sm text-secound opacity-70'>From cuddly companions to action-packed heroes, our Toys Gallery is a gateway to endless playtime possibilities.Let your imagination run wild as you explore a universe of dolls, cars, puzzles, and everything in between.</p>
            </div>

            <div>
            <Swiper
            spaceBetween={50}
            slidesPerView={1 }
            onSlideChange={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
            effect='fade'
            
            modules={[Pagination, Mousewheel, Keyboard,Autoplay,EffectFade]}
            className="mySwiper my-5"
            >
                {
                    discounttoy && discounttoy.map(toy=>{
                        return(
                            <SwiperSlide>
                                <div data-aos="fade-left" data-aos-delay="100" className='bg-white border grid-cols-1 font-header grid md:grid-cols-3 gap-3 justify-between items-center border-[gray] border-opacity-25 h-auto relative'>
                                    <img className='absolute top-0 left-0 w-32' src="https://cdn3d.iconscout.com/3d/premium/thumb/discount-badge-6351596-5229714.png" alt="" />
                                    <img className='absolute w-72 hidden md:block bottom-0 right-2' src="https://intec.edu.my/wp-content/uploads/2021/06/3779577.png" alt="" />
                                    <img className='p-10 w-full h-96' src={toy?.thumbnail} alt=""/>
                                    <div className='col-span-2 p-3'>
                                        <h1 className='text-lg text-main font-para font-bold'>{toy.name }</h1>
                                        <p className='text-sm text-[gray] my-2'>{toy?.description}</p>
                                        <h2><span>Price: </span><del className='ml-2 text-[gray]'>{toy?.price}</del><span className='ml-3 text-button font-bold'>${((toy?.price)-5).toFixed(2)}</span></h2>
                                        <h3><span>Seller Name: </span><span>{toy?.sellername}</span></h3>
                                        <h1 className='text-sm flex items-center gap-2'>
                                        <span>Rating:</span>
                                            <Rating
                                            style={{ maxWidth: 80 }}
                                            value={toy?.rating}
                                            readOnly={true}
                                            />
                                        {toy?.rating}</h1>

                                        <NavLink to={`/toydetails/${toy._id}`}><button className='text-sm underline text-main'>Click here for more details</button></NavLink>
                                    </div>
                                    
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            </div>
            
        </div>
    );
};

export default Discountsection;