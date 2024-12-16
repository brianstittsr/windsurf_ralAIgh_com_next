import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function AppsIntegrationSection() {
  return (
    <>
      {/* apps integration section */}
      <div className="mt-[140px] self-stretch">
        <div className="bg-indigo-900 py-2">
          <div className="mb-[104px] flex h-[700px] items-end bg-[url(/public/images/img_element_gray_500.png)] bg-cover bg-no-repeat p-6 md:h-auto sm:p-5">
            <div className="container-sm mt-[104px] flex items-center md:flex-col">
              <div className="relative h-[426px] flex-1 md:w-full md:flex-none md:self-stretch">
                <div className="absolute left-0 right-0 top-0 mx-auto flex w-[70%] flex-col items-start">
                  <div className="flex flex-col items-start self-stretch">
                    <Button
                      color="white_A700"
                      size="md"
                      className="relative z-[3] ml-[134px] w-[66px] rounded-[32px] px-3 md:ml-0"
                    >
                      <Img src="images/img_gmail.svg" />
                    </Button>
                    <div className="relative mt-[-34px] flex items-center self-stretch">
                      <Button color="white_A700" size="md" className="relative z-[2] w-[66px] rounded-[32px] px-3">
                        <Img src="images/img_dropbox.svg" />
                      </Button>
                      <div className="relative ml-[-32px] flex flex-1 items-center">
                        <div className="h-[264px] w-[264px] rounded-[132px] border-[1.81px] border-dashed border-blue-400" />
                        <Button
                          color="white_A700"
                          size="md"
                          className="relative ml-[-32px] w-[66px] rounded-[32px] px-3"
                        >
                          <Img src="images/img_grid_amber_a400_01.svg" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="relative ml-[122px] mt-[-88px] w-[30%] rounded-[46px] bg-white-a700 px-5 py-[26px] md:ml-0 md:w-full sm:py-5">
                    <Img src="images/img_bookmark.svg" alt="Bookmark Image" className="h-[38px] w-full md:h-auto" />
                  </div>
                </div>
                <div className="absolute bottom-[-1.12px] left-0 right-0 z-[4] mx-auto flex flex-1 items-start sm:relative sm:flex-col">
                  <div className="flex w-[74%] items-start self-center sm:w-full sm:flex-col">
                    <Button
                      color="white_A700"
                      size="md"
                      className="relative z-[5] mt-[88px] w-[66px] rounded-[32px] px-3"
                    >
                      <Img src="images/img_outlook.svg" />
                    </Button>
                    <div className="relative ml-[-32px] flex flex-1 sm:ml-0 sm:flex-col sm:self-stretch">
                      <div className="h-[264px] w-[264px] rounded-[132px] border-[1.81px] border-dashed border-blue-400" />
                      <div className="relative ml-[-66px] flex w-full flex-col items-start justify-end rounded-[132px] border-[1.81px] border-dashed border-blue-400 py-4 sm:ml-0 sm:w-full">
                        <Button color="white_A700" size="md" className="mt-[164px] w-[66px] rounded-[32px] px-3">
                          <Img src="images/img_calendar.svg" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button
                    color="white_A700"
                    size="md"
                    className="relative ml-[-32px] mt-[88px] w-[66px] rounded-[32px] px-3 sm:ml-0"
                  >
                    <Img src="images/img_google_drive.svg" />
                  </Button>
                </div>
              </div>
              <div className="flex w-[42%] flex-col items-start gap-[60px] md:w-full sm:gap-[30px]">
                <div className="flex flex-col gap-[22px] self-stretch">
                  <Heading
                    size="header_h2"
                    as="h2"
                    className="text-[64px] font-bold leading-[77px] tracking-[-1.28px] text-white-a700 md:text-[48px]"
                  >
                    Work with Your Favorite Apps Using whitepace
                  </Heading>
                  <Text as="p" className="text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-white-a700">
                    Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have
                    all the tools you need for your project success.
                  </Text>
                </div>
                <Button
                  shape="round"
                  rightIcon={
                    <Img
                      src="images/img_arrowleft_white_a700.svg"
                      alt="Arrow Left"
                      className="my-1 h-[14px] w-[14px] object-contain"
                    />
                  }
                  className="min-w-[194px] gap-2.5 rounded-md px-[34px] font-medium tracking-[-0.36px] sm:px-5"
                >
                  Read more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
