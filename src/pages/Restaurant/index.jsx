import React from "react";

import JunoonNavbar from "components/JunoonNavbar";
import { Img, Button, Text } from "components";
import HaveliLike1 from "components/HaveliLike1";
import HaveliRowgroup941 from "components/HaveliRowgroup941";
import HaveliRowgroup942 from "components/HaveliRowgroup942";
import FrameSixtyTwoFooter40 from "components/FrameSixtyTwoFooter40";
import { useNavigate } from "react-router-dom";

const RestaurantPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-orange_200 flex flex-col items-center justify-start mx-auto pb-1 w-full">
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
            elevenOne="images/img_11_72x241.png"
          />
          <div className="flex flex-col items-center justify-start w-full">
            <Img
              src="images/img_15001.png"
              className="h-[367px] sm:h-auto object-cover w-full"
              alt="15001"
            />
          </div>
          <Button
            className="cursor-pointer font-librebodoni font-normal min-w-[1600px] md:min-w-full not-italic md:text-3xl sm:text-[28px] text-[32px] text-black_900 text-center w-auto"
            size="sm"
            variant="OutlineBlack900"
          >
            Restaurants in Lahore{" "}
          </Button>
          <Text
            className="font-medium font-roboto mt-[34px] text-center text-red_900 w-auto"
            variant="body3"
          >
            Discover top Restaurants in Lahore{" "}
          </Text>
          <Text
            className="font-bold font-roboto mt-[33px] text-center text-red_900_01 w-auto"
            variant="body3"
          >
            Fine Dining
          </Text>
          <div className="font-roboto md:gap-5 gap-[37px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1391px] min-h-[auto] mt-[30px] mx-auto md:px-5 w-full">
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
              onClick={() => navigate("/yum")}
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[242px] h-[305px] relative w-full">
                  <div className="flex flex-col m-auto w-full">
                    <div className="md:h-[242px] h-[273px] mx-auto w-full">
                      <div className="absolute h-[242px] inset-x-[0] mx-auto top-[0] w-full">
                        <Img
                          src="images/img_y1.png"
                          className="h-[242px] m-auto object-cover w-full"
                          alt="y1"
                        />
                        <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[4%] w-auto sm:w-full" />
                      </div>
                      <div className="absolute bg-blue_gray_100 bottom-[0] h-[106px] left-[7%] rounded-[56px] w-[26%]"></div>
                    </div>
                    <Text
                      className="font-medium mt-[-0.87px] mx-auto text-center text-white_A700 w-auto z-[1]"
                      variant="body6"
                    >
                      Yum Chinese & Thai restaurant
                    </Text>
                  </div>
                  <Img
                    src="images/img_y21.png"
                    className="absolute bottom-[10%] h-[106px] left-[7%] object-cover rounded-[50px] w-[26%]"
                    alt="y21"
                  />
                </div>
                <div className="flex flex-row items-center justify-between w-[85%] md:w-full">
                  <Text
                    className="font-medium text-center text-white_A700 w-auto"
                    variant="body12"
                  >
                    Chinese,Asian
                  </Text>
                  <HaveliRowgroup941 className="flex flex-row items-center justify-evenly w-auto sm:w-full" />
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-gray_900_01 flex flex-col pb-[9px] relative rounded-[25px] w-full"
              onClick={() => navigate("/andaaz")}
            >
              <div className="flex flex-col mx-auto w-full">
                <div className="md:h-[242px] h-[273px] mx-auto w-full">
                  <div className="absolute h-[242px] inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      src="images/img_a1.png"
                      className="h-[242px] m-auto object-cover w-full"
                      alt="a1"
                    />
                    <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[3%] w-auto sm:w-full" />
                  </div>
                  <div className="absolute bottom-[0] h-[106px] left-[7%] w-[28%]">
                    <div className="bg-blue_gray_100 h-[106px] m-auto rounded-[60px] w-full"></div>
                    <Img
                      src="images/img_a21.png"
                      className="absolute h-[106px] inset-[0] justify-center m-auto object-cover rounded-[50px] w-full"
                      alt="a21"
                    />
                  </div>
                </div>
                <Text
                  className="font-medium ml-8 mt-[-0.87px] text-left text-white_A700 w-auto z-[1]"
                  variant="body6"
                >
                  Andaaz Restaurant{" "}
                </Text>
              </div>
              <Text
                className="font-medium mb-[3px] ml-8 mt-[-0.01px] text-left text-white_A700 w-auto z-[1]"
                variant="body12"
              >
                Pakistani
              </Text>
              <HaveliRowgroup942 className="flex flex-row items-center justify-center ml-auto mr-[38px] mt-[-NaNpx] w-[30%] sm:w-full z-[1]" />
            </div>
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
              onClick={() => navigate("/spice")}
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[242px] h-[273px] relative w-full">
                  <div className="absolute h-[242px] inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      src="images/img_s22.png"
                      className="h-[242px] m-auto object-cover w-full"
                      alt="s22"
                    />
                    <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[3%] w-auto sm:w-full" />
                  </div>
                  <div className="absolute bg-blue_gray_100 bottom-[0] flex flex-col h-[116px] items-center justify-start left-[7%] rounded-[50%] w-[116px]">
                    <Img
                      src="images/img_s21.png"
                      className="h-[116px] md:h-auto object-cover rounded-bl-[50px] rounded-br-[50px] rounded-tl-[58px] rounded-tr-[58px] w-[116px]"
                      alt="s21"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mt-0.5 w-[85%] md:w-full">
                  <Text
                    className="font-medium text-left text-white_A700 w-auto"
                    variant="body6"
                  >
                    Spice Bazaar
                  </Text>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="font-medium text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      Pakistani
                    </Text>
                    <HaveliRowgroup941 className="flex sm:flex-1 flex-row items-center justify-evenly w-auto sm:w-full" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
              onClick={() => navigate("/dynasty")}
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[242px] h-[273px] relative w-full">
                  <div className="absolute h-[242px] inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      src="images/img_d1.png"
                      className="h-[242px] m-auto object-cover w-full"
                      alt="d1"
                    />
                    <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[4%] w-auto sm:w-full" />
                  </div>
                  <div className="absolute bottom-[0] h-[106px] left-[7%] w-[26%]">
                    <div className="bg-blue_gray_100 h-[106px] m-auto rounded-[56px] w-full"></div>
                    <Img
                      src="images/img_d2.png"
                      className="absolute h-[106px] inset-[0] justify-center m-auto object-cover rounded-[50px] w-full"
                      alt="d2"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-end justify-between mt-0.5 w-[85%] md:w-full">
                  <div className="md:h-[33px] h-[53px] relative w-[31%]">
                    <Text
                      className="absolute font-medium left-[0] text-left text-white_A700 top-[0] w-auto"
                      variant="body6"
                    >
                      Dynasty
                    </Text>
                    <Text
                      className="absolute bottom-[0] font-medium inset-x-[0] mx-auto text-center text-white_A700 w-max"
                      variant="body12"
                    >
                      Chinese,Asian
                    </Text>
                  </div>
                  <HaveliRowgroup941 className="flex flex-row items-center justify-evenly mt-[30px] w-[35%] sm:w-full" />
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
              onClick={() => navigate("/tuscany")}
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[242px] h-[273px] relative w-full">
                  <div className="absolute h-[242px] inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      src="images/img_t2.png"
                      className="h-[242px] m-auto object-cover w-full"
                      alt="t2"
                    />
                    <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[4%] w-auto sm:w-full" />
                  </div>
                  <div className="absolute bottom-[0] h-[106px] left-[7%] w-[26%]">
                    <div className="bg-blue_gray_100 h-[106px] m-auto rounded-[56px] w-full"></div>
                    <Img
                      src="images/img_t1.png"
                      className="absolute h-[106px] inset-[0] justify-center m-auto object-cover rounded-[50px] w-full"
                      alt="t1"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-end justify-start w-[85%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <Text
                      className="font-medium text-left text-white_A700 w-auto"
                      variant="body6"
                    >
                      Tuscany Courtyard{" "}
                    </Text>
                    <Text
                      className="font-medium text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      Italian,Mediterranean
                    </Text>
                  </div>
                  <HaveliRowgroup941 className="flex flex-row items-center justify-evenly sm:mt-0 mt-[31px] w-[35%] sm:w-full" />
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
              onClick={() => navigate("/dumpukht")}
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[242px] h-[273px] pl-1 relative w-full">
                  <div className="absolute h-[242px] inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      src="images/img_d31.png"
                      className="h-[242px] m-auto object-cover w-full"
                      alt="d31"
                    />
                    <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[3%] w-auto sm:w-full" />
                  </div>
                  <div className="absolute bottom-[0] h-[106px] left-[7%] w-[26%]">
                    <div className="bg-blue_gray_100 h-[106px] m-auto rounded-[56px] w-full"></div>
                    <Img
                      src="images/img_d21.png"
                      className="absolute h-[106px] inset-[0] justify-center m-auto object-cover rounded-[50px] w-full"
                      alt="d21"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[85%] md:w-full">
                  <Text
                    className="font-medium text-left text-white_A700 w-auto"
                    variant="body6"
                  >
                    Dumpukht
                  </Text>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="font-medium text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      Pakistani,Asian
                    </Text>
                    <HaveliRowgroup942 className="flex sm:flex-1 flex-row items-center justify-evenly w-auto sm:w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="font-bold font-roboto mt-[71px] text-center text-red_900_01 w-auto"
            variant="body3"
          >
            Local Cuisine
          </Text>
          <div className="font-roboto md:gap-5 gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1395px] min-h-[auto] mt-[34px] mx-auto md:px-5 w-full">
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[7px] rounded-[25px] w-full"
              onClick={() => navigate("/monal")}
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[242px] h-[273px] relative w-full">
                  <div className="absolute h-[242px] inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      src="images/img_31.png"
                      className="h-[242px] m-auto object-cover w-full"
                      alt="ThirtyOne"
                    />
                    <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[4%] w-auto sm:w-full" />
                  </div>
                  <div className="absolute bottom-[0] h-[106px] left-[7%] w-1/4">
                    <div className="bg-blue_gray_100 h-[106px] m-auto rounded-[55px] w-full"></div>
                    <Img
                      src="images/img_43.png"
                      className="absolute h-[106px] inset-[0] justify-center m-auto object-cover rounded-[50px] w-full"
                      alt="FortyThree"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between w-[84%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="font-medium text-center text-white_A700 w-auto"
                      variant="body6"
                    >
                      Monal
                    </Text>
                    <Text
                      className="font-medium text-center text-white_A700 w-auto"
                      variant="body12"
                    >
                      Barbecue,Asian{" "}
                    </Text>
                  </div>
                  <HaveliRowgroup941 className="flex flex-row items-center justify-evenly mt-7 w-[35%] sm:w-full" />
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
              onClick={() => navigate("/haveli")}
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col relative w-full">
                  <div className="md:h-[242px] h-[273px] mx-auto w-full">
                    <div className="absolute h-[242px] inset-x-[0] mx-auto top-[0] w-full">
                      <Img
                        src="images/img_h22.png"
                        className="h-[242px] m-auto object-cover w-full"
                        alt="h21"
                      />
                      <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[4%] w-auto sm:w-full" />
                    </div>
                    <div className="absolute bottom-[0] h-[106px] left-[7%] w-[27%]">
                      <div className="bg-blue_gray_100 h-[106px] m-auto rounded-[58px] w-full"></div>
                      <Img
                        src="images/img_h4.png"
                        className="absolute h-[106px] inset-[0] justify-center m-auto object-cover rounded-[50px] w-full"
                        alt="h3"
                      />
                    </div>
                  </div>
                  <Text
                    className="font-medium ml-7 mt-[-0.87px] text-left text-white_A700 w-auto z-[1]"
                    variant="body6"
                  >
                    Haveli Restaurant
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-[85%] md:w-full">
                  <Text
                    className="font-medium text-left text-white_A700 w-auto"
                    variant="body12"
                  >
                    Barbecue,Pakistani
                  </Text>
                  <HaveliRowgroup941 className="flex flex-row items-center justify-evenly w-auto sm:w-full" />
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
              onClick={() => navigate("/junoon")}
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[242px] h-[271px] relative w-full">
                  <div className="absolute h-[242px] inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      src="images/img_j1.png"
                      className="h-[242px] m-auto object-cover w-full"
                      alt="j1"
                    />
                    <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[3%] w-auto sm:w-full" />
                  </div>
                  <div className="absolute bg-blue_gray_100 bottom-[0] flex flex-col h-28 items-center justify-start left-[7%] rounded-[50%] w-28">
                    <Img
                      src="images/img_j21.png"
                      className="h-28 md:h-auto object-cover rounded-bl-[50px] rounded-br-[50px] rounded-tl-[56px] rounded-tr-[56px] w-28"
                      alt="j21"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mt-1 w-[85%] md:w-full">
                  <Text
                    className="font-medium text-left text-white_A700 w-auto"
                    variant="body6"
                  >
                    Junoon Heritage
                  </Text>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="font-medium text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      Middle eastern,Pakistani
                    </Text>
                    <HaveliRowgroup942 className="flex sm:flex-1 flex-row items-center justify-evenly w-auto sm:w-full" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
              onClick={() => navigate("/qabail")}
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[242px] h-[270px] relative w-full">
                  <div className="md:h-[242px] h-[270px] m-auto w-full">
                    <div className="absolute h-[242px] inset-x-[0] mx-auto top-[0] w-full">
                      <Img
                        src="images/img_q41.png"
                        className="h-[242px] m-auto object-cover w-full"
                        alt="q41"
                      />
                      <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[3%] w-auto sm:w-full" />
                    </div>
                    <div className="absolute bg-blue_gray_100 bottom-[0] h-28 left-[7%] rounded-[56px] w-[113px]"></div>
                  </div>
                  <Img
                    src="images/img_q31.png"
                    className="absolute bottom-[0] h-28 left-[7%] object-cover rounded-[50px] w-[113px]"
                    alt="q31"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-[3px] w-[85%] md:w-full">
                  <Text
                    className="font-medium text-left text-white_A700 w-auto"
                    variant="body6"
                  >
                    Qabail Tribes
                  </Text>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="font-medium text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      Barbecue,Asian
                    </Text>
                    <HaveliRowgroup942 className="flex sm:flex-1 flex-row items-center justify-evenly w-auto sm:w-full" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
              onClick={() => navigate("/saltnpeper")}
            >
              <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                <div className="md:h-[242px] h-[268px] relative w-full">
                  <div className="absolute h-[242px] inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      src="images/img_s31.png"
                      className="h-[242px] m-auto object-cover w-full"
                      alt="s31"
                    />
                    <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[3%] w-auto sm:w-full" />
                  </div>
                  <div className="absolute bg-blue_gray_100 bottom-[0] flex flex-col h-[113px] items-center justify-start left-[7%] rounded-[56px] w-[113px]">
                    <Img
                      src="images/img_s11.png"
                      className="h-[113px] md:h-auto object-cover rounded-bl-[50px] rounded-br-[50px] rounded-tl-[56px] rounded-tr-[56px] w-[113px]"
                      alt="s11"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[85%] md:w-full">
                  <Text
                    className="font-medium text-left text-white_A700 w-auto"
                    variant="body6"
                  >
                    Salt’n Pepper
                  </Text>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="font-medium text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      Asian,Pakistani
                    </Text>
                    <HaveliRowgroup941 className="flex sm:flex-1 flex-row items-center justify-evenly w-auto sm:w-full" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
              onClick={() => navigate("/butt")}
            >
              <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                <div className="md:h-[242px] h-[259px] relative w-full">
                  <Img
                    src="images/img_b21.png"
                    className="h-[242px] mx-auto object-cover w-full"
                    alt="b21"
                  />
                  <div className="absolute flex flex-col md:gap-10 gap-[102px] h-full inset-[0] justify-center m-auto pt-2 px-2 w-full">
                    <HaveliLike1 className="bg-gray_100 flex flex-col items-center justify-start md:ml-[0] ml-[370px] mr-1 p-[3px] rounded-[22px] w-auto md:w-full" />
                    <div className="h-[104px] md:ml-[0] ml-[25px] mr-[287px] relative w-[27%]">
                      <div className="absolute bg-blue_gray_100 h-[104px] inset-[0] justify-center m-auto rounded-[56px] w-full"></div>
                      <Img
                        src="images/img_b1.png"
                        className="absolute h-[104px] inset-[0] justify-center m-auto object-cover rounded-[50px] w-full"
                        alt="b1"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[85%] md:w-full">
                  <Text
                    className="font-medium text-left text-white_A700 w-auto"
                    variant="body6"
                  >
                    Butt Karahi Tikka
                  </Text>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="font-medium text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      Asian,Pakistani
                    </Text>
                    <HaveliRowgroup942 className="flex sm:flex-1 flex-row items-center justify-evenly mt-0.5 w-auto sm:w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="font-medium font-roboto mt-[122px] text-center text-red_900 w-auto"
            variant="body2"
          >
            More in Lahore
          </Text>
          <div className="flex flex-col font-librebodoni items-center justify-start mt-[105px] p-[25px] sm:px-5 w-full">
            <div className="flex flex-col gap-[9px] items-center justify-start max-w-[1533px] mb-[29px] mt-[60px] mx-auto md:px-5 w-full">
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
          <FrameSixtyTwoFooter40
            className="flex font-roboto items-center justify-center mt-[11px] md:px-5 w-full"
            followus="Follow Us"
            image134="images/img_image134.png"
            image135="images/img_image135.png"
            image136="images/img_image136.png"
            image137="images/img_image137.png"
            subscribetonewsOne="Subscribe to Newsletter"
            privacypolicy="Privacy Policy"
            maps="Maps"
            shop="Shop"
            contactus="Contact Us"
            imagefortyone="images/img_image41_201x192.png"
            imagefortytwo="images/img_image42.png"
            imagefortythree="images/img_image43.png"
            elevenOne="images/img_11.png"
          />
        </div>
      </div>
    </>
  );
};

export default RestaurantPage;
