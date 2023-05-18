import React from 'react';
import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";

const Footer = () => {
    return (
        <div className='bg-base-200 bg-opacity-30'>
            <footer className="footer p-10 text-base-content">
                <div>
                    <div className="flex justify-center items-center gap-2">
                    <img className="w-10" src="https://images.freeimages.com/fic/images/icons/2018/business_icons_for/256/car_repair.png" alt="" />
                    <h1 className="font-header font-bold text-lg">PlayCar<span className="text-button">Zone</span></h1>
                </div>
                <p>PlayCarZone.com<br/>Level-4, 34, Awal Centre, Banani, Dhaka <br /> Support: web@programming-hero.com</p>
                </div> 
                <div>
                    <span className="footer-title">Services</span> 
                    <a className="link link-hover">Branding</a> 
                    <a className="link link-hover">Design</a> 
                    <a className="link link-hover">Marketing</a> 
                    <a className="link link-hover">Advertisement</a>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                    <a className="link link-hover">Jobs</a> 
                    <a className="link link-hover">Press kit</a>
                </div> 
                <div>
                <span className="footer-title">Newsletter</span>
                <div className='flex gap-3 text-lg'>
                    <div className='p-3 border rounded-xl'><FiFacebook/></div>
                    <div className='p-3 border rounded-xl'><FiLinkedin/></div>
                    <div className='p-3 border rounded-xl'><FiYoutube/></div>
                </div> 
                <div className="form-control w-80">
                <label className="label">
                    <span className="label-text">Enter your email address</span>
                </label> 
                <div className=" w-3/4 flex flex-col gap-2 sm:gap-0 sm:flex-row justify-center items-center">
                    <input type="text" placeholder="username@site.com" className="outline-none w-4/5 px-3 py-2 border border-secound border-opacity-30 rounded-md sm:rounded-r-none"/> 
                    <button className="bg-button h-full px-3 text-white  tracking-wide font-bold hover:bg-buttonhover sm:rounded-l-none py-2 border border-secound border-opacity-30 rounded-md">Subscribe</button>
                </div>
                </div>
            </div>
            </footer>
            <h1 className='text-center text-sm pb-5 mx-5'>All Right reserved by <a className='font-para font-semibold underline text-main' href="https://www.linkedin.com/in/font-end-website-developer/">MD MohaiMinur rahman mukta</a></h1>
        </div>
    );
};

export default Footer;