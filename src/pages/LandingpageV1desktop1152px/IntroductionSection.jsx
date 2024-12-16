import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function IntroductionSection() {
  return (
    <>
      {/* introduction section */}
      <div className="flex items-center px-8 md:flex-col sm:px-5">
        <div className="flex flex-1 flex-col items-start gap-[60px] md:self-stretch sm:gap-[30px]">
          <div className="relative h-[166px] content-center self-stretch md:h-auto">
            <Img
              src="images/img_element_amber_200.svg"
              alt="Feature Image"
              className="ml-auto mr-[102px] h-[42px] w-[70%] object-contain md:mr-0"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-[18px]">
              <Heading
                size="header_h2"
                as="h2"
                className="text-[64px] font-bold tracking-[-1.28px] text-white-a700 md:text-[48px]"
              >
                Use as Extension
              </Heading>
              <Text
                as="p"
                className="w-[84%] text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-white-a700 md:w-full"
              >
                Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as
                notes.
              </Text>
            </div>
          </div>
          <Button
            shape="round"
            rightIcon={
              <Img
                src="images/img_arrowleft_white_a700.svg"
                alt="Arrow Left"
                className="my-1 h-[14px] w-[14px] object-contain"
              />
            }
            className="min-w-[176px] gap-2.5 rounded-md px-[34px] font-montserrat font-medium sm:px-5"
          >
            Let’s Go
          </Button>
        </div>
        <div className="h-[320px] w-[42%] bg-primary-100" />
      </div>
    </>
  );
}
