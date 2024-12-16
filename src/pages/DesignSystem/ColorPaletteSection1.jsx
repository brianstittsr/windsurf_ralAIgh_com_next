import { Heading } from "../../components";
import React from "react";

export default function ColorPaletteSection1() {
  return (
    <>
      {/* color palette section */}
      <div className="flex justify-end">
        <div className="mx-auto flex w-full max-w-[1136px] flex-col gap-7 lg:px-5 md:px-5">
          <div className="flex flex-col items-start gap-7">
            <Heading
              size="textlg"
              as="p"
              className="text-[48px] font-normal tracking-[-0.96px] text-primary-900 lg:text-[40px] md:text-[32px] sm:text-[26px]"
            >
              Secondary Color
            </Heading>
            <div className="flex self-stretch md:flex-col">
              <div className="h-[82px] w-full bg-amber-200" />
              <div className="h-[82px] w-full bg-blue-200" />
              <div className="h-[82px] w-full border border-solid border-gray-400 bg-white-a700" />
              <div className="h-[82px] w-full bg-gray-900" />
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-5">
            <Heading
              size="headings"
              as="h4"
              className="text-[24px] font-bold tracking-[-0.48px] text-primary-900 lg:text-[20px]"
            >
              #FFE492
            </Heading>
            <Heading
              size="headings"
              as="h4"
              className="text-[24px] font-bold tracking-[-0.48px] text-primary-900 lg:text-[20px]"
            >
              #A7CEFC
            </Heading>
            <Heading
              size="headings"
              as="h4"
              className="text-[24px] font-bold tracking-[-0.48px] text-primary-900 lg:text-[20px]"
            >
              #FFFFFF
            </Heading>
            <Heading
              size="headings"
              as="h4"
              className="mr-[182px] text-[24px] font-bold tracking-[-0.48px] text-primary-900 lg:text-[20px]"
            >
              #212529
            </Heading>
          </div>
        </div>
      </div>
    </>
  );
}
