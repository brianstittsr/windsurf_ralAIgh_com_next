import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import AppleImageComponent from "../../components/AppleImageComponent";
import Footer from "../../components/Footer";
import AppsIntegrationSection from "./AppsIntegrationSection";
import ClientTestimonialsSection from "./ClientTestimonialsSection";
import CustomisationSection from "./CustomisationSection";
import ImageColumnSection from "./ImageColumnSection";
import IntroductionSection from "./IntroductionSection";
import PricingPlansSection from "./PricingPlansSection";
import React from "react";

export default function LandingpageV1desktop1152pxPage() {
  return (
    <>
      <Helmet>
        <title>Work Organizer App | Sync Across Devices with Whitepace</title>
        <meta
          name="description"
          content="Organize your work and personal life with Whitepace. Access notes across devices, customize your dashboard, and secure your data with end-to-end encryption."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-a700">
        <header className="flex items-center self-stretch bg-indigo-900 p-4">
          <div className="container-sm flex items-center justify-between gap-5 md:flex-col">
            <Img src="images/img_header_logo.png" alt="Header Logo" className="h-[34px] w-[190px] object-contain" />
            <div className="flex w-[40%] items-center justify-center gap-5 md:w-full sm:flex-col">
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
                <Img src="images/img_megaphone.svg" alt="Promo Image" className="h-[24px] sm:w-full" />
              </a>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-start justify-end self-stretch bg-indigo-900 py-[68px] md:py-5">
          <Heading
            size="header_h2"
            as="h1"
            className="relative z-[1] ml-8 mt-[70px] w-[50%] text-[64px] font-bold leading-[77px] tracking-[-1.28px] text-white-a700 md:ml-0 md:w-full md:px-5 md:text-[48px]"
          >
            Get More Done with whitepace
          </Heading>
          <div className="relative mt-[-148px] flex h-[426px] items-start self-stretch bg-[url(/public/images/img_group_278.png)] bg-cover bg-no-repeat px-8 md:h-auto sm:px-5">
            <div className="container-sm mb-[70px] flex">
              <div className="flex w-full items-center md:flex-col">
                <div className="flex flex-1 flex-col items-start gap-[60px] self-end md:self-stretch sm:gap-[30px]">
                  <Text
                    as="p"
                    className="w-full text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-white-a700"
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
        <div className="relative mr-8 mt-[62px] h-[1090px] self-stretch md:mr-0">
          <Img
            src="images/img_background_blue_gray_100_272x144.png"
            alt="Background Image"
            className="absolute left-0 top-0 m-auto h-[272px] w-[12%] object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 mx-auto flex flex-1 flex-col items-center gap-[100px] md:gap-[75px] sm:gap-[50px]">
            <div className="container-sm ml-8 flex items-center self-stretch md:ml-0 md:flex-col md:px-5">
              <div className="flex w-[48%] flex-col items-start gap-[60px] md:w-full sm:gap-[30px]">
                <div className="relative h-[298px] content-center self-stretch md:h-auto">
                  <Img
                    src="images/img_element_amber_200_38x514.svg"
                    alt="Element Image"
                    className="ml-auto mr-[108px] h-[38px] w-[56%] object-contain md:mr-0"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-[22px]">
                    <Heading
                      size="header_h2"
                      as="h2"
                      className="w-[82%] text-[64px] font-bold leading-[77px] tracking-[-1.28px] text-gray-900 md:w-full md:text-[48px]"
                    >
                      Project Management
                    </Heading>
                    <Text
                      as="p"
                      className="w-[82%] text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900 md:w-full"
                    >
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
                  className="min-w-[200px] gap-2.5 rounded-md px-[34px] font-medium tracking-[-0.36px] sm:px-5"
                >
                  Get Started
                </Button>
              </div>
              <Img
                src="images/img_image_container.svg"
                alt="Image Container"
                className="h-[384px] w-[50%] object-contain md:w-full"
              />
            </div>
            <div className="container-sm ml-8 flex items-center gap-8 self-stretch md:ml-0 md:flex-col md:px-5">
              <Img
                src="images/img_work_together_image_blue_200_490x528.svg"
                alt="Collaboration Image"
                className="h-[490px] w-[50%] object-contain md:w-full"
              />
              <div className="flex flex-1 flex-col items-start gap-[60px] md:self-stretch sm:gap-[30px]">
                <div className="relative h-[190px] self-stretch md:h-auto">
                  <Img
                    src="images/img_element_amber_200.svg"
                    alt="Work Image"
                    className="mr-[82px] mt-[42px] h-[24px] w-[60%] object-contain md:mr-0"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-2.5">
                    <Heading
                      size="header_h2"
                      as="h3"
                      className="text-[64px] font-bold tracking-[-1.28px] text-gray-900 md:text-[48px]"
                    >
                      Work together
                    </Heading>
                    <Text
                      as="p"
                      className="w-full text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900"
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
                  className="min-w-[186px] gap-2.5 rounded-md px-[34px] font-medium tracking-[-0.36px] sm:px-5"
                >
                  Try it now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[140px] self-stretch bg-indigo-900 py-[140px] md:py-5">
          {/* introduction section */}
          <IntroductionSection />
        </div>

        {/* customisation section */}
        <CustomisationSection />

        {/* pricing plans section */}
        <PricingPlansSection />
        <div className="relative mt-[82px] h-[836px] content-center self-stretch md:h-auto">
          {/* image column section */}
          <ImageColumnSection />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start justify-center gap-[60px] px-8 py-[196px] md:py-5 sm:gap-[30px] sm:p-5">
            <div className="relative h-[298px] self-stretch md:h-auto">
              <Img
                src="images/img_element_blue_400.svg"
                alt="Feature Image"
                className="mt-[54px] h-[108px] w-[28%] object-contain"
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
        <div className="container-sm mt-[60px] flex items-center self-stretch md:flex-col md:px-5">
          <div className="flex w-[48%] flex-col items-start gap-[60px] md:w-full sm:gap-[30px]">
            <div className="relative h-[220px] self-stretch md:h-auto">
              <Img
                src="images/img_element_amber_200.svg"
                alt="Feature Image"
                className="mr-[50px] mt-14 h-[40px] w-[60%] object-contain md:mr-0"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-3">
                <Heading
                  size="header_h2"
                  as="h2"
                  className="text-[64px] font-bold tracking-[-1.28px] text-gray-900 md:text-[48px]"
                >
                  100% your data
                </Heading>
                <Text as="p" className="w-full text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900">
                  The app is open source and your notes are saved to an open format, so you&#39;ll always have access to
                  them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access
                  them.
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
              className="min-w-[196px] gap-2.5 rounded-lg px-[34px] font-medium sm:px-5"
            >
              Read more
            </Button>
          </div>
          <Img
            src="images/img_element_blue_200_314x562.svg"
            alt="Side Image"
            className="h-[314px] w-[52%] object-contain md:w-full"
          />
        </div>
        <div className="container-sm relative mt-[280px] h-[246px] self-stretch md:h-auto md:px-5">
          <Img
            src="images/img_element_amber_200.svg"
            alt="Image Element"
            className="mr-[324px] mt-[58px] h-[40px] w-[38%] object-contain md:mr-0"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center gap-[88px] md:gap-[66px] sm:gap-11">
            <Heading
              size="header_h2"
              as="h2"
              className="text-[64px] font-bold tracking-[-1.28px] text-gray-900 md:text-[48px]"
            >
              Our sponsors
            </Heading>
            <div className="flex gap-[84px] self-stretch md:flex-col">
              <AppleImageComponent />
              <Img
                src="images/img_microsoft.svg"
                alt="Microsoft Image"
                className="h-[62px] w-[34%] object-contain md:w-full"
              />
              <Img src="images/img_slack.svg" alt="Slack" className="h-[70px] w-[34%] object-contain md:w-full" />
              <Img src="images/img_google.svg" alt="Google" className="h-[68px] w-[24%] object-contain md:w-full" />
            </div>
          </div>
        </div>

        {/* apps integration section */}
        <AppsIntegrationSection />

        {/* client testimonials section */}
        <ClientTestimonialsSection />
        <div className="mt-[140px] flex flex-col items-center gap-10 self-stretch bg-indigo-900 p-8 sm:p-5">
          <div className="mt-[108px] flex w-[56%] flex-col items-center gap-[22px] md:w-full">
            <Heading
              as="h2"
              className="self-stretch text-center text-[72px] font-bold leading-[87px] tracking-[-1.44px] text-white-a700 md:text-[48px]"
            >
              Try Whitepace today
            </Heading>
            <Text
              size="paragraph_p1_regular"
              as="p"
              className="text-center text-[24px] font-normal leading-8 tracking-[-0.48px] text-white-a700 md:text-[22px]"
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
                className="my-1 h-[14px] w-[14px] object-contain"
              />
            }
            className="min-w-[240px] gap-2.5 rounded-[10px] px-[34px] font-montserrat font-medium sm:px-5"
          >
            Try Taskey free
          </Button>
          <Text
            size="paragraph_p1_regular"
            as="p"
            className="text-[24px] font-normal tracking-[-0.48px] text-white-a700 md:text-[22px]"
          >
            On a big team? Contact sales
          </Text>
          <div className="flex w-[24%] justify-between gap-5 md:w-full">
            <Img
              src="images/img_apple_black_logo_white_a700.svg"
              alt="Apple Logo"
              className="h-[60px] w-[22%] object-contain"
            />
            <Img src="images/img_windows_logo_1.svg" alt="Windows Logo" className="h-[60px] w-[22%] object-contain" />
            <Img src="images/img_android_logo_1.svg" alt="Android Logo" className="h-[60px] w-[22%] object-contain" />
          </div>
        </div>
        <Footer className="self-stretch bg-indigo-900 p-8 sm:p-5" />
      </div>
    </>
  );
}
