import { Img, Button, Text, Heading } from "../../components";
import React from "react";

export default function IntroSection() {
  return (
    <>
      {/* intro section */}
      <div className="mt-[60px] flex items-center px-8 md:flex-col sm:px-5">
        <div className="flex flex-1 flex-col items-start gap-[60px] md:self-stretch sm:gap-[30px]">
          <div className="relative h-[200px] self-stretch md:h-auto">
            <Img
              src="images/img_element_amber_200.svg"
              alt="Feature Image"
              className="mr-[118px] mt-[68px] h-[36px] w-[60%] object-contain md:mr-0"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-2.5">
              <Heading as="h2" className="text-[72px] font-bold tracking-[-1.44px] text-gray-900 md:text-[48px]">
                100% your data
              </Heading>
              <Text as="p" className="w-full text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900">
                The app is open source and your notes are saved to an open format, so you&#39;ll always have access to
                them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access
                them.
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
            className="min-w-[196px] gap-2.5 rounded-lg px-[34px] font-medium sm:px-5"
          >
            Read more
          </Button>
        </div>
        <Img
          src="images/img_element_blue_200.svg"
          alt="Blue Image"
          className="h-[380px] w-[48%] object-contain md:w-full"
        />
      </div>
    </>
  );
}
