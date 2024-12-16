import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* hero section */}
      <div>
        <div className="relative h-[828px] content-end bg-indigo-900 py-[88px] shadow-md lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4">
          <div className="relative mx-auto h-[598px] flex-1">
            <div className="absolute bottom-[-0.27px] left-0 right-0 mx-auto flex h-[546px] flex-1 items-start justify-center bg-[url(/public/images/img_group_278.png)] bg-cover bg-no-repeat py-10 lg:h-auto md:h-auto sm:py-4">
              <div className="container-xl mb-[102px] flex justify-center lg:px-5 md:px-5">
                <div className="flex w-full flex-col items-start gap-[60px] sm:gap-[30px]">
                  <div className="flex flex-col items-start gap-[22px] self-stretch">
                    <Heading
                      size="header_h2"
                      as="h1"
                      className="w-[44%] text-[64px] font-bold leading-[77px] tracking-[-1.28px] text-white-a700 lg:w-full lg:text-[48px] md:w-full md:text-[48px]"
                    >
                      Get More Done with whitepace
                    </Heading>
                    <Text
                      as="p"
                      className="w-[44%] text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-white-a700 lg:w-full lg:text-[15px] md:w-full"
                    >
                      Project management software that enables your teams to collaborate, plan, analyze and manage
                      everyday tasks
                    </Text>
                  </div>
                  <Button
                    shape="round"
                    rightIcon={
                      <Img
                        src="images/img_arrowleft_white_a700.svg"
                        alt="Arrow Left"
                        className="my-1.5 h-[10px] w-[10px] object-contain"
                      />
                    }
                    className="min-w-[218px] gap-2.5 rounded-lg px-5 font-medium tracking-[-0.36px]"
                  >
                    Try Whitepace free
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute right-[11%] top-0 m-auto h-[548px] w-[48%] bg-primary-100" />
          </div>
        </div>
      </div>
    </>
  );
}
