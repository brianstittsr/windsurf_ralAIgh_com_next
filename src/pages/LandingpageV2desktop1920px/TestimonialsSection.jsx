import { Button, Img, RatingBar, Text, Heading, Slider } from "../../components";
import React from "react";

export default function TestimonialsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* testimonials section */}
      <div className="mt-[140px] flex justify-center">
        <div className="container-xl flex justify-center lg:px-5 md:px-5">
          <div className="flex w-full flex-col items-center gap-[60px] sm:gap-[30px]">
            <div className="relative h-[626px] self-stretch lg:h-auto md:h-auto">
              <Img
                src="images/img_element_amber_200.svg"
                alt="Feature Image"
                className="mt-[82px] h-[48px] w-[16%] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-center justify-center gap-[46px]">
                <Heading
                  as="h1"
                  className="text-[72px] font-bold tracking-[-1.44px] text-gray-900 lg:text-[48px] md:text-[48px]"
                >
                  See what our trusted users Say
                </Heading>
                <div className="mx-auto flex w-full gap-8 self-stretch md:mx-0 md:flex-col">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 }, 1441: { items: 1 } }}
                    paddingLeft={472}
                    paddingRight={472}
                    disableDotsControls
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    items={[...Array(9)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="px-4">
                          <div className="flex flex-col gap-12 rounded-[10px] bg-white-a700 px-10 py-[60px] shadow-3xl md:py-5 sm:p-4">
                            <div className="flex flex-col items-start gap-[34px]">
                              <Img
                                src="images/img_avater_02.png"
                                alt="Client Avatar"
                                className="h-[70px] w-[18%] rounded-[34px] object-contain"
                              />
                              <Text
                                as="p"
                                className="w-[88%] text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900_01 lg:w-full lg:text-[15px] md:w-full"
                              >
                                “If you haven’t tried whitepace yet, you need to give it a shot for your next event.
                                It’s so easy and intuitive to get a new event setup and if you need any help their
                                customer service is seriously amazing.”
                              </Text>
                            </div>
                            <div className="flex items-start">
                              <div className="flex flex-col items-start gap-0.5 self-center">
                                <Heading
                                  size="paragraph_p2_bold"
                                  as="h6"
                                  className="text-[18px] font-bold tracking-[-0.36px] text-gray-900_01 lg:text-[15px]"
                                >
                                  Jessie Owner
                                </Heading>
                                <Text
                                  as="p"
                                  className="mb-1 text-[18px] font-normal tracking-[-0.36px] text-gray-900_01 lg:text-[15px]"
                                >
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
            </div>
            <div className="flex w-[16%] justify-between gap-5 lg:w-full md:w-full">
              <Button
                color="blue_50"
                size="lg"
                onClick={() => {
                  sliderRef?.current?.slidePrev();
                }}
                className="w-[74px] rounded-[36px] px-[22px] sm:px-4"
              >
                <Img src="images/img_user.svg" />
              </Button>
              <Button
                color="blue_50"
                size="lg"
                onClick={() => {
                  sliderRef?.current?.slideNext();
                }}
                className="w-[74px] rounded-[36px] px-[22px] sm:px-4"
              >
                <Img src="images/img_arrow_right.svg" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
