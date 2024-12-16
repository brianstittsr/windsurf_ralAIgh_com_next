import { Text, Heading, Img } from "../../components";
import PricingPlanDetails1 from "../../components/PricingPlanDetails1";
import React, { Suspense } from "react";

const additionalPricingOptions = [
  {
    planName: "Free",
    planPrice: "$0",
    planDescription: "Capture ideas and find them quickly",
    featureImage1: "images/img_checkmark_gray_900.svg",
    featureDescription1: "Sync unlimited devices",
    featureImage2: "images/img_checkmark_gray_900.svg",
    featureDescription2: "10 GB monthly uploads",
    featureImage3: "images/img_checkmark_gray_900.svg",
    featureDescription3: "200 MB max. note size",
    featureImage4: "images/img_checkmark_gray_900.svg",
    featureDescription4: "Customize Home dashboard and access extra widgets",
    featureImage5: "images/img_checkmark_gray_900.svg",
    featureDescription5: "Connect primary Google Calendar account",
    featureImage6: "images/img_checkmark_gray_900.svg",
    featureDescription6: "Add due dates, reminders, and notifications to your tasks ",
    buttonText: "Get Started",
  },
  {
    planName: "Personal",
    planPrice: "$11.99",
    planDescription: "Keep home and family on track",
    featureImage1: "images/img_checkmark_gray_900.svg",
    featureDescription1: "Sync unlimited devices",
    featureImage2: "images/img_checkmark_gray_900.svg",
    featureDescription2: "10 GB monthly uploads",
    featureImage3: "images/img_checkmark_gray_900.svg",
    featureDescription3: "200 MB max. note size",
    featureImage4: "images/img_checkmark_gray_900.svg",
    featureDescription4: "Customize Home dashboard and access extra widgets",
    featureImage5: "images/img_checkmark_gray_900.svg",
    featureDescription5: "Connect primary Google Calendar account",
    featureImage6: "images/img_checkmark_gray_900.svg",
    featureDescription6: "Add due dates, reminders, and notifications to your tasks ",
    buttonText: "Get Started",
    featureimage1: "images/img_checkmark_blue_400.svg",
    featuredescription1: "Sync unlimited devices",
    featureimage2: "images/img_checkmark_blue_400.svg",
    featuredescription2: "10 GB monthly uploads",
    featureimage3: "images/img_checkmark_blue_400.svg",
    featuredescription3: "200 MB max. note size",
    featureimage4: "images/img_checkmark_blue_400.svg",
    featuredescription4: "Customize Home dashboard and access extra widgets",
    featureimage5: "images/img_checkmark_blue_400.svg",
    featuredescription5: "Connect primary Google Calendar account",
    featureimage6: "images/img_checkmark_blue_400.svg",
    featuredescription6: "Add due dates, reminders, and notifications to your tasks ",
  },
  {
    planName: "Organization",
    planPrice: "$49.99",
    planDescription: "Capture ideas and find them quickly",
    featureImage1: "images/img_checkmark_gray_900.svg",
    featureDescription1: "Sync unlimited devices",
    featureImage2: "images/img_checkmark_gray_900.svg",
    featureDescription2: "10 GB monthly uploads",
    featureImage3: "images/img_checkmark_gray_900.svg",
    featureDescription3: "200 MB max. note size",
    featureImage4: "images/img_checkmark_gray_900.svg",
    featureDescription4: "Customize Home dashboard and access extra widgets",
    featureImage5: "images/img_checkmark_gray_900.svg",
    featureDescription5: "Connect primary Google Calendar account",
    featureImage6: "images/img_checkmark_gray_900.svg",
    featureDescription6: "Add due dates, reminders, and notifications to your tasks ",
    buttonText: "Get Started",
    featureimage1: "images/img_checkmark_gray_900.svg",
    featuredescription1: "Sync unlimited devices",
    featureimage2: "images/img_checkmark_gray_900.svg",
    featuredescription2: "10 GB monthly uploads",
    featureimage3: "images/img_checkmark_gray_900.svg",
    featuredescription3: "200 MB max. note size",
    featureimage4: "images/img_checkmark_gray_900.svg",
    featuredescription4: "Customize Home dashboard and access extra widgets",
    featureimage5: "images/img_checkmark_gray_900.svg",
    featuredescription5: "Connect primary Google Calendar account",
    featureimage6: "images/img_checkmark_gray_900.svg",
    featuredescription6: "Add due dates, reminders, and notifications to your tasks ",
  },
];

export default function PricingPlansSection() {
  return (
    <>
      {/* pricing plans section */}
      <div className="mt-[274px] flex flex-col items-center gap-[60px] px-8 sm:gap-[30px] sm:px-5">
        <div className="container-xs relative h-[166px] content-center self-stretch md:h-auto">
          <Img
            src="images/img_element_amber_200.svg"
            alt="Image Element"
            className="ml-auto mr-[226px] h-[28px] w-[34%] object-contain md:mr-0"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center gap-[18px]">
            <Heading
              size="header_h2"
              as="h2"
              className="text-[64px] font-bold tracking-[-1.28px] text-gray-900 md:text-[48px]"
            >
              Choose Your Plan
            </Heading>
            <Text
              as="p"
              className="self-stretch text-center text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900"
            >
              Whether you want to get organized, keep your personal life on track, or boost workplace productivity,
              Evernote has the right plan for you.
            </Text>
          </div>
        </div>
        <div className="container-sm flex gap-8 self-stretch md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {additionalPricingOptions.map((d, index) => (
              <PricingPlanDetails1 {...d} key={"priceList" + index} className="my-[78px] hover:shadow-xl md:my-0" />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}
