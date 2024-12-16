import { Text, Heading, Img } from "../../components";
import PricingPlanDetails from "../../components/PricingPlanDetails";
import React, { Suspense } from "react";

const pricingOptionsList = [
  {
    planName: "Free",
    planPrice: "$0",
    planDescription: "Capture ideas and find them quickly",
    featureIcon1: "images/img_checkmark_gray_900.svg",
    featureDescription1: "Sync unlimited devices",
    featureIcon2: "images/img_checkmark_gray_900.svg",
    featureDescription2: "10 GB monthly uploads",
    featureIcon3: "images/img_checkmark_gray_900.svg",
    featureDescription3: "200 MB max. note size",
    featureIcon4: "images/img_checkmark_gray_900.svg",
    featureDescription4: "Customize Home dashboard and access extra widgets",
    featureIcon5: "images/img_checkmark_gray_900.svg",
    featureDescription5: "Connect primary Google Calendar account",
    featureIcon6: "images/img_checkmark_gray_900.svg",
    featureDescription6: "Add due dates, reminders, and notifications to your tasks ",
    buttonText: "Get Started",
  },
  {
    planName: "Personal",
    planPrice: "$11.99",
    planDescription: "Keep home and family on track",
    featureIcon1: "images/img_checkmark_gray_900.svg",
    featureDescription1: "Sync unlimited devices",
    featureIcon2: "images/img_checkmark_gray_900.svg",
    featureDescription2: "10 GB monthly uploads",
    featureIcon3: "images/img_checkmark_gray_900.svg",
    featureDescription3: "200 MB max. note size",
    featureIcon4: "images/img_checkmark_gray_900.svg",
    featureDescription4: "Customize Home dashboard and access extra widgets",
    featureIcon5: "images/img_checkmark_gray_900.svg",
    featureDescription5: "Connect primary Google Calendar account",
    featureIcon6: "images/img_checkmark_gray_900.svg",
    featureDescription6: "Add due dates, reminders, and notifications to your tasks ",
    buttonText: "Get Started",
    featureicon1: "images/img_checkmark_amber_200.svg",
    featuredescription1: "Sync unlimited devices",
    featureicon2: "images/img_checkmark_amber_200.svg",
    featuredescription2: "10 GB monthly uploads",
    featureicon3: "images/img_checkmark_amber_200.svg",
    featuredescription3: "200 MB max. note size",
    featureicon4: "images/img_checkmark_amber_200.svg",
    featuredescription4: "Customize Home dashboard and access extra widgets",
    featureicon5: "images/img_checkmark_amber_200.svg",
    featuredescription5: "Connect primary Google Calendar account",
    featureicon6: "images/img_checkmark_amber_200.svg",
    featuredescription6: "Add due dates, reminders, and notifications to your tasks ",
  },
  {
    planName: "Organization",
    planPrice: "$49.99",
    planDescription: "Capture ideas and find them quickly",
    featureIcon1: "images/img_checkmark_gray_900.svg",
    featureDescription1: "Sync unlimited devices",
    featureIcon2: "images/img_checkmark_gray_900.svg",
    featureDescription2: "10 GB monthly uploads",
    featureIcon3: "images/img_checkmark_gray_900.svg",
    featureDescription3: "200 MB max. note size",
    featureIcon4: "images/img_checkmark_gray_900.svg",
    featureDescription4: "Customize Home dashboard and access extra widgets",
    featureIcon5: "images/img_checkmark_gray_900.svg",
    featureDescription5: "Connect primary Google Calendar account",
    featureIcon6: "images/img_checkmark_gray_900.svg",
    featureDescription6: "Add due dates, reminders, and notifications to your tasks ",
    buttonText: "Get Started",
  },
];

export default function PricingPlansSection() {
  return (
    <>
      {/* pricing plans section */}
      <div className="flex flex-col items-center">
        <div className="container-xl flex flex-col gap-[60px] lg:px-5 md:px-5 sm:gap-[30px]">
          <div className="relative h-[176px] px-[250px] lg:h-auto lg:px-8 md:h-auto md:px-5 sm:px-4">
            <Img
              src="images/img_element_amber_200.svg"
              alt="Feature Image"
              className="mr-[178px] mt-16 h-[30px] w-[40%] object-contain lg:mr-0 md:mr-0"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center gap-[18px]">
              <Heading
                as="h2"
                className="text-[72px] font-bold tracking-[-1.44px] text-gray-900 lg:text-[48px] md:text-[48px]"
              >
                Choose Your Plan
              </Heading>
              <Text
                as="p"
                className="self-stretch text-center text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-900 lg:text-[15px]"
              >
                Whether you want to get organized, keep your personal life on track, or boost workplace productivity,
                Evernote has the right plan for you.
              </Text>
            </div>
          </div>
          <div className="flex gap-8 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {pricingOptionsList.map((d, index) => (
                <PricingPlanDetails {...d} key={"pricingList" + index} className="my-[62px] hover:shadow-xl md:my-0" />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
