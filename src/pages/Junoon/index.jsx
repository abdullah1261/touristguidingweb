import React from "react";

import JunoonNavbar from "components/JunoonNavbar";
import { Img, Text, List } from "components";
import HaveliLike1 from "components/HaveliLike1";
import HaveliRowgroup941 from "components/HaveliRowgroup941";
import HaveliRowgroup942 from "components/HaveliRowgroup942";
import FrameSixtyTwoFooter40 from "components/FrameSixtyTwoFooter40";
import { useNavigate } from "react-router-dom";

const JunoonPage = () => {
  const navigate = useNavigate();

  function handleNavigate20() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-orange_200 flex flex-col items-center justify-start mx-auto pb-1 w-full">
        <div className="flex flex-col justify-start w-full">
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
          <div className="font-roboto h-[367px] md:h-[461px] md:px-5 relative w-full">
            <Img
              src="images/img_j1_367x1600.png"
              className="h-[367px] m-auto object-cover w-full"
              alt="j1"
            />
            <div className="absolute bottom-[3%] flex md:flex-col flex-row md:gap-5 items-end justify-start right-[4%] w-[88%]">
              <Img
                src="images/img_j21.png"
                className="h-28 md:h-auto mb-1.5 object-cover rounded-[50px] w-28"
                alt="j22"
              />
              <Text
                className="font-medium mb-[11px] md:ml-[0] ml-[18px] md:mt-0 mt-[59px] text-center text-white_A700 w-auto"
                variant="body2"
              >
                Junoon Heritage
              </Text>
              <Img
                src="images/img_television.svg"
                className="h-[50px] md:ml-[0] ml-[643px] md:mt-0 mt-[68px] w-auto"
                alt="television"
              />
              <Text
                className="font-medium mb-[11px] md:ml-[0] ml-[26px] md:mt-0 mt-[77px] text-center text-white_A700 w-auto"
                variant="body8"
              >
                Review
              </Text>
              <HaveliLike1 className="bg-gray_100 flex flex-col items-center justify-start mb-[5px] md:ml-[0] ml-[26px] md:mt-0 mt-[68px] p-[3px] rounded-[22px] w-auto md:w-full" />
              <Text
                className="font-medium mb-3.5 md:ml-[0] ml-[31px] md:mt-0 mt-[73px] text-center text-white_A700 w-auto"
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
                Plot-1, C-1, Gulberg III, Lahore, Lahore 54000
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
                03001363996
              </Text>
              <Img
                src="images/img_dashiconsadminsite.svg"
                className="h-5 md:ml-[0] ml-[52px] md:mt-0 mt-0.5 w-5"
                alt="dashiconsadmins"
              />
              <a
                href="https://www.junoonrestaurant.pk/"
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
                href="https://www.junoonrestaurant.pk/"
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
          <div className="bg-white_A700 h-[271px] md:ml-[0] ml-[79px] mr-36 mt-2.5 md:px-5 w-[87%]"></div>
          <Text
            className="font-librebodoni md:ml-[0] ml-[75px] mt-6 not-italic text-black_900 text-left w-auto"
            variant="body5"
          >
            About Junoon Heritage
          </Text>
          <div className="flex md:flex-col flex-row font-robotoflex gap-7 items-center justify-start md:ml-[0] ml-[76px] mt-[19px] md:px-5 w-[87%] md:w-full">
            <div className="bg-white_A700 h-[449px] w-[69%]"></div>
            <div className="flex flex-col items-end justify-start outline outline-black_900 pl-[7px] py-[7px] shadow-bs1 w-[30%] md:w-full">
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
                    onClick={handleNavigate20}
                    alt="facebook"
                  />
                  <a
                    href="https://www.facebook.com/junoonrestaurantpk/"
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
                    href="https://www.instagram.com/junoonrestaurant/?hl=en"
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
                <div className="flex flex-row font-librebodoni items-start justify-start ml-1 md:ml-[0] mt-[39px] w-[84%] md:w-full">
                  <Img
                    src="images/img_materialsymbolscreditcard.svg"
                    className="h-6 mb-[5px] w-6"
                    alt="materialsymbols_One"
                  />
                  <Text
                    className="font-bold ml-1 text-black_900 text-center w-auto"
                    variant="body12"
                  >
                    Accepts Credit Cards
                  </Text>
                  <Img
                    src="images/img_car.svg"
                    className="h-[21px] ml-[15px] w-5"
                    alt="car"
                  />
                  <Text
                    className="font-bold ml-[13px] mt-1.5 text-black_900 text-center w-auto"
                    variant="body12"
                  >
                    Pickup
                  </Text>
                </div>
                <div className="flex flex-row font-librebodoni items-start justify-evenly ml-1 md:ml-[0] mt-[33px] w-[99%] md:w-full">
                  <Img
                    src="images/img_materialsymbol_black_900_24x24.svg"
                    className="h-6 w-6"
                    alt="materialsymbol_Two"
                  />
                  <Text
                    className="font-bold text-black_900 text-center w-auto"
                    variant="body12"
                  >
                    Pakistani Cuisine
                  </Text>
                  <Img
                    src="images/img_materialsymbol_24x24.svg"
                    className="h-6 w-6"
                    alt="materialsymbol_Three"
                  />
                  <Text
                    className="font-bold mt-[3px] text-black_900 text-center w-auto"
                    variant="body12"
                  >
                    Table reservation
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[7px] mt-6 not-italic text-black_900 text-center w-auto"
                  variant="body10"
                >
                  Area
                </Text>
                <div className="flex flex-row font-librebodoni items-start justify-start ml-1 md:ml-[0] mt-[23px] w-[27%] md:w-full">
                  <Img
                    src="images/img_majesticonsmapmarkerarea.svg"
                    className="h-6 w-6"
                    alt="majesticonsmapm"
                  />
                  <Text
                    className="font-bold ml-[5px] text-black_900 text-left w-auto"
                    variant="body12"
                  >
                    Gulberg
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
            className="font-librebodoni md:ml-[0] ml-[566px] mt-[50px] not-italic text-black_900 text-center w-auto"
            variant="body5"
          >
            You may also be interested in
          </Text>
          <div className="font-roboto sm:h-[381px] md:h-[618px] h-[676px] mt-7 md:px-5 relative w-full">
            <div className="sm:h-[353px] md:h-[590px] h-[676px] m-auto w-full">
              <List
                className="absolute sm:flex-col flex-row md:gap-10 gap-[476px] grid md:grid-cols-1 grid-cols-2 left-[5%] pl-1 pt-1 top-[0] w-[87%]"
                orientation="horizontal"
              >
                <div
                  className="common-pointer bg-gray_900_01 flex flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
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
                  className="common-pointer bg-gray_900_01 flex flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
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
              </List>
              <FrameSixtyTwoFooter40
                className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full"
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
            <div
              className="common-pointer absolute bg-gray_900_01 flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[7px] rounded-[25px] top-[1%] w-[28%]"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default JunoonPage;