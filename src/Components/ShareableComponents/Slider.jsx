import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css';
import {Pagination, Mousewheel, Keyboard,Autoplay } from "swiper";

const Slider = () => {
    return (
        <div className='w-full h-auto'>
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={true}
            mousewheel={true}
            pagination={{
                dynamicBullets: true
              }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            
            modules={[Pagination, Mousewheel, Keyboard,Autoplay]}
            className="mySwiper shadow-sm my-5"
            >
                <SwiperSlide  className='w-full'>
                    <div className='w-11/12 mx-auto flex flex-col md:flex-row my-8 justify-center gap-5 items-center'>
                        <img className='w-1/3' src="https://png.pngtree.com/png-vector/20230423/ourmid/pngtree-car-toy-car-blue-3d-png-image_6717582.png" alt="" />
                        <div className='space-y-3 w-2/3'>
                            <h1 className='text-2xl lg:text-4xl font-bold font-header text-main'>Car toys ignite the imagination, allowing children to race and zoom</h1>
                            <p className='text-sm font-para text-secound opacity-60'>Car toys are miniature replicas of real vehicles that captivate both children and adults alike. These tiny treasures embody the thrill and fascination of automobiles, allowing imaginations to soar as they drive through imaginary cities, conquer rugged terrains, or participate in thrilling races.</p>
                            <button className='px-5 py-2 bg-button hover:bg-buttonhover font-para font-bold text-white rounded-md shadow-md'>More Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide  className='w-full'>
                    <div className='w-11/12 mx-auto flex flex-col md:flex-row my-8 justify-center gap-5 items-center'>
                        <img className='w-1/3' src="https://png.pngtree.com/png-vector/20230423/ourmid/pngtree-car-toy-car-pink-transparent-png-image_6717581.png" alt="" />
                        <div className='space-y-3 w-2/3'>
                            <h1 className='text-2xl lg:text-4xl font-bold font-header text-main'>Car toys ignite the imagination, allowing children to race and zoom</h1>
                            <p className='text-sm font-para text-secound opacity-60'>Car toys are miniature replicas of real vehicles that captivate both children and adults alike. These tiny treasures embody the thrill and fascination of automobiles, allowing imaginations to soar as they drive through imaginary cities, conquer rugged terrains, or participate in thrilling races.</p>
                            <button className='px-5 py-2 bg-button hover:bg-buttonhover font-para font-bold text-white rounded-md shadow-md'>More Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide  className='w-full'>
                    <div className='w-11/12 mx-auto flex my-8 flex-col md:flex-row justify-center gap-5 items-center'>
                        <img className='w-1/3' src="https://cdn.shopify.com/s/files/1/0602/9692/1333/files/Banner_Kid_1.png?v=1641863276" alt="" />
                        <div className='space-y-3 w-2/3'>
                            <h1 className='text-2xl lg:text-4xl font-bold font-header text-main'>Car toys ignite the imagination, allowing children to race and zoom</h1>
                            <p className='text-sm font-para text-secound opacity-60'>Car toys are miniature replicas of real vehicles that captivate both children and adults alike. These tiny treasures embody the thrill and fascination of automobiles, allowing imaginations to soar as they drive through imaginary cities, conquer rugged terrains, or participate in thrilling races.</p>
                            <button className='px-5 py-2 bg-button hover:bg-buttonhover font-para font-bold text-white rounded-md shadow-md'>More Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide  className='w-full'>
                    <div className='w-11/12 mx-auto flex flex-col md:flex-row justify-center gap-5 items-center my-8'>
                        <img className='w-1/3' src="https://brickupafrica.com/wp-content/uploads/2023/03/home-banner-img-1.png" alt="" />
                        <div className='space-y-3 w-2/3'>
                            <h1 className='text-2xl lg:text-4xl font-bold font-header text-main'>Car toys ignite the imagination, allowing children to race and zoom</h1>
                            <p className='text-sm font-para text-secound opacity-60'>Car toys are miniature replicas of real vehicles that captivate both children and adults alike. These tiny treasures embody the thrill and fascination of automobiles, allowing imaginations to soar as they drive through imaginary cities, conquer rugged terrains, or participate in thrilling races.</p>
                            <button className='px-5 py-2 bg-button hover:bg-buttonhover font-para font-bold text-white rounded-md shadow-md'>More Details</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Slider;