import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function LandingPageMainSection() {
  return (
    <>
      {/* landing page main section */}
      <div className="mt-[140px] flex flex-col items-center gap-[72px] lg:gap-[72px] md:gap-[54px] sm:gap-9">
        <div className="relative h-[572px] self-stretch">
          <Img
            src="images/img_background.png"
            alt="Background Image"
            className="absolute bottom-[-1px] left-0 m-auto h-[448px] w-[22%] object-contain"
          />
          <div className="container-xl absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max items-center justify-center lg:px-5 md:relative md:flex-col md:px-5">
            <div className="flex w-full flex-col items-start gap-[60px] sm:gap-[30px]">
              <div className="relative h-[288px] content-center self-stretch lg:h-auto md:h-auto">
                <Img src="images/img_element.svg" alt="Feature Image" className="h-[66px] w-[92%] object-contain" />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-[22px]">
                  <Heading
                    as="h2"
                    className="w-[92%] text-[72px] font-bold leading-[87px] tracking-[-1.44px] text-gray-900 lg:w-full lg:text-[48px] md:w-full md:text-[48px]"
                  >
                    Project Management
                  </Heading>
                  <Text
                    as="p"
                    className="w-[92%] text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900 lg:w-full lg:text-[15px] md:w-full"
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
                className="min-w-[200px] gap-2.5 rounded-md px-[34px] font-medium tracking-[-0.36px] sm:px-4"
              >
                Get Started
              </Button>
            </div>
            <div className="h-[546px] w-full bg-primary-100" />
          </div>
        </div>
        <div className="container-xl lg:px-5 md:px-5">
          <div className="flex items-center justify-between gap-5 md:flex-col">
            <Img
              src="images/img_work_together_image.svg"
              alt="Collaboration Image"
              className="h-[660px] w-[48%] object-contain md:w-full"
            />
            <div className="flex w-[44%] flex-col items-start gap-[60px] md:w-full sm:gap-[30px]">
              <div className="relative h-[170px] self-stretch lg:h-auto md:h-auto">
                <Img
                  src="images/img_element_amber_200.svg"
                  alt="Feature Image"
                  className="mr-[162px] mt-[54px] h-[28px] w-[58%] object-contain lg:mr-0 md:mr-0"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-2.5">
                  <Heading
                    as="h3"
                    className="text-[72px] font-bold tracking-[-1.44px] text-gray-900 lg:text-[48px] md:text-[48px]"
                  >
                    Work together
                  </Heading>
                  <Text
                    as="p"
                    className="w-full text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900 lg:text-[15px]"
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
                className="min-w-[186px] gap-2.5 rounded-md px-[34px] font-medium tracking-[-0.36px] sm:px-4"
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
