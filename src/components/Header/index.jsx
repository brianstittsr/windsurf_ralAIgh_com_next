import MegaMenu1 from "../MegaMenu1";
import { Button, Img, Heading } from "./..";
import React from "react";

export default function Header({ ...props }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);

  return (
    <header {...props} className={`${props.className} flex justify-center items-center py-4 relative`}>
      <div className="container-xl flex justify-center lg:px-5 md:px-5">
        <div className="flex w-full items-center justify-between gap-5 md:flex-col">
          <div className="flex items-center gap-2.5">
            <Img src="images/img_arrow_up.svg" alt="Arrow Up Image" className="h-[28px]" />
            <Heading
              size="headingmd"
              as="h3"
              className="text-[28px] font-bold text-white-a700 lg:text-[23px] md:text-[22px]"
            >
              whitepace
            </Heading>
          </div>
          <div className="flex w-[66%] items-center justify-between gap-5 md:w-full md:flex-col">
            <div className="relative h-[28px] w-[56%] content-center lg:h-auto md:h-auto md:w-full">
              <ul className="flex gap-11 sm:flex-col">
                <li
                  onMouseLeave={() => {
                    setMenuOpen(false);
                  }}
                  onMouseEnter={() => {
                    setMenuOpen(true);
                  }}
                >
                  <div className="flex cursor-pointer items-center gap-2.5">
                    <Heading
                      size="texts"
                      as="p"
                      className="font-dmsans text-[18px] font-medium text-white-a700 lg:text-[15px]"
                    >
                      Products
                    </Heading>
                    <Img
                      src="images/img_arrow_down_white_a700.svg"
                      alt="Products Arrow"
                      className="h-[24px] w-[28px]"
                    />
                  </div>
                  {menuOpen ? <MegaMenu1 /> : null}
                </li>
                <li
                  onMouseLeave={() => {
                    setMenuOpen1(false);
                  }}
                  onMouseEnter={() => {
                    setMenuOpen1(true);
                  }}
                >
                  <div className="flex cursor-pointer items-center gap-2.5">
                    <Heading
                      size="texts"
                      as="p"
                      className="font-dmsans text-[18px] font-medium text-white-a700 lg:text-[15px]"
                    >
                      Solutions
                    </Heading>
                    <Img
                      src="images/img_arrow_down_white_a700.svg"
                      alt="Solutions Arrow"
                      className="h-[24px] w-[28px]"
                    />
                  </div>
                  {menuOpen1 ? <MegaMenu1 /> : null}
                </li>
                <li>
                  <a href="#" className="lg:text-[15px]">
                    <Heading size="texts" as="p" className="font-dmsans text-[18px] font-medium text-white-a700">
                      Resources
                    </Heading>
                  </a>
                </li>
                <li
                  onMouseLeave={() => {
                    setMenuOpen2(false);
                  }}
                  onMouseEnter={() => {
                    setMenuOpen2(true);
                  }}
                >
                  <div className="flex cursor-pointer items-center gap-2.5">
                    <Heading
                      size="texts"
                      as="p"
                      className="font-dmsans text-[18px] font-medium text-white-a700 lg:text-[15px]"
                    >
                      Pricing
                    </Heading>
                    <Img src="images/img_arrow_down_white_a700.svg" alt="Pricing Arrow" className="h-[24px] w-[28px]" />
                  </div>
                  {menuOpen2 ? <MegaMenu1 /> : null}
                </li>
              </ul>
              <Img
                src="images/img_arrow_down_white_a700.svg"
                alt="Menu Arrow"
                className="absolute bottom-0 right-[23%] top-0 my-auto h-[24px]"
              />
            </div>
            <div className="flex gap-6">
              <Button
                color="amber_200"
                shape="round"
                className="min-w-[126px] rounded-lg px-[34px] font-medium tracking-[-0.36px] sm:px-4"
              >
                Login
              </Button>
              <Button
                shape="round"
                rightIcon={
                  <Img
                    src="images/img_arrowleft_white_a700.svg"
                    alt="Arrow Left"
                    className="my-1.5 h-[10px] w-[10px] object-contain"
                  />
                }
                className="min-w-[226px] gap-2.5 rounded-lg px-6 font-medium tracking-[-0.36px] sm:px-4"
              >
                Try Whitepace free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
