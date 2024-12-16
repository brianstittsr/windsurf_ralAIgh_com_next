import { Img, Heading } from "../../components";
import AppleImageComponent from "../../components/AppleImageComponent";
import React from "react";

export default function SponsorsSection() {
  return (
    <>
      {/* sponsors section */}
      <div className="relative mt-[280px] h-[246px] px-[30px] md:h-auto sm:px-5">
        <Img
          src="images/img_element_amber_200.svg"
          alt="Amber Image"
          className="mr-[326px] mt-[58px] h-[40px] w-[38%] object-contain md:mr-0"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full max-w-[1090px] flex-1 flex-col items-center gap-[88px] md:gap-[66px] sm:gap-11">
          <Heading
            size="header_h2"
            as="h2"
            className="text-[64px] font-bold tracking-[-1.28px] text-gray-900 md:text-[48px]"
          >
            Our sponsors
          </Heading>
          <div className="flex gap-[84px] self-stretch md:flex-col">
            <AppleImageComponent />
            <Img
              src="images/img_microsoft.svg"
              alt="Microsoft Image"
              className="h-[62px] w-[34%] object-contain md:w-full"
            />
            <Img src="images/img_slack.svg" alt="Slack" className="h-[70px] w-[34%] object-contain md:w-full" />
            <Img src="images/img_google.svg" alt="Google" className="h-[68px] w-[24%] object-contain md:w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
