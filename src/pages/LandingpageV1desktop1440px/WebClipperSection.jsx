import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function WebClipperSection() {
  return (
    <>
      {/* web clipper section */}
      <div>
        <div className="flex items-center bg-indigo-900 px-8 py-[140px] md:flex-col md:py-5 sm:p-5">
          <div className="flex w-full flex-col items-start gap-[60px] sm:gap-[30px]">
            <div className="relative h-[176px] content-end self-stretch md:h-auto">
              <Img
                src="images/img_element_amber_200.svg"
                alt="Feature Image"
                className="mb-[50px] h-[18px] w-[60%] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-[18px]">
                <Heading as="h2" className="text-[72px] font-bold tracking-[-1.44px] text-white-a700 md:text-[48px]">
                  Use as Extension
                </Heading>
                <Text
                  as="p"
                  className="w-[86%] text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-white-a700 md:w-full"
                >
                  Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots
                  as notes.
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
              className="min-w-[176px] gap-2.5 rounded-lg px-[34px] font-montserrat font-medium sm:px-5"
            >
              Let’s Go
            </Button>
          </div>
          <div className="h-[478px] w-full bg-primary-100 md:px-5" />
        </div>
      </div>
    </>
  );
}
