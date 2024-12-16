import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function HeroSection1() {
  return (
    <>
      {/* hero section */}
      <div className="mt-[280px] flex justify-center">
        <div className="container-xl flex items-center justify-center lg:px-5 md:flex-col md:px-5">
          <div className="flex flex-1 flex-col items-start gap-[60px] md:self-stretch sm:gap-[30px]">
            <div className="flex flex-col gap-[22px] self-stretch">
              <div className="relative h-[174px] content-end lg:h-auto md:h-auto">
                <Img
                  src="images/img_element_amber_200.svg"
                  alt="Feature Image"
                  className="ml-[162px] h-[28px] w-[42%] object-contain lg:ml-0 md:ml-0"
                />
                <Heading
                  as="h4"
                  className="absolute bottom-0 left-0 top-0 my-auto h-max w-[88%] text-[72px] font-bold leading-[87px] tracking-[-1.44px] text-gray-900 lg:text-[48px] md:text-[48px]"
                >
                  <>
                    Customise itto <br />
                    your needs
                  </>
                </Heading>
              </div>
              <Text
                as="p"
                className="w-[88%] text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900 lg:w-full lg:text-[15px] md:w-full"
              >
                Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or
                create your own scripts and plugins using the Extension API.
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
              className="min-w-[176px] gap-2.5 rounded-md px-[34px] font-montserrat font-medium sm:px-4"
            >
              Let’s Go
            </Button>
          </div>
          <div className="h-[478px] w-[46%] bg-primary-100" />
        </div>
      </div>
    </>
  );
}
