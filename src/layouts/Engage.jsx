import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import Button from '../components/Button'
import EngageImage from '../assets/engage.png'

const Engage = () => {
  return (
    <section className='pt-[110px] pb-[70px]'>
        <Container>
            <Flex className='items-center'>
                <div className='w-2/4'>
                <Image  src={EngageImage}/>
                </div>
                <div className='w-2/4'>
                <Heading text="Don’t just engage, make it engaging."/>
                 <SubHeading className="pt-11 text-[#495E6C]!" text="Since 1999. For millions of users. We transform businesses with powerful and adaptable digital solutions."/>
                 
                 <SubHeading className="pb-11 pt-8 text-[#495E6C]!" text="Psum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra purus imperdiet a. Ut nisl est at ultricies neque ornare tellus tellus enim."/>
                 <Button text="Read More"/>

                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Engage