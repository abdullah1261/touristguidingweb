import React from "react";

import { Img, Text, List } from "components";
import FrameSixtyTwoFooter40 from "components/FrameSixtyTwoFooter40";
import { useNavigate } from "react-router-dom";

const FrameSixtySixPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-librebodoni items-center justify-start mx-auto w-full">
        <div className="sm:h-[2720px] h-[2739px] md:h-[4008px] md:px-5 relative w-full">
          <div className="bg-orange_200 flex flex-col h-full items-center justify-start m-auto pb-[352px] w-full">
            <div className="bg-gray_800_7f flex flex-col items-center justify-end p-[78px] md:px-10 sm:px-5 shadow-bs5 w-full">
              <div className="flex flex-col items-center justify-start mt-7 w-[86%] md:w-full">
                <div className="h-[642px] relative w-full">
                  <div className="h-[642px] m-auto w-full">
                    <Img
                      src="images/img_intro1.png"
                      className="h-[642px] m-auto object-cover w-full"
                      alt="introOne"
                    />
                    <Text
                      className="absolute font-normal left-[5%] not-italic text-gray_800 text-left text-shadow-ts1 top-[8%] w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Lahore
                    </Text>
                  </div>
                  <Text
                    className="absolute font-normal left-[5%] not-italic text-gray_800 text-left text-shadow-ts1 top-[19%] w-auto"
                    variant="body2"
                  >
                    Heart of Pakistan
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] items-center justify-start mt-[91px] shadow-bs5 w-[66%] md:w-full">
              <div className="h-[173px] relative w-[99%] md:w-full">
                <Img
                  src="images/img_image100.png"
                  className="h-[109px] mb-[-10.49px] ml-[26px] object-cover rounded-[54px] w-[21%] z-[1]"
                  alt="image100"
                />
                <Img
                  src="images/img_image101.png"
                  className="h-[109px] mb-[-10.49px] ml-[280px] object-cover rounded-[54px] w-1/5 z-[1]"
                  alt="image101"
                />
                <Img
                  src="images/img_image106_111x212.png"
                  className="h-[111px] mb-[-12.01px] ml-auto mr-[292px] object-cover rounded-[55px] w-[21%] z-[1]"
                  alt="image106"
                />
                <Img
                  src="images/img_image107.png"
                  className="h-[113px] mb-[-14px] ml-auto mr-[37px] object-cover rounded-[56px] w-[21%] z-[1]"
                  alt="image107"
                />
                <div className="bg-gray_800_d8 flex sm:flex-col flex-row sm:gap-5 items-start justify-end mt-auto mx-auto p-2.5 w-full">
                  <Text
                    className="font-normal sm:mt-0 mt-[21px] not-italic text-center text-orange_200 text-shadow-ts1 w-auto"
                    variant="body3"
                  >
                    Khabay
                  </Text>
                  <Text
                    className="font-normal ml-16 sm:ml-[0] sm:mt-0 mt-[19px] not-italic text-center text-orange_200 text-shadow-ts1 w-auto"
                    variant="body3"
                  >
                    News
                  </Text>
                  <Text
                    className="font-normal sm:ml-[0] ml-[67px] sm:mt-0 mt-4 not-italic text-center text-orange_200 text-shadow-ts1 w-auto"
                    variant="body3"
                  >
                    Kahani
                  </Text>
                  <Text
                    className="font-normal mb-[3px] ml-8 sm:ml-[0] sm:mt-0 mt-3.5 not-italic text-center text-orange_200 text-shadow-ts1 w-auto"
                    variant="body3"
                  >
                    Activities
                  </Text>
                </div>
              </div>
              <div className="sm:h-[117px] md:h-[150px] h-[167px] relative w-full">
                <div className="absolute sm:h-[109px] md:h-[150px] h-[165px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute bg-gray_800_d8 bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto p-2 w-[99%]">
                    <Text
                      className="common-pointer font-normal mb-1 md:ml-[0] ml-[26px] md:mt-0 mt-[21px] not-italic text-center text-orange_200 text-shadow-ts1 w-auto"
                      variant="body3"
                      onClick={() => navigate("/gallery")}
                    >
                      Gallery
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[57px] md:mt-0 mt-[25px] not-italic text-center text-orange_200 text-shadow-ts1 w-auto"
                      variant="body3"
                    >
                      Recs
                    </Text>
                    <Text
                      className="common-pointer font-normal md:ml-[0] ml-[87px] md:mt-0 mt-[25px] not-italic text-center text-orange_200 text-shadow-ts1 w-auto"
                      variant="body3"
                      onClick={() => navigate("/maps")}
                    >
                      Maps
                    </Text>
                  </div>
                  <Text
                    className="common-pointer absolute bottom-[5%] font-normal not-italic right-[0] text-center text-orange_200 text-shadow-ts1 w-auto"
                    variant="body3"
                    onClick={() => navigate("/contactus")}
                  >
                    Contact Us
                  </Text>
                  <Img
                    src="images/img_image103.png"
                    className="common-pointer absolute h-[109px] object-cover right-[5%] rounded-[54px] top-[3%] w-1/5"
                    onClick={() => navigate("/contactus")}
                    alt="image103"
                  />
                  <Img
                    src="images/img_image104.png"
                    className="common-pointer absolute h-[109px] object-cover right-[29%] rounded-[54px] top-[0] w-1/5"
                    onClick={() => navigate("/maps")}
                    alt="image104"
                  />
                </div>
                <Img
                  src="images/img_image105_109x209.png"
                  className="common-pointer absolute h-[109px] left-[2%] object-cover rounded-[54px] top-[2%] w-1/5"
                  onClick={() => navigate("/gallery")}
                  alt="image105"
                />
                <Img
                  src="images/img_image108.png"
                  className="absolute h-[117px] left-1/4 object-cover rounded-[58px] top-[0] w-[22%]"
                  alt="image108"
                />
                <div className="absolute bg-orange_200 h-[31px] inset-x-[0] mx-auto shadow-bs7 top-[0] w-[5%]"></div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[102px] w-[99%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-[52px] items-start justify-between overflow-auto w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[52px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gray_900_db flex flex-col items-center justify-end sm:ml-[0] sm:mt-0 mt-[7px] p-[22px] sm:px-5 rounded-[77px] shadow-bs5 w-full">
                    <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-[93%] md:w-full">
                      <Img
                        src="images/img_image118_280x229.png"
                        className="h-[280px] md:h-auto object-cover rounded-[49px] w-[56%] sm:w-full"
                        alt="image118"
                      />
                      <div className="flex flex-col gap-1.5 items-start justify-start sm:mt-0 mt-[60px] w-auto sm:w-full">
                        <Text
                          className="font-normal not-italic text-center text-shadow-ts1 text-white_A700 w-[96%] sm:w-full"
                          variant="body9"
                        >
                          Wazir Khan Mosque
                        </Text>
                        <Text
                          className="not-italic text-center text-orange_200 text-shadow-ts1 w-full"
                          variant="body20"
                        >
                          The Wazir Khan Mosque is a 17th-century mosque located
                          in old Lahore. The mosque was commissioned during the
                          reign of the Mughal Emperor Shah Jahan as a part of an
                          ensemble of buildings that also included the nearby
                          Shahi Hammam baths
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_900_ad flex flex-col items-center justify-end mb-[7px] sm:ml-[0] p-[22px] sm:px-5 rounded-[77px] shadow-bs5 w-full">
                    <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-start w-[92%] md:w-full">
                      <Img
                        src="images/img_image119_280x229.png"
                        className="h-[280px] md:h-auto object-cover rounded-[49px] w-[56%] sm:w-full"
                        alt="image119"
                      />
                      <div className="flex flex-col gap-1.5 items-start justify-start sm:mt-0 mt-[60px] w-auto sm:w-full">
                        <Text
                          className="font-normal not-italic text-center text-shadow-ts1 text-white_A700 w-[96%] sm:w-full"
                          variant="body9"
                        >
                          Gali Surjan Singh
                        </Text>
                        <Text
                          className="not-italic text-center text-orange_200 text-shadow-ts1 w-full"
                          variant="body20"
                        >
                          Gali Surjan Singh was named after Hakim Surjan Singh,
                          the 19th century physician who lived in the street. He
                          had cured many royals and that is why the street was
                          named after him and because of his popularity, the
                          street was named after him.
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="md:mt-0 mt-2.5 overflow-x-auto w-[98%]">
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                    <div className="bg-gray_900_ad flex md:flex-1 flex-col items-center justify-end mb-[5px] p-[22px] sm:px-5 rounded-[77px] shadow-bs5 w-[33%] md:w-full">
                      <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-start w-[92%] md:w-full">
                        <Img
                          src="images/img_image119_13.png"
                          className="h-[280px] md:h-auto object-cover rounded-[49px] w-[56%] sm:w-full"
                          alt="image119"
                        />
                        <div className="flex flex-col gap-1.5 items-start justify-start sm:mt-0 mt-[60px] w-auto sm:w-full">
                          <Text
                            className="font-normal not-italic text-center text-shadow-ts1 text-white_A700 w-[96%] sm:w-full"
                            variant="body9"
                          >
                            Shalamar Gardens
                          </Text>
                          <Text
                            className="not-italic text-center text-orange_200 text-shadow-ts1 w-full"
                            variant="body20"
                          ></Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 md:flex-col flex-row gap-[30px] items-center justify-between md:mt-0 mt-0.5 shadow-bs5 w-[67%] md:w-full">
                      <div className="bg-gray_900_ad flex flex-col items-center justify-end mb-0.5 p-[22px] sm:px-5 rounded-[77px] shadow-bs5 w-[49%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-[95%] md:w-full">
                          <Img
                            src="images/img_image119_14.png"
                            className="h-[280px] md:h-auto object-cover rounded-[49px] w-[55%] sm:w-full"
                            alt="image119_One"
                          />
                          <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
                            <Text
                              className="font-normal not-italic text-center text-shadow-ts1 text-white_A700 w-full"
                              variant="body9"
                            >
                              Lahore Railway Station
                            </Text>
                            <Text
                              className="not-italic text-center text-orange_200 text-shadow-ts1 w-[89%] sm:w-full"
                              variant="body20"
                            >
                              Lahore Railway Station, which is also known as the
                              Lahore railway junction, is one of the oldest and
                              busiest railway junctions in Pakistan. Dozens of
                              passenger trains and cargo carriages make use of
                              the Lahore junction station for large scale
                              movements of the railway traffic.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray_900_ad flex flex-col items-center justify-start md:mt-0 mt-0.5 p-[22px] sm:px-5 rounded-[77px] shadow-bs5 w-[49%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-start w-[92%] md:w-full">
                          <Img
                            src="images/img_image119_15.png"
                            className="h-[280px] md:h-auto object-cover rounded-[49px] w-[56%] sm:w-full"
                            alt="image119_Two"
                          />
                          <div className="flex flex-col items-start justify-start sm:mt-0 mt-[74px] w-auto sm:w-full">
                            <Text
                              className="font-normal not-italic text-center text-shadow-ts1 text-white_A700 w-auto"
                              variant="body9"
                            >
                              Food Street
                            </Text>
                            <Text
                              className="mt-[3px] not-italic text-center text-orange_200 text-shadow-ts1 w-full"
                              variant="body20"
                            ></Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[45px] items-start justify-center mt-[106px] w-[61%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-[47px] shadow-bs5 w-auto md:w-full">
                <Text
                  className="font-normal ml-1 md:ml-[0] not-italic text-gray_900 text-left text-shadow-ts1 w-[76%] sm:w-full"
                  variant="body1"
                >
                  Lahore
                </Text>
                <Text
                  className="ml-1 md:ml-[0] not-italic text-gray_800 text-left text-shadow-ts1 w-[99%] sm:w-full"
                  variant="body11"
                ></Text>
                <Text
                  className="font-normal mt-8 not-italic text-gray_900 text-left"
                  variant="body9"
                ></Text>
              </div>
              <Img
                src="images/img_image120.png"
                className="h-[537px] sm:h-auto md:mt-0 mt-[51px] object-cover rounded-[57px] w-[41%] md:w-full"
                alt="image120"
              />
            </div>
          </div>
          <FrameSixtyTwoFooter40
            className="absolute bottom-[0] font-roboto h-[356px] inset-x-[0] mx-auto w-full"
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
            imagefortyone="images/img_image41.png"
            imagefortytwo="images/img_image42.png"
            imagefortythree="images/img_image43.png"
            elevenOne="images/img_11.png"
          />
        </div>
      </div>
    </>
  );
};

export default FrameSixtySixPage;
