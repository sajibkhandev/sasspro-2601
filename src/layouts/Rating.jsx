import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Flex from "../components/Flex";
import { FaStar } from "react-icons/fa6";
import Image from "../components/Image";
import RatingOne from "../assets/retingicon1.png";
import SubHeading from "../components/SubHeading";
import RatingCard from "../components/RatingCard";

const Rating = () => {
  return (
    <section>
      <Container>
        <div className="my-15 bg-offwhite p-12.5 rounded-lg shadow-janina">
          <Flex className=" justify-between items-center border-b border-[rgba(17,47,66,0.1)] pb-10 mb-10">
            <div>
              <p className="text-sm text-secondary font-bold font-inter">
                Who we are?
              </p>
              <Heading
                className="w-[750px] pt-4"
                text="More than 5,000 users around the world are already using STDEV actively"
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-y-1 w-[177px] h-[186px] bg-[#CFDDDB] rounded-md">
              <h1 className="text-[50px] leading-[48px] text-third font-inter font-bold">
                4.8
              </h1>
              <ul className="flex">
                <li>
                  <FaStar className="text-[#FF7282] text-sm" />
                </li>
                <li>
                  <FaStar className="text-[#FF7282] text-sm" />
                </li>
                <li>
                  <FaStar className="text-[#FF7282] text-sm" />
                </li>
                <li>
                  <FaStar className="text-[#FF7282] text-sm" />
                </li>
                <li>
                  <FaStar className="text-[#FF7282] text-sm" />
                </li>
              </ul>
              <p className="text-base text-[#495E6C] font-inter font-normal">
                35 Reviews
              </p>
            </div>
          </Flex>
          <Flex className="justify-between">
            <RatingCard image={RatingOne} title="70+" des="Professionals" />
            <RatingCard image={RatingOne} title="70+" des="Professionals" />
            <RatingCard image={RatingOne} title="70+" des="Professionals" />
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Rating;
