import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function CustomizationSection() {
  return (
    <>
      {/* customization section */}
      <div className="mt-[140px] flex justify-center">
        <div className="container-xl flex items-center justify-center lg:px-5 md:flex-col md:px-5">
          <div className="h-[532px] w-[48%] bg-primary-100" />
          <div className="flex flex-1 flex-col items-start gap-[60px] md:self-stretch sm:gap-[30px]">
            <div className="relative h-[288px] content-center self-stretch lg:h-auto md:h-auto">
              <Img
                src="images/img_element_amber_200.svg"
                alt="Feature Image"
                className="ml-auto mr-[30px] h-[68px] w-[88%] object-contain lg:mr-0 md:mr-0"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-end gap-[22px]">
                <Heading
                  as="h2"
                  className="w-[86%] text-[72px] font-bold leading-[87px] tracking-[-1.44px] text-gray-900 lg:w-full lg:text-[48px] md:w-full md:text-[48px]"
                >
                  Customise itto your needs
                </Heading>
                <Text
                  as="p"
                  className="w-[86%] text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900 lg:w-full lg:text-[15px] md:w-full"
                >
                  Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or
                  create your own scripts and plugins using the Extension API.
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
              className="ml-[98px] min-w-[170px] gap-2.5 rounded-lg px-[34px] font-medium tracking-[-0.36px] md:ml-0 sm:px-4"
            >
              Let’s Go
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
