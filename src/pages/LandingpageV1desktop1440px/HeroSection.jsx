import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* hero section */}
      <div className="relative mt-7 h-[484px]">
        <div className="absolute bottom-[0.31px] left-0 right-0 mx-auto h-[436px] flex-1 bg-[url(/public/images/img_group_278.png)] bg-cover bg-no-repeat px-8 md:h-auto sm:px-5">
          <div className="mb-[76px] flex flex-col items-start gap-[60px] sm:gap-[30px]">
            <div className="flex flex-col items-start gap-[22px] self-stretch">
              <Heading
                size="header_h2"
                as="h1"
                className="w-[50%] text-[64px] font-bold leading-[77px] tracking-[-1.28px] text-white-a700 md:w-full md:text-[48px]"
              >
                Get More Done with whitepace
              </Heading>
              <Text
                as="p"
                className="w-[50%] text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-white-a700 md:w-full"
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
        </div>
        <div className="absolute right-[2%] top-0 m-auto h-[456px] w-[48%] bg-primary-100" />
      </div>
    </>
  );
}
