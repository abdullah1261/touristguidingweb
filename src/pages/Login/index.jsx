import React from "react";

import Header from "components/Header";
import { Img, Text, CheckBox, Line, List } from "components";
import LoginColumnheader from "components/LoginColumnheader";
import LoginButton from "components/LoginButton";
import LoginSignup from "components/LoginSignup";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const loginSignupPropList = [
    { logofacebookone: "images/img_logofacebook1.svg" },
    { logofacebookone: "images/img_logogoogleglogo.svg" },
    {},
  ];

  return (
    <>
      <div className="bg-orange_200 border border-black_900 border-solid flex flex-col font-actor sm:gap-10 md:gap-10 gap-[92px] items-center justify-start mx-auto pb-2.5 w-full">
        <Header className="bg-lime_900 border border-lime_900 border-solid flex flex-col items-center justify-center md:px-5 shadow-bs4 w-full" />
        <div className="md:h-[1172px] sm:h-[582px] h-[895px] md:px-5 relative w-full">
          <div className="absolute bg-gray_900_ce flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto top-[0] w-[67%]">
            <div className="h-[581px] relative w-1/2 md:w-full">
              <div className="h-[581px] m-auto w-full">
                <Img
                  src="images/img_image138.png"
                  className="h-[581px] m-auto object-cover w-full"
                  alt="image138"
                />
                <div className="absolute bottom-[6%] flex flex-col inset-x-[0] justify-start mx-auto w-[46%]">
                  <Text
                    className="mr-[41px] not-italic text-gray_400 text-left w-auto"
                    variant="body11"
                  >
                    Don,t have an account?
                  </Text>
                  <div
                    className="common-pointer flex flex-col items-start justify-start md:ml-[0] ml-[59px] w-[181px]"
                    onClick={() => navigate("/signup")}
                  >
                    <Text
                      className="not-italic text-center text-orange_200 text-shadow-ts3 w-auto"
                      variant="body5"
                    >
                      Sign Up
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="absolute bottom-[15%] font-normal inset-x-[0] mx-auto not-italic text-left text-white_A700 w-max"
                as="h5"
                variant="h5"
              >
                Log In
              </Text>
            </div>
            <div className="bg-lime_50 flex flex-col justify-end p-[21px] sm:px-5 w-[51%] md:w-full">
              <Text
                className="font-actor font-normal ml-5 md:ml-[0] mr-[306px] mt-[45px] not-italic text-gray_900 text-left w-auto"
                variant="body2"
              >
                Welcome
              </Text>
              <Text
                className="font-actor md:ml-[0] ml-[27px] mr-[309px] not-italic text-gray_900 text-left w-auto"
                variant="body11"
              >
                Login to continue
              </Text>
              <div className="flex flex-col font-gilroy gap-[18px] h-[195px] md:h-auto items-start justify-start mt-10 mx-auto w-[457px] sm:w-full">
                <LoginColumnheader
                  className="flex flex-col items-start justify-start w-[456px] sm:w-full"
                  header="Email"
                />
                <LoginColumnheader
                  className="flex flex-col items-start justify-start w-[456px] sm:w-full"
                  header="Password"
                />
                <div className="flex flex-row gap-[254px] items-start justify-between self-stretch w-auto sm:w-full">
                  <CheckBox
                    className="font-medium leading-[normal] text-gray_600 text-left text-xs"
                    inputClassName="h-4 mr-[5px] w-4"
                    name="rememberme"
                    id="rememberme"
                    label="Remember Me"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="OutlineBluegray500"
                  ></CheckBox>
                  <a
                    href="javascript:"
                    className="font-medium text-indigo_500 text-left text-xs w-auto"
                  >
                    <Text className="">Forgot Password?</Text>
                  </a>
                </div>
              </div>
              <LoginButton className="bg-gray_900 font-gilroy font-semibold h-9 justify-center md:ml-[0] ml-[50px] mr-5 mt-[22px] sm:px-5 px-7 py-3.5 rounded-md text-center text-sm text-white_A700 w-[417px]" />
              <div className="flex sm:flex-col flex-row font-gilroy gap-3 h-[18px] md:h-auto items-center justify-start ml-12 md:ml-[0] mr-[22px] mt-[22px] w-[417px] sm:w-full">
                <Line className="bg-blue_gray_100_02 h-0.5 w-[35%]" />
                <a
                  href="javascript:"
                  className="font-semibold text-center text-gray_600 text-sm w-auto"
                >
                  <Text className="">or continue with</Text>
                </a>
                <Line className="bg-blue_gray_100_02 h-0.5 w-[35%]" />
              </div>
              <List
                className="sm:flex-col flex-row gap-9 grid grid-cols-3 h-[68px] justify-start md:ml-[0] ml-[111px] mr-[88px] mt-[19px] w-72"
                orientation="horizontal"
              >
                {loginSignupPropList.map((props, index) => (
                  <React.Fragment key={`LoginSignup${index}`}>
                    <LoginSignup
                      className="bg-white_A700 border border-deep_purple_50 border-solid flex flex-col items-start justify-start px-[18px] py-4 rounded-md self-stretch w-auto sm:w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
          <Footer className="absolute bottom-[0] flex font-roboto inset-x-[0] items-center justify-center mx-auto w-full" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
