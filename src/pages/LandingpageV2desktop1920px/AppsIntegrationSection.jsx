import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function AppsIntegrationSection() {
  return (
    <>
      {/* apps integration section */}
      <div className="mt-[140px]">
        <div className="bg-indigo-900 py-2">
          <div className="mb-[30px] flex h-[700px] items-end justify-center bg-[url(/public/images/img_element_gray_500.png)] bg-cover bg-no-repeat py-[98px] lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4">
            <div className="container-xl mt-[30px] flex justify-center lg:px-5 md:px-5">
              <div className="flex w-full items-center md:flex-col">
                <div className="relative h-[470px] w-[46%] md:w-full">
                  <div className="absolute left-0 right-0 top-0 mx-auto flex w-[70%] flex-col items-start">
                    <div className="flex flex-col items-start self-stretch">
                      <div className="relative z-[4] ml-[148px] flex flex-col items-center rounded-[36px] bg-white-a700 p-3.5 md:ml-0">
                        <Img src="images/img_gmail.svg" alt="Gmail Image" className="h-[42px]" />
                      </div>
                      <div className="relative mt-[-38px] flex items-center self-stretch">
                        <div className="relative z-[3] flex flex-col items-center rounded-[36px] bg-white-a700 p-3.5">
                          <Img src="images/img_dropbox.svg" alt="Dropbox Image" className="h-[42px]" />
                        </div>
                        <div className="relative ml-[-36px] flex flex-1 items-center">
                          <div className="h-[290px] w-[290px] rounded-[144px] border-2 border-dashed border-blue-400" />
                          <div className="relative ml-[-36px] flex flex-col items-center rounded-[36px] bg-white-a700 p-3.5">
                            <Img src="images/img_grid_amber_a400_01.svg" alt="Grid Image" className="h-[42px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative ml-[134px] mt-[-98px] w-[30%] rounded-[50px] bg-white-a700 px-6 py-7 lg:w-full md:ml-0 md:w-full sm:p-4">
                      <Img
                        src="images/img_bookmark.svg"
                        alt="Bookmark Image"
                        className="mt-1.5 h-[38px] w-full lg:h-auto md:h-auto"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-[0.20px] left-0 right-0 z-[5] mx-auto flex flex-1 items-start sm:relative sm:flex-col">
                    <div className="flex w-[76%] items-start self-center sm:w-full sm:flex-col">
                      <div className="relative z-[6] mt-24 flex flex-col items-center rounded-[36px] bg-white-a700 p-3.5">
                        <Img src="images/img_outlook.svg" alt="Outlook Image" className="h-[42px]" />
                      </div>
                      <div className="relative ml-[-36px] flex flex-1 sm:ml-0 sm:flex-col sm:self-stretch">
                        <div className="h-[290px] w-[290px] rounded-[144px] border-2 border-dashed border-blue-400" />
                        <div className="relative ml-[-72px] flex w-full flex-col items-start justify-end rounded-[144px] border-2 border-dashed border-blue-400 py-4 sm:ml-0 sm:w-full">
                          <div className="mt-[182px] flex flex-col items-center rounded-[36px] bg-white-a700 p-3.5">
                            <Img src="images/img_calendar.svg" alt="Calendar Image" className="h-[42px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative ml-[-36px] mt-24 flex flex-col items-center rounded-[36px] bg-white-a700 p-3.5 sm:ml-0">
                      <Img src="images/img_google_drive.svg" alt="Google Drive Image" className="h-[42px]" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start gap-[60px] md:self-stretch sm:gap-[30px]">
                  <div className="flex flex-col gap-[22px] self-stretch">
                    <Heading
                      as="h1"
                      className="text-[72px] font-bold leading-[87px] tracking-[-1.44px] text-white-a700 lg:text-[48px] md:text-[48px]"
                    >
                      Work with Your Favorite Apps Using whitepace
                    </Heading>
                    <Text
                      as="p"
                      className="text-[18px] font-normal leading-[30px] tracking-[-0.36px] text-white-a700 lg:text-[15px]"
                    >
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
                    className="min-w-[194px] gap-2.5 rounded-lg px-[34px] font-medium tracking-[-0.36px] sm:px-4"
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
