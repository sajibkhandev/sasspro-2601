import React, { useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import ListItem from "../components/ListItem";
import Button from "../components/Button";
import Logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navber = () => {
  let [bar,setBar]=useState(false)
  let handleBar=()=>{
    setBar(!bar)
  }
  return (
    <>
      {/* Desktop Navber */}

      <nav className="hidden lg:block bg-[#0D554C] py-5.5">
        <Container>
          <Flex className="justify-between items-center">
           <Link to="/"> <Image src={Logo} alt="Logo" /></Link>

            <Flex className="gap-x-9 items-center">
              <ul className="flex gap-x-7.5">
                <Link to="/"><ListItem type={true} text="Home" /></Link>
                
                <ListItem type={true} text="Pages" />
                <Link to="/about"> <ListItem text="About Us" /></Link>
                <Link to="/contact">  <ListItem text="Contact" /></Link>
               
                <ListItem text="Services" />
                <ListItem text="Blog" />
               
              </ul>
              <Button text="Let's talk" />
            </Flex>
          </Flex>
        </Container>
      </nav>

      {/* Mobile Navber */}
      <nav className="relative block lg:hidden bg-[#0D554C] flex justify-between items-center px-3 py-10">
        <Image src={Logo} />
        {
          bar
          ?
          <RxCross2 onClick={handleBar} className="text-offwhite text-2xl"/>
          :
          <FaBars onClick={handleBar} className="text-offwhite text-lg" />
        }
         {
        bar
        &&
         
      <ul className="w-full h-[66vh] absolute top-full left-0 z-40 flex flex-col justify-center items-center gap-y-5 bg-red-100 py-3 rounded-xl">
          <ListItem classname="text-black!" text="Home" />
          <ListItem classname="text-black!" text="Home" />
          <ListItem classname="text-black!" text="Home" />
          <ListItem classname="text-black!" text="Home" />
          <ListItem classname="text-black!" text="Home" />
          <ListItem classname="text-black!" text="Home" />
        </ul>
      }
        
      </nav>

     
    </>
  );
};

export default Navber;
