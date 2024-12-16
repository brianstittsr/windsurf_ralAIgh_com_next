import { Button, Img, RatingBar, Text, Heading, Slider } from "../../components";
import React from "react";

export default function TestimonialsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* testimonials section */}
      <div className="mt-[142px]">
        <div className="flex flex-col items-center">
          <div className="mx-auto flex w-full max-w-[1060px] flex-col items-end self-stretch md:px-5">
            <Heading
              as="h1"
              className="relative z-[7] text-[72px] font-bold tracking-[-1.44px] text-gray-900 md:text-[48px]"
            >
              See what our trusted users Say
            </Heading>
            <Img
              src="images/img_element_amber_200.svg"
              alt="Decorative Image"
              className="relative mr-[340px] mt-[-22px] h-[48px] w-[36%] object-contain md:mr-0"
            />
          </div>
          <div className="mt-[18px] flex items-center justify-center self-stretch md:flex-col">
            <div className="flex w-full items-center justify-center px-1.5 md:flex-col md:px-5">
              <div className="relative z-[8] flex py-[22px] sm:py-5">
                <Img src="images/img_user.svg" alt="User Image" className="h-[28px]" />
              </div>
              <div className="relative mx-auto flex w-full gap-8 md:mx-0 md:flex-col md:self-stretch">
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
                        <div className="flex flex-col gap-12 rounded-[10px] bg-white-a700 px-10 py-[60px] shadow-3xl md:py-5 sm:p-5">
                          <div className="mr-1.5 flex flex-col items-start gap-[34px] md:mr-0">
                            <Img
                              src="images/img_avater_02.png"
                              alt="Avatar Image"
                              className="h-[70px] w-[20%] rounded-[34px] object-contain"
                            />
                            <Text
                              as="p"
                              className="w-full text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900_01"
                            >
                              “If you haven’t tried whitepace yet, you need to give it a shot for your next event. It’s
                              so easy and intuitive to get a new event setup and if you need any help their customer
                              service is seriously amazing.”
                            </Text>
                          </div>
                          <div className="mr-1.5 flex items-start justify-center md:mr-0">
                            <div className="flex flex-1 flex-col items-start gap-0.5 self-center">
                              <Heading
                                size="paragraph_p2_bold"
                                as="h6"
                                className="text-[18px] font-bold tracking-[-0.36px] text-gray-900_01"
                              >
                                Jessie Owner
                              </Heading>
                              <Text as="p" className="mb-1 text-[18px] font-normal tracking-[-0.36px] text-gray-900_01">
                                Founder, XYZ Company
                              </Text>
                            </div>
                            <RatingBar
                              value={5}
                              isEditable={true}
                              color="#ffe492"
                              activeColor="#ffe492"
                              size={14}
                              className="flex gap-2.5"
                            />
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
            <Img src="images/img_arrow_right.svg" alt="Arrowright" className="h-[28px] md:w-full" />
          </div>
          <div className="mt-[60px] flex w-[16%] justify-between gap-5 md:w-full md:px-5">
            <Button
              color="blue_50"
              size="lg"
              onClick={() => {
                sliderRef?.current?.slidePrev();
              }}
              className="w-[74px] rounded-[36px] px-[22px] sm:px-5"
            >
              <Img src="images/img_user.svg" />
            </Button>
            <Button
              color="blue_50"
              size="lg"
              onClick={() => {
                sliderRef?.current?.slideNext();
              }}
              className="w-[74px] rounded-[36px] px-[22px] sm:px-5"
            >
              <Img src="images/img_arrow_right.svg" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
