import React from 'react'
import Container from "../components/Container";
import Flex from "../components/Flex";
import SubHeading from "../components/SubHeading";
import Image from "../components/Image";
import FooterList from "../components/FooterList";
import Logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='bg-[#112F42] pt-[97px] '>
        <Container>
            <Flex>
                <div className="w-5/12">
                 <Image src={Logo}/>
                 <SubHeading className='w-[392px] pt-6.5 pb-8.5' text="Orem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst augue amet, luctus quis gravida nulla netus ut platea."/>
                 <ul className='flex gap-x-6'>
                    <li><FaFacebookF className='text-white text-lg' /></li>
                    <li><FaInstagram className='text-white text-lg'/></li>
                    <li><FaTwitter  className='text-white text-lg'/></li>
                 </ul>
                
                </div>
                <div className="w-2/12">
                <strong className='text-lg text-[rgba(255,255,255,0.9)] font-inter font-semibold'>Company</strong>
                <ul className='flex flex-col gap-y-4 pt-7'>
                    <FooterList text="About us"/>
                    <FooterList text="Services"/>
                    <FooterList text="Blog"/>
                </ul>
                    
                </div>
                <div className="w-2/12">
                <strong className='text-lg text-[rgba(255,255,255,0.9)] font-inter font-semibold'>More Links</strong>
                <ul className='flex flex-col gap-y-4 pt-7'>
                    <FooterList text="Service Details"/>
                    <FooterList text="Contact"/>
                    <FooterList text="More Links"/>
                </ul>
                    
                </div>
                <div className="w-3/12">
                <strong className='text-lg text-[rgba(255,255,255,0.9)] font-inter font-semibold'>Amsterdam Netherlands</strong>
                <ul className='flex flex-col gap-y-4 pt-7'>
                    <FooterList text="+1 62 19 22 705"/>
                    <FooterList text="7 Days - 8am - 10pm"/>
                    <FooterList text="info@stdev.com"/>
                </ul>
                    
                </div>
                
            </Flex>
        </Container>
        
        <p className='mt-18.5 border border-[rgba(255,255,255,0.08)] py-7 text-center text-base text-[rgba(255,255,255,0.9)] font-inter font-normal'>© 2021 All Rights Reserved</p>
    </footer>
  )
}

export default Footer