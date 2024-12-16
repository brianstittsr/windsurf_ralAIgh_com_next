import { Heading } from "./..";
import React from "react";

export default function LayoutGrid({
  labelText = "1920px",
  dimensionvalue220px = "220px",
  dimensionvalue32px = "32px",
  dimensionvalue32px1 = "32px",
  dimensionvalue220px1 = "220px",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col self-stretch flex-1`}>
      <div className="flex items-center self-stretch md:flex-col">
        <div className="flex flex-1 items-center md:self-stretch">
          <div className="relative h-[18px] flex-1">
            <div className="absolute bottom-[7.50px] left-0 right-0 mx-auto h-px w-full flex-1 bg-indigo-a700" />
            <Heading
              size="headingxs"
              as="p"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max items-center justify-center rounded-[3px] bg-indigo-a700 px-1.5 text-[10px] font-bold text-white-a700"
            >
              {labelText}
            </Heading>
          </div>
          <div className="relative z-[1] mb-1 ml-[-1598px] h-[6px] w-px self-end bg-indigo-a700" />
        </div>
        <div className="mb-1 h-[6px] w-px self-end bg-indigo-a700 md:h-px md:w-[6px]" />
      </div>
      <div className="flex items-center self-stretch bg-gray-100_01 md:flex-col">
        <div className="flex flex-1 flex-col items-center gap-1.5 self-end md:self-stretch md:px-5">
          <div className="h-[14px] w-px self-end bg-deep_purple-a200" />
          <Heading
            size="textxs"
            as="p"
            className="font-robotomono text-[12px] font-medium tracking-[-0.12px] text-deep_purple-a200"
          >
            {dimensionvalue220px}
          </Heading>
        </div>
        <div className="h-[80px] w-[80px] border-l border-r border-solid border-deep_purple-a200 bg-gray-100_01 md:px-5" />
        <div className="flex w-[2%] flex-col items-center gap-1.5 self-end md:w-full md:px-5">
          <div className="h-[14px] w-px self-end bg-deep_purple-a200" />
          <Heading
            size="textxs"
            as="p"
            className="font-robotomono text-[12px] font-medium tracking-[-0.12px] text-deep_purple-a200"
          >
            {dimensionvalue32px}
          </Heading>
        </div>
        <div className="h-[80px] w-[80px] border-l border-r border-solid border-deep_purple-a200 bg-gray-100_01 md:px-5" />
        <div className="ml-8 h-[80px] w-[80px] border-l border-r border-solid border-deep_purple-a200 bg-gray-100_01 md:ml-0 md:px-5" />
        <div className="ml-8 h-[80px] w-[80px] border-l border-r border-solid border-deep_purple-a200 bg-gray-100_01 md:ml-0 md:px-5" />
        <div className="ml-8 h-[80px] w-[80px] border-l border-r border-solid border-deep_purple-a200 bg-gray-100_01 md:ml-0 md:px-5" />
        <div className="ml-8 h-[80px] w-[80px] border-l border-r border-solid border-deep_purple-a200 bg-gray-100_01 md:ml-0 md:px-5" />
        <div className="ml-8 h-[80px] w-[80px] border-l border-r border-solid border-deep_purple-a200 bg-gray-100_01 md:ml-0 md:px-5" />
        <div className="ml-8 h-[80px] w-[80px] border-l border-r border-solid border-deep_purple-a200 bg-gray-100_01 md:ml-0 md:px-5" />
        <div className="ml-8 h-[80px] w-[80px] border-l border-r border-solid border-deep_purple-a200 bg-gray-100_01 md:ml-0 md:px-5" />
        <div className="ml-8 h-[80px] w-[80px] border-l border-r border-solid border-deep_purple-a200 bg-gray-100_01 md:ml-0 md:px-5" />
        <div className="ml-8 h-[80px] w-[80px] border-l border-r border-solid border-deep_purple-a200 bg-gray-100_01 md:ml-0 md:px-5" />
        <div className="flex w-[2%] flex-col items-center gap-1.5 self-end md:w-full md:px-5">
          <div className="h-[14px] w-px self-end bg-deep_purple-a200" />
          <Heading
            size="textxs"
            as="p"
            className="font-robotomono text-[12px] font-medium tracking-[-0.12px] text-deep_purple-a200"
          >
            {dimensionvalue32px1}
          </Heading>
        </div>
        <div className="h-[80px] w-[80px] border-l border-r border-solid border-deep_purple-a200 bg-gray-100_01 md:px-5" />
        <div className="flex flex-1 flex-col items-center gap-1.5 self-end md:self-stretch md:px-5">
          <div className="h-[14px] w-px self-end bg-deep_purple-a200" />
          <Heading
            size="textxs"
            as="p"
            className="font-robotomono text-[12px] font-medium tracking-[-0.12px] text-deep_purple-a200"
          >
            {dimensionvalue220px1}
          </Heading>
        </div>
      </div>
    </div>
  );
}
