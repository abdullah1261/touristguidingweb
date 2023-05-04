import React from "react";

import Header from "components/Header";
import { Text, Img } from "components";
import LoginColumnheader from "components/LoginColumnheader";
import LoginButton from "components/LoginButton";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-orange_200 border border-black_900 border-solid flex flex-col font-actor sm:gap-10 md:gap-10 gap-[92px] items-center justify-start mx-auto pb-2.5 w-full">
        <Header className="bg-lime_900 border border-lime_900 border-solid flex flex-col items-center justify-center md:px-5 shadow-bs4 w-full" />
        <div className="md:h-[581px] sm:h-[666px] h-[895px] md:px-5 relative w-full">
          <div className="absolute md:h-[581px] h-[582px] sm:h-[666px] inset-x-[0] mx-auto top-[0] w-[67%] md:w-full">
            <div className="absolute bg-white_A700_ce flex flex-col h-full inset-[0] items-start justify-center m-auto p-[25px] sm:px-5 w-full">
              <Text
                className="font-actor md:ml-[0] ml-[18px] mt-[22px] not-italic text-gray_900 text-left w-auto"
                variant="body5"
              >
                Register your account
              </Text>
              <Text
                className="font-bold font-gilroy md:ml-[0] ml-[17px] text-blue_gray_400 text-left w-auto"
                variant="body14"
              >
                Fill the details bellow to submit register account.
              </Text>
              <div className="flex flex-col font-gilroy gap-[18px] h-[319px] md:h-auto items-start justify-start md:ml-[0] ml-[17px] mt-3.5 w-[456px] sm:w-full">
                <div className="flex sm:flex-col flex-row gap-[18px] items-start justify-start w-[456px] sm:w-full">
                  <LoginColumnheader
                    className="flex flex-col items-start justify-start w-full"
                    header="First Name"
                  />
                  <LoginColumnheader
                    className="flex flex-col items-start justify-start w-full"
                    header="Last Name"
                  />
                </div>
                <LoginColumnheader
                  className="flex flex-col items-start justify-start w-[456px] sm:w-full"
                  header="Email"
                />
                <LoginColumnheader
                  className="flex flex-col items-start justify-start w-[456px] sm:w-full"
                  header="Phone Number"
                />
                <LoginColumnheader
                  className="flex flex-col items-start justify-start w-[456px] sm:w-full"
                  header="Password"
                />
              </div>
              <Text
                className="font-gilroy font-medium md:ml-[0] ml-[17px] mt-[26px] text-blue_gray_400 text-left w-auto"
                variant="body17"
              ></Text>
              <LoginButton className="bg-gray_900 font-gilroy font-normal h-10 justify-center md:ml-[0] ml-[17px] mt-[31px] not-italic sm:px-5 px-7 py-3.5 rounded-md text-center text-sm text-white_A700 w-[453px]" />
            </div>
            <div className="absolute h-[581px] inset-y-[0] my-auto right-[0] w-1/2 sm:w-full">
              <div className="h-[581px] m-auto w-full">
                <Img
                  src="images/img_image138_581x528.png"
                  className="h-[581px] m-auto object-cover w-full"
                  alt="image138"
                />
                <div
                  className="common-pointer absolute bottom-[5%] flex flex-col items-start justify-start right-[23%] w-[181px]"
                  onClick={() => navigate("/login")}
                >
                  <Text
                    className="not-italic text-center text-orange_200 text-shadow-ts3 w-auto"
                    variant="body5"
                  >
                    Log In
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[12%] flex flex-col inset-x-[0] justify-start mx-auto w-auto">
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-auto"
                  as="h5"
                  variant="h5"
                >
                  Sign Up
                </Text>
                <a
                  href="javascript:"
                  className="font-normal md:ml-[0] ml-[15px] not-italic text-gray_400 text-left text-xl w-auto"
                >
                  <Text className="">Already have an account?</Text>
                </a>
              </div>
            </div>
          </div>
          <Footer className="absolute bottom-[0] flex font-roboto inset-x-[0] items-center justify-center mx-auto w-full" />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
