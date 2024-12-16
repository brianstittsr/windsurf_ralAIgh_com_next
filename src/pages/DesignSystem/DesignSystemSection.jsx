import { Heading, Img, Text } from "../../components";
import React from "react";

export default function DesignSystemSection() {
  return (
    <>
      {/* design system section */}
      <div className="flex flex-col items-start gap-[66px] sm:gap-[33px]">
        <Text
          size="textxl"
          as="p"
          className="text-[72px] font-normal tracking-[-1.44px] text-primary-900 lg:text-[48px] md:text-[48px]"
        >
          Logo Design
        </Text>
        <div className="flex gap-8 self-stretch md:flex-col">
          <div className="flex w-full items-start justify-center gap-5 bg-indigo-900 px-14 py-[448px] lg:py-8 md:p-5 sm:flex-col sm:p-4">
            <Img
              src="images/img_logo_icon_white_a700.svg"
              alt="Logo Icon"
              className="mt-1 h-[58px] w-[10%] object-contain sm:w-full"
            />
            <Heading
              size="heading2xl"
              as="h2"
              className="mb-[22px] text-[56.47px] font-bold text-white-a700 lg:text-[47px] md:text-[36px] sm:text-[30px]"
            >
              whitepace
            </Heading>
          </div>
          <div className="flex w-full flex-col gap-8">
            <div className="flex items-center justify-center gap-5 border border-solid border-primary-100 bg-white-a700 px-14 py-[194px] lg:py-8 md:p-5 sm:flex-col sm:p-4">
              <Img
                src="images/img_logo_icon_indigo_900.svg"
                alt="Indigo Logo Icon"
                className="h-[60px] w-[10%] object-contain sm:w-full"
              />
              <Heading
                size="heading3xl"
                as="h3"
                className="mt-2.5 self-end text-[59.6px] font-bold text-indigo-900 lg:text-[50px] md:text-[39px] sm:text-[33px]"
              >
                whitepace
              </Heading>
            </div>
            <div className="flex items-center justify-center gap-5 bg-gray-900 px-14 py-[194px] lg:py-8 md:p-5 sm:flex-col sm:p-4">
              <Img
                src="images/img_logo_icon_white_a700.svg"
                alt="White Logo Icon"
                className="h-[60px] w-[10%] object-contain sm:w-full"
              />
              <Heading
                size="heading3xl"
                as="h4"
                className="mt-2.5 self-end text-[59.6px] font-bold text-white-a700 lg:text-[50px] md:text-[39px] sm:text-[33px]"
              >
                whitepace
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
