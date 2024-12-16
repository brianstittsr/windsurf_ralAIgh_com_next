import { Img, Button, Text, Heading } from "../../components";
import React from "react";

export default function DataSecuritySection() {
  return (
    <>
      {/* data security section */}
      <div className="mt-[60px] flex justify-center">
        <div className="container-xl flex items-center justify-center lg:px-5 md:flex-col md:px-5">
          <div className="flex flex-1 flex-col items-start gap-[60px] md:self-stretch sm:gap-[30px]">
            <div className="relative h-[200px] self-stretch lg:h-auto md:h-auto">
              <Img
                src="images/img_element_amber_200.svg"
                alt="Feature Image"
                className="ml-[206px] mt-[62px] h-[36px] w-[54%] object-contain lg:ml-0 md:ml-0"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-2.5">
                <Heading
                  as="h1"
                  className="text-[72px] font-bold tracking-[-1.44px] text-gray-900 lg:text-[48px] md:text-[48px]"
                >
                  100% your data
                </Heading>
                <Text
                  as="p"
                  className="w-full text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900 lg:text-[15px]"
                >
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
              className="min-w-[196px] gap-2.5 rounded-lg px-[34px] font-medium sm:px-4"
            >
              Read more
            </Button>
          </div>
          <Img
            src="images/img_element_blue_200.svg"
            alt="Decorative Image"
            className="h-[380px] w-[46%] object-contain md:w-full"
          />
        </div>
      </div>
    </>
  );
}
