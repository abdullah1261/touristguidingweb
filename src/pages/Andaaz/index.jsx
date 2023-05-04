import React from "react";

import Header from "components/Header";
import { Img, Text, List } from "components";
import HaveliLike1 from "components/HaveliLike1";
import HaveliRowgroup941 from "components/HaveliRowgroup941";
import FrameSixtyTwoFooter40 from "components/FrameSixtyTwoFooter40";
import { useNavigate } from "react-router-dom";

const AndaazPage = () => {
  const navigate = useNavigate();

  function handleNavigate18() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-orange_200 flex flex-col items-center justify-start mx-auto pb-1 w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="font-roboto h-[438px] md:px-5 relative w-full">
            <Header className="bg-lime_900 border border-lime_900 border-solid flex flex-col font-actor items-center justify-center mb-[-1px] mx-auto shadow-bs4 w-full z-[1]" />
            <div className="h-[367px] md:h-[448px] mt-auto mx-auto w-full">
              <Img
                src="images/img_a1_367x1600.png"
                className="h-[367px] m-auto object-cover w-full"
                alt="a1"
              />
              <div className="absolute bottom-[5%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-end justify-start mx-auto w-[89%]">
                <Img
                  src="images/img_a21.png"
                  className="h-[106px] sm:h-auto mb-[3px] object-cover rounded-[50px] w-[9%] md:w-full"
                  alt="a21"
                />
                <Text
                  className="font-medium mb-4 md:ml-[0] ml-[25px] md:mt-0 mt-[45px] text-center text-white_A700 w-auto"
                  variant="body2"
                >
                  Andaaz Restaurant
                </Text>
                <Img
                  src="images/img_television.svg"
                  className="h-[50px] md:ml-[0] ml-[600px] md:mt-0 mt-[59px] w-auto"
                  alt="television"
                />
                <Text
                  className="font-medium mb-2.5 md:ml-[0] ml-[19px] md:mt-0 mt-[69px] text-center text-white_A700 w-auto"
                  variant="body8"
                >
                  Review
                </Text>
                <HaveliLike1 className="bg-gray_100 flex flex-col items-center justify-start mb-0.5 md:ml-[0] ml-[22px] md:mt-0 mt-[62px] p-[3px] rounded-[22px] w-auto md:w-full" />
                <Text
                  className="font-medium mb-[9px] md:ml-[0] ml-[38px] md:mt-0 mt-[69px] text-center text-white_A700 w-auto"
                  variant="body8"
                >
                  Save
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-lime_800 border border-black_900 border-solid flex flex-row font-librebodoni items-center justify-start p-1.5 shadow-bs1 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[54px] mt-[13px] md:px-5 w-[68%]">
              <Img
                src="images/img_materialsymbol.svg"
                className="h-6 w-6"
                alt="materialsymbol"
              />
              <a
                href="https://www.tripadvisor.com/Restaurant_Review-g295413-d1460604-Reviews-Andaaz_Restaurant-Lahore_Punjab_Province.html#MAPVIEW"
                className="font-normal leading-[56.00px] ml-1.5 md:ml-[0] not-italic text-black_900 text-left text-lg text-shadow-ts2 w-[57%] sm:w-full"
                target="_blank"
                rel="noreferrer"
              >
                <Text className="">
                  2189 A Fort Road Historic walled city Lahore, Lahore 54000
                  Pakistan
                </Text>
              </a>
              <Img
                src="images/img_materialsymbolscall.svg"
                className="h-6 md:ml-[0] ml-[9px] md:mt-0 mt-0.5 w-6"
                alt="materialsymbols"
              />
              <Text
                className="font-normal ml-1.5 md:ml-[0] not-italic text-black_900 text-left w-auto"
                variant="body12"
              >
                03000263229
              </Text>
              <Img
                src="images/img_dashiconsadminsite.svg"
                className="h-5 md:ml-[0] ml-[49px] md:mt-0 mt-0.5 w-5"
                alt="dashiconsadmins"
              />
              <a
                href="https://andaazrestaurant.com/"
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
                href="https://andaazrestaurant.com/contact-free-menu/"
                className="font-normal md:ml-[0] ml-[9px] not-italic text-black_900 text-left text-lg underline w-auto"
                target="_blank"
                rel="noreferrer"
              >
                <Text className="">Menu</Text>
              </a>
            </div>
          </div>
          <Text
            className="font-librebodoni md:ml-[0] ml-[76px] mt-[37px] not-italic text-black_900 text-center w-auto"
            variant="body5"
          >
            Food Gallery
          </Text>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[73px] mt-[17px] md:px-5 w-[87%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="overflow-x-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between overflow-auto w-full">
                  <Img
                    src="images/img_image127.png"
                    className="sm:flex-1 h-[271px] md:h-auto object-cover w-auto sm:w-full"
                    alt="image127"
                  />
                  <Img
                    src="images/img_image128.png"
                    className="h-[271px] md:h-auto object-cover w-[271px]"
                    alt="image128"
                  />
                  <Img
                    src="images/img_image129.png"
                    className="h-[271px] md:h-auto object-cover w-[271px]"
                    alt="image129"
                  />
                  <Img
                    src="images/img_image130.png"
                    className="sm:flex-1 h-[271px] md:h-auto object-cover w-auto sm:w-full"
                    alt="image130"
                  />
                  <Img
                    src="images/img_image131.png"
                    className="sm:flex-1 h-[271px] md:h-auto object-cover w-auto sm:w-full"
                    alt="image131"
                  />
                  <Img
                    src="images/img_image132.png"
                    className="sm:flex-1 h-[271px] md:h-auto object-cover w-auto sm:w-full"
                    alt="image132"
                  />
                  <Img
                    src="images/img_image133.png"
                    className="sm:flex-1 h-[271px] md:h-auto object-cover w-auto sm:w-full"
                    alt="image133"
                  />
                </div>
              </div>
            </div>
          </div>
          <Text
            className="font-librebodoni md:ml-[0] ml-[81px] mt-[26px] not-italic text-black_900 text-center w-auto"
            variant="body5"
          >
            About Andaaz Restuarant
          </Text>
          <div className="flex md:flex-col flex-row font-robotoflex md:gap-10 items-center justify-between max-w-[1380px] mt-2.5 mx-auto md:px-5 w-full">
            <div className="bg-white_A700 h-[449px] mb-3.5 w-3/5"></div>
            <div className="flex md:flex-1 flex-col items-end justify-start md:mt-0 mt-3.5 outline outline-black_900 pl-[7px] py-[7px] shadow-bs1 w-auto md:w-full">
              <div className="flex flex-col items-start justify-start mb-[26px] w-[97%] md:w-full">
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
                    onClick={handleNavigate18}
                    alt="facebook"
                  />
                  <a
                    href="https://www.facebook.com/AndaazRestaurant/"
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
                    href="https://www.instagram.com/andaazrestaurantofficial/?hl=en"
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
                <div className="flex flex-row font-librebodoni items-start justify-start ml-1 md:ml-[0] mt-[38px] w-[47%] md:w-full">
                  <Img
                    src="images/img_materialsymbol_black_900_24x24.svg"
                    className="h-6 w-6"
                    alt="materialsymbol_Two"
                  />
                  <Text
                    className="font-bold ml-[5px] text-black_900 text-center w-auto"
                    variant="body12"
                  >
                    Pakistani Cuisine
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[7px] mt-[25px] not-italic text-black_900 text-center w-auto"
                  variant="body10"
                >
                  Area
                </Text>
                <div className="flex flex-row font-librebodoni items-start justify-start ml-1 md:ml-[0] mt-[23px] w-[34%] md:w-full">
                  <Img
                    src="images/img_majesticonsmapmarkerarea.svg"
                    className="h-6 w-6"
                    alt="majesticonsmapm"
                  />
                  <Text
                    className="font-bold ml-1 text-black_900 text-left w-auto"
                    variant="body12"
                  >
                    Walled City
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="font-librebodoni md:ml-[0] ml-[92px] mt-1.5 not-italic text-black_900 text-center w-auto"
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
            <div className="flex md:flex-col flex-row gap-4 items-center justify-start mb-[-18.49px] ml-[76px] pl-[3px] pt-[3px] w-[87%] z-[1]">
              <div
                className="common-pointer bg-gray_900_01 flex flex-col items-center justify-start md:ml-[0] ml-[22px] pb-[9px] rounded-[25px] w-[33%] md:w-full"
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
              <List
                className="sm:flex-col flex-row gap-4 grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                orientation="horizontal"
              >
                <div
                  className="common-pointer bg-gray_900_01 flex flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
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
                    <div className="flex flex-row items-end justify-between mt-0.5 w-[85%] md:w-full">
                      <div className="md:h-[33px] h-[50px] mb-[3px] relative w-[45%]">
                        <Text
                          className="absolute font-medium inset-x-[0] mx-auto text-left text-white_A700 top-[0] w-max"
                          variant="body6"
                        >
                          Spice Bazaar
                        </Text>
                        <Text
                          className="absolute bottom-[0] font-medium left-[0] text-left text-white_A700 w-auto"
                          variant="body12"
                        >
                          Pakistani
                        </Text>
                      </div>
                      <HaveliRowgroup941 className="flex flex-row items-center justify-evenly mt-[31px] w-[35%] sm:w-full" />
                    </div>
                  </div>
                </div>
                <div
                  className="common-pointer bg-gray_900_01 flex flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
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
              </List>
            </div>
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

export default AndaazPage;
