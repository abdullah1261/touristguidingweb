import React from "react";

import JunoonNavbar from "components/JunoonNavbar";
import { Img, Text, Button } from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const KhaabePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-orange_200 flex flex-col items-center justify-start mx-auto pb-2.5 w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <JunoonNavbar
            className="bg-lime_900 border border-lime_900 border-solid flex flex-col font-actor items-center justify-center md:px-5 shadow-bs4 w-full"
            events="Events"
            kahani="Kahani"
            eat="Eat"
            map="Map"
            activites="Activites"
            gallery="Gallery"
            user="images/img_user.svg"
            elevenOne="images/img_11_71x241.png"
          />
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
            <Img
              src="images/img_15002.png"
              className="sm:flex-1 h-[367px] md:h-auto object-cover w-[28%] sm:w-full"
              alt="15002"
            />
            <Img
              src="images/img_22.png"
              className="sm:flex-1 h-[367px] md:h-auto object-cover w-[43%] sm:w-full"
              alt="TwentyTwo"
            />
            <Img
              src="images/img_32.png"
              className="sm:flex-1 h-[367px] md:h-auto object-cover w-[30%] sm:w-full"
              alt="ThirtyTwo"
            />
          </div>
          <div className="bg-lime_800 border border-black_900 border-solid flex flex-col font-librebodoni items-center justify-start p-[5px] shadow-bs1 w-full">
            <div className="flex flex-col items-center justify-start mb-[5px] md:px-5 w-auto md:w-full">
              <Text
                className="not-italic text-black_900 text-center w-auto"
                variant="body5"
              >
                Khaabe of Lahore{" "}
              </Text>
            </div>
          </div>
          <Text
            className="font-medium font-roboto mt-[35px] text-center text-red_900_01 w-auto"
            variant="body3"
          >
            Explore Famous Khaabe of Lahore
          </Text>
          <div className="flex md:flex-col flex-row font-roboto gap-[34px] items-center justify-center max-w-[1072px] mt-7 mx-auto md:px-5 w-full">
            <div className="bg-gray_900_01 flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[3px] rounded-[25px] w-[49%] md:w-full">
              <div className="h-[335px] relative rounded-[25px] w-full">
                <div className="h-[335px] m-auto w-full">
                  <Img
                    src="images/img_56.png"
                    className="common-pointer h-[335px] m-auto object-cover rounded-[25px] w-full"
                    onClick={() => navigate("/restaurant")}
                    alt="FiftySix"
                  />
                  <Text
                    className="absolute font-medium inset-x-[0] mx-auto text-center text-red_900_01 top-[41%] w-max"
                    variant="body3"
                  >
                    Restaurant{" "}
                  </Text>
                </div>
                <Button
                  className="absolute flex h-[51px] inset-x-[0] items-center justify-center mx-auto top-[27%] w-[51px]"
                  size="smIcn"
                  variant="icbFillRed90001"
                >
                  <Img
                    src="images/img_volume_white_a700.svg"
                    className="h-[38px]"
                    alt="volume"
                  />
                </Button>
              </div>
            </div>
            <div className="bg-gray_900_01 flex md:flex-1 flex-col items-center justify-start rounded-[25px] w-[49%] md:w-full">
              <div className="h-[338px] relative rounded-[25px] w-full">
                <div className="h-[338px] m-auto w-full">
                  <Img
                    src="images/img_c3.png"
                    className="common-pointer h-[338px] m-auto object-cover rounded-[25px] w-full"
                    onClick={() => navigate("/cafes")}
                    alt="c3"
                  />
                  <Text
                    className="absolute font-medium h-max inset-y-[0] my-auto right-[40%] text-center text-red_900_01 w-auto"
                    variant="body3"
                  >
                    Cafe
                  </Text>
                </div>
                <Button
                  className="absolute flex h-[51px] items-center justify-center right-[43%] top-[29%] w-[51px]"
                  size="smIcn"
                  variant="icbFillRed90001"
                >
                  <Img
                    src="images/img_save.svg"
                    className="h-[38px]"
                    alt="save"
                  />
                </Button>
              </div>
            </div>
          </div>
          <Text
            className="font-medium font-roboto mt-[88px] text-center text-red_900 w-auto"
            variant="body2"
          >
            More in Lahore
          </Text>
          <div className="font-roboto h-[809px] mt-10 md:px-5 relative w-full">
            <div className="flex flex-col font-librebodoni items-center justify-start mb-[-8.31px] mx-auto p-[25px] sm:px-5 w-full z-[1]">
              <div className="flex flex-col gap-[9px] items-center justify-start mb-[29px] mt-[60px] w-[99%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Img
                    src="images/img_image98.png"
                    className="md:flex-1 h-[230px] sm:h-auto object-cover rounded-[115px] w-auto md:w-full"
                    alt="imageNinetyEight"
                  />
                  <Img
                    src="images/img_image105.png"
                    className="common-pointer md:flex-1 h-[232px] sm:h-auto object-cover rounded-[116px] w-auto md:w-full"
                    onClick={() => navigate("/gallery")}
                    alt="image105"
                  />
                  <Img
                    src="images/img_image106.png"
                    className="md:flex-1 h-[230px] sm:h-auto object-cover rounded-[115px] w-auto md:w-full"
                    alt="image106"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[82%] md:w-full">
                  <Text
                    className="mb-2 not-italic text-black_900 text-center w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Activities
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[309px] md:mt-0 mt-2 not-italic text-black_900 text-center w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Gallery
                  </Text>
                  <Text
                    className="mb-2 md:ml-[0] ml-[359px] not-italic text-black_900 text-center w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Events
                  </Text>
                </div>
              </div>
            </div>
            <Footer className="flex items-center justify-center mt-auto mx-auto w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default KhaabePage;
