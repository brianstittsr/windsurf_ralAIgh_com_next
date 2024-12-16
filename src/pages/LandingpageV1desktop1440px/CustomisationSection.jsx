import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function CustomisationSection() {
  return (
    <>
      {/* customisation section */}
      <div className="mt-[140px] flex items-center justify-between gap-5 px-8 md:flex-col sm:px-5">
        <div className="h-[498px] w-[48%] bg-primary-100" />
        <div className="flex w-[46%] flex-col items-start gap-[60px] md:w-full sm:gap-[30px]">
          <div className="flex flex-col gap-[22px] self-stretch">
            <div className="relative h-[174px] content-end md:h-auto">
              <Img
                src="images/img_element_amber_200.svg"
                alt="Feature Image"
                className="mb-2.5 ml-1.5 h-[30px] w-[76%] object-contain md:ml-0"
              />
              <Heading
                as="h2"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full text-[72px] font-bold leading-[87px] tracking-[-1.44px] text-gray-900 md:text-[48px]"
              >
                Customise itto your needs
              </Heading>
            </div>
            <Text as="p" className="text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900">
              Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create
              your own scripts and plugins using the Extension API.
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
            className="min-w-[164px] gap-2.5 rounded-lg px-[34px] font-medium tracking-[-0.32px] sm:px-5"
          >
            Let’s Go
          </Button>
        </div>
      </div>
    </>
  );
}
