import React, { useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import Button from "../components/Button";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  let [condition, setCondition] = useState(false);
 

  return (
    <section className="pt-[113px] pb-30">
      <Container>
        <Heading className={`text-center`} text="Affordable Pricing" />

        <Flex className="justify-center py-10 gap-x-6 items-center">
          <p className="text-xl text-[#333333] font-normal font-inter">
            Monthly
          </p>
          <div
            onClick={()=>setCondition(!condition)}
            className={`flex ${condition ? "justify-start" : "justify-end"} w-[90px] h-[40px] bg-[#2C83BB] rounded-full p-[5px]`}
          >
            <div className="w-7.5 h-7.5 bg-white rounded-full"></div>
          </div>
          <p className="text-xl text-[#5A7184] font-normal font-inter">
            Annualy
          </p>
        </Flex>

        {condition ? (
          <Flex className="justify-between">
            <PricingCard
              title="Free Plan"
              price="$0"
              plan="/ monthly"
              feature1="Access to editing all blocks"
              feature2="Editing blocks together"
              feature3="A dedicated domain"
              feature4="Access to all premium icons"
            />
            <PricingCard
              title="Premium Plan"
              price="$599"
              plan="/ monthly"
              feature1="Access to editing all blocks"
              feature2="Editing blocks together"
              feature3="A dedicated domain"
              feature4="Access to all premium icons"
            />
            <PricingCard
              title="Business Plan"
              price="$999"
              plan="/ monthly"
              feature1="Access to editing all blocks"
              feature2="Editing blocks together"
              feature3="A dedicated domain"
              feature4="Access to all premium icons"
            />
          </Flex>
        ) : (
          <Flex className="justify-between">
            <PricingCard
              title="Free Plan"
              price="$0"
              plan="/ year"
              feature1="Access to editing all blocks"
              feature2="Editing blocks together"
              feature3="A dedicated domain"
              feature4="Access to all premium icons"
            />
            <PricingCard
              title="Premium Plan"
              price="$450"
              plan="/ year"
              feature1="Access to editing all blocks"
              feature2="Editing blocks together"
              feature3="A dedicated domain"
              feature4="Access to all premium icons"
            />
            <PricingCard
              title="Business Plan"
              price="$850"
              plan="/ year"
              feature1="Access to editing all blocks"
              feature2="Editing blocks together"
              feature3="A dedicated domain"
              feature4="Access to all premium icons"
            />
          </Flex>
        )}
      </Container>
    </section>
  );
};

export default Pricing;
