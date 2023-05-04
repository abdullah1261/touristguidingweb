import React from "react";

import Header from "components/Header";
import { Text, Input, TextArea, Img } from "components";
import Footer from "components/Footer";

const ContactUsPage = () => {
  return (
    <>
      <div className="bg-orange_200 border border-black_900 border-solid flex flex-col font-actor items-center justify-start mx-auto pb-2.5 w-full">
        <Header className="bg-lime_900 border border-lime_900 border-solid flex flex-col items-center justify-center md:px-5 shadow-bs4 w-full" />
        <div className="font-inter h-[1023px] md:h-[1084px] sm:h-[874px] md:px-5 relative w-full">
          <div className="flex flex-col gap-[15px] h-full items-end justify-start ml-[129px] mt-[47px] w-[36%]">
            <div className="md:h-[165px] sm:h-[220px] h-[237px] relative w-full">
              <div className="absolute bottom-[0] flex flex-col font-inter items-center justify-start right-[0] w-[84%]">
                <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-[480px] sm:w-full">
                    <Text
                      className="not-italic text-gray_900 text-left w-auto"
                      variant="body11"
                    >
                      Our friendly team would love to hear from you.
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-8 items-center justify-between w-full">
                    <div className="flex flex-col gap-1.5 h-[72px] md:h-auto items-start justify-start w-56">
                      <Text
                        className="font-medium text-gray_800 text-left w-auto"
                        variant="body14"
                      >
                        First name
                      </Text>
                      <Input
                        wrapClassName="flex h-10 px-4 py-3 w-full"
                        className="p-0 w-full"
                        name="input"
                        placeholder=""
                        shape="RoundedBorder8"
                        variant="OutlineBluegray10003"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-1.5 h-[72px] md:h-auto items-start justify-start w-56">
                      <Text
                        className="font-medium text-gray_800 text-left w-auto"
                        variant="body14"
                      >
                        Last name
                      </Text>
                      <Input
                        wrapClassName="flex h-10 px-4 py-3 w-full"
                        className="p-0 w-full"
                        name="inputTwo"
                        placeholder=""
                        shape="RoundedBorder8"
                        variant="OutlineBluegray10003"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="absolute font-actor font-normal left-[0] not-italic text-center text-gray_900 text-shadow-ts4 top-[0] w-[70%] sm:w-full"
                variant="body1"
              >
                Contact Us
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[84%] md:w-full">
              <Text
                className="font-medium text-gray_800 text-left w-auto"
                variant="body14"
              >
                Email
              </Text>
              <Input
                wrapClassName="flex h-[46px] mt-[5px] px-4 py-3 w-full"
                className="md:h-auto p-0 sm:h-auto w-full"
                name="inputThree"
                placeholder=""
                shape="RoundedBorder8"
                variant="OutlineBluegray10003"
              ></Input>
              <Text
                className="font-medium mt-[17px] text-gray_800 text-left w-auto"
                variant="body14"
              >
                Phone number
              </Text>
              <Input
                wrapClassName="flex h-[47px] mt-1.5 w-full"
                className="md:h-auto p-0 sm:h-auto w-full"
                name="inputFour"
                placeholder=""
                shape="RoundedBorder8"
                variant="OutlineBluegray10003"
              ></Input>
              <Text
                className="font-medium mt-[13px] text-gray_800 text-left w-auto"
                variant="body14"
              >
                Message
              </Text>
              <TextArea
                className="gap-2 h-[125px] mt-[3px] px-3.5 py-2.5 w-[480px]"
                name="inputFive"
                placeholder=""
                shape="RoundedBorder8"
                variant="OutlineBluegray10003"
              ></TextArea>
            </div>
          </div>
          <div className="absolute h-[1023px] md:h-[1084px] sm:h-[874px] inset-[0] justify-center m-auto w-full">
            <div className="absolute flex flex-col items-center justify-start right-[7%] top-[0] w-4/5">
              <div className="flex flex-col gap-[27px] justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="bg-gray_900 h-[50px] mb-[120px] md:mt-0 mt-[657px] rounded-[25px] w-[11%]"></div>
                  <div className="h-[827px] relative w-[56%] md:w-full">
                    <div className="h-[827px] m-auto w-full">
                      <div className="absolute h-[827px] inset-y-[0] my-auto right-[0] w-4/5 sm:w-full">
                        <div className="absolute h-[827px] inset-y-[0] my-auto right-[0] w-[87%] sm:w-full">
                          <Img
                            src="images/img_image110.png"
                            className="h-[827px] m-auto object-cover w-full"
                            alt="image110"
                          />
                          <Img
                            src="images/img_image112.png"
                            className="absolute h-[252px] left-[11%] object-cover top-[19%] w-[39%]"
                            alt="image112"
                          />
                        </div>
                        <Img
                          src="images/img_image111.png"
                          className="absolute bottom-[18%] h-[172px] left-[0] object-cover w-[37%]"
                          alt="image111"
                        />
                      </div>
                      <Img
                        src="images/img_image113.png"
                        className="absolute bottom-[32%] h-[152px] inset-x-[0] mx-auto object-cover w-1/5"
                        alt="image113"
                      />
                      <Img
                        src="images/img_image115.png"
                        className="absolute bottom-[27%] h-[125px] left-[0] object-cover w-[29%]"
                        alt="image115"
                      />
                    </div>
                    <Img
                      src="images/img_image114.png"
                      className="absolute h-[266px] left-[13%] object-cover top-[30%] w-[33%]"
                      alt="image114"
                    />
                  </div>
                </div>
                <Text
                  className="font-medium md:ml-[0] ml-[885px] text-left text-white_A700 w-auto"
                  variant="body14"
                >
                  Send message
                </Text>
              </div>
            </div>
            <Footer className="absolute bottom-[0] flex font-roboto inset-x-[0] items-center justify-center mx-auto w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
