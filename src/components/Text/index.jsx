import React from "react";

const sizes = {
  paragraph_p2_regular: "tracking-[-0.36px] text-[18px] font-normal sm:text-[15px]",
  paragraph_p3_regular: "tracking-[-0.32px] text-[16px] font-normal sm:text-[13px]",
  paragraph_p1_regular: "tracking-[-0.48px] text-[24px] font-normal lg:text-[24px] md:text-[22px] sm:text-[20px]",
  textmd: "text-[36px] font-normal lg:text-[36px] md:text-[34px] sm:text-[30px]",
  textxl: "text-[72px] font-normal lg:text-[72px] md:text-[48px]",
  text2xl: "text-[160px] font-light lg:text-[160px] md:text-[48px]",
};

const Text = ({ children, className = "", as, size = "paragraph_p2_regular", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900 font-inter ${className} ${sizes[size]} `} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
