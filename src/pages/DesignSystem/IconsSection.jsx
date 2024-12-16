import { Button, Img, Heading } from "../../components";
import IconGallery from "../../components/IconGallery";
import React, { Suspense } from "react";

const integrationToolsList = [
  {
    dropboxIcon: "images/img_dropbox.svg",
    gridIcon: "images/img_grid.svg",
    gmailIcon: "images/img_gmail.svg",
    databaseIcon: "images/img_database.svg",
    padlockIcon: "images/img_padlock.svg",
    checkmarkIcon: "images/img_checkmark.svg",
  },
  {
    dropboxIcon: "images/img_key.svg",
    gridIcon: "images/img_google_drive.svg",
    gmailIcon: "images/img_arrow_left.svg",
    databaseIcon: "images/img_arrow_down.svg",
    padlockIcon: "images/img_contrast.svg",
    checkmarkIcon: "images/img_calendar.svg",
  },
  {
    dropboxIcon: "images/img_apple_black_logo.svg",
    gridIcon: "images/img_windows_logo.svg",
    gmailIcon: "images/img_android_logo.svg",
    databaseIcon: "images/img_trash.svg",
    padlockIcon: "images/img_link.svg",
    checkmarkIcon: "images/img_facebook.svg",
  },
];

export default function IconsSection() {
  return (
    <>
      {/* icons section */}
      <div className="mt-[162px] flex items-start justify-center md:flex-col">
        <Heading
          size="heading6xl"
          as="h1"
          className="text-[72px] font-semibold text-primary-900 lg:text-[48px] md:text-[48px]"
        >
          Icons
        </Heading>
        <div className="mt-1 flex-1 self-center md:self-stretch">
          <div className="flex flex-col gap-[72px] lg:gap-[72px] md:gap-[54px] sm:gap-9">
            <div className="ml-[698px] flex flex-col gap-[50px] md:ml-0">
              <Suspense fallback={<div>Loading feed...</div>}>
                {integrationToolsList.map((d, index) => (
                  <IconGallery {...d} key={"listDropbox" + index} className="ml-3 md:ml-0 sm:flex-col" />
                ))}
              </Suspense>
            </div>
            <div className="flex items-end justify-end md:flex-col">
              <Img
                src="images/img_outlook.svg"
                alt="Outlook Icon"
                className="h-[72px] w-[6%] self-center object-contain md:w-full"
              />
              <Img
                src="images/img_globe.svg"
                alt="Globe Icon"
                className="ml-[68px] h-[72px] w-[6%] object-contain md:ml-0 md:w-full"
              />
              <Img
                src="images/img_checkmark_primary_900.svg"
                alt="Checkmark Icon"
                className="ml-[58px] h-[72px] w-[6%] object-contain md:ml-0 md:w-full"
              />
              <Button
                color="blue_50"
                size="lg"
                shape="circle"
                className="ml-[76px] w-[72px] rounded-[36px] px-5 !shadow-sm md:ml-0"
              >
                <Img src="images/img_user.svg" />
              </Button>
              <Button
                color="blue_50"
                size="lg"
                shape="circle"
                className="ml-[76px] w-[72px] rounded-[36px] px-5 !shadow-sm md:ml-0"
              >
                <Img src="images/img_arrow_right.svg" />
              </Button>
              <div className="flex w-[14%] justify-end gap-[19px] self-center md:w-full">
                <div className="h-[18px] w-[18px] rounded-lg bg-blue-400" />
                <div className="h-[18px] w-[18px] rounded-lg bg-indigo-900" />
                <div className="h-[18px] w-[18px] rounded-lg bg-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
