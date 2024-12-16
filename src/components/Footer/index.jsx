import { Img, Text, SelectBox, Button, Heading } from "./..";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex flex-col`}>
      <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
        <div className="flex w-[16%] flex-col gap-3.5 md:w-full">
          <Img src="images/img_footer_logo.png" alt="Footer Logo" className="h-[34px] w-[190px] object-contain" />
          <Text
            as="p"
            className="text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-gray-100 lg:text-[15px]"
          >
            whitepace was created for the new ways we live and work. We make a better workspace around the world
          </Text>
        </div>
        <div className="flex w-[78%] items-start justify-between gap-5 self-center md:w-full md:flex-col">
          <div className="flex w-[58%] items-center justify-between gap-5 md:w-full md:flex-col">
            <div className="flex w-[44%] flex-col items-start gap-3.5 md:w-full">
              <Heading
                size="paragraph_p2_bold"
                as="h6"
                className="text-[18px] font-bold tracking-[-0.36px] text-white-a700 lg:text-[15px]"
              >
                Product
              </Heading>
              <ul className="flex flex-col items-start gap-3.5">
                <li>
                  <a href="Overview" target="_blank" rel="noreferrer" className="lg:text-[13px]">
                    <Text
                      size="paragraph_p3_regular"
                      as="p"
                      className="text-[16px] font-normal tracking-[-0.32px] text-amber-200"
                    >
                      Overview
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="Pricing" target="_blank" rel="noreferrer" className="lg:text-[13px]">
                    <Text
                      size="paragraph_p3_regular"
                      as="p"
                      className="text-[16px] font-normal tracking-[-0.32px] text-white-a700"
                    >
                      Pricing
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="lg:text-[13px]">
                    <Text
                      size="paragraph_p3_regular"
                      as="p"
                      className="text-[16px] font-normal tracking-[-0.32px] text-white-a700"
                    >
                      Customer stories
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex w-[44%] flex-col items-start gap-3.5 md:w-full">
              <Heading
                size="paragraph_p2_bold"
                as="h6"
                className="text-[18px] font-bold tracking-[-0.36px] text-white-a700 lg:text-[15px]"
              >
                Resources
              </Heading>
              <ul className="flex flex-col items-start gap-3.5">
                <li>
                  <a href="Blog" target="_blank" rel="noreferrer" className="lg:text-[13px]">
                    <Text
                      size="paragraph_p3_regular"
                      as="p"
                      className="text-[16px] font-normal tracking-[-0.32px] text-white-a700"
                    >
                      Blog
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="lg:text-[13px]">
                    <Text
                      size="paragraph_p3_regular"
                      as="p"
                      className="text-[16px] font-normal tracking-[-0.32px] text-white-a700"
                    >
                      Guides & tutorials
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="lg:text-[13px]">
                    <Text
                      size="paragraph_p3_regular"
                      as="p"
                      className="text-[16px] font-normal tracking-[-0.32px] text-white-a700"
                    >
                      Help center
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-3.5">
              <Heading
                size="paragraph_p2_bold"
                as="h6"
                className="text-[18px] font-bold tracking-[-0.36px] text-white-a700 lg:text-[15px]"
              >
                Company
              </Heading>
              <ul className="flex flex-col items-start gap-3.5">
                <li>
                  <a href="#" className="lg:text-[13px]">
                    <Text
                      size="paragraph_p3_regular"
                      as="p"
                      className="text-[16px] font-normal tracking-[-0.32px] text-white-a700"
                    >
                      About us
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="lg:text-[13px]">
                    <Text
                      size="paragraph_p3_regular"
                      as="p"
                      className="text-[16px] font-normal tracking-[-0.32px] text-white-a700"
                    >
                      Careers
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="lg:text-[13px]">
                    <Text
                      size="paragraph_p3_regular"
                      as="p"
                      className="text-[16px] font-normal tracking-[-0.32px] text-white-a700"
                    >
                      Media kit
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-[22%] flex-col items-start gap-[22px] self-center md:w-full">
            <Heading
              size="header_h5"
              as="h3"
              className="text-[28px] font-bold tracking-[-0.56px] text-white-a700 lg:text-[23px] md:text-[22px]"
            >
              Try It Today
            </Heading>
            <Text
              size="paragraph_p3_regular"
              as="p"
              className="w-full text-[16px] font-normal leading-5 tracking-[-0.32px] text-white-a700 lg:text-[13px]"
            >
              Get started for free.Add your whole team as your needs grow.
            </Text>
            <Button
              shape="round"
              rightIcon={
                <Img
                  src="images/img_arrowleft_white_a700.svg"
                  alt="Arrow Left"
                  className="my-0.5 h-[14px] w-[14px] object-contain"
                />
              }
              className="min-w-[186px] gap-2.5 rounded-lg px-[34px] tracking-[-0.32px] sm:px-4"
            >
              Start today
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-[66px] h-px w-full self-stretch bg-blue_gray-700" />
      <div className="mt-[30px] flex items-center justify-between gap-5 self-stretch md:flex-col">
        <div className="flex w-[50%] justify-between gap-5 md:w-full sm:flex-col">
          <div className="flex w-[14%] items-center justify-center gap-1.5 sm:w-full">
            <Img src="images/img_globe_white_a700.svg" alt="Globe Icon" className="h-[18px]" />
            <SelectBox
              shape="square"
              indicator={
                <Img src="images/img_arrow_down_white_a700.svg" alt="Arrow Down" className="h-[16px] w-[20px]" />
              }
              name="Language Dropdown"
              placeholder={`English`}
              options={dropDownOptions}
              className="flex-grow gap-1.5 tracking-[-0.32px] text-white-a700"
            />
          </div>
          <a href="#" className="lg:text-[13px]">
            <Text
              size="paragraph_p3_regular"
              as="p"
              className="text-[16px] font-normal tracking-[-0.32px] text-white-a700"
            >
              Terms & privacy
            </Text>
          </a>
          <a href="Security" target="_blank" rel="noreferrer" className="lg:text-[13px]">
            <Text
              size="paragraph_p3_regular"
              as="p"
              className="text-[16px] font-normal tracking-[-0.32px] text-white-a700"
            >
              Security
            </Text>
          </a>
          <a href="Status" target="_blank" rel="noreferrer" className="lg:text-[13px]">
            <Text
              size="paragraph_p3_regular"
              as="p"
              className="text-[16px] font-normal tracking-[-0.32px] text-white-a700"
            >
              Status
            </Text>
          </a>
          <Text
            size="paragraph_p3_regular"
            as="p"
            className="text-[16px] font-normal tracking-[-0.32px] text-white-a700 lg:text-[13px]"
          >
            ©2021 Whitepace LLC.
          </Text>
        </div>
        <div className="flex w-[6%] items-center justify-between gap-5 md:w-full">
          <Img src="images/img_facebook_gray_100.svg" alt="Facebook Icon" className="h-[16px]" />
          <Img src="images/img_trash_gray_100.svg" alt="Trash Icon" className="h-[12px]" />
          <Img src="images/img_link_gray_100.svg" alt="Link Icon" className="h-[14px]" />
        </div>
      </div>
    </footer>
  );
}
