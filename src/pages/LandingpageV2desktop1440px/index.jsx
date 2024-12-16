import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AppsIntegrationSection from "./AppsIntegrationSection";
import CustomisationSection from "./CustomisationSection";
import DataSecuritySection from "./DataSecuritySection";
import HeroSection from "./HeroSection";
import ImageRowSection from "./ImageRowSection";
import MainContentSection from "./MainContentSection";
import PricingSection from "./PricingSection";
import SponsorsSection from "./SponsorsSection";
import TestimonialsSection from "./TestimonialsSection";
import React from "react";

export default function LandingpageV2desktop1440pxPage() {
  return (
    <>
      <Helmet>
        <title>Team Collaboration Tool | Whitepace</title>
        <meta
          name="description"
          content="Whitepace offers a team collaboration platform to share notes, customize workflows, and integrate with apps. Start with our free plan or explore more features."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-4 bg-white-a700">
        <Header className="mx-8 mt-4 md:mx-0" />
        <div className="flex flex-col gap-[140px] md:gap-[105px] sm:gap-[70px]">
          <div>
            <div className="bg-white-a700 py-[70px] md:py-5">
              {/* hero section */}
              <HeroSection />
            </div>

            {/* main content section */}
            <MainContentSection />

            {/* customisation section */}
            <CustomisationSection />
            <div className="mt-[274px]">
              {/* pricing section */}
              <PricingSection />
              <div className="relative z-[1] mt-[-44px] h-[836px] content-end md:h-auto">
                {/* image row section */}
                <ImageRowSection />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[836px] flex-1 content-center md:h-auto">
                  <div className="flex flex-1 items-center md:flex-col">
                    <Img
                      src="images/img_background_blue_200_836x260.png"
                      alt="Background"
                      className="relative z-[2] h-[836px] w-[16%] object-contain md:w-full"
                    />
                    <div className="relative ml-[-72px] h-[170px] flex-1 md:ml-0 md:h-auto md:w-full md:flex-none md:self-stretch md:px-5">
                      <Img
                        src="images/img_element_blue_400.svg"
                        alt="Feature Image"
                        className="mr-[174px] mt-[60px] h-[22px] w-[28%] object-contain md:mr-0"
                      />
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-2.5">
                        <Heading
                          as="h6"
                          className="text-[72px] font-bold tracking-[-1.44px] text-white-a700 md:text-[48px]"
                        >
                          Your work, everywhere you are
                        </Heading>
                        <Text
                          as="p"
                          className="self-stretch text-center text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-white-a700"
                        >
                          Access your notes from your computer, phone or tablet by synchronising with various services,
                          including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux,
                          Android and iOS. A terminal app is also available!
                        </Text>
                      </div>
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
                    className="absolute bottom-[26%] left-0 right-0 mx-auto min-w-[194px] gap-2.5 rounded-lg px-[34px] font-medium tracking-[-0.36px] sm:px-5"
                  >
                    Try Taskey
                  </Button>
                </div>
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
          </div>
          <Footer className="bg-indigo-900 p-8 sm:p-5" />
        </div>
      </div>
    </>
  );
}
