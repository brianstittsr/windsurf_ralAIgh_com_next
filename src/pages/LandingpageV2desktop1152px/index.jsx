import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import AppsIntegrationSection from "./AppsIntegrationSection";
import CustomisationSection from "./CustomisationSection";
import DataSecuritySection from "./DataSecuritySection";
import ImageColumnSection from "./ImageColumnSection";
import LandingPageMainSection from "./LandingPageMainSection";
import PricingPlansSection from "./PricingPlansSection";
import SponsorsSection from "./SponsorsSection";
import TestimonialsSection from "./TestimonialsSection";
import React from "react";

export default function LandingpageV2desktop1152pxPage() {
  return (
    <>
      <Helmet>
        <title>Work Organization Software | Whitepace</title>
        <meta
          name="description"
          content="Keep your work organized and accessible everywhere with Whitepace. Sync across devices, secure your data with E2EE, and connect with your favorite apps."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div className="mt-3.5 flex flex-col gap-4">
          <header className="mx-8 flex items-center justify-between gap-5 md:mx-0 md:flex-col">
            <Img src="images/img_header_logo.png" alt="Header Logo" className="h-[34px] w-[190px] object-contain" />
            <div className="flex w-[40%] items-center justify-center gap-5 md:w-full md:px-5 sm:flex-col">
              <div className="flex flex-1 justify-center gap-6 sm:self-stretch">
                <Button
                  color="amber_200"
                  shape="round"
                  className="min-w-[126px] rounded-lg px-[34px] font-medium tracking-[-0.36px] sm:px-5"
                >
                  Login
                </Button>
                <Button
                  shape="round"
                  rightIcon={
                    <Img
                      src="images/img_arrowleft_white_a700.svg"
                      alt="Arrow Left"
                      className="my-1.5 h-[10px] w-[10px] object-contain"
                    />
                  }
                  className="min-w-[226px] gap-2.5 rounded-lg px-6 font-medium tracking-[-0.36px] sm:px-5"
                >
                  Try Whitepace free
                </Button>
              </div>
              <a href="#">
                <Img src="images/img_megaphone_blue_400.svg" alt="Promo Image" className="h-[24px] sm:w-full" />
              </a>
            </div>
          </header>
          <div className="flex flex-col items-start justify-end bg-white-a700 py-[68px] md:py-5">
            <Heading
              size="header_h2"
              as="h1"
              className="relative z-[1] ml-8 mt-[70px] w-[50%] text-[64px] font-bold leading-[77px] tracking-[-1.28px] text-blue-400 md:ml-0 md:w-full md:px-5 md:text-[48px]"
            >
              Get More Done with whitepace
            </Heading>
            <div className="relative mt-[-148px] flex h-[426px] items-start self-stretch bg-[url(/public/images/img_group_278.png)] bg-cover bg-no-repeat px-8 md:h-auto sm:px-5">
              <div className="container-sm mb-[70px] flex">
                <div className="flex w-full items-center md:flex-col">
                  <div className="flex flex-1 flex-col items-start gap-[60px] self-end md:self-stretch sm:gap-[30px]">
                    <Text
                      as="p"
                      className="w-full text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-blue-400"
                    >
                      Project management software that enables your teams to collaborate, plan, analyze and manage
                      everyday tasks
                    </Text>
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
                  <div className="mb-1 h-[350px] w-[48%] bg-primary-100" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* landing page main section */}
        <LandingPageMainSection />

        {/* customisation section */}
        <CustomisationSection />

        {/* pricing plans section */}
        <PricingPlansSection />
        <div className="relative mt-[82px] h-[836px] content-center md:h-auto">
          {/* image column section */}
          <ImageColumnSection />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start justify-center gap-[60px] px-8 py-[196px] md:py-5 sm:gap-[30px] sm:p-5">
            <div className="relative h-[298px] self-stretch md:h-auto">
              <Img
                src="images/img_element_blue_400.svg"
                alt="Feature Image"
                className="mt-[54px] h-[116px] w-[28%] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-[22px]">
                <Heading
                  size="header_h2"
                  as="h2"
                  className="w-[60%] text-[64px] font-bold leading-[77px] tracking-[-1.28px] text-white-a700 md:w-full md:text-[48px]"
                >
                  Your work, everywhere you are
                </Heading>
                <Text
                  as="p"
                  className="w-[60%] text-center text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-white-a700 md:w-full"
                >
                  Access your notes from your computer, phone or tablet by synchronising with various services,
                  including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and
                  iOS. A terminal app is also available!
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
              className="mb-5 min-w-[194px] gap-2.5 rounded-lg px-[34px] font-medium tracking-[-0.36px] sm:px-5"
            >
              Try Taskey
            </Button>
          </div>
        </div>

        {/* data security section */}
        <DataSecuritySection />

        {/* sponsors section */}
        <SponsorsSection />

        {/* apps integration section */}
        <AppsIntegrationSection />

        {/* testimonials section */}
        <TestimonialsSection />
        <Footer className="mt-[100px] bg-indigo-900 p-8 sm:p-5" />
      </div>
    </>
  );
}
