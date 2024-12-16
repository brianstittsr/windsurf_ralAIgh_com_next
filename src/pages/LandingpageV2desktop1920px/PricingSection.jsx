import { Text, Heading, Img } from "../../components";
import PricingPlanDetails from "../../components/PricingPlanDetails";
import React, { Suspense } from "react";

const pricingOptions = [
  {
    planName: "Free",
    planPrice: "$0",
    planDescription: "Capture ideas and find them quickly",
    featureicon1: "images/img_checkmark_gray_900.svg",
    featuredescription1: "Sync unlimited devices",
    featureicon2: "images/img_checkmark_gray_900.svg",
    featuredescription2: "10 GB monthly uploads",
    featureicon3: "images/img_checkmark_gray_900.svg",
    featuredescription3: "200 MB max. note size",
    featureicon4: "images/img_checkmark_gray_900.svg",
    featuredescription4: "Customize Home dashboard and access extra widgets",
    featureicon5: "images/img_checkmark_gray_900.svg",
    featuredescription5: "Connect primary Google Calendar account",
    featureicon6: "images/img_checkmark_gray_900.svg",
    featuredescription6: "Add due dates, reminders, and notifications to your tasks ",
    buttonText: "Get Started",
  },
  {
    planName: "Personal",
    planPrice: "$11.99",
    planDescription: "Keep home and family on track",
    featureicon1: "images/img_checkmark_blue_400.svg",
    featuredescription1: "Sync unlimited devices",
    featureicon2: "images/img_checkmark_blue_400.svg",
    featuredescription2: "10 GB monthly uploads",
    featureicon3: "images/img_checkmark_blue_400.svg",
    featuredescription3: "200 MB max. note size",
    featureicon4: "images/img_checkmark_blue_400.svg",
    featuredescription4: "Customize Home dashboard and access extra widgets",
    featureicon5: "images/img_checkmark_blue_400.svg",
    featuredescription5: "Connect primary Google Calendar account",
    featureicon6: "images/img_checkmark_blue_400.svg",
    featuredescription6: "Add due dates, reminders, and notifications to your tasks ",
    buttonText: "Get Started",
  },
  {
    planName: "Organization",
    planPrice: "$49.99",
    planDescription: "Capture ideas and find them quickly",
    featureicon1: "images/img_checkmark_gray_900.svg",
    featuredescription1: "Sync unlimited devices",
    featureicon2: "images/img_checkmark_gray_900.svg",
    featuredescription2: "10 GB monthly uploads",
    featureicon3: "images/img_checkmark_gray_900.svg",
    featuredescription3: "200 MB max. note size",
    featureicon4: "images/img_checkmark_gray_900.svg",
    featuredescription4: "Customize Home dashboard and access extra widgets",
    featureicon5: "images/img_checkmark_gray_900.svg",
    featuredescription5: "Connect primary Google Calendar account",
    featureicon6: "images/img_checkmark_gray_900.svg",
    featuredescription6: "Add due dates, reminders, and notifications to your tasks ",
    buttonText: "Get Started",
  },
];

export default function PricingSection() {
  return (
    <>
      {/* pricing section */}
      <div className="flex flex-col items-center justify-center py-[134px] lg:py-8 md:py-5 sm:py-4">
        <div className="container-xl mb-1 flex flex-col gap-[60px] lg:px-5 md:px-5 sm:gap-[30px]">
          <div className="relative mx-[250px] h-[176px] lg:h-auto md:mx-0 md:h-auto">
            <Img
              src="images/img_element_amber_200.svg"
              alt="Featured Image"
              className="mr-[178px] mt-16 h-[30px] w-[40%] object-contain lg:mr-0 md:mr-0"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center gap-[18px]">
              <Heading
                as="h5"
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
              {pricingOptions.map((d, index) => (
                <PricingPlanDetails {...d} key={"pricingList" + index} className="my-[62px] hover:shadow-xl md:my-0" />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
