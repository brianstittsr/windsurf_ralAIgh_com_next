import { Img, Heading } from "../../components";
import React from "react";

export default function SponsorsSection() {
  return (
    <>
      {/* sponsors section */}
      <div className="relative mt-[280px] h-[256px] px-[30px] md:h-auto sm:px-5">
        <Img
          src="images/img_element_amber_200.svg"
          alt="Image Element"
          className="mr-[438px] mt-[62px] h-[42px] w-[36%] object-contain md:mr-0"
        />
        <div className="container-lg absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max flex-1 flex-col items-center gap-[86px] md:gap-16 sm:gap-[43px]">
          <Heading as="h2" className="text-[72px] font-bold tracking-[-1.44px] text-gray-900 md:text-[48px]">
            Our sponsors
          </Heading>
          <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
            <Img src="images/img_apple.svg" alt="Apple Logo" className="h-[68px] w-[4%] object-contain md:w-full" />
            <Img
              src="images/img_microsoft.svg"
              alt="Microsoft Logo"
              className="h-[62px] w-[20%] object-contain md:w-full"
            />
            <Img src="images/img_slack.svg" alt="Slack Logo" className="h-[70px] w-[20%] object-contain md:w-full" />
            <Img src="images/img_google.svg" alt="Google Logo" className="h-[68px] w-[14%] object-contain md:w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
