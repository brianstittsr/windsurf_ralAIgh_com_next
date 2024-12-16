import { Heading, Text } from "../../components";
import React from "react";

export default function ColorPaletteSection() {
  return (
    <>
      {/* color palette section */}
      <div>
        <div className="flex flex-col gap-7">
          <div>
            <div className="flex flex-col gap-0.5">
              <div className="flex flex-wrap items-start gap-[408px] lg:gap-5 md:gap-5">
                <Text
                  size="textxl"
                  as="p"
                  className="self-center text-[72px] font-normal tracking-[-1.44px] text-primary-900 lg:text-[48px] md:text-[48px]"
                >
                  Color
                </Text>
                <Heading
                  size="textlg"
                  as="h5"
                  className="mt-1 text-[48px] font-normal tracking-[-0.96px] text-primary-900 lg:text-[40px] md:text-[32px] sm:text-[26px]"
                >
                  Primary Color
                </Heading>
              </div>
              <div className="flex justify-end md:flex-col">
                <div className="h-[82px] w-[32%] bg-indigo-900" />
                <div className="h-[82px] w-[32%] bg-blue-400" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-5">
            <Heading
              size="headings"
              as="h6"
              className="ml-[582px] text-[24px] font-bold tracking-[-0.48px] text-primary-900 lg:text-[20px]"
            >
              #043873
            </Heading>
            <Heading
              size="headings"
              as="h4"
              className="text-[24px] font-bold tracking-[-0.48px] text-primary-900 lg:text-[20px]"
            >
              #4F9CF9
            </Heading>
          </div>
        </div>
      </div>
    </>
  );
}
