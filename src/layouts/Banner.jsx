import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import BannerImage from "../assets/banner.png";
import Button from "../components/Button";
import SubHeading from "../components/SubHeading";

const Banner = () => {
  return (
    <section className="bg-[#0D554C] pt-[160px] pb-[200px]">
      <Container>
        <Flex>
          <div className="w-1/2">
            <h4 className="text-lg text-offwhite font-inter font-bold">
              Business & Technologies
            </h4>
            <h2 className="pt-2.5 pb-11 leading-[62px] w-[450px] text-[52px] text-offwhite font-inter font-bold">We help tech companies deliver great software</h2>
           
            <SubHeading className="leading-[27px] text-base text-offwhite font-inter font-normal" text="Since 1999. For millions of users. We transform businesses with
              powerful and adaptable digital solutions that satisfy the needs of
              today and unlock the opportunities of tomorrow."/>

            <div className="relative w-[561px] rounded-md mt-11">
                <input type="text" className="rounded-md w-full py-4 pr-54 pl-2 bg-white"/>
                <Button classname="absolute top-1/2 -translate-y-1/2 right-0 py-4! px-8!" text="Request for Demo"/>
            </div>




          </div>
          <div className="w-1/2 relative">
           <div className="w-[740px] absolute -top-6 -right-[170px]">
             <Image className=" w-full " src={BannerImage} />
           </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
