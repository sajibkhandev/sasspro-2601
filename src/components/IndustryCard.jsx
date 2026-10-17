import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'


const IndustryCard = ({image,text,title}) => {
  return (
    <div className="w-[366px] shadow-2xl">
      <div className="w-[346px] h-[220px] mx-auto mt-2.5">
        <Image src={image}/>
      </div>
      <div className="p-7.5">
        <h3 className="text-[22px] text-[#112F42] font-inter font-bold">{title}</h3>
        <SubHeading className="text-[#495E6C]! pt-5 pb-6"
          text={text}
        />
        <a className="text-base text-secondary font-inter font-semibold" href="">See More <MdKeyboardArrowRight className="inline text-xl"/></a>
      </div>
     
    </div>
  );
};

export default IndustryCard;
