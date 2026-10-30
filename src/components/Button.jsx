import React from 'react'

const Button = ({text,classname}) => {
  return (
    <button className={`bg-secondary text-sm md:text-base font-inter font-medium py-2 px-6 md:py-5 md:px-12.5 text-offwhite rounded-md border border-transparent hover:bg-transparent hover:text-secondary hover:border-secondary duration-300 ${classname}`}>{text}</button>
  )
}

export default Button