import { Heading, Text } from "../../components";
import LayoutGrid from "../../components/LayoutGrid";
import React, { Suspense } from "react";

const vectorGraphicsList = [
  {
    labelText: "1920px",
    dimensionValue220px: "220px",
    dimensionValue32px: "32px",
    dimensionValue32px1: "32px",
    dimensionValue220px1: "220px",
  },
  {
    labelText: "1440px",
    dimensionValue220px: "220px",
    dimensionValue32px: "32px",
    dimensionValue32px1: "32px",
    dimensionValue220px1: "220px",
    dimensionvalue220px: "32px",
    dimensionvalue32px: "32px",
    dimensionvalue32px1: "32px",
    dimensionvalue220px1: "32px",
  },
  {
    labelText: "1152px",
    dimensionValue220px: "220px",
    dimensionValue32px: "32px",
    dimensionValue32px1: "32px",
    dimensionValue220px1: "220px",
    dimensionvalue220px: "32px",
    dimensionvalue32px: "32px",
    dimensionvalue32px1: "32px",
    dimensionvalue220px1: "32px",
  },
  {
    labelText: "768px",
    dimensionValue220px: "220px",
    dimensionValue32px: "32px",
    dimensionValue32px1: "32px",
    dimensionValue220px1: "220px",
  },
];

export default function GridSystemSection() {
  return (
    <>
      {/* grid system section */}
      <div className="mt-[206px] flex flex-col gap-5">
        <div className="flex flex-col items-start gap-3.5">
          <Text
            size="textxl"
            as="p"
            className="text-[72px] font-normal tracking-[-1.44px] text-primary-900 lg:text-[48px] md:text-[48px]"
          >
            Grid System
          </Text>
          <Text
            size="textmd"
            as="p"
            className="text-[36px] font-normal tracking-[-0.72px] text-indigo-900 lg:text-[30px] md:text-[30px] sm:text-[28px]"
          >
            Keeping responsive devices in mind here’s our grid system for all devices from 1920px to 320px.
          </Text>
        </div>
        <div className="flex flex-col gap-[18px]">
          <div className="mr-[118px] flex flex-col gap-[18px] md:mr-0">
            <Suspense fallback={<div>Loading feed...</div>}>
              {vectorGraphicsList.map((d, index) => (
                <LayoutGrid {...d} key={"listVector" + index} />
              ))}
            </Suspense>
          </div>
          <div className="flex flex-col items-start">
            <div className="mx-auto flex w-full max-w-[1714px] items-center self-stretch lg:px-5 md:px-5">
              <div className="flex w-[18%] items-center">
                <div className="relative h-[18px] flex-1">
                  <div className="absolute bottom-[7.50px] left-0 right-0 mx-auto h-px w-full flex-1 bg-indigo-a700" />
                  <Heading
                    size="headingxs"
                    as="p"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max items-center justify-center rounded-[3px] bg-indigo-a700 px-1.5 text-[10px] font-bold text-white-a700"
                  >
                    320px
                  </Heading>
                </div>
                <div className="relative z-[5] mb-1 ml-[-316px] h-[6px] w-px self-end bg-indigo-a700" />
              </div>
              <div className="mb-1 h-[6px] w-px self-end bg-indigo-a700" />
            </div>
            <div className="flex w-[18%] items-center justify-center bg-gray-100_01 lg:w-full md:w-full">
              <div className="flex w-[12%] flex-col items-end gap-1.5 self-end">
                <div className="h-[14px] w-px bg-deep_purple-a200" />
                <Heading
                  size="textxs"
                  as="p"
                  className="font-robotomono text-[12px] font-medium tracking-[-0.12px] text-deep_purple-a200"
                >
                  16px
                </Heading>
              </div>
              <div className="h-[80px] w-[40px] flex-1 border-l border-r border-solid border-indigo-a100 bg-gray-100_01" />
              <div className="ml-8 h-[80px] w-[40px] flex-1 border-l border-r border-solid border-indigo-a100 bg-gray-100_01" />
              <div className="ml-8 h-[80px] w-[40px] flex-1 border-l border-r border-solid border-indigo-a100 bg-gray-100_01" />
              <div className="ml-8 h-[80px] w-[40px] flex-1 border-l border-r border-solid border-indigo-a100 bg-gray-100_01" />
              <div className="flex w-[14%] flex-col items-end gap-1.5 self-end">
                <div className="h-[14px] w-px bg-deep_purple-a200" />
                <Heading
                  size="textxs"
                  as="p"
                  className="font-robotomono text-[12px] font-medium tracking-[-0.12px] text-deep_purple-a200"
                >
                  16px
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
