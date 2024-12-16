import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function MainContentSection() {
  return (
    <>
      {/* main content section */}
      <div className="relative h-[1228px] md:h-auto">
        <div className="mt-[136px] flex flex-1 items-center px-8 md:flex-col sm:px-5">
          <div className="flex w-[48%] flex-col items-start gap-[60px] md:w-full sm:gap-[30px]">
            <div className="relative h-[288px] content-end self-stretch md:h-auto">
              <Img
                src="images/img_element_amber_200_38x514.svg"
                alt="Feature Image"
                className="mb-[98px] h-[38px] w-[78%] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col gap-[22px]">
                <Heading
                  as="h2"
                  className="text-[72px] font-bold leading-[87px] tracking-[-1.44px] text-gray-900 md:text-[48px]"
                >
                  Project Management
                </Heading>
                <Text as="p" className="text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900">
                  Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from
                  the app. Take photos with the mobile app and save them to a note.
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
              className="min-w-[200px] gap-2.5 rounded-lg px-[34px] font-medium tracking-[-0.36px] sm:px-5"
            >
              Get Started
            </Button>
          </div>
          <div className="h-[448px] flex-1 bg-primary-100 md:self-stretch" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[1228px] flex-1">
          <Img
            src="images/img_work_together_image_blue_200.svg"
            alt="Collaboration Image"
            className="absolute bottom-[0.61px] left-[2%] m-auto h-[542px] w-[40%] object-contain"
          />
          <div className="absolute left-0 right-0 top-0 mx-auto flex flex-1 flex-col items-end gap-[60px] sm:gap-[30px]">
            <div className="relative mr-8 h-[994px] content-end self-stretch md:mr-0 md:h-auto">
              <Img
                src="images/img_element_amber_200.svg"
                alt="Image Element"
                className="mb-[110px] ml-auto mr-[84px] h-[24px] w-[24%] object-contain md:mr-0"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-end">
                <Img
                  src="images/img_background_blue_gray_100.png"
                  alt="Background Image"
                  className="h-[440px] w-[16%] self-start object-contain"
                />
                <Heading
                  as="h3"
                  className="mr-[136px] mt-[356px] text-[72px] font-bold tracking-[-1.44px] text-gray-900 md:mr-0 md:text-[48px]"
                >
                  Work together
                </Heading>
                <Text
                  as="p"
                  className="mt-2.5 w-[44%] text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900 md:w-full md:px-5"
                >
                  With whitepace, share your notes with your colleagues and collaborate on them.You can also publish a
                  note to the internet and share the URL with others.
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
              className="mr-[478px] min-w-[186px] gap-2.5 rounded-lg px-[34px] font-medium tracking-[-0.36px] md:mr-0 sm:px-5"
            >
              Try it now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
