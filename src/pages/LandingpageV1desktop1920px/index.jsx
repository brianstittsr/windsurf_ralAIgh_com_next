import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AppsIntegrationSection from "./AppsIntegrationSection";
import ClientTestimonialsSection from "./ClientTestimonialsSection";
import CustomizationSection from "./CustomizationSection";
import DataSecuritySection from "./DataSecuritySection";
import HeroSection from "./HeroSection";
import LandingPageMainSection from "./LandingPageMainSection";
import PricingPlansSection from "./PricingPlansSection";
import SponsorsSection from "./SponsorsSection";
import UseAsExtensionSection from "./UseAsExtensionSection";
import React from "react";

export default function LandingpageV1desktop1920pxPage() {
  return (
    <>
      <Helmet>
        <title>Project Management Software | Collaborate with Whitepace</title>
        <meta
          name="description"
          content="Whitepace is the ultimate project management software for teams to plan, collaborate, and manage tasks. Get started for free and boost productivity with Whitepace."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div>
          <div>
            <Header className="bg-indigo-900" />

            {/* hero section */}
            <HeroSection />
          </div>

          {/* landing page main section */}
          <LandingPageMainSection />

          {/* use as extension section */}
          <UseAsExtensionSection />

          {/* customization section */}
          <CustomizationSection />
          <div className="mt-[274px]">
            {/* pricing plans section */}
            <PricingPlansSection />
            <div className="relative z-[2] mt-[-44px] h-[836px] content-end lg:h-auto md:h-auto">
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
                    className="relative z-[3] h-[836px] w-[24%] object-contain md:w-full"
                  />
                  <div className="relative ml-[-72px] h-[170px] flex-1 lg:h-auto md:ml-0 md:h-auto md:w-full md:flex-none md:self-stretch md:px-5">
                    <Img
                      src="images/img_element_blue_400.svg"
                      alt="Feature Image"
                      className="mr-[412px] mt-[62px] h-[22px] w-[28%] object-contain lg:mr-0 md:mr-0"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-2.5">
                      <Heading
                        as="h3"
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

          {/* client testimonials section */}
          <ClientTestimonialsSection />
          <div className="mt-[140px]">
            <div>
              <div className="flex flex-col items-center bg-indigo-900 py-8 sm:py-4">
                <div className="container-xl mt-[108px] flex flex-col items-center gap-10 px-14 lg:px-5 md:px-5">
                  <div className="flex w-[44%] flex-col items-center gap-[22px] lg:w-full md:w-full">
                    <Heading
                      as="h2"
                      className="self-stretch text-center text-[72px] font-bold leading-[87px] tracking-[-1.44px] text-white-a700 lg:text-[48px] md:text-[48px]"
                    >
                      Try Whitepace today
                    </Heading>
                    <Text
                      size="paragraph_p1_regular"
                      as="p"
                      className="text-center text-[24px] font-normal leading-8 tracking-[-0.48px] text-white-a700 lg:text-[20px]"
                    >
                      <>
                        Get started for free.
                        <br />
                        Add your whole team as your needs grow.
                      </>
                    </Text>
                  </div>
                  <Button
                    shape="round"
                    rightIcon={
                      <Img
                        src="images/img_arrowleft_white_a700.svg"
                        alt="Arrow Left"
                        className="mb-1 mt-0.5 h-[14px] w-[14px] object-contain"
                      />
                    }
                    className="min-w-[218px] gap-2.5 rounded-[10px] px-[34px] font-medium tracking-[-0.32px] sm:px-4"
                  >
                    Try Taskey free
                  </Button>
                  <Text
                    size="paragraph_p1_regular"
                    as="p"
                    className="text-[24px] font-normal tracking-[-0.48px] text-white-a700 lg:text-[20px]"
                  >
                    On a big team? Contact sales
                  </Text>
                  <div className="flex w-[18%] justify-between gap-5 lg:w-full md:w-full">
                    <Img
                      src="images/img_apple_black_logo_white_a700.svg"
                      alt="Apple Icon"
                      className="h-[60px] w-[22%] object-contain"
                    />
                    <Img
                      src="images/img_windows_logo_1.svg"
                      alt="Windows Icon"
                      className="h-[60px] w-[22%] object-contain"
                    />
                    <Img
                      src="images/img_android_logo_1.svg"
                      alt="Android Icon"
                      className="h-[60px] w-[22%] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center bg-indigo-900 py-8 sm:py-4">
              <div className="container-xl mt-[108px] flex justify-center lg:px-5 md:px-5">
                <Footer className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
