import React from "react";

import Header1 from "components/Header1";
import { Img, Text, List } from "components";
import FrameSixtyTwoFooter40 from "components/FrameSixtyTwoFooter40";

const HomepagePage = () => {
  return (
    <>
      <div className="bg-orange_200 flex flex-col font-actor items-center justify-end mx-auto w-full">
        <Header1 className="bg-lime_900 border border-lime_900 border-solid flex flex-col items-center justify-center md:px-5 shadow-bs4 w-full" />
        <div className="flex flex-col font-librebodoni items-center justify-end w-full">
          <div className="sm:h-[2737px] h-[2739px] md:h-[4099px] md:px-5 relative w-full">
            <div className="absolute bg-orange_200 flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[782px] w-full">
              <div className="bg-gray_800_7f flex flex-col items-center justify-end p-[78px] md:px-10 sm:px-5 shadow-bs5 w-full">
                <div className="flex flex-col items-center justify-start mt-7 w-[86%] md:w-full">
                  <div className="h-[642px] relative w-full">
                    <Img
                      src="images/img_intro1.png"
                      className="h-[642px] m-auto object-cover w-full"
                      alt="introOne"
                    />
                    <div className="absolute flex flex-col items-start justify-start left-[5%] top-[8%] w-auto">
                      <Text
                        className="font-normal not-italic text-gray_800 text-left text-shadow-ts1 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        Lahore
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[5px] not-italic text-gray_800 text-left text-shadow-ts1 w-auto"
                        variant="body2"
                      >
                        Heart of Pakistan
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[103px] w-[99%] md:w-full">
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
                            The Wazir Khan Mosque is a 17th-century mosque
                            located in old Lahore. The mosque was commissioned
                            during the reign of the Mughal Emperor Shah Jahan as
                            a part of an ensemble of buildings that also
                            included the nearby Shahi Hammam baths
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
                            Gali Surjan Singh was named after Hakim Surjan
                            Singh, the 19th century physician who lived in the
                            street. He had cured many royals and that is why the
                            street was named after him and because of his
                            popularity, the street was named after him.
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
                                Lahore Railway Station, which is also known as
                                the Lahore railway junction, is one of the
                                oldest and busiest railway junctions in
                                Pakistan. Dozens of passenger trains and cargo
                                carriages make use of the Lahore junction
                                station for large scale movements of the railway
                                traffic.
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
              <Text
                className="mt-5 not-italic text-black_900 text-center w-auto"
                variant="body5"
              >
                <>See more -&gt; </>
              </Text>
              <div className="flex md:flex-col flex-row gap-[45px] items-start justify-start mt-[61px] w-[62%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-[47px] shadow-bs5 w-auto md:w-full">
                  <Text
                    className="font-actor font-normal ml-1 md:ml-[0] not-italic text-gray_900 text-left text-shadow-ts1 uppercase w-[76%] sm:w-full"
                    variant="body1"
                  >
                    Lahore
                  </Text>
                  <Text
                    className="font-librebodoni ml-1 md:ml-[0] not-italic text-gray_800 text-left text-shadow-ts1 w-[99%] sm:w-full"
                    variant="body11"
                  ></Text>
                  <Text
                    className="font-librebodoni font-normal mt-8 not-italic text-gray_900 text-left"
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
              className="absolute bottom-[15%] font-roboto h-[356px] inset-x-[0] mx-auto w-full"
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
              imagefortyone="images/img_image41_206x194.png"
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

export default HomepagePage;
