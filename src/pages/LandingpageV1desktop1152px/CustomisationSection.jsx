import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function CustomisationSection() {
  return (
    <>
      {/* customisation section */}
      <div className="mt-[138px] flex items-center justify-between gap-5 self-stretch px-8 md:flex-col sm:px-5">
        <div className="h-[396px] w-[48%] bg-primary-100" />
        <div className="flex w-[44%] flex-col items-start gap-[60px] md:w-full sm:gap-[30px]">
          <div className="relative h-[268px] content-end self-stretch md:h-auto">
            <Img
              src="images/img_element_amber_200.svg"
              alt="Feature Image"
              className="mb-[104px] h-[28px] w-[72%] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col gap-[22px]">
              <Heading
                size="header_h2"
                as="h2"
                className="text-[64px] font-bold leading-[77px] tracking-[-1.28px] text-gray-900 md:text-[48px]"
              >
                Customise itto your needs
              </Heading>
              <Text as="p" className="text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900">
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
            className="min-w-[176px] gap-2.5 rounded-md px-[34px] font-montserrat font-medium sm:px-5"
          >
            Let’s Go
          </Button>
        </div>
      </div>
    </>
  );
}
