import React from "react";

import Header1 from "components/Header1";
import { Img, Button, Text } from "components";
import HaveliLike1 from "components/HaveliLike1";
import HaveliRowgroup941 from "components/HaveliRowgroup941";
import HaveliRowgroup942 from "components/HaveliRowgroup942";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const CafesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-orange_200 flex flex-col items-center justify-start mx-auto pb-2.5 w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header1 className="bg-lime_900 border border-lime_900 border-solid flex flex-col font-actor items-center justify-center md:px-5 shadow-bs4 w-full" />
          <div className="flex flex-col items-center justify-start w-full">
            <Img
              src="images/img_cafe1.png"
              className="h-[367px] sm:h-auto object-cover w-full"
              alt="cafeOne"
            />
          </div>
          <Button
            className="cursor-pointer font-librebodoni font-normal min-w-[1600px] md:min-w-full not-italic md:text-3xl sm:text-[28px] text-[32px] text-black_900 text-center w-auto"
            size="sm"
            variant="OutlineBlack900"
          >
            Cafes in Lahore{" "}
          </Button>
          <Text
            className="font-medium font-roboto mt-[34px] text-center text-red_900 w-auto"
            variant="body3"
          >
            Discover top Cafes in Lahore{" "}
          </Text>
          <div className="font-roboto md:gap-5 gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1392px] min-h-[auto] mt-[43px] mx-auto md:px-5 w-full">
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
              onClick={() => navigate("/arcadian")}
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col relative w-full">
                  <div className="md:h-[242px] h-[274px] mx-auto w-full">
                    <div className="absolute h-[242px] inset-x-[0] mx-auto top-[0] w-full">
                      <Img
                        src="images/img_ac1.png"
                        className="h-[242px] m-auto object-cover w-full"
                        alt="ac1"
                      />
                      <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[4%] w-auto sm:w-full" />
                    </div>
                    <div className="absolute bottom-[0] h-[107px] left-[7%] w-[26%]">
                      <div className="bg-blue_gray_100 h-[107px] m-auto rounded-[56px] w-full"></div>
                      <Img
                        src="images/img_ac21.png"
                        className="absolute h-[107px] inset-[0] justify-center m-auto object-cover rounded-[50px] w-full"
                        alt="acTwentyOne"
                      />
                    </div>
                  </div>
                  <Text
                    className="font-medium ml-7 mt-[-2.01px] text-left text-white_A700 w-auto z-[1]"
                    variant="body6"
                  >
                    Arcadian Cafe
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-[85%] md:w-full">
                  <Text
                    className="font-medium text-left text-white_A700 w-auto"
                    variant="body12"
                  >
                    Cafe,Fusion
                  </Text>
                  <HaveliRowgroup941 className="flex flex-row items-center justify-evenly w-auto sm:w-full" />
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
              onClick={() => navigate("/urban")}
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[242px] h-[273px] relative w-full">
                  <div className="absolute h-[242px] inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      src="images/img_u21.png"
                      className="h-[242px] m-auto object-cover w-full"
                      alt="u21"
                    />
                    <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[3%] w-auto sm:w-full" />
                  </div>
                  <div className="absolute bottom-[0] h-[106px] left-[7%] w-[28%]">
                    <div className="bg-blue_gray_100 h-[106px] m-auto rounded-[60px] w-full"></div>
                    <Img
                      src="images/img_u1.png"
                      className="absolute h-[106px] inset-[0] justify-center m-auto object-cover rounded-[50px] w-full"
                      alt="u1"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[85%] md:w-full">
                  <Text
                    className="font-medium text-left text-white_A700 w-auto"
                    variant="body6"
                  >
                    Urban Cafe Yoglicious
                  </Text>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="font-medium text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      Cafe
                    </Text>
                    <HaveliRowgroup942 className="flex sm:flex-1 flex-row items-center justify-evenly w-auto sm:w-full" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
              onClick={() => navigate("/gloria")}
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col relative w-full">
                  <div className="md:h-[242px] h-[273px] mx-auto w-full">
                    <div className="absolute h-[242px] inset-x-[0] mx-auto top-[0] w-full">
                      <Img
                        src="images/img_g1.png"
                        className="h-[242px] m-auto object-cover w-full"
                        alt="g1"
                      />
                      <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[3%] w-auto sm:w-full" />
                    </div>
                    <div className="absolute bg-blue_gray_100 bottom-[0] flex flex-col h-[116px] items-center justify-start left-[7%] rounded-[50%] w-[116px]">
                      <Img
                        src="images/img_g31.png"
                        className="h-[116px] md:h-auto object-cover rounded-bl-[50px] rounded-br-[50px] rounded-tl-[58px] rounded-tr-[58px] w-[116px]"
                        alt="g31"
                      />
                    </div>
                  </div>
                  <Text
                    className="font-medium ml-8 mt-[-0.87px] text-left text-white_A700 w-auto z-[1]"
                    variant="body6"
                  >
                    Gloria Jeans
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-[85%] md:w-full">
                  <Text
                    className="font-medium text-left text-white_A700 w-auto"
                    variant="body12"
                  >
                    Coffee & Tea, Cafe
                  </Text>
                  <HaveliRowgroup941 className="flex flex-row items-center justify-evenly mt-0.5 w-auto sm:w-full" />
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-2.5 rounded-[25px] w-full"
              onClick={() => navigate("/jade")}
            >
              <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                <div className="md:h-[242px] h-[265px] relative w-full">
                  <div className="absolute h-[242px] inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      src="images/img_j11.png"
                      className="h-[242px] m-auto object-cover w-full"
                      alt="j11"
                    />
                    <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[4%] w-auto sm:w-full" />
                  </div>
                  <div className="absolute bg-blue_gray_100 bottom-[0] flex flex-col h-[116px] items-center justify-start left-[7%] rounded-[50%] w-[116px]">
                    <Img
                      src="images/img_j22.png"
                      className="h-[116px] md:h-auto object-cover rounded-bl-[50px] rounded-br-[50px] rounded-tl-[58px] rounded-tr-[58px] w-[116px]"
                      alt="j22"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[85%] md:w-full">
                  <Text
                    className="font-medium text-left text-white_A700 w-auto"
                    variant="body6"
                  >
                    Jade Cafe
                  </Text>
                  <div className="flex flex-row items-center justify-between ml-1 md:ml-[0] w-[99%] md:w-full">
                    <Text
                      className="font-medium text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      Cafe
                    </Text>
                    <HaveliRowgroup941 className="flex flex-row items-center justify-evenly w-auto sm:w-full" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
              onClick={() => navigate("/mocca")}
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col relative w-full">
                  <div className="md:h-[242px] h-[273px] mx-auto w-full">
                    <div className="md:h-[242px] h-[273px] m-auto w-full">
                      <div className="absolute h-[242px] inset-x-[0] mx-auto top-[0] w-full">
                        <Img
                          src="images/img_m1.png"
                          className="h-[242px] m-auto object-cover w-full"
                          alt="m1"
                        />
                        <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[4%] w-auto sm:w-full" />
                      </div>
                      <div className="absolute bg-blue_gray_100 bottom-[0] h-[116px] left-[7%] rounded-[50%] w-[116px]"></div>
                    </div>
                    <Img
                      src="images/img_m2.png"
                      className="absolute bottom-[0] h-[116px] left-[7%] object-cover rounded-[50px] w-[116px]"
                      alt="m2"
                    />
                  </div>
                  <Text
                    className="font-medium ml-7 mt-[-1.01px] text-left text-white_A700 w-auto z-[1]"
                    variant="body6"
                  >
                    Mocca Coffee
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-[85%] md:w-full">
                  <Text
                    className="font-medium text-left text-white_A700 w-auto"
                    variant="body12"
                  >
                    Coffee & Tea,Cafe
                  </Text>
                  <HaveliRowgroup941 className="flex flex-row items-center justify-evenly w-auto sm:w-full" />
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
              onClick={() => navigate("/costa")}
            >
              <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                <div className="md:h-[241px] h-[262px] relative w-full">
                  <div className="absolute h-[241px] inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      src="images/img_cc21.png"
                      className="h-[241px] m-auto object-cover w-full"
                      alt="ccTwentyOne"
                    />
                    <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[3%] w-auto sm:w-full" />
                  </div>
                  <div className="absolute bottom-[0] md:h-28 h-[111px] left-[8%] w-28">
                    <div className="bg-blue_gray_100 h-28 m-auto rounded-[50%] w-28"></div>
                    <Img
                      src="images/img_cc1.png"
                      className="absolute h-28 inset-[0] justify-center m-auto object-cover rounded-[50px] w-28"
                      alt="cc1"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[85%] md:w-full">
                  <Text
                    className="font-medium text-left text-white_A700 w-auto"
                    variant="body6"
                  >
                    Cafe Costa
                  </Text>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="font-medium text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      Italian,Chinese
                    </Text>
                    <HaveliRowgroup942 className="flex sm:flex-1 flex-row items-center justify-evenly mt-0.5 w-auto sm:w-full" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
              onClick={() => navigate("/buttler")}
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[242px] h-[271px] relative w-full">
                  <div className="absolute h-[242px] inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      src="images/img_b11.png"
                      className="h-[242px] m-auto object-cover w-full"
                      alt="b11"
                    />
                    <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[3%] w-auto sm:w-full" />
                  </div>
                  <div className="absolute bg-blue_gray_100 bottom-[0] flex flex-col h-[113px] items-center justify-start left-[7%] rounded-[56px] w-[113px]">
                    <Img
                      src="images/img_b22.png"
                      className="h-[113px] md:h-auto object-cover rounded-bl-[50px] rounded-br-[50px] rounded-tl-[56px] rounded-tr-[56px] w-[113px]"
                      alt="b22"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[85%] md:w-full">
                  <Text
                    className="font-medium text-left text-white_A700 w-auto"
                    variant="body6"
                  >
                    Butler’s Chocolate Cafe
                  </Text>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="font-medium text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      Desert,Cafe
                    </Text>
                    <HaveliRowgroup942 className="flex sm:flex-1 flex-row items-center justify-evenly mt-0.5 w-auto sm:w-full" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
              onClick={() => navigate("/cinnabon")}
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[242px] h-[270px] relative w-full">
                  <div className="absolute h-[242px] inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      src="images/img_c21.png"
                      className="h-[242px] m-auto object-cover w-full"
                      alt="c21"
                    />
                    <HaveliLike1 className="absolute bg-gray_100 flex flex-col items-center justify-start p-[3px] right-[3%] rounded-[22px] top-[3%] w-auto sm:w-full" />
                  </div>
                  <div className="absolute bg-blue_gray_100 bottom-[0] flex flex-col h-[115px] items-center justify-start left-[7%] rounded-[57px] w-[115px]">
                    <Img
                      src="images/img_c11.png"
                      className="h-[115px] md:h-auto object-cover rounded-bl-[50px] rounded-br-[50px] rounded-tl-[57px] rounded-tr-[57px] w-[115px]"
                      alt="c11"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mt-0.5 w-[85%] md:w-full">
                  <Text
                    className="font-medium text-left text-white_A700 w-auto"
                    variant="body6"
                  >
                    Cinnabon
                  </Text>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="font-medium text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      Coffee & Tea,Cafe
                    </Text>
                    <HaveliRowgroup941 className="flex sm:flex-1 flex-row items-center justify-evenly mt-0.5 w-auto sm:w-full" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-gray_900_01 flex flex-1 flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
              onClick={() => navigate("/karak")}
            >
              <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                <div className="md:h-[242px] h-[259px] relative w-full">
                  <Img
                    src="images/img_k21.png"
                    className="h-[242px] mx-auto object-cover w-full"
                    alt="k21"
                  />
                  <div className="absolute flex flex-col md:gap-10 gap-[102px] h-full inset-[0] justify-center m-auto pt-2 px-2 w-full">
                    <HaveliLike1 className="bg-gray_100 flex flex-col items-center justify-start md:ml-[0] ml-[370px] mr-1 p-[3px] rounded-[22px] w-auto md:w-full" />
                    <div className="h-[104px] md:ml-[0] ml-[25px] mr-[287px] relative w-[27%]">
                      <div className="absolute bg-blue_gray_100 h-[104px] inset-[0] justify-center m-auto rounded-[56px] w-full"></div>
                      <Img
                        src="images/img_k1.png"
                        className="absolute h-[104px] inset-[0] justify-center m-auto object-cover rounded-[50px] w-full"
                        alt="k1"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-end justify-between w-[85%] md:w-full">
                  <div className="md:h-[35px] h-[53px] mb-[3px] relative w-[37%]">
                    <Text
                      className="absolute font-medium inset-x-[0] mx-auto text-left text-white_A700 top-[0] w-max"
                      variant="body6"
                    >
                      Karak Khel
                    </Text>
                    <Text
                      className="absolute bottom-[0] font-medium left-[0] text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      Cafe
                    </Text>
                  </div>
                  <HaveliRowgroup942 className="flex flex-row items-center justify-evenly mt-[34px] w-[35%] sm:w-full" />
                </div>
              </div>
            </div>
          </div>
          <Text
            className="font-medium font-roboto mt-24 text-center text-red_900 w-auto"
            variant="body2"
          >
            More in Lahore
          </Text>
          <div className="font-roboto h-[798px] mt-[25px] md:px-5 relative w-full">
            <div className="flex flex-col font-librebodoni items-center justify-start mb-[-19.31px] mx-auto p-[25px] sm:px-5 w-full z-[1]">
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

export default CafesPage;
