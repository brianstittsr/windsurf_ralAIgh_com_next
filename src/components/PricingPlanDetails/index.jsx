import { Button, Text, Img, Heading } from "./..";
import React from "react";

export default function PricingPlanDetails({
  planName = "Free",
  planPrice = "$0",
  planDescription = "Capture ideas and find them quickly",
  featureicon1 = "images/img_checkmark_gray_900.svg",
  featuredescription1 = "Sync unlimited devices",
  featureicon2 = "images/img_checkmark_gray_900.svg",
  featuredescription2 = "10 GB monthly uploads",
  featureicon3 = "images/img_checkmark_gray_900.svg",
  featuredescription3 = "200 MB max. note size",
  featureicon4 = "images/img_checkmark_gray_900.svg",
  featuredescription4 = "Customize Home dashboard and access extra widgets",
  featureicon5 = "images/img_checkmark_gray_900.svg",
  featuredescription5 = "Connect primary Google Calendar account",
  featureicon6 = "images/img_checkmark_gray_900.svg",
  featuredescription6 = "Add due dates, reminders, and notifications to your tasks ",
  buttonText = "Get Started",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[32%] md:w-full gap-6 px-[42px] py-10 md:px-5 sm:p-4 border-amber-200 border border-solid bg-white-a700 cursor-pointer rounded-[10px] hover:shadow-xl`}
    >
      <div className="flex flex-col items-start justify-center gap-6 self-stretch">
        <Heading size="paragraph_p1_semibold" as="h4" className="text-[24px] font-semibold text-gray-900">
          {planName}
        </Heading>
        <Heading size="header_h4" as="h1" className="text-[36px] font-bold tracking-[-0.72px] text-gray-900">
          {planPrice}
        </Heading>
        <Heading size="paragraph_p2_medium" as="p" className="text-[18px] font-medium tracking-[-0.36px] text-gray-900">
          {planDescription}
        </Heading>
      </div>
      <div className="flex flex-col gap-7 self-stretch">
        <div className="flex items-center gap-[19px]">
          <Img src={featureicon1} alt="Checkmark Image" className="h-[18px]" />
          <Text size="paragraph_p3_regular" as="p" className="text-[16px] font-normal tracking-[-0.32px] text-gray-900">
            {featuredescription1}
          </Text>
        </div>
        <div className="flex items-center gap-[19px]">
          <Img src={featureicon2} alt="Checkmark Image" className="h-[18px]" />
          <Text size="paragraph_p3_regular" as="p" className="text-[16px] font-normal tracking-[-0.32px] text-gray-900">
            {featuredescription2}
          </Text>
        </div>
        <div className="flex items-center gap-[19px]">
          <Img src={featureicon3} alt="Checkmark Image" className="h-[18px]" />
          <Text size="paragraph_p3_regular" as="p" className="text-[16px] font-normal tracking-[-0.32px] text-gray-900">
            {featuredescription3}
          </Text>
        </div>
        <div className="flex items-center justify-center gap-[18px]">
          <Img src={featureicon4} alt="Checkmark Image" className="h-[18px]" />
          <Text
            size="paragraph_p3_regular"
            as="p"
            className="w-[94%] text-[16px] font-normal leading-5 tracking-[-0.32px] text-gray-900"
          >
            {featuredescription4}
          </Text>
        </div>
        <div className="flex items-center justify-center gap-[19px]">
          <Img src={featureicon5} alt="Checkmark Image" className="h-[18px]" />
          <Text size="paragraph_p3_regular" as="p" className="text-[16px] font-normal tracking-[-0.32px] text-gray-900">
            {featuredescription5}
          </Text>
        </div>
        <div className="flex items-center justify-center gap-[18px]">
          <Img src={featureicon6} alt="Checkmark Image" className="h-[18px]" />
          <Text
            size="paragraph_p3_regular"
            as="p"
            className="w-[94%] text-[16px] font-normal leading-5 tracking-[-0.32px] text-gray-900"
          >
            {featuredescription6}
          </Text>
        </div>
      </div>
      <Button
        color="white_A700"
        size="xs"
        shape="round"
        className="min-w-[166px] rounded-lg border border-solid border-amber-200 px-[33px] font-medium tracking-[-0.32px] sm:px-5"
      >
        {buttonText}
      </Button>
    </div>
  );
}
