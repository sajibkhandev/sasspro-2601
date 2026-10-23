import React from 'react'
import { FaCheck } from 'react-icons/fa6'

const PricingItemList = ({text}) => {
  return (
    <li className='text-base text-[#495E6C] font-normal font-inter'><FaCheck className='inline-block text-secondary mr-4'/>{text}</li>
  )
}

export default PricingItemList