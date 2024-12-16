import { Img, Text, Button, Heading } from "../../components";
import React from "react";

export default function FreeTrialSection() {
  return (
    <>
      {/* free trial section */}
      <div className="mt-[140px]">
        <div className="flex flex-col items-center gap-10 bg-indigo-900 p-8 sm:p-5">
          <div className="mt-[108px] flex w-[44%] flex-col items-center gap-[22px] md:w-full">
            <Heading
              as="h2"
              className="self-stretch text-center text-[72px] font-bold leading-[87px] tracking-[-1.44px] text-white-a700 md:text-[48px]"
            >
              Try Whitepace today
            </Heading>
            <Text
              size="paragraph_p1_regular"
              as="p"
              className="text-center text-[24px] font-normal leading-8 tracking-[-0.48px] text-white-a700 md:text-[22px]"
            >
              <>
                Get started for free.
                <br />
                Add your whole team as your needs grow.
              </>
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
            className="min-w-[240px] gap-2.5 rounded-[10px] px-[34px] font-montserrat font-medium sm:px-5"
          >
            Try Taskey free
          </Button>
          <Text
            size="paragraph_p1_regular"
            as="p"
            className="text-[24px] font-normal tracking-[-0.48px] text-white-a700 md:text-[22px]"
          >
            On a big team? Contact sales
          </Text>
          <div className="flex w-[18%] justify-between gap-5 md:w-full">
            <Img
              src="images/img_apple_black_logo_white_a700.svg"
              alt="Apple Logo"
              className="h-[60px] w-[22%] object-contain"
            />
            <Img src="images/img_windows_logo_1.svg" alt="Windows Logo" className="h-[60px] w-[22%] object-contain" />
            <Img src="images/img_android_logo_1.svg" alt="Android Logo" className="h-[60px] w-[22%] object-contain" />
          </div>
        </div>
      </div>
    </>
  );
}
