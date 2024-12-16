import React from "react";

const sizes = {
  header_h2: "tracking-[-1.28px] text-[64px] font-bold lg:text-[64px] md:text-[48px]",
  header_h1: "tracking-[-1.44px] text-[72px] font-bold lg:text-[72px] md:text-[48px]",
  paragraph_p1_semibold: "text-[24px] font-semibold lg:text-[24px] md:text-[22px] sm:text-[20px]",
  header_h4: "tracking-[-0.72px] text-[36px] font-bold lg:text-[36px] md:text-[34px] sm:text-[30px]",
  paragraph_p2_medium: "tracking-[-0.36px] text-[18px] font-medium sm:text-[15px]",
  paragraph_p2_bold: "tracking-[-0.36px] text-[18px] font-bold sm:text-[15px]",
  header_h5: "tracking-[-0.56px] text-[28px] font-bold lg:text-[28px] md:text-[26px] sm:text-[23px]",
  textxs: "text-[12px] font-medium",
  texts: "text-[18px] font-medium sm:text-[15px]",
  textlg: "text-[48px] font-medium lg:text-[48px] md:text-[44px] sm:text-[40px]",
  headingxs: "text-[10px] font-bold",
  headings: "text-[24px] font-bold lg:text-[24px] md:text-[22px] sm:text-[20px]",
  headingmd: "text-[28px] font-bold lg:text-[28px] md:text-[26px] sm:text-[23px]",
  headinglg: "text-[45px] font-bold lg:text-[45px] md:text-[41px] sm:text-[38px]",
  headingxl: "text-[47px] font-bold lg:text-[47px] md:text-[43px] sm:text-[39px]",
  heading2xl: "text-[56px] font-bold lg:text-[56px] md:text-[48px] sm:text-[47px]",
  heading3xl: "text-[59px] font-bold lg:text-[59px] md:text-[51px] sm:text-[50px]",
  heading4xl: "text-[68px] font-bold lg:text-[68px] md:text-[48px]",
  heading5xl: "text-[70px] font-bold lg:text-[70px] md:text-[48px]",
  heading6xl: "text-[72px] font-semibold lg:text-[72px] md:text-[48px]",
  heading7xl: "text-[120px] font-bold lg:text-[120px] md:text-[48px]",
  heading8xl: "text-[140px] font-bold lg:text-[140px] md:text-[48px]",
};

const Heading = ({ children, className = "", size = "header_h1", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
