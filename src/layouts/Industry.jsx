import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import IndustryCard from "../components/IndustryCard";
import Flex from "../components/Flex";
import IndustryImageOne from '../assets/industryimage1.png'
import IndustryImageTwo from '../assets/industryimage2.png'

const Industry = () => {
  return (
    <section className="pb-30 mt-30">
      <Container>
        <Heading className="text-center" text="Industries in focus" />
        <Flex className="justify-between flex-wrap gap-y-7.5 mt-10">
          <IndustryCard image={IndustryImageOne} title="Janina" text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iusto nesciunt praesentium animi consequatur accusantium magnam eos "/>
          <IndustryCard image={IndustryImageTwo} title="Janina" text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iusto nesciunt praesentium animi consequatur accusantium magnam eos "/>
          <IndustryCard image={IndustryImageOne} title="Janina" text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iusto nesciunt praesentium animi consequatur accusantium magnam eos "/>
          <IndustryCard image={IndustryImageTwo} title="Janina" text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iusto nesciunt praesentium animi consequatur accusantium magnam eos "/>
          <IndustryCard image={IndustryImageOne} title="Janina" text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iusto nesciunt praesentium animi consequatur accusantium magnam eos "/>
          <IndustryCard image={IndustryImageTwo} title="Janina" text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iusto nesciunt praesentium animi consequatur accusantium magnam eos "/>
        </Flex>
      </Container>
    </section>
  );
};

export default Industry;
