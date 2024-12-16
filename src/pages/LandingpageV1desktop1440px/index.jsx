import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import MegaMenu1 from "../../components/MegaMenu1";
import AppsIntegrationSection from "./AppsIntegrationSection";
import ClientTestimonialsSection from "./ClientTestimonialsSection";
import CustomisationSection from "./CustomisationSection";
import FreeTrialSection from "./FreeTrialSection";
import HeroSection from "./HeroSection";
import ImageRowSection from "./ImageRowSection";
import IntroSection from "./IntroSection";
import PricingPlansSection from "./PricingPlansSection";
import SponsorsSection from "./SponsorsSection";
import WebClipperSection from "./WebClipperSection";
import React from "react";

export default function LandingpageV1desktop1440pxPage() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);
  const [menuOpen3, setMenuOpen3] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Team Collaboration Tool | Whitepace for Business</title>
        <meta
          name="description"
          content="Enhance team collaboration with Whitepace. Share notes, manage projects, and integrate with over 1000+ apps. Try Whitepace free and empower your team."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div>
          <div>
            <header className="relative flex items-center justify-between gap-5 bg-indigo-900 px-8 py-4 md:flex-col sm:px-5">
              <Img src="images/img_header_logo.png" alt="Header Logo" className="h-[34px] w-[190px] object-contain" />
              <div className="mx-auto flex w-full max-w-[928px] items-center justify-between gap-5 md:flex-col">
                <ul className="flex gap-8 sm:flex-col">
                  <li
                    onMouseLeave={() => {
                      setMenuOpen(false);
                    }}
                    onMouseEnter={() => {
                      setMenuOpen(true);
                    }}
                  >
                    <div className="flex cursor-pointer items-center gap-2.5">
                      <Heading size="texts" as="p" className="font-dmsans text-[18px] font-medium text-white-a700">
                        Products
                      </Heading>
                      <Img
                        src="images/img_arrow_down_white_a700.svg"
                        alt="Products Arrow"
                        className="h-[4px] w-[8px]"
                      />
                    </div>
                    {menuOpen ? <MegaMenu1 /> : null}
                  </li>
                  <li
                    onMouseLeave={() => {
                      setMenuOpen1(false);
                    }}
                    onMouseEnter={() => {
                      setMenuOpen1(true);
                    }}
                  >
                    <div className="flex cursor-pointer items-center gap-2.5">
                      <Heading size="texts" as="p" className="font-dmsans text-[18px] font-medium text-white-a700">
                        Solutions
                      </Heading>
                      <Img
                        src="images/img_arrow_down_white_a700.svg"
                        alt="Solutions Arrow"
                        className="h-[4px] w-[8px]"
                      />
                    </div>
                    {menuOpen1 ? <MegaMenu1 /> : null}
                  </li>
                  <li
                    onMouseLeave={() => {
                      setMenuOpen2(false);
                    }}
                    onMouseEnter={() => {
                      setMenuOpen2(true);
                    }}
                  >
                    <div className="flex cursor-pointer items-center gap-2.5">
                      <Heading size="texts" as="p" className="font-dmsans text-[18px] font-medium text-white-a700">
                        Resources
                      </Heading>
                      <Img
                        src="images/img_arrow_down_white_a700.svg"
                        alt="Resources Arrow"
                        className="h-[4px] w-[8px]"
                      />
                    </div>
                    {menuOpen2 ? <MegaMenu1 /> : null}
                  </li>
                  <li
                    onMouseLeave={() => {
                      setMenuOpen3(false);
                    }}
                    onMouseEnter={() => {
                      setMenuOpen3(true);
                    }}
                  >
                    <div className="flex cursor-pointer items-center gap-2.5">
                      <Heading size="texts" as="p" className="font-dmsans text-[18px] font-medium text-white-a700">
                        Pricing
                      </Heading>
                      <Img
                        src="images/img_arrow_down_white_a700.svg"
                        alt="Pricing Arrow"
                        className="mt-2 h-[4px] w-[8px]"
                      />
                    </div>
                    {menuOpen3 ? <MegaMenu1 /> : null}
                  </li>
                </ul>
                <div className="flex gap-6">
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
              </div>
            </header>
            <div className="bg-indigo-900 py-[70px] md:py-5">
              {/* hero section */}
              <HeroSection />
            </div>
          </div>
          <div className="relative mr-8 h-[1370px] md:mr-0 md:h-auto">
            <div className="mt-[136px] flex flex-1 items-center justify-center md:flex-col">
              <div className="flex w-[46%] flex-col items-start gap-[60px] md:w-full md:px-5 sm:gap-[30px]">
                <div className="relative h-[288px] content-end self-stretch md:h-auto">
                  <Img
                    src="images/img_element_amber_200_38x514.svg"
                    alt="Feature Image"
                    className="mb-[98px] h-[38px] w-[78%] object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col gap-[22px]">
                    <Heading
                      as="h2"
                      className="text-[72px] font-bold leading-[87px] tracking-[-1.44px] text-gray-900 md:text-[48px]"
                    >
                      Project Management
                    </Heading>
                    <Text as="p" className="text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900">
                      Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly
                      from the app. Take photos with the mobile app and save them to a note.
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
                  className="min-w-[200px] gap-2.5 rounded-lg px-[34px] font-medium tracking-[-0.36px] sm:px-5"
                >
                  Get Started
                </Button>
              </div>
              <div className="h-[448px] w-[50%] bg-primary-100 md:px-5" />
            </div>
            <div className="absolute left-0 right-0 top-[2.61px] mx-auto h-[1228px] flex-1">
              <Img
                src="images/img_work_together_image_blue_200.svg"
                alt="Collaboration Image"
                className="absolute bottom-[0.61px] left-[2%] m-auto h-[542px] w-[42%] object-contain"
              />
              <div className="absolute left-0 right-0 top-0 mx-auto flex flex-1 flex-col items-end gap-[60px] sm:gap-[30px]">
                <div className="relative h-[994px] content-end self-stretch md:h-auto">
                  <Img
                    src="images/img_element_amber_200.svg"
                    alt="Detail Image"
                    className="mb-[110px] ml-auto mr-[84px] h-[24px] w-[24%] object-contain md:mr-0"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-end">
                    <Img
                      src="images/img_background_blue_gray_100.png"
                      alt="Background Image"
                      className="h-[440px] w-[16%] self-start object-contain"
                    />
                    <Heading
                      as="h3"
                      className="mr-[136px] mt-[356px] text-[72px] font-bold tracking-[-1.44px] text-gray-900 md:mr-0 md:text-[48px]"
                    >
                      Work together
                    </Heading>
                    <Text
                      as="p"
                      className="mt-2.5 w-[44%] text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900 md:w-full md:px-5"
                    >
                      With whitepace, share your notes with your colleagues and collaborate on them.You can also publish
                      a note to the internet and share the URL with others.
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
                  className="mr-[446px] min-w-[186px] gap-2.5 rounded-lg px-[34px] font-medium tracking-[-0.36px] md:mr-0 sm:px-5"
                >
                  Try it now
                </Button>
              </div>
            </div>
          </div>

          {/* web clipper section */}
          <WebClipperSection />

          {/* customisation section */}
          <CustomisationSection />
          <div className="mt-[274px]">
            {/* pricing plans section */}
            <PricingPlansSection />
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
                      alt="Image Element"
                      className="mr-[174px] mt-[60px] h-[22px] w-[28%] object-contain md:mr-0"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-2.5">
                      <Heading
                        as="h3"
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

          {/* intro section */}
          <IntroSection />

          {/* sponsors section */}
          <SponsorsSection />

          {/* apps integration section */}
          <AppsIntegrationSection />

          {/* client testimonials section */}
          <ClientTestimonialsSection />

          {/* free trial section */}
          <FreeTrialSection />
          <Footer className="bg-indigo-900 p-8 sm:p-5" />
        </div>
      </div>
    </>
  );
}
