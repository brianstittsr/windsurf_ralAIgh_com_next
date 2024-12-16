import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import ColorPaletteSection from "./ColorPaletteSection";
import ColorPaletteSection1 from "./ColorPaletteSection1";
import DesignSystemSection from "./DesignSystemSection";
import GridSystemSection from "./GridSystemSection";
import IconsSection from "./IconsSection";
import TypographySection from "./TypographySection";
import React from "react";

export default function DesignSystemPage() {
  return (
    <>
      <Helmet>
        <title>Design System Style Guide - Logo, Colors, Typography</title>
        <meta
          name="description"
          content="Explore our comprehensive Design Style Guide covering logo design, color schemes, typography, and responsive grid systems for all devices."
        />
      </Helmet>
      <div className="flex w-full flex-col items-start justify-center gap-[124px] bg-white-a700 py-[82px] pl-[100px] pr-14 lg:gap-[93px] lg:py-8 lg:pl-8 md:gap-[93px] md:p-5 sm:gap-[62px] sm:p-4">
        <Heading
          size="heading7xl"
          as="h1"
          className="text-[120px] font-bold tracking-[-4.80px] text-primary-900 lg:text-[48px] md:text-[48px]"
        >
          Design Style Guide
        </Heading>
        <div className="w-[98%] lg:w-full md:w-full">
          <div className="mb-2 mt-[124px]">
            {/* design system section */}
            <DesignSystemSection />
            <div className="mt-[174px] flex flex-col gap-44 lg:gap-[132px] md:gap-[132px] sm:gap-[88px]">
              {/* color palette section */}
              <ColorPaletteSection />

              {/* color palette section */}
              <ColorPaletteSection1 />
            </div>

            {/* typography section */}
            <TypographySection />

            {/* grid system section */}
            <GridSystemSection />

            {/* icons section */}
            <IconsSection />
          </div>
        </div>
      </div>
    </>
  );
}
