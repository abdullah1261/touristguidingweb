import React from "react";

import Header from "components/Header";
import { Img, Text, List } from "components";
import HaveliLike1 from "components/HaveliLike1";
import HaveliRowgroup941 from "components/HaveliRowgroup941";
import HaveliRowgroup942 from "components/HaveliRowgroup942";
import FrameSixtyTwoFooter40 from "components/FrameSixtyTwoFooter40";
import { useNavigate } from "react-router-dom";

const DynastyPage = () => {
  const navigate = useNavigate();

  function handleNavigate10() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-orange_200 flex flex-col items-center justify-start mx-auto pb-1 w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-lime_900 border border-lime_900 border-solid flex flex-col font-actor items-center justify-center md:px-5 shadow-bs4 w-full" />
          <div className="font-roboto h-[367px] md:h-[461px] md:px-5 relative w-full">
            <Img
              src="images/img_d1_367x1600.png"
              className="h-[367px] m-auto object-cover w-full"
              alt="d1"
            />
            <div className="absolute bottom-[5%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-end justify-start mx-auto w-[87%]">
              <Img
                src="images/img_d2.png"
                className="h-[106px] sm:h-auto mb-[7px] object-cover rounded-[50px] w-[9%] md:w-full"
                alt="d3"
              />
              <Text
                className="font-medium mb-[9px] ml-9 md:ml-[0] md:mt-0 mt-14 text-left text-white_A700 w-auto"
                variant="body2"
              >
                Dynasty
              </Text>
              <Img
                src="images/img_television.svg"
                className="h-[50px] md:ml-[0] ml-[784px] md:mt-0 mt-[63px] w-auto"
                alt="television"
              />
              <Text
                className="font-medium mb-4 ml-5 md:ml-[0] md:mt-0 mt-[67px] text-center text-white_A700 w-auto"
                variant="body8"
              >
                Review
              </Text>
              <HaveliLike1 className="bg-gray_100 flex flex-col items-center justify-start mb-1.5 md:ml-[0] ml-[22px] md:mt-0 mt-[62px] p-[3px] rounded-[22px] w-auto md:w-full" />
              <Text
                className="font-medium mb-[15px] md:ml-[0] ml-[25px] md:mt-0 mt-[67px] text-center text-white_A700 w-auto"
                variant="body8"
              >
                Save
              </Text>
            </div>
          </div>
          <div className="bg-lime_800 border border-black_900 border-solid flex flex-row font-librebodoni items-center justify-start p-1.5 shadow-bs1 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[54px] mt-[13px] md:px-5 w-[68%]">
              <Img
                src="images/img_materialsymbol.svg"
                className="h-6 w-6"
                alt="materialsymbol"
              />
              <Text
                className="font-normal leading-[56.00px] ml-1.5 md:ml-[0] not-italic text-black_900 text-left text-shadow-ts2 w-[57%] sm:w-full"
                variant="body12"
              >
                87 Shahrah-e Quaid-e-Azam Avari Lahore, Lahore 54000 Pakistan
              </Text>
              <Img
                src="images/img_materialsymbolscall.svg"
                className="h-6 md:ml-[0] ml-[9px] md:mt-0 mt-0.5 w-6"
                alt="materialsymbols"
              />
              <Text
                className="font-normal ml-1.5 md:ml-[0] not-italic text-black_900 text-left w-auto"
                variant="body12"
              >
                04236366366
              </Text>
              <Img
                src="images/img_dashiconsadminsite.svg"
                className="h-5 md:ml-[0] ml-[52px] md:mt-0 mt-0.5 w-5"
                alt="dashiconsadmins"
              />
              <a
                href="https://www.facebook.com/dynastychinese/"
                className="font-normal md:ml-[0] ml-[9px] not-italic text-black_900 text-left text-lg underline w-auto"
                target="_blank"
                rel="noreferrer"
              >
                <Text className="">Website</Text>
              </a>
              <Img
                src="images/img_materialsymbol_black_900.svg"
                className="h-6 ml-14 md:ml-[0] md:mt-0 mt-0.5 w-6"
                alt="materialsymbol_One"
              />
              <a
                href="https://www.foodpanda.pk/restaurant/ftut/dynasty-restaurant-avari-hotel"
                className="font-normal md:ml-[0] ml-[9px] not-italic text-black_900 text-left text-lg underline w-auto"
                target="_blank"
                rel="noreferrer"
              >
                <Text className="">Menu</Text>
              </a>
            </div>
          </div>
          <Text
            className="font-librebodoni md:ml-[0] ml-[76px] mt-9 not-italic text-black_900 text-center w-auto"
            variant="body5"
          >
            Food Gallery
          </Text>
          <div className="bg-white_A700 h-[271px] md:ml-[0] ml-[79px] mr-36 mt-2.5 md:px-5 w-[87%]"></div>
          <Text
            className="font-librebodoni md:ml-[0] ml-[75px] mt-6 not-italic text-black_900 text-left w-auto"
            variant="body5"
          >
            About Dynasty
          </Text>
          <div className="flex md:flex-col flex-row font-robotoflex gap-[22px] items-center justify-start md:ml-[0] ml-[76px] mt-[19px] md:px-5 w-[86%] md:w-full">
            <div className="bg-white_A700 h-[449px] w-[70%]"></div>
            <div className="flex flex-col items-end justify-start outline outline-black_900 pl-[7px] py-[7px] shadow-bs1 w-[30%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-[27px] w-[97%] md:w-full">
                <Text
                  className="not-italic text-black_900 text-left w-auto"
                  variant="body10"
                >
                  Social Networks
                </Text>
                <div className="flex flex-row font-librebodoni items-start justify-start ml-1.5 md:ml-[0] mt-[55px] w-[91%] md:w-full">
                  <Img
                    src="images/img_facebook.svg"
                    className="common-pointer h-5 w-5"
                    onClick={handleNavigate10}
                    alt="facebook"
                  />
                  <a
                    href="https://www.facebook.com/dynastychinese/"
                    className="font-bold ml-[7px] text-black_900 text-center text-lg underline w-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text className="">Facebook</Text>
                  </a>
                  <Img
                    src="images/img_riinstagramfill.svg"
                    className="h-6 ml-28 w-6"
                    alt="riinstagramfill"
                  />
                  <a
                    href="https://www.instagram.com/restaurantdynasty/?hl=en"
                    className="font-bold ml-[7px] mt-0.5 text-black_900 text-center text-lg underline w-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text className="">Instagram</Text>
                  </a>
                </div>
                <Text
                  className="ml-1 md:ml-[0] mt-[47px] not-italic text-black_900 text-center w-auto"
                  variant="body10"
                >
                  Features and facilities
                </Text>
                <div className="flex flex-row font-librebodoni items-start justify-evenly ml-1 md:ml-[0] mt-9 w-[99%] md:w-full">
                  <Img
                    src="images/img_materialsymbolscreditcard.svg"
                    className="h-6 mt-[3px] w-6"
                    alt="materialsymbols_One"
                  />
                  <Text
                    className="font-bold mt-1 text-black_900 text-center w-auto"
                    variant="body12"
                  >
                    Accepts Credit Cards
                  </Text>
                  <Img
                    src="images/img_mdismoking.svg"
                    className="h-6 mb-[3px] w-6"
                    alt="mdismoking"
                  />
                  <Text
                    className="font-bold mt-1 text-black_900 text-center w-auto"
                    variant="body12"
                  >
                    Smoking Area
                  </Text>
                </div>
                <div className="flex flex-row font-librebodoni items-center justify-start ml-1 md:ml-[0] mt-[39px] w-[82%] md:w-full">
                  <Img
                    src="images/img_materialsymbol_black_900_24x24.svg"
                    className="h-6 w-6"
                    alt="materialsymbol_Two"
                  />
                  <Text
                    className="font-bold ml-[5px] text-black_900 text-center w-auto"
                    variant="body12"
                  >
                    Pakistani Cuisine,Asian,Chineses
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[7px] mt-[25px] not-italic text-black_900 text-center w-auto"
                  variant="body10"
                >
                  Area
                </Text>
                <div className="flex flex-row font-librebodoni items-start justify-start ml-1 md:ml-[0] mt-[22px] w-1/5 md:w-full">
                  <Img
                    src="images/img_majesticonsmapmarkerarea.svg"
                    className="h-6 w-6"
                    alt="majesticonsmapm"
                  />
                  <Text
                    className="font-bold ml-1 text-black_900 text-left w-auto"
                    variant="body12"
                  >
                    Avari
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="font-librebodoni md:ml-[0] ml-[92px] mt-5 not-italic text-black_900 text-center w-auto"
            variant="body5"
          >
            Location
          </Text>
          <div className="bg-white_A700 h-[344px] md:ml-[0] ml-[76px] mr-36 mt-4 md:px-5 w-[87%]"></div>
          <Text
            className="font-librebodoni md:ml-[0] ml-[558px] mt-[50px] not-italic text-black_900 text-center w-auto"
            variant="body5"
          >
            You may also be interested in
          </Text>
          <div className="font-roboto h-[676px] mt-7 md:px-5 relative w-full">
            <List
              className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 mb-[-18.49px] ml-[76px] pl-[3px] pt-[3px] w-[87%] z-[1]"
              orientation="horizontal"
            >
              <div
                className="common-pointer bg-gray_900_01 flex flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
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
                className="common-pointer bg-gray_900_01 flex flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
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
            </List>
            <FrameSixtyTwoFooter40
              className="flex items-center justify-center mt-auto mx-auto w-full"
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
      </div>
    </>
  );
};

export default DynastyPage;