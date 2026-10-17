import React from 'react'
import SubHeading from './SubHeading'
import Image from './Image'
import Flex from './Flex'

const RatingCard = ({image,title,des}) => {
  return (
       <Flex className="gap-x-5">
            <div>
                <Image src={image}/>
                
            </div>
            <div>
                <h2 className="text-[30px] text-secondary font-bold font-inter">{title}</h2>
                <SubHeading className="text-[#495E6C]!" text={des}/>
            </div>
        </Flex>
  )
}

export default RatingCard