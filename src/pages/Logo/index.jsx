import { Helmet } from "react-helmet";
import { Img } from "../../components";
import React from "react";

export default function LogoPage() {
  return (
    <>
      <Helmet>
        <title>Brand Logo - Visual Identity of Our Brand</title>
        <meta
          name="description"
          content="Discover the essence of our brand with our iconic logo that stands out in visual identity and brand recognition."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div className="flex md:flex-col">
          <div className="flex w-full flex-col items-center justify-center bg-white-a700 px-14 py-[486px] lg:py-8 md:p-5 sm:px-5 sm:py-4">
            <Img src="images/img_logo.svg" alt="Main Logo" className="mb-2.5 h-[94px] w-[70%] object-contain" />
          </div>
          <div className="w-full md:px-5">
            <div className="flex justify-center bg-indigo-900 px-14 py-[216px] lg:py-8 md:p-5 sm:p-4">
              <Img
                src="images/img_logo_white_a700.svg"
                alt="Logo Image"
                className="mb-2.5 h-[94px] w-[70%] object-contain"
              />
            </div>
            <div className="flex justify-center bg-gray-900 px-14 py-[216px] lg:py-8 md:p-5 sm:p-4">
              <Img
                src="images/img_logo_white_a700.svg"
                alt="Secondary Logo"
                className="mb-2.5 h-[94px] w-[70%] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
