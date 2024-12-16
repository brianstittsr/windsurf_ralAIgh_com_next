import { Text, Heading, Img, Slider } from "../../components";
import React from "react";

export default function ClientTestimonialsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* client testimonials section */}
      <div className="mt-[138px] flex flex-col items-center gap-[54px] self-stretch px-8 sm:gap-[27px] sm:px-5">
        <div className="relative mx-auto h-[94px] w-full max-w-[772px] content-end self-stretch md:h-auto">
          <Img
            src="images/img_element_amber_200.svg"
            alt="Decorative Image"
            className="ml-auto mr-[114px] h-[50px] w-[24%] object-contain md:mr-0"
          />
          <Heading
            size="heading5xl"
            as="h2"
            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max text-[70px] font-bold text-gray-900 md:text-[48px]"
          >
            What Our Clients Says
          </Heading>
        </div>
        <div className="container-sm flex gap-8 self-stretch md:flex-col">
          <div className="mx-auto flex w-full md:self-stretch">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
              disableDotsControls
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex gap-8 md:flex-col">
                    <div className="flex w-full flex-col gap-10 rounded-[10px] bg-white-a700 px-6 py-[60px] shadow-lg md:py-5 sm:p-5">
                      <div className="flex flex-col gap-8 border-b border-solid border-gray-900">
                        <Img
                          src="images/img_contrast_indigo_900.svg"
                          alt="Contrast Image"
                          className="h-[60px] w-[28%] object-contain"
                        />
                        <Text
                          as="p"
                          className="mb-10 text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900"
                        >
                          Whitepate is designed as a collaboration tool for businesses that is a full project management
                          solution.
                        </Text>
                      </div>
                      <div className="flex items-start gap-6">
                        <Img
                          src="images/img_avater.png"
                          alt="Avatar Image"
                          className="h-[94px] w-[34%] rounded-[46px] object-contain"
                        />
                        <div className="flex flex-1 flex-col gap-3.5 self-center">
                          <Heading
                            size="paragraph_p1_semibold"
                            as="h2"
                            className="text-[24px] font-semibold leading-9 text-gray-900 md:text-[22px]"
                          >
                            Oberon Shaw, MCH
                          </Heading>
                          <Text
                            size="paragraph_p3_regular"
                            as="p"
                            className="text-[16px] font-normal leading-5 tracking-[-0.32px] text-gray-900"
                          >
                            Head of Talent Acquisition, North America
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col gap-10 rounded-[10px] bg-blue-400 px-6 py-[60px] md:py-5 sm:p-5">
                      <div className="flex flex-col gap-8 border-b border-solid border-white-a700">
                        <Img
                          src="images/img_thumbs_up.svg"
                          alt="Thumbs Up Image"
                          className="h-[60px] w-[28%] object-contain"
                        />
                        <Text
                          as="p"
                          className="mb-10 text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-white-a700"
                        >
                          Whitepate is designed as a collaboration tool for businesses that is a full project management
                          solution.
                        </Text>
                      </div>
                      <div className="flex items-start gap-6">
                        <Img
                          src="images/img_avater_94x94.png"
                          alt="Avatar Image"
                          className="h-[94px] w-[34%] rounded-[46px] object-contain"
                        />
                        <div className="flex flex-1 flex-col gap-3.5 self-center">
                          <Heading
                            size="paragraph_p1_semibold"
                            as="h3"
                            className="text-[24px] font-semibold leading-9 text-indigo-900 md:text-[22px]"
                          >
                            Oberon Shaw, MCH
                          </Heading>
                          <Text
                            size="paragraph_p3_regular"
                            as="p"
                            className="text-[16px] font-normal leading-5 tracking-[-0.32px] text-white-a700"
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
          <div className="flex w-[32%] flex-col gap-10 rounded-[10px] bg-blue-400 px-6 py-[60px] md:w-full md:py-5 sm:p-5">
            <div className="flex flex-col gap-8 border-b border-solid border-white-a700">
              <Img src="images/img_thumbs_up.svg" alt="Thumbs Up Image" className="h-[60px] w-[28%] object-contain" />
              <Text as="p" className="mb-10 text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-white-a700">
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </Text>
            </div>
            <div className="flex items-start gap-6">
              <Img
                src="images/img_avater_1.png"
                alt="Avatar Image"
                className="h-[94px] w-[34%] rounded-[46px] object-contain"
              />
              <div className="flex flex-1 flex-col gap-3.5 self-center">
                <Heading
                  size="paragraph_p1_semibold"
                  as="h4"
                  className="text-[24px] font-semibold leading-9 text-indigo-900 md:text-[22px]"
                >
                  Oberon Shaw, MCH
                </Heading>
                <Text
                  size="paragraph_p3_regular"
                  as="p"
                  className="text-[16px] font-normal leading-5 tracking-[-0.32px] text-white-a700"
                >
                  Head of Talent Acquisition, North America
                </Text>
              </div>
            </div>
          </div>
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
    </>
  );
}
