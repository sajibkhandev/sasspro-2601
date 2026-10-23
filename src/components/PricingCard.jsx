import React from 'react'
import { FaCheck } from "react-icons/fa6";
import PricingItemList from './PricingItemList';
import Button from './Button';


const PricingCard = ({title,price,plan,feature1,feature2, feature3,feature4}) => {
  return (
    <div className='w-[366px] bg-[#F3F3F3] rounded-md px-[30px] pt-[50px] pb-10'>

        <h3 className='text-[22px] text-third font-inter font-bold'>{title}</h3>
        <h2 className='pt-1.5 pb-9 border-b border-[rgba(44,131,187,0.25)] text-5xl text-third font-bold font-inter'>{price}<span className='text-base text-[#6E8393] font-semibold '>{plan}</span></h2>
        <ul className='flex flex-col gap-y-7 py-9'>
            <PricingItemList text={feature1}/>
            <PricingItemList text={feature2}/>
            <PricingItemList text={feature3}/>
            <PricingItemList text={feature4}/>
        </ul>
        <Button text="Try for Free"/>
    </div>
  )
}

export default PricingCard