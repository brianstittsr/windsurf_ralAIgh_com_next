import { Helmet } from "react-helmet";
import { Text, Heading, Img } from "../../components";
import React from "react";

export default function OnePage() {
  return (
    <>
      <Helmet>
        <title>100% Free Project for Personal and Commercial Use</title>
        <meta
          name="description"
          content="Utilize our 100% free project for both personal and commercial use without credits. Enhance your work process and get support at siam.alrazi@gmail.com."
        />
      </Helmet>
      <div className="relative h-[1080px] w-full bg-white-a700">
        <Img
          src="images/img_make_a_new_product.png"
          alt="Productimage"
          className="absolute bottom-px right-0 m-auto h-[978px] w-[66%] object-contain"
        />
        <div className="absolute left-0 right-0 top-[9%] mx-[100px] flex w-full max-w-[1720px] flex-1 flex-col items-start lg:mx-0 lg:px-5 md:mx-0 md:px-5">
          <Heading
            size="heading8xl"
            as="h1"
            className="text-[140px] font-bold tracking-[-5.60px] text-primary-900 lg:text-[48px] md:text-[48px]"
          >
            100% Free
          </Heading>
          <div className="mx-6 mt-[38px] flex flex-col items-start gap-[30px] self-stretch md:mx-0">
            <Heading
              size="textlg"
              as="h2"
              className="text-[48px] font-medium tracking-[-1.92px] text-primary-900 lg:text-[40px] md:text-[32px] sm:text-[26px]"
            >
              Feel free to use this project for personal and commerical usage
            </Heading>
            <div className="self-stretch">
              <div className="flex flex-col items-start">
                <Heading
                  size="textlg"
                  as="h3"
                  className="text-[48px] font-medium tracking-[-1.92px] text-primary-900 lg:text-[40px] md:text-[32px] sm:text-[26px]"
                >
                  No need to give credits, but we would highly appreciate if you do!
                </Heading>
                <Heading
                  size="textlg"
                  as="h4"
                  className="relative mt-[-66px] text-[48px] font-medium tracking-[-1.92px] text-primary-900 lg:text-[40px] md:text-[32px] sm:text-[26px]"
                >
                  No need to give credits, but we would highly appreciate if you do!
                </Heading>
              </div>
            </div>
            <a
              href="https://www.behance.net/gallery/96836607/UX-Case-Study-SaaS-Website"
              target="_blank"
              rel="noreferrer"
              className="lg:text-[40px] md:text-[32px] sm:text-[26px]"
            >
              <Heading
                size="textlg"
                as="h5"
                className="text-[48px] font-medium tracking-[-1.92px] text-primary-900 underline"
              >
                Check out the full work process here{" "}
              </Heading>
            </a>
          </div>
          <Text
            size="textxl"
            as="p"
            className="mt-[166px] text-[72px] font-normal leading-[87px] tracking-[-1.44px] text-primary-900 lg:text-[48px] md:text-[48px]"
          >
            <>
              Need help with your projects?
              <br />
              Reach us at - siam.alrazi@gmail.com
            </>
          </Text>
        </div>
      </div>
    </>
  );
}
