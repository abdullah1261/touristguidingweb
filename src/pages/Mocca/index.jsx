import React from "react";

import Header from "components/Header";
import { Img, Text, List } from "components";
import HaveliLike1 from "components/HaveliLike1";
import HaveliRowgroup941 from "components/HaveliRowgroup941";
import HaveliRowgroup942 from "components/HaveliRowgroup942";
import FrameSixtyTwoFooter40 from "components/FrameSixtyTwoFooter40";
import { useNavigate } from "react-router-dom";

const MoccaPage = () => {
  const navigate = useNavigate();

  function handleNavigate7() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-orange_200 flex flex-col items-center justify-start mx-auto pb-1 w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-lime_900 border border-lime_900 border-solid flex flex-col font-actor items-center justify-center md:px-5 shadow-bs4 w-full" />
          <div className="font-roboto h-[367px] md:h-[481px] md:px-5 relative w-full">
            <Img
              src="images/img_m4.png"
              className="h-[367px] m-auto object-cover w-full"
              alt="m4"
            />
            <div className="absolute bottom-[5%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-end justify-start mx-auto w-[87%]">
              <Img
                src="images/img_m2.png"
                className="h-[116px] md:h-auto mb-3 object-cover rounded-[50px] w-[116px]"
                alt="m3"
              />
              <Text
                className="font-medium mb-3.5 md:ml-[0] ml-[23px] md:mt-0 mt-[66px] text-left text-white_A700 w-auto"
                variant="body2"
              >
                Mocca Coffee
              </Text>
              <Img
                src="images/img_television.svg"
                className="h-[50px] md:ml-[0] ml-[675px] md:mt-0 mt-[78px] w-auto"
                alt="television"
              />
              <Text
                className="font-medium mb-4 md:ml-[0] ml-[22px] md:mt-0 mt-[82px] text-center text-white_A700 w-auto"
                variant="body8"
              >
                Review
              </Text>
              <HaveliLike1 className="bg-gray_100 flex flex-col items-center justify-start mb-1.5 md:ml-[0] ml-[22px] md:mt-0 mt-[77px] p-[3px] rounded-[22px] w-auto md:w-full" />
              <Text
                className="font-medium mb-[15px] md:ml-[0] ml-[25px] md:mt-0 mt-[82px] text-center text-white_A700 w-auto"
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
                Mall 94 Fashion Ave Gaba St,, Lahore Pakistan
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
                0347 6622220
              </Text>
              <Img
                src="images/img_dashiconsadminsite.svg"
                className="h-5 md:ml-[0] ml-[49px] md:mt-0 mt-0.5 w-5"
                alt="dashiconsadmins"
              />
              <a
                href="https://moccacoffee.pk/outlets/"
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
                href="https://www.restaurantmenu.pk/mocca-coffee-lahore-menu/"
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
            className="font-librebodoni md:ml-[0] ml-[75px] mt-[19px] not-italic text-black_900 text-left w-auto"
            variant="body5"
          >
            About Mocca Coffee
          </Text>
          <div className="flex md:flex-col flex-row font-robotoflex gap-[22px] items-center justify-start md:ml-[0] ml-[76px] mt-6 md:px-5 w-[86%] md:w-full">
            <div className="bg-white_A700 h-[449px] w-[70%]"></div>
            <div className="flex flex-col items-center justify-start outline outline-black_900 p-[7px] shadow-bs1 w-[30%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-[27px] w-[90%] md:w-full">
                <Text
                  className="not-italic text-black_900 text-left w-auto"
                  variant="body10"
                >
                  Social Networks
                </Text>
                <div className="flex flex-row font-librebodoni items-start justify-start ml-1.5 md:ml-[0] mt-[55px] w-[99%] md:w-full">
                  <Img
                    src="images/img_facebook.svg"
                    className="common-pointer h-5 w-5"
                    onClick={handleNavigate7}
                    alt="facebook"
                  />
                  <a
                    href="https://www.facebook.com/moccacoffeePhase6/"
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
                    href="https://www.instagram.com/mocca.pk/?hl=en"
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
                <div className="flex flex-row font-librebodoni items-start justify-start ml-1 md:ml-[0] mt-[39px] w-[91%] md:w-full">
                  <Img
                    src="images/img_materialsymbolscreditcard.svg"
                    className="h-6 w-6"
                    alt="materialsymbols_One"
                  />
                  <Text
                    className="font-bold ml-1 text-black_900 text-center w-auto"
                    variant="body12"
                  >
                    Accepts Credit Cards
                  </Text>
                  <Img
                    src="images/img_mdismoking_black_900.svg"
                    className="h-6 ml-5 w-6"
                    alt="mdismoking"
                  />
                  <Text
                    className="font-bold ml-[5px] text-black_900 text-center w-auto"
                    variant="body12"
                  >
                    Dine in
                  </Text>
                </div>
                <div className="flex flex-row font-librebodoni items-start justify-start ml-1 md:ml-[0] mt-[37px] w-[33%] md:w-full">
                  <Img
                    src="images/img_materialsymbol_black_900_24x24.svg"
                    className="h-6 w-6"
                    alt="materialsymbol_Two"
                  />
                  <Text
                    className="font-bold ml-[5px] text-black_900 text-center w-auto"
                    variant="body12"
                  >
                    Breakfast
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[7px] mt-[25px] not-italic text-black_900 text-center w-auto"
                  variant="body10"
                >
                  Area
                </Text>
                <div className="flex flex-row font-librebodoni items-start justify-start ml-1 md:ml-[0] mt-[22px] w-[21%] md:w-full">
                  <Img
                    src="images/img_majesticonsmapmarkerarea.svg"
                    className="h-6 w-6"
                    alt="majesticonsmapm"
                  />
                  <Text
                    className="font-bold ml-[5px] text-black_900 text-left w-auto"
                    variant="body12"
                  >
                    DHA
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
            className="font-librebodoni md:ml-[0] ml-[560px] mt-[60px] not-italic text-black_900 text-center w-auto"
            variant="body5"
          >
            You may also be interested in
          </Text>
          <div className="font-roboto h-[676px] mt-[18px] md:px-5 relative w-full">
            <List
              className="sm:flex-col flex-row gap-[13px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mb-[-21.49px] mx-auto pb-[3px] px-[3px] w-[87%] z-[1]"
              orientation="horizontal"
            >
              <div
                className="common-pointer bg-gray_900_01 flex flex-col items-center justify-start sm:ml-[0] sm:mt-0 mt-[3px] pb-[9px] rounded-[25px] w-full"
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
                className="common-pointer bg-gray_900_01 flex flex-col items-center justify-start sm:ml-[0] sm:mt-0 mt-[3px] pb-[9px] rounded-[25px] w-full"
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
                className="common-pointer bg-gray_900_01 flex flex-col items-center justify-start mb-[3px] sm:ml-[0] pb-2.5 rounded-[25px] w-full"
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

export default MoccaPage;
