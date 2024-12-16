import { Button, Text, Img, Heading } from "./..";
import React from "react";

export default function PricingFeatureList({
  featureTitle = "Free",
  featurePrice = "$0",
  featureDescription = "Capture ideas and find them quickly",
  syncImage = "images/img_checkmark_gray_900.svg",
  syncDescription = "Sync unlimited devices",
  uploadImage = "images/img_checkmark_gray_900.svg",
  uploadDescription = "10 GB monthly uploads",
  noteSizeImage = "images/img_checkmark_gray_900.svg",
  noteSizeDescription = "200 MB max. note size",
  customizeImage = "images/img_checkmark_gray_900.svg",
  customizeDescription = "Customize Home dashboard and access extra widgets",
  calendarImage = "images/img_checkmark_gray_900.svg",
  calendarDescription = "Connect primary Google Calendar account",
  taskImage = "images/img_checkmark_gray_900.svg",
  taskDescription = "Add due dates, reminders, and notifications to your tasks ",
  buttonText = "Get Started",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[32%] md:w-full gap-6 px-[42px] py-10 md:px-5 sm:p-5 border-amber-200 border border-solid bg-white-a700 cursor-pointer rounded-[10px] hover:shadow-xl`}
    >
      <div className="flex flex-col items-start justify-center gap-6 self-stretch">
        <Heading size="paragraph_p1_semibold" as="h4" className="text-[24px] font-semibold text-gray-900">
          {featureTitle}
        </Heading>
        <Heading size="header_h4" as="h1" className="text-[36px] font-bold tracking-[-0.72px] text-gray-900">
          {featurePrice}
        </Heading>
        <Heading size="paragraph_p2_medium" as="p" className="text-[18px] font-medium tracking-[-0.36px] text-gray-900">
          {featureDescription}
        </Heading>
      </div>
      <div className="flex flex-col gap-7 self-stretch">
        <div className="flex items-center gap-[19px]">
          <Img src={syncImage} alt="Checkmark Icon" className="h-[18px]" />
          <Text size="paragraph_p3_regular" as="p" className="text-[16px] font-normal tracking-[-0.32px] text-gray-900">
            {syncDescription}
          </Text>
        </div>
        <div className="flex items-center gap-[19px]">
          <Img src={uploadImage} alt="Checkmark Icon" className="h-[18px]" />
          <Text size="paragraph_p3_regular" as="p" className="text-[16px] font-normal tracking-[-0.32px] text-gray-900">
            {uploadDescription}
          </Text>
        </div>
        <div className="flex items-center gap-[19px]">
          <Img src={noteSizeImage} alt="Checkmark Icon" className="h-[18px]" />
          <Text size="paragraph_p3_regular" as="p" className="text-[16px] font-normal tracking-[-0.32px] text-gray-900">
            {noteSizeDescription}
          </Text>
        </div>
        <div className="flex items-center justify-center gap-[18px]">
          <Img src={customizeImage} alt="Checkmark Icon" className="h-[18px]" />
          <Text
            size="paragraph_p3_regular"
            as="p"
            className="w-[94%] text-[16px] font-normal leading-5 tracking-[-0.32px] text-gray-900"
          >
            {customizeDescription}
          </Text>
        </div>
        <div className="flex items-center justify-center gap-[18px]">
          <Img src={calendarImage} alt="Checkmark Icon" className="h-[18px]" />
          <Text
            size="paragraph_p3_regular"
            as="p"
            className="w-[94%] text-[16px] font-normal leading-5 tracking-[-0.32px] text-gray-900"
          >
            {calendarDescription}
          </Text>
        </div>
        <div className="flex items-center justify-center gap-[18px]">
          <Img src={taskImage} alt="Checkmark Icon" className="h-[18px]" />
          <Text
            size="paragraph_p3_regular"
            as="p"
            className="w-[94%] text-[16px] font-normal leading-5 tracking-[-0.32px] text-gray-900"
          >
            {taskDescription}
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
