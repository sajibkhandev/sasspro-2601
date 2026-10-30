import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import BannerImage from "../assets/banner.png";
import Button from "../components/Button";
import SubHeading from "../components/SubHeading";

const Banner = () => {
  return (
    <section className="bg-[#0D554C] pt-15 pb-10 md:pt-[160px] md:pb-[200px]">
      <Container>
        <Flex className='flex-wrap px-3 md:px-0'>
          <div className="md:w-1/2">
            <h4 className="text-center md:text-left text-lg text-offwhite font-inter font-bold">
              Business & Technologies
            </h4>
            <h2 className="text-center md:text-left pt-2.5 pb-11 md:leading-[62px] md:w-[450px] text-[30px] sm:text-4xl md:text-[52px] text-offwhite font-inter font-bold">We help tech companies deliver great software</h2>
           
            <SubHeading className="text-center md:text-left!  leading-[27px] text-base text-offwhite font-inter font-normal" text="Since 1999. For millions of users. We transform businesses with
              powerful and adaptable digital solutions that satisfy the needs of
              today and unlock the opportunities of tomorrow."/>

            <div className="relative mx-auto sm:w-[400px] md:w-[561px] rounded-md mt-11">
                <input type="text" className="rounded-md w-full py-1.5 md:py-4 pr-54 pl-2 bg-white"/>
                <Button classname="absolute top-1/2 -translate-y-1/2 right-0 px-2! py-[10px]!  md:py-4! md:px-8! text-xs! md:text-base!" text="Request for Demo"/>
            </div>




          </div>
          <div className="md:w-1/2 relative mt-10 md:mt-0">
           <div className="md:w-[740px] md:absolute -top-6 -right-[170px]">
             <Image className=" w-full " src={BannerImage} />
           </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
