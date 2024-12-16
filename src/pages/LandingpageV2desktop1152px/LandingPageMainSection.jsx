import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function LandingPageMainSection() {
  return (
    <>
      {/* landing page main section */}
      <div className="relative mt-[62px] h-[1090px]">
        <Img
          src="images/img_background_blue_gray_100_272x144.png"
          alt="Background Image"
          className="absolute left-0 top-0 m-auto h-[272px] w-[12%] object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 mx-auto flex flex-1 flex-col items-center gap-[100px] px-8 md:gap-[75px] sm:gap-[50px] sm:px-5">
          <div className="container-sm flex items-center self-stretch md:flex-col">
            <div className="flex w-[48%] flex-col items-start gap-[60px] md:w-full sm:gap-[30px]">
              <div className="relative h-[298px] content-center self-stretch md:h-auto">
                <Img
                  src="images/img_element_amber_200_38x514.svg"
                  alt="Feature Image"
                  className="ml-auto mr-[108px] h-[38px] w-[56%] object-contain md:mr-0"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-[22px]">
                  <Heading
                    size="header_h2"
                    as="h2"
                    className="w-[82%] text-[64px] font-bold leading-[77px] tracking-[-1.28px] text-gray-900 md:w-full md:text-[48px]"
                  >
                    Project Management
                  </Heading>
                  <Text
                    as="p"
                    className="w-[82%] text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900 md:w-full"
                  >
                    Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly
                    from the app. Take photos with the mobile app and save them to a note.
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
                className="min-w-[200px] gap-2.5 rounded-md px-[34px] font-medium tracking-[-0.36px] sm:px-5"
              >
                Get Started
              </Button>
            </div>
            <div className="h-[384px] flex-1 bg-primary-100 md:self-stretch" />
          </div>
          <div className="container-sm flex items-center gap-8 self-stretch md:flex-col">
            <Img
              src="images/img_work_together_image_blue_200_490x528.svg"
              alt="Collaboration Image"
              className="h-[490px] w-[50%] object-contain md:w-full"
            />
            <div className="flex flex-1 flex-col items-start gap-[60px] md:self-stretch sm:gap-[30px]">
              <div className="relative h-[190px] self-stretch md:h-auto">
                <Img
                  src="images/img_element_amber_200.svg"
                  alt="Decorative Element"
                  className="mr-[82px] mt-[42px] h-[24px] w-[60%] object-contain md:mr-0"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-2.5">
                  <Heading
                    size="header_h2"
                    as="h3"
                    className="text-[64px] font-bold tracking-[-1.28px] text-gray-900 md:text-[48px]"
                  >
                    Work together
                  </Heading>
                  <Text
                    as="p"
                    className="w-full text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900"
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
                className="min-w-[186px] gap-2.5 rounded-md px-[34px] font-medium tracking-[-0.36px] sm:px-5"
              >
                Try it now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
