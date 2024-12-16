import { Button, Img, RatingBar, Text, Heading, Slider } from "../../components";
import React from "react";

export default function TestimonialsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* testimonials section */}
      <div className="relative mt-[140px] h-[700px] px-8 md:h-auto sm:px-5">
        <Img
          src="images/img_element_amber_200.svg"
          alt="Image Element"
          className="mr-[378px] mt-[60px] h-[32px] w-[32%] object-contain md:mr-0"
        />
        <div className="container-sm absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max flex-col items-center gap-12">
          <Heading
            size="header_h2"
            as="h2"
            className="text-[64px] font-bold tracking-[-1.28px] text-gray-900 md:text-[48px]"
          >
            See what our trusted users Say
          </Heading>
          <div className="flex flex-col items-center gap-[60px] self-stretch sm:gap-[30px]">
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
                      <div className="flex flex-col gap-12 rounded-[10px] bg-white-a700 p-5 shadow-3xl">
                        <div className="flex flex-col items-start gap-[34px]">
                          <Img
                            src="images/img_avater_02.png"
                            alt="User Avatar"
                            className="h-[70px] w-[22%] rounded-[34px] object-contain"
                          />
                          <Text
                            as="p"
                            className="w-full text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900_01"
                          >
                            “If you haven’t tried EventSprout yet, you need to give it a shot for your next event. It’s
                            so easy and intuitive to get a new event setup and if you need any help their customer
                            service is seriously amazing.”
                          </Text>
                        </div>
                        <div className="flex items-start justify-center">
                          <div className="flex flex-1 flex-col items-start gap-0.5 self-center">
                            <Heading
                              size="paragraph_p2_bold"
                              as="h3"
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
            <div className="flex w-[22%] justify-between gap-5 md:w-full">
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
      </div>
    </>
  );
}
