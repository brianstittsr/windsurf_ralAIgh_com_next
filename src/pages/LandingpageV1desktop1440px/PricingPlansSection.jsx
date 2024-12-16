import { Text, Heading, Img } from "../../components";
import PricingFeatureList from "../../components/PricingFeatureList";
import React, { Suspense } from "react";

const pricingOptions = [
  {
    featureTitle: "Free",
    featurePrice: "$0",
    featureDescription: "Capture ideas and find them quickly",
    syncImage: "images/img_checkmark_gray_900.svg",
    syncDescription: "Sync unlimited devices",
    uploadImage: "images/img_checkmark_gray_900.svg",
    uploadDescription: "10 GB monthly uploads",
    noteSizeImage: "images/img_checkmark_gray_900.svg",
    noteSizeDescription: "200 MB max. note size",
    customizeImage: "images/img_checkmark_gray_900.svg",
    customizeDescription: "Customize Home dashboard and access extra widgets",
    calendarImage: "images/img_checkmark_gray_900.svg",
    calendarDescription: "Connect primary Google Calendar account",
    taskImage: "images/img_checkmark_gray_900.svg",
    taskDescription: "Add due dates, reminders, and notifications to your tasks ",
    buttonText: "Get Started",
  },
  {
    featureTitle: "Personal",
    featurePrice: "$11.99",
    featureDescription: "Keep home and family on track",
    syncImage: "images/img_checkmark_amber_200.svg",
    syncDescription: "Sync unlimited devices",
    uploadImage: "images/img_checkmark_amber_200.svg",
    uploadDescription: "10 GB monthly uploads",
    noteSizeImage: "images/img_checkmark_amber_200.svg",
    noteSizeDescription: "200 MB max. note size",
    customizeImage: "images/img_checkmark_amber_200.svg",
    customizeDescription: "Customize Home dashboard and access extra widgets",
    calendarImage: "images/img_checkmark_amber_200.svg",
    calendarDescription: "Connect primary Google Calendar account",
    taskImage: "images/img_checkmark_amber_200.svg",
    taskDescription: "Add due dates, reminders, and notifications to your tasks ",
    buttonText: "Get Started",
  },
  {
    featureTitle: "Organization",
    featurePrice: "$49.99",
    featureDescription: "Capture ideas and find them quickly",
    syncImage: "images/img_checkmark_gray_900.svg",
    syncDescription: "Sync unlimited devices",
    uploadImage: "images/img_checkmark_gray_900.svg",
    uploadDescription: "10 GB monthly uploads",
    noteSizeImage: "images/img_checkmark_gray_900.svg",
    noteSizeDescription: "200 MB max. note size",
    customizeImage: "images/img_checkmark_gray_900.svg",
    customizeDescription: "Customize Home dashboard and access extra widgets",
    calendarImage: "images/img_checkmark_gray_900.svg",
    calendarDescription: "Connect primary Google Calendar account",
    taskImage: "images/img_checkmark_gray_900.svg",
    taskDescription: "Add due dates, reminders, and notifications to your tasks ",
    buttonText: "Get Started",
  },
];

export default function PricingPlansSection() {
  return (
    <>
      {/* pricing plans section */}
      <div className="flex flex-col items-center gap-[60px] px-8 sm:gap-[30px] sm:px-5">
        <div className="container-xs relative h-[176px] self-stretch md:h-auto">
          <Img
            src="images/img_element_amber_200.svg"
            alt="Feature Image"
            className="mr-[166px] mt-[62px] h-[30px] w-[40%] object-contain md:mr-0"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center gap-[18px]">
            <Heading as="h2" className="text-[72px] font-bold tracking-[-1.44px] text-gray-900 md:text-[48px]">
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
        <div className="container-md flex gap-8 self-stretch md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {pricingOptions.map((d, index) => (
              <PricingFeatureList {...d} key={"priceList" + index} className="my-[52px] hover:shadow-xl md:my-0" />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}
