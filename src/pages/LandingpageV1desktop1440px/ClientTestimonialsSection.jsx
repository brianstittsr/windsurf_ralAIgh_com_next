import { Text, Heading, Img, Slider } from "../../components";
import React from "react";

export default function ClientTestimonialsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* client testimonials section */}
      <div className="mt-[138px] flex px-8 sm:px-5">
        <div className="container-md flex flex-col items-center gap-[54px] sm:gap-[27px]">
          <div className="relative mx-[300px] h-[94px] content-end self-stretch md:mx-0 md:h-auto">
            <Img
              src="images/img_element_amber_200.svg"
              alt="Decorative Image"
              className="mb-4 ml-auto mr-[46px] h-[46px] w-[26%] object-contain md:mr-0"
            />
            <Heading
              size="heading5xl"
              as="h2"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max text-[70px] font-bold text-gray-900 md:text-[48px]"
            >
              What Our Clients Says
            </Heading>
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
                    <div className="flex flex-col gap-[60px] rounded-[10px] bg-white-a700 px-6 py-[60px] shadow-lg md:py-5 sm:gap-[30px] sm:p-5">
                      <div className="flex flex-col gap-8 border-b border-solid border-gray-900">
                        <Img
                          src="images/img_contrast_indigo_900.svg"
                          alt="Client Image"
                          className="h-[60px] w-[22%] object-contain"
                        />
                        <Text
                          as="p"
                          className="mb-10 text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900"
                        >
                          Whitepate is designed as a collaboration tool for businesses that is a full project management
                          solution.
                        </Text>
                      </div>
                      <div className="mr-1.5 flex justify-between gap-5 md:mr-0 sm:flex-col">
                        <Img
                          src="images/img_avater.png"
                          alt="Avatar Image"
                          className="h-[94px] w-[24%] rounded-[46px] object-contain sm:w-full"
                        />
                        <div className="flex w-[64%] flex-col items-start gap-3 sm:w-full">
                          <Heading
                            size="paragraph_p1_semibold"
                            as="h3"
                            className="text-[24px] font-semibold text-gray-900 md:text-[22px]"
                          >
                            Oberon Shaw, MCH
                          </Heading>
                          <Text
                            size="paragraph_p3_regular"
                            as="p"
                            className="w-full text-[16px] font-normal leading-5 tracking-[-0.32px] text-gray-900"
                          >
                            Head of Talent Acquisition, North America
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
          <div className="flex items-center justify-center">
            {[...Array(3)].map((_, i) => (
              <>
                {sliderState >= i * (sliderRef?.current?.state?.itemsInSlide || 1) &&
                sliderState < (i + 1) * (sliderRef?.current?.state?.itemsInSlide || 1) ? (
                  <div
                    onClick={() => {
                      sliderRef?.current?.slideTo(i * sliderRef?.current?.state?.itemsInSlide);
                    }}
                    className="mr-3 inline-block h-[12px] w-[12px] cursor-pointer rounded-[50%] bg-indigo-900"
                  />
                ) : (
                  <div
                    onClick={() => {
                      sliderRef?.current?.slideTo(i * sliderRef?.current?.state?.itemsInSlide);
                    }}
                    className="mr-3 inline-block h-[12px] w-[12px] cursor-pointer rounded-[50%] bg-blue-400"
                  />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
