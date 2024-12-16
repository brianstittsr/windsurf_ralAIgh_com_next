import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function UseAsExtensionSection() {
  return (
    <>
      {/* use as extension section */}
      <div className="mt-[140px]">
        <div className="flex justify-center bg-indigo-900 py-[140px] lg:py-8 md:py-5 sm:py-4">
          <div className="container-xl flex items-center justify-center lg:px-5 md:flex-col md:px-5">
            <div className="flex flex-1 flex-col items-start gap-[60px] md:self-stretch sm:gap-[30px]">
              <div className="flex flex-col items-start self-stretch">
                <div className="flex flex-col items-end">
                  <Heading
                    as="h2"
                    className="relative z-[1] text-[72px] font-bold tracking-[-1.44px] text-white-a700 lg:text-[48px] md:text-[48px]"
                  >
                    Use as Extension
                  </Heading>
                  <Img
                    src="images/img_element_amber_200.svg"
                    alt="Feature Image"
                    className="relative mt-[-26px] h-[48px] w-[70%] object-contain"
                  />
                </div>
                <Text
                  as="p"
                  className="w-[88%] text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-white-a700 lg:w-full lg:text-[15px] md:w-full"
                >
                  Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots
                  as notes.
                </Text>
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
                className="min-w-[170px] gap-2.5 rounded-md px-[34px] font-medium tracking-[-0.36px] sm:px-4"
              >
                Let’s Go
              </Button>
            </div>
            <div className="h-[478px] w-[46%] bg-primary-100" />
          </div>
        </div>
      </div>
    </>
  );
}
