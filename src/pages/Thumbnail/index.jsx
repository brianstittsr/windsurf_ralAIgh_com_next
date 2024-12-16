import { Helmet } from "react-helmet";
import { Img, Button, Heading } from "../../components";
import React from "react";

export default function ThumbnailPage() {
  return (
    <>
      <Helmet>
        <title>SaaS Landing Page - Free Figma Template Download</title>
        <meta
          name="description"
          content="Download our free Figma template for SaaS landing pages. Perfect for creating a professional online presence with ease. No credit required, but appreciated!"
        />
      </Helmet>
      <div className="flex w-full bg-primary-50 px-[18px]">
        <div className="mx-auto flex w-full max-w-[1564px] items-center justify-center gap-[25px] md:flex-col">
          <div className="flex w-[30%] flex-col gap-[74px] lg:gap-[74px] md:w-full md:gap-[55px] sm:gap-[37px]">
            <div className="flex items-center gap-[18px]">
              <Img src="images/img_logo_icon.svg" alt="Logo Icon" className="h-[48px] w-[14%] object-contain" />
              <Heading
                size="headingxl"
                as="h1"
                className="text-[47.79px] font-bold text-primary-900 lg:text-[39px] md:text-[31px] sm:text-[25px]"
              >
                whitepace
              </Heading>
            </div>
            <div className="flex flex-col items-start gap-12">
              <div className="flex flex-col items-center gap-[94px] self-stretch lg:gap-[94px] md:gap-[70px] sm:gap-[47px]">
                <Heading
                  size="heading4xl"
                  as="h2"
                  className="text-[68px] font-bold leading-[117.52%] text-primary-900 lg:text-[48px] md:text-[48px]"
                >
                  <>
                    SaaS
                    <br />
                    Landing Page
                  </>
                </Heading>
                <Heading
                  size="headinglg"
                  as="h3"
                  className="text-[45.51px] font-bold tracking-[-1.59px] text-primary-900 lg:text-[38px] md:text-[29px] sm:text-[23px]"
                >
                  Free Figma Template
                </Heading>
              </div>
              <Button
                color="white_A700"
                size="xl"
                leftIcon={<Img src="images/img_figma.svg" alt="Figma" className="h-[54px] w-[54px] object-contain" />}
                className="min-w-[342px] gap-2.5 rounded-[44px] px-[34px] font-bold !text-black-900 shadow-xs sm:px-4"
              >
                Free Download
              </Button>
            </div>
          </div>
          <div className="flex w-[66%] items-center justify-center md:w-full md:flex-col">
            <div className="relative z-[3] flex-1 self-end md:self-stretch">
              <Img
                src="images/img_image.png"
                alt="Feature Image"
                className="ml-6 h-[746px] w-full object-cover lg:h-auto md:ml-0 md:h-auto"
              />
              <Img
                src="images/img_image_150x718.png"
                alt="Banner Image"
                className="ml-6 h-[150px] w-full object-cover lg:h-auto md:ml-0 md:h-auto"
              />
            </div>
            <div className="relative ml-[-88px] w-[32%] md:ml-0 md:w-full">
              <Img
                src="images/img_image_122x356.png"
                alt="Gallery Image One"
                className="relative z-[1] h-[122px] w-full object-cover lg:h-auto md:h-auto"
              />
              <Img
                src="images/img_image_370x356.png"
                alt="Gallery Image Two"
                className="h-[370px] w-full object-cover lg:h-auto md:h-auto"
              />
              <Img
                src="images/img_image_1.png"
                alt="Gallery Image Three"
                className="relative z-[2] h-[370px] w-full object-cover lg:h-auto md:h-auto"
              />
              <Img
                src="images/img_image_94x356.png"
                alt="Gallery Image Four"
                className="h-[94px] w-full object-cover lg:h-auto md:h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
