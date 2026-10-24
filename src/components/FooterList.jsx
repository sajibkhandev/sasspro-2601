import React from 'react'

const FooterList = ({text,className}) => {
  return (
    <li className={`text-base text-[rgba(255,255,255,0.9)] font-inter font-normal ${className}`}>{text}</li>
  )
}

export default FooterList