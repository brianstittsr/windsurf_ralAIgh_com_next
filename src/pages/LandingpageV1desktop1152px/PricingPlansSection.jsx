import { Button, Text, Img, Heading, Slider } from "../../components";
import React from "react";

export default function PricingPlansSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* pricing plans section */}
      <div className="mt-[274px] flex flex-col items-center gap-[60px] self-stretch px-8 sm:gap-[30px] sm:px-5">
        <div className="container-sm relative h-[166px] self-stretch px-[54px] md:h-auto md:px-5">
          <Img
            src="images/img_element_amber_200.svg"
            alt="Feature Image"
            className="mr-[216px] mt-[58px] h-[28px] w-[36%] object-contain md:mr-0"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center gap-[18px]">
            <Heading
              size="header_h2"
              as="h2"
              className="text-[64px] font-bold tracking-[-1.28px] text-gray-900 md:text-[48px]"
            >
              Choose Your Plan
            </Heading>
            <Text
              as="p"
              className="self-stretch text-center text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900"
            >
              Whether you want to get organized, keep your personal life on track, or boost workplace productivity,
              Evernote has the right plan for you.
            </Text>
          </div>
        </div>
        <div className="mx-auto flex w-full gap-8 self-stretch md:mx-0 md:flex-col">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 3 } }}
            disableDotsControls
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setSliderState(e?.item);
            }}
            ref={sliderRef}
            items={[...Array(9)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="px-4">
                  <div className="flex flex-col items-start gap-6 rounded-[10px] border border-solid border-amber-200 bg-white-a700 px-[42px] py-10 md:px-5 sm:p-5">
                    <div className="flex flex-col items-start justify-center gap-6 self-stretch">
                      <Heading
                        size="paragraph_p1_semibold"
                        as="h2"
                        className="text-[24px] font-semibold text-gray-900 md:text-[22px]"
                      >
                        Free
                      </Heading>
                      <Heading
                        size="header_h4"
                        as="h3"
                        className="text-[36px] font-bold tracking-[-0.72px] text-gray-900 md:text-[34px] sm:text-[32px]"
                      >
                        $0
                      </Heading>
                      <Heading
                        size="paragraph_p2_medium"
                        as="h4"
                        className="w-full text-[18px] font-medium leading-[23px] tracking-[-0.36px] text-gray-900"
                      >
                        Capture ideas and find them quickly
                      </Heading>
                    </div>
                    <div className="flex flex-col gap-7 self-stretch">
                      <div className="flex items-center gap-[19px]">
                        <Img src="images/img_checkmark_gray_900.svg" alt="Checkmark Icon" className="h-[18px]" />
                        <Text
                          size="paragraph_p3_regular"
                          as="p"
                          className="text-[16px] font-normal tracking-[-0.32px] text-gray-900"
                        >
                          Sync unlimited devices
                        </Text>
                      </div>
                      <div className="flex items-center gap-[19px]">
                        <Img src="images/img_checkmark_gray_900.svg" alt="Checkmark Icon" className="h-[18px]" />
                        <Text
                          size="paragraph_p3_regular"
                          as="p"
                          className="text-[16px] font-normal tracking-[-0.32px] text-gray-900"
                        >
                          10 GB monthly uploads
                        </Text>
                      </div>
                      <div className="flex items-center gap-[19px]">
                        <Img src="images/img_checkmark_gray_900.svg" alt="Checkmark Icon" className="h-[18px]" />
                        <Text
                          size="paragraph_p3_regular"
                          as="p"
                          className="text-[16px] font-normal tracking-[-0.32px] text-gray-900"
                        >
                          200 MB max. note size
                        </Text>
                      </div>
                      <div className="flex items-center justify-center gap-[18px]">
                        <Img src="images/img_checkmark_gray_900.svg" alt="Checkmark Icon" className="h-[18px]" />
                        <Text
                          size="paragraph_p3_regular"
                          as="p"
                          className="w-[92%] text-[16px] font-normal leading-5 tracking-[-0.32px] text-gray-900"
                        >
                          Customize Home dashboard and access extra widgets
                        </Text>
                      </div>
                      <div className="flex items-center justify-center gap-[18px]">
                        <Img src="images/img_checkmark_gray_900.svg" alt="Checkmark Icon" className="h-[18px]" />
                        <Text
                          size="paragraph_p3_regular"
                          as="p"
                          className="w-[92%] text-[16px] font-normal leading-5 tracking-[-0.32px] text-gray-900"
                        >
                          Connect primary Google Calendar account
                        </Text>
                      </div>
                      <div className="flex items-center justify-center gap-[18px]">
                        <Img src="images/img_checkmark_gray_900.svg" alt="Checkmark Icon" className="h-[18px]" />
                        <Text
                          size="paragraph_p3_regular"
                          as="p"
                          className="w-[92%] text-[16px] font-normal leading-5 tracking-[-0.32px] text-gray-900"
                        >
                          Add due dates, reminders, and notifications to your tasks{" "}
                        </Text>
                      </div>
                    </div>
                    <Button
                      color="white_A700"
                      size="xs"
                      shape="round"
                      className="min-w-[166px] rounded-lg border border-solid border-amber-200 px-[33px] font-medium tracking-[-0.32px] sm:px-5"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </React.Fragment>
            ))}
          />
        </div>
      </div>
    </>
  );
}
