import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import Flex from '../components/Flex'
import App from '../assets/app.png'
import Windows from '../assets/windows.png'
import ProductBanner from '../assets/productbanner.png'

const Product = () => {
  return (
    <section className='bg-[#F3F3F3] pt-[113px] pb-[70px]'>
        <Container>
            <Heading className="mx-auto text-center w-92" text="All product work with several devices."/>
             <SubHeading className="pt-7 mx-auto text-center w-[454px] text-[#495E6C]!" text="A great SaaS UI/UX design can make your product addictive and uncomfortable to give up."/>
            <Flex className='justify-center gap-x-5 pt-8.5 pb-13'>
                 <Image src={App}/>
                <Image src={Windows}/>

            </Flex>
            <Image src={ProductBanner}/>
        </Container>
    </section>
  )
}

export default Product