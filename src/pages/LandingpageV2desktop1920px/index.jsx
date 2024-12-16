import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AppsIntegrationSection from "./AppsIntegrationSection";
import DataSecuritySection from "./DataSecuritySection";
import HeroSection from "./HeroSection";
import HeroSection1 from "./HeroSection1";
import LandingPageContentSection from "./LandingPageContentSection";
import PricingSection from "./PricingSection";
import SponsorsSection from "./SponsorsSection";
import TestimonialsSection from "./TestimonialsSection";
import React from "react";

export default function LandingpageV2desktop1920pxPage() {
  return (
    <>
      <Helmet>
        <title>Project Management Software | Whitepace</title>
        <meta
          name="description"
          content="Explore Whitepace project management software for effective team collaboration, planning, and task management. Try it free and boost productivity."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-4 bg-white-a700">
        <div className="container-xl mt-3.5 lg:px-5 md:px-5">
          <Header />
        </div>
        <div className="flex flex-col gap-[140px] self-stretch lg:gap-[105px] md:gap-[105px] sm:gap-[70px]">
          <div>
            <div className="bg-white-a700 py-[88px] lg:py-8 md:py-5 sm:py-4">
              {/* hero section */}
              <HeroSection />
            </div>

            {/* landing page content section */}
            <LandingPageContentSection />

            {/* hero section */}
            <HeroSection1 />
            <div className="mt-[140px]">
              {/* pricing section */}
              <PricingSection />
              <div className="relative z-[1] mt-[-184px] h-[836px] content-end lg:h-auto md:h-auto">
                <Img
                  src="images/defaultNoData.png"
                  alt="Create Image"
                  className="mb-[78px] h-[574px] w-[82%] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[836px] flex-1 content-center lg:h-auto md:h-auto">
                  <div className="flex flex-1 items-center md:flex-col">
                    <Img
                      src="images/img_background_blue_200.png"
                      alt="Background"
                      className="relative z-[2] h-[836px] w-[24%] object-contain md:w-full"
                    />
                    <div className="relative ml-[-72px] h-[170px] flex-1 lg:h-auto md:ml-0 md:h-auto md:w-full md:flex-none md:self-stretch md:px-5">
                      <Img
                        src="images/img_element_blue_400.svg"
                        alt="Image Element"
                        className="mr-[412px] mt-[62px] h-[22px] w-[28%] object-contain lg:mr-0 md:mr-0"
                      />
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-2.5">
                        <Heading
                          as="h6"
                          className="text-[72px] font-bold tracking-[-1.44px] text-white-a700 lg:text-[48px] md:text-[48px]"
                        >
                          Your work, everywhere you are
                        </Heading>
                        <Text
                          as="p"
                          className="self-stretch text-center text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-white-a700 lg:text-[15px]"
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
                    className="absolute bottom-[26%] left-0 right-0 mx-auto min-w-[194px] gap-2.5 rounded-lg px-[34px] font-medium tracking-[-0.36px] sm:px-4"
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
          <Footer className="bg-indigo-900 py-8 sm:py-4" />
        </div>
      </div>
    </>
  );
}
