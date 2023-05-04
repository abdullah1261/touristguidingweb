import React from "react";

import { Text, Img, Line } from "components";
import { useNavigate } from "react-router-dom";

const Footer1 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
        <div className="sm:h-[250px] h-[354px] md:h-[461px] relative w-full">
          <div className="absolute bottom-[0] flex h-[237px] sm:h-[250px] md:h-[461px] inset-x-[0] justify-end mx-auto w-full">
            <div className="bg-gray_800 h-[250px] mt-auto mx-auto w-full"></div>
            <div className="absolute bg-lime_900 flex flex-col inset-x-[0] items-end justify-end mx-auto p-[18px] shadow-bs2 top-[0] w-full">
              <div className="flex flex-col items-center justify-start mr-[146px] mt-[9px] w-[61%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex md:flex-1 flex-col gap-1.5 items-center justify-start w-[12%] md:w-full">
                    <Text
                      className="font-bold font-roboto text-center text-orange_200 w-auto"
                      variant="body9"
                    >
                      Follow Us
                    </Text>
                    <div className="flex flex-row gap-[11px] items-center justify-between w-[92%] md:w-full">
                      <div className="h-[34px] relative w-[34px]">
                        <div className="bg-blue_gray_100 h-[30px] ml-auto rounded-md w-[30px]"></div>
                        <Img
                          src="images/img_image134.png"
                          className="absolute h-[34px] inset-[0] justify-center m-auto object-cover w-[34px]"
                          alt="image134"
                        />
                      </div>
                      <div className="h-12 relative w-[54%]">
                        <div className="bg-blue_gray_100 h-[31px] m-auto rounded-[15px] w-[31px]"></div>
                        <Img
                          src="images/img_image135.png"
                          className="absolute h-12 inset-[0] justify-center m-auto object-cover w-full"
                          alt="image135"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-[38px] ml-1.5 md:ml-[0] md:mt-0 mt-10 relative w-[5%] md:w-full">
                    <div className="bg-blue_gray_100 h-9 ml-auto my-auto rounded-[18px] w-[37px]"></div>
                    <Img
                      src="images/img_image136.png"
                      className="absolute h-[38px] inset-[0] justify-center m-auto object-cover w-full"
                      alt="image136"
                    />
                  </div>
                  <Img
                    src="images/img_image137.png"
                    className="md:flex-1 h-[38px] sm:h-auto ml-5 md:ml-[0] md:mt-0 mt-[39px] object-cover rounded-[18px] w-[5%] md:w-full"
                    alt="image137"
                  />
                  <Line className="bg-gray_200 h-[106px] md:h-[3px] md:ml-[0] ml-[113px] w-[3px] md:w-full" />
                  <div className="flex md:flex-1 flex-col justify-start md:ml-[0] ml-[45px] md:mt-0 mt-[5px] w-[61%] md:w-full">
                    <Text
                      className="font-bold font-roboto text-center text-orange_200 w-auto"
                      variant="body9"
                    >
                      Subscribe to Newsletter
                    </Text>
                    <div className="bg-gray_200 flex flex-row sm:gap-10 items-center justify-between ml-2 md:ml-[0] p-[3px] shadow-bs3 w-[99%] md:w-full">
                      <Text
                        className="font-roboto ml-[9px] not-italic text-blue_gray_200 text-left w-auto"
                        variant="body19"
                      >
                        Enter your email Address
                      </Text>
                      <div className="bg-white_A700 flex flex-col h-[33px] md:h-auto items-center justify-center sm:px-5 px-[26px] py-[5px] w-[146px]">
                        <Text
                          className="font-normal font-roboto not-italic text-center text-gray_800 w-auto"
                          variant="body17"
                        >
                          Subscribe
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col gap-[21px] inset-x-[0] justify-start mx-auto w-[27%]">
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="font-normal font-roboto not-italic text-center text-orange_200 text-shadow-ts w-auto"
                  variant="body14"
                >
                  Privacy Policy
                </Text>
                <Text
                  className="common-pointer font-normal font-roboto not-italic text-center text-orange_200 text-shadow-ts w-auto"
                  variant="body14"
                  onClick={() => navigate("/maps")}
                >
                  Maps
                </Text>
                <Text
                  className="common-pointer font-normal font-roboto not-italic text-center text-orange_200 text-shadow-ts w-auto"
                  variant="body14"
                  onClick={() => navigate("/shop")}
                >
                  Shop
                </Text>
                <Text
                  className="common-pointer font-normal font-roboto not-italic text-center text-orange_200 text-shadow-ts w-auto"
                  variant="body14"
                  onClick={() => navigate("/contactus")}
                >
                  Contact Us
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[115px] px-0.5 w-auto md:w-full">
                <Text
                  className="font-light font-roboto text-center text-orange_200 w-auto"
                  variant="body14"
                >
                  © 2023 All Rights Reserved
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute h-[206px] right-[0] top-[0] w-1/4 sm:w-full">
            <div className="absolute h-[206px] inset-y-[0] my-auto right-[0] w-[64%]">
              <Img
                src="images/img_image41.png"
                className="absolute h-[206px] inset-y-[0] my-auto object-cover right-[0] w-[79%]"
                alt="imageFortyOne"
              />
              <Img
                src="images/img_image42.png"
                className="absolute bottom-[22%] h-[89px] left-[0] object-cover w-[51%]"
                alt="imageFortyTwo"
              />
            </div>
            <Img
              src="images/img_image43.png"
              className="absolute bottom-[22%] h-[88px] left-[0] object-cover w-[47%]"
              alt="imageFortyThree"
            />
          </div>
          <Img
            src="images/img_11.png"
            className="absolute h-[181px] inset-y-[0] left-[4%] my-auto object-cover w-1/4"
            alt="Eleven_One"
          />
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
