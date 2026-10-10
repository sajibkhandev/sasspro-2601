import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const ListItem = ({text,classname,type}) => {
  return (
      <li className={`text-base text-red-500 font-medium font-inter inline-block ${classname}`}>{text} 
      {
        type && <FaAngleDown className='inline-block ml-.5'/>
      }
      
      </li>
  )
}

export default ListItem