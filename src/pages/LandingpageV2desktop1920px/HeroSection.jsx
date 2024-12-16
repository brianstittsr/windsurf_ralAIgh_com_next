import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* hero section */}
      <div className="relative mt-[50px] h-[598px]">
        <Img
          src="images/img_group_278.png"
          alt="Element"
          className="absolute bottom-[-0.27px] left-0 right-0 mx-auto h-[546px] w-full flex-1 object-cover"
        />
        <div className="container-xl absolute left-0 right-0 top-0 flex items-center justify-center lg:px-5 md:relative md:flex-col md:px-5">
          <div className="flex w-[44%] flex-col items-start gap-[60px] md:w-full sm:gap-[30px]">
            <div className="flex flex-col gap-[22px] self-stretch">
              <Heading
                size="header_h2"
                as="h1"
                className="text-[64px] font-bold leading-[77px] tracking-[-1.28px] text-blue-400 lg:text-[48px] md:text-[48px]"
              >
                Get More Done with whitepace
              </Heading>
              <Text
                as="p"
                className="text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-blue-400 lg:text-[15px]"
              >
                Project management software that enables your teams to collaborate, plan, analyze and manage everyday
                tasks
              </Text>
            </div>
            <Button
              shape="round"
              rightIcon={
                <Img
                  src="images/img_arrowleft_white_a700.svg"
                  alt="Arrow Left"
                  className="my-1.5 h-[10px] w-[10px] object-contain"
                />
              }
              className="min-w-[218px] gap-2.5 rounded-lg px-5 font-medium tracking-[-0.36px]"
            >
              Try Whitepace free
            </Button>
          </div>
          <div className="h-[548px] flex-1 bg-primary-100 md:self-stretch" />
        </div>
      </div>
    </>
  );
}
