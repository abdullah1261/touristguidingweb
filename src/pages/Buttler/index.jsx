import React from "react";

import Header from "components/Header";
import { Img, Text, List } from "components";
import HaveliLike1 from "components/HaveliLike1";
import HaveliRowgroup942 from "components/HaveliRowgroup942";
import HaveliRowgroup941 from "components/HaveliRowgroup941";
import FrameSixtyTwoFooter40 from "components/FrameSixtyTwoFooter40";
import { useNavigate } from "react-router-dom";

const ButtlerPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-orange_200 flex flex-col items-center justify-start mx-auto pb-1 w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-lime_900 border border-lime_900 border-solid flex flex-col font-actor items-center justify-center md:px-5 shadow-bs4 w-full" />
          <div className="font-roboto h-[367px] md:h-[427px] md:px-5 relative w-full">
            <Img
              src="images/img_b11_367x1600.png"
              className="h-[367px] m-auto object-cover w-full"
              alt="b11"
            />
            <div className="absolute bottom-[5%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto w-[86%]">
              <Img
                src="images/img_b22.png"
                className="h-[113px] md:h-auto mb-1.5 object-cover rounded-[50px] w-[113px]"
                alt="b23"
              />
              <Text
                className="font-medium md:ml-[0] ml-[23px] md:mt-0 mt-[57px] text-left text-white_A700 w-auto"
                variant="body2"
              >
                Buttler’s Chocolate Cafe
              </Text>
              <Img
                src="images/img_television.svg"
                className="h-[50px] md:ml-[0] ml-[495px] md:mt-0 mt-[69px] w-auto"
                alt="television"
              />
              <Text
                className="font-medium md:ml-[0] ml-[22px] md:mt-0 mt-[73px] text-center text-white_A700 w-auto"
                variant="body8"
              >
                Review
              </Text>
              <HaveliLike1 className="bg-gray_100 flex flex-col items-center justify-start mb-1.5 md:ml-[0] ml-[22px] md:mt-0 mt-[68px] p-[3px] rounded-[22px] w-auto md:w-full" />
              <Text
                className="font-medium md:ml-[0] ml-[25px] md:mt-0 mt-[73px] text-center text-white_A700 w-auto"
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
                Fortune Mall, 20C Block A, M. M. Alam Road, Lahore Pakistan
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
                04235772504
              </Text>
              <Img
                src="images/img_dashiconsadminsite.svg"
                className="h-5 ml-14 md:ml-[0] md:mt-0 mt-0.5 w-5"
                alt="dashiconsadmins"
              />
              <a
                href="https://www.butlerschocolates.com/en/butlers-chocolate/locator/fortune-mall-lahore-pakistan"
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
                href="https://www.butlerschocolates.com/en/butlers-chocolate/locator/fortune-mall-lahore-pakistan"
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
          ></Text>
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
                    onClick={handleNavigate}
                    alt="facebook"
                  />
                  <a
                    href="https://www.facebook.com/butlerspk/"
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
                    href="https://www.instagram.com/explore/locations/235050593/butlers-chocolate-cafe-pakistan/?hl=en"
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
                <div className="flex flex-row font-librebodoni items-start justify-start ml-1 md:ml-[0] mt-9 w-[93%] md:w-full">
                  <Img
                    src="images/img_materialsymbolscreditcard.svg"
                    className="h-6 mt-[3px] w-6"
                    alt="materialsymbols_One"
                  />
                  <Text
                    className="font-bold ml-1 mt-1 text-black_900 text-center w-auto"
                    variant="body12"
                  >
                    Accepts Credit Cards
                  </Text>
                  <Img
                    src="images/img_vector.svg"
                    className="h-5 ml-[18px] w-auto"
                    alt="vector"
                  />
                  <Text
                    className="font-bold ml-[18px] text-black_900 text-center w-auto"
                    variant="body12"
                  >
                    Dine in
                  </Text>
                </div>
                <div className="flex flex-row font-librebodoni items-center justify-start ml-1 md:ml-[0] mt-[39px] w-[38%] md:w-full">
                  <Img
                    src="images/img_materialsymbol_black_900_24x24.svg"
                    className="h-6 w-6"
                    alt="materialsymbol_Two"
                  />
                  <Text
                    className="font-bold ml-[5px] text-black_900 text-center w-auto"
                    variant="body12"
                  >
                    Desert,Cafe
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[7px] mt-[25px] not-italic text-black_900 text-center w-auto"
                  variant="body10"
                >
                  Area
                </Text>
                <div className="flex flex-row font-librebodoni items-start justify-start ml-1 md:ml-[0] mt-[22px] w-[45%] md:w-full">
                  <Img
                    src="images/img_majesticonsmapmarkerarea.svg"
                    className="h-6 w-6"
                    alt="majesticonsmapm"
                  />
                  <Text
                    className="font-bold ml-[5px] text-black_900 text-left w-auto"
                    variant="body12"
                  >
                    MM Alam road
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
            className="font-librebodoni md:ml-[0] ml-[550px] mt-[50px] not-italic text-black_900 text-center w-auto"
            variant="body5"
          >
            You may also be interested in
          </Text>
          <div className="font-roboto h-[686px] mt-[18px] md:px-5 relative w-full">
            <List
              className="sm:flex-col flex-row gap-3.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 mb-[-8.49px] ml-[76px] px-3.5 w-[87%] z-[1]"
              orientation="horizontal"
            >
              <div
                className="common-pointer bg-gray_900_01 flex flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
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
                  <div className="flex flex-col items-start justify-start w-[85%] md:w-full">
                    <Text
                      className="font-medium text-left text-white_A700 w-auto"
                      variant="body6"
                    >
                      Karak Khel
                    </Text>
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="font-medium text-left text-white_A700 w-auto"
                        variant="body12"
                      >
                        Cafe
                      </Text>
                      <HaveliRowgroup942 className="flex sm:flex-1 flex-row items-center justify-evenly mt-0.5 w-auto sm:w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="common-pointer bg-gray_900_01 flex flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
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
                className="common-pointer bg-gray_900_01 flex flex-col items-center justify-start pb-[9px] rounded-[25px] w-full"
                onClick={() => navigate("/urban")}
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:h-[242px] h-[272px] relative w-full">
                    <div className="absolute h-[241px] md:h-[242px] inset-x-[0] mx-auto top-[0] w-full">
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

export default ButtlerPage;
