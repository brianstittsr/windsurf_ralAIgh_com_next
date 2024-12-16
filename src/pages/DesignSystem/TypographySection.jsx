import { Text } from "../../components";
import React from "react";

export default function TypographySection() {
  return (
    <>
      {/* typography section */}
      <div className="mt-[180px] flex flex-col items-start gap-10">
        <Text
          size="textxl"
          as="p"
          className="text-[72px] font-medium tracking-[-1.44px] text-primary-900 lg:text-[48px] md:text-[48px]"
        >
          Typography
        </Text>
        <Text
          size="text2xl"
          as="p"
          className="text-[160px] font-light tracking-[-3.20px] text-primary-900 lg:text-[48px] md:text-[48px]"
        >
          Inter - Google Font
        </Text>
      </div>
    </>
  );
}
