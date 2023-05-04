import React from "react";

import JunoonNavbar from "components/JunoonNavbar";
import { Img, Button, Text, List } from "components";
import FrameSixtyTwoFooter40 from "components/FrameSixtyTwoFooter40";

const EventsPage = () => {
  return (
    <>
      <div className="bg-orange_200 flex flex-col font-roboto justify-start mx-auto pb-2.5 w-full">
        <div className="flex flex-col items-center w-full">
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
          <Img
            src="images/img_blfziggo1180x490.png"
            className="h-[367px] sm:h-auto object-cover w-full"
            alt="blfziggo1180xFortyNine"
          />
          <Button
            className="cursor-pointer font-librebodoni font-normal min-w-[1598px] md:min-w-full not-italic md:text-3xl sm:text-[28px] text-[32px] text-black_900 text-center w-auto"
            size="sm"
            variant="OutlineBlack900"
          >
            Events in Lahore
          </Button>
          <Text
            className="font-medium font-roboto mt-[34px] text-center text-red_900 w-auto"
            variant="body3"
          >
            Lahore, the city that never sleeps!
          </Text>
          <Text
            className="font-bold font-roboto mt-[41px] text-center text-red_800 w-[79%] sm:w-full"
            variant="body6"
          >
            Lahore is known for buzzing late at night and providing
            entertainment and events of all sorts! With art theaters popping up
            and the city producing more artists than ever, the entertainment
            industry is keeping people busy!
          </Text>
          <Text
            className="font-bold font-roboto mt-[107px] text-center text-red_900_01 w-auto"
            variant="body2"
          >
            Explore All the Infamous Events in Lahore
          </Text>
          <div className="flex flex-col font-roboto mt-[92px] md:px-5 relative w-full">
            <div className="flex flex-col items-start justify-start mx-auto p-[29px] sm:px-5 w-full">
              <Text
                className="font-medium mb-[203px] md:ml-[0] ml-[57px] text-center text-red_900_02 w-auto"
                variant="body1"
              >
                Sports
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[-160px] mx-auto w-[93%] z-[1]">
              <div className="overflow-x-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end overflow-auto w-full">
                  <div className="bg-pink_900 flex md:flex-1 flex-col justify-start mb-4 pb-[26px] rounded-[25px] w-[29%] md:w-full">
                    <Img
                      src="images/img_malikattapegg.png"
                      className="h-[197px] sm:h-auto object-cover rounded-bl-[24px] rounded-br-[24px] rounded-tl-[25px] rounded-tr-[25px] w-full"
                      alt="malikattapegg"
                    />
                    <Text
                      className="font-medium mt-8 text-center text-gray_300_01"
                      variant="body6"
                    >
                      <>
                        Nov
                        <br />
                        17
                      </>
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[136px] text-center text-white_A700 w-auto"
                      variant="body12"
                    >
                      4th Malik Atta Tent Pegging 2023
                    </Text>
                    <Text
                      className="font-light md:ml-[0] ml-[135px] mt-1 text-center text-gray_400_01 w-auto"
                      variant="body14"
                    >
                      SA Gardens
                    </Text>
                    <Text
                      className="font-light md:ml-[0] ml-[136px] mt-3 text-center text-gray_400_01 w-auto"
                      variant="body14"
                    >
                      Fri Nov 17 2023 at 10:00 am
                    </Text>
                  </div>
                  <div className="bg-pink_900 flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[113px] pb-[73px] rounded-[25px] w-[30%] md:w-full">
                    <Img
                      src="images/img_rung1.png"
                      className="h-[195px] sm:h-auto object-cover rounded-tl-[25px] rounded-tr-[25px] w-full"
                      alt="rungOne"
                    />
                    <Text
                      className="font-medium mt-[34px] text-center text-gray_300_01"
                      variant="body6"
                    >
                      <>
                        May
                        <br />
                        10
                      </>
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[142px] text-center text-white_A700 w-auto"
                      variant="body12"
                    >
                      RUNG
                    </Text>
                    <Text
                      className="font-light md:ml-[0] ml-[142px] mt-[3px] text-center text-gray_400_01 w-auto"
                      variant="body14"
                    >
                      FAST NUCES LAHORE
                    </Text>
                  </div>
                  <div className="bg-pink_900 flex md:flex-1 flex-col items-start justify-start mb-4 ml-20 md:ml-[0] pb-11 rounded-[25px] w-[29%] md:w-full">
                    <Img
                      src="images/img_tennis1.png"
                      className="h-[203px] sm:h-auto object-cover rounded-bl-[27px] rounded-br-[27px] rounded-tl-[25px] rounded-tr-[25px] w-full"
                      alt="tennisOne"
                    />
                    <Text
                      className="font-medium mt-[26px] text-center text-gray_300_01"
                      variant="body6"
                    >
                      <>
                        Dec
                        <br />
                        19
                      </>
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[133px] text-center text-white_A700 w-auto"
                      variant="body12"
                    >
                      Nike open tennis tournament{" "}
                    </Text>
                    <Text
                      className="font-light md:ml-[0] ml-[134px] mt-[22px] text-center text-gray_400_01 w-auto"
                      variant="body14"
                    >
                      Bagh-e-Jinnah Lahore
                    </Text>
                  </div>
                  <div className="bg-pink_900 flex md:flex-1 flex-col justify-end mb-4 md:ml-[0] ml-[113px] pr-[19px] py-[19px] rounded-[25px] w-auto md:w-full">
                    <Text
                      className="font-medium mr-64 mt-[210px] text-center text-gray_300_01"
                      variant="body6"
                    >
                      <>
                        Nov
                        <br />
                        17
                      </>
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[123px] mr-[7px] text-center text-white_A700"
                      variant="body15"
                    >
                      <>
                        5 days Trip to Hunza and China Border
                        <br />
                      </>
                    </Text>
                    <Text
                      className="font-light md:ml-[0] ml-[63px] mr-[55px] mt-2 text-center text-gray_400_01"
                      variant="body14"
                    >
                      <>
                        Wandering Traveller
                        <br />
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="font-medium md:ml-[0] ml-[77px] mt-[81px] text-center text-red_900_02 w-auto"
          variant="body1"
        >
          Talks
        </Text>
        <div className="flex flex-col items-end mt-[70px] px-3.5 w-full">
          <div className="flex flex-col items-center justify-start md:px-5 w-[96%] md:w-full">
            <div className="overflow-x-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end overflow-auto w-full">
                <div className="bg-gray_900_01 flex md:flex-1 flex-col items-start justify-start md:mt-0 my-[5px] pb-6 rounded-[25px] w-[29%] md:w-full">
                  <Img
                    src="images/img_she1.png"
                    className="h-[207px] sm:h-auto object-cover rounded-tl-[25px] rounded-tr-[25px] w-full"
                    alt="sheOne"
                  />
                  <div className="h-6 md:h-[41px] mt-[19px] relative w-[89%] sm:w-full">
                    <Text
                      className="absolute bottom-[0] font-medium left-[0] text-center text-gray_300_01"
                      variant="body6"
                    >
                      <>
                        Nov
                        <br />
                        30
                      </>
                    </Text>
                    <Text
                      className="absolute font-medium right-[0] text-center text-white_A700 top-[0] w-auto"
                      variant="body12"
                    >
                      #SHE2023 SUMMIT & AWARDS
                    </Text>
                  </div>
                  <Text
                    className="font-light md:ml-[0] ml-[125px] mt-3 text-center text-gray_400_01 w-auto"
                    variant="body14"
                  >
                    Lahore,Punjab,Pakistan
                  </Text>
                  <Text
                    className="font-light md:ml-[0] ml-[120px] mt-[11px] text-center text-gray_400_01 w-auto"
                    variant="body14"
                  >
                    18 people are interested
                  </Text>
                </div>
                <div className="bg-gray_900_01 flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[76px] pb-12 rounded-[25px] w-[28%] md:w-full">
                  <Img
                    src="images/img_futurefest1.png"
                    className="h-[203px] sm:h-auto object-cover rounded-tl-[25px] rounded-tr-[25px] w-full"
                    alt="futurefestOne"
                  />
                  <Text
                    className="font-medium mt-[26px] text-center text-gray_300_01"
                    variant="body6"
                  >
                    <>
                      Jan
                      <br />
                      26
                    </>
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[109px] text-center text-white_A700 w-auto"
                    variant="body12"
                  >
                    Future Fest 2024 : Pakistan’s Largest Tech Event
                  </Text>
                  <Text
                    className="font-light md:ml-[0] ml-[127px] mt-[26px] text-center text-gray_400_01 w-auto"
                    variant="body14"
                  >
                    Alhamra Arts Council, Mall
                  </Text>
                </div>
                <div className="bg-gray_900_01 flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[140px] md:mt-0 mt-[11px] rounded-[25px] w-[27%] md:w-full">
                  <Img
                    src="images/img_tedx21.png"
                    className="h-[217px] sm:h-auto object-cover rounded-tl-[25px] rounded-tr-[25px] w-full"
                    alt="tedxTwentyOne"
                  />
                  <Text
                    className="font-medium mt-[11px] text-center text-gray_300_01"
                    variant="body6"
                  >
                    <>
                      May
                      <br />
                      04
                    </>
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[145px] text-center text-white_A700 w-auto"
                    variant="body12"
                  >
                    RebooTED
                  </Text>
                  <Text
                    className="font-light mb-[45px] md:ml-[0] ml-[142px] mt-[11px] text-center text-gray_400_01 w-auto"
                    variant="body14"
                  >
                    TEDx Lahore
                  </Text>
                </div>
                <div className="bg-gray_900_01 flex md:flex-1 flex-col items-start justify-start ml-40 md:ml-[0] md:mt-0 mt-[11px] pb-[19px] rounded-[25px] w-[29%] md:w-full">
                  <Img
                    src="images/img_makersmarket1.png"
                    className="h-[205px] sm:h-auto object-cover rounded-tl-[25px] rounded-tr-[25px] w-full"
                    alt="makersmarketOne"
                  />
                  <Text
                    className="font-medium mt-6 text-center text-orange_A200"
                    variant="body6"
                  >
                    <>
                      Mar
                      <br />
                      20
                    </>
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[58px] text-center text-white_A700 w-auto"
                    variant="body12"
                  >
                    Makers Market
                  </Text>
                  <Text
                    className="font-light md:ml-[0] ml-[73px] mt-[11px] text-center text-gray_400_01 w-[68%] sm:w-full"
                    variant="body14"
                  >
                    The Commons Karachi
                  </Text>
                </div>
                <div className="bg-gray_900_01 flex md:flex-1 flex-col justify-center md:ml-[0] ml-[140px] md:mt-0 my-[5px] pr-[13px] py-[13px] rounded-[25px] w-auto md:w-full">
                  <Text
                    className="font-medium mr-[262px] mt-[216px] text-center text-gray_300_01"
                    variant="body6"
                  >
                    <>
                      Nov
                      <br />
                      17
                    </>
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[136px] text-center text-white_A700 w-auto"
                    variant="body12"
                  >
                    4th Malik Atta Tent Pegging 2023
                  </Text>
                  <Text
                    className="font-light md:ml-[0] ml-[35px] mr-[89px] text-center text-gray_400_01 w-[70%] sm:w-full"
                    variant="body14"
                  >
                    SA Gardens
                  </Text>
                  <Text
                    className="font-light mb-[5px] md:ml-[0] ml-[93px] mr-[31px] text-center text-gray_400_01"
                    variant="body14"
                  >
                    <>
                      <br />
                      Fri Nov 17 2023 at 10:00 am
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="font-medium md:ml-[0] ml-[86px] mt-[88px] text-center text-red_900_02 w-auto"
          variant="body1"
        >
          Competitions
        </Text>
        <div className="flex flex-col md:gap-10 gap-[183px] items-center mt-20 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1456px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between overflow-auto w-full">
              <div className="bg-gray_900_01 flex md:flex-1 flex-col justify-start pb-[26px] rounded-[25px] w-[29%] md:w-full">
                <Img
                  src="images/img_malikattapegg.png"
                  className="h-[197px] sm:h-auto object-cover rounded-bl-[24px] rounded-br-[24px] rounded-tl-[25px] rounded-tr-[25px] w-full"
                  alt="malikattapegg_One"
                />
                <Text
                  className="font-medium mt-8 text-center text-gray_300_01"
                  variant="body6"
                >
                  <>
                    Nov
                    <br />
                    17
                  </>
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[136px] text-center text-white_A700 w-auto"
                  variant="body12"
                >
                  4th Malik Atta Tent Pegging 2023
                </Text>
                <Text
                  className="font-light md:ml-[0] ml-[135px] mt-1 text-center text-gray_400_01 w-auto"
                  variant="body14"
                >
                  SA Gardens
                </Text>
                <Text
                  className="font-light md:ml-[0] ml-[136px] mt-3 text-center text-gray_400_01 w-auto"
                  variant="body14"
                >
                  Fri Nov 17 2023 at 10:00 am
                </Text>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[103px] grid md:grid-cols-1 grid-cols-2 w-[65%] md:w-full"
                orientation="horizontal"
              >
                <div className="bg-gray_900_01 flex flex-col justify-center sm:ml-[0] pr-3.5 py-3.5 rounded-[25px] w-full">
                  <Text
                    className="font-medium mr-[260px] mt-[214px] text-center text-gray_300_01"
                    variant="body6"
                  >
                    <>
                      Nov
                      <br />
                      17
                    </>
                  </Text>
                  <div className="flex flex-col items-start justify-start mb-[11px] md:ml-[0] ml-[135px] w-auto md:w-full">
                    <Text
                      className="font-medium text-center text-white_A700 w-auto"
                      variant="body12"
                    >
                      4th Malik Atta Tent Pegging 2023
                    </Text>
                    <Text
                      className="font-light mt-1 text-center text-gray_400_01 w-auto"
                      variant="body14"
                    >
                      SA Gardens
                    </Text>
                    <Text
                      className="font-light mt-3 text-center text-gray_400_01 w-auto"
                      variant="body14"
                    >
                      Fri Nov 17 2023 at 10:00 am
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_900_01 flex flex-col justify-center sm:ml-[0] pr-3.5 py-3.5 rounded-[25px] w-full">
                  <Text
                    className="font-medium mr-[260px] mt-[214px] text-center text-gray_300_01"
                    variant="body6"
                  >
                    <>
                      Nov
                      <br />
                      17
                    </>
                  </Text>
                  <div className="flex flex-col items-start justify-start mb-[11px] md:ml-[0] ml-[135px] w-auto md:w-full">
                    <Text
                      className="font-medium text-center text-white_A700 w-auto"
                      variant="body12"
                    >
                      4th Malik Atta Tent Pegging 2023
                    </Text>
                    <Text
                      className="font-light mt-1 text-center text-gray_400_01 w-auto"
                      variant="body14"
                    >
                      SA Gardens
                    </Text>
                    <Text
                      className="font-light mt-3 text-center text-gray_400_01 w-auto"
                      variant="body14"
                    >
                      Fri Nov 17 2023 at 10:00 am
                    </Text>
                  </div>
                </div>
              </List>
              <List
                className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[88px] grid grid-cols-4 w-[1%] md:w-full"
                orientation="horizontal"
              >
                <div className="bg-gray_900_01 flex flex-col justify-center sm:ml-[0] pr-[13px] py-[13px] rounded-[25px] w-full">
                  <Text
                    className="font-medium mr-[262px] mt-[216px] text-center text-gray_300_01"
                    variant="body6"
                  >
                    <>
                      Nov
                      <br />
                      17
                    </>
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[136px] text-center text-white_A700 w-auto"
                    variant="body12"
                  >
                    4th Malik Atta Tent Pegging 2023
                  </Text>
                  <Text
                    className="font-light md:ml-[0] ml-[35px] mr-[89px] text-center text-gray_400_01 w-[70%] sm:w-full"
                    variant="body14"
                  >
                    SA Gardens
                  </Text>
                  <Text
                    className="font-light mb-[5px] md:ml-[0] ml-[93px] mr-[31px] text-center text-gray_400_01"
                    variant="body14"
                  >
                    <>
                      <br />
                      Fri Nov 17 2023 at 10:00 am
                    </>
                  </Text>
                </div>
                <div className="bg-gray_900_01 flex flex-col justify-center sm:ml-[0] pr-[13px] py-[13px] rounded-[25px] w-full">
                  <Text
                    className="font-medium mr-[262px] mt-[216px] text-center text-gray_300_01"
                    variant="body6"
                  >
                    <>
                      Nov
                      <br />
                      17
                    </>
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[136px] text-center text-white_A700 w-auto"
                    variant="body12"
                  >
                    4th Malik Atta Tent Pegging 2023
                  </Text>
                  <Text
                    className="font-light md:ml-[0] ml-[35px] mr-[89px] text-center text-gray_400_01 w-[70%] sm:w-full"
                    variant="body14"
                  >
                    SA Gardens
                  </Text>
                  <Text
                    className="font-light mb-[5px] md:ml-[0] ml-[93px] mr-[31px] text-center text-gray_400_01"
                    variant="body14"
                  >
                    <>
                      <br />
                      Fri Nov 17 2023 at 10:00 am
                    </>
                  </Text>
                </div>
                <div className="bg-gray_900_01 flex flex-col justify-center sm:ml-[0] pr-[13px] py-[13px] rounded-[25px] w-full">
                  <Text
                    className="font-medium mr-[262px] mt-[216px] text-center text-gray_300_01"
                    variant="body6"
                  >
                    <>
                      Nov
                      <br />
                      17
                    </>
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[136px] text-center text-white_A700 w-auto"
                    variant="body12"
                  >
                    4th Malik Atta Tent Pegging 2023
                  </Text>
                  <Text
                    className="font-light md:ml-[0] ml-[35px] mr-[89px] text-center text-gray_400_01 w-[70%] sm:w-full"
                    variant="body14"
                  >
                    SA Gardens
                  </Text>
                  <Text
                    className="font-light mb-[5px] md:ml-[0] ml-[93px] mr-[31px] text-center text-gray_400_01"
                    variant="body14"
                  >
                    <>
                      <br />
                      Fri Nov 17 2023 at 10:00 am
                    </>
                  </Text>
                </div>
                <div className="bg-gray_900_01 flex flex-col justify-center sm:ml-[0] pr-[13px] py-[13px] rounded-[25px] w-full">
                  <Text
                    className="font-medium mr-[262px] mt-[216px] text-center text-gray_300_01"
                    variant="body6"
                  >
                    <>
                      Nov
                      <br />
                      17
                    </>
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[136px] text-center text-white_A700 w-auto"
                    variant="body12"
                  >
                    4th Malik Atta Tent Pegging 2023
                  </Text>
                  <Text
                    className="font-light md:ml-[0] ml-[35px] mr-[89px] text-center text-gray_400_01 w-[70%] sm:w-full"
                    variant="body14"
                  >
                    SA Gardens
                  </Text>
                  <Text
                    className="font-light mb-[5px] md:ml-[0] ml-[93px] mr-[31px] text-center text-gray_400_01"
                    variant="body14"
                  >
                    <>
                      <br />
                      Fri Nov 17 2023 at 10:00 am
                    </>
                  </Text>
                </div>
              </List>
            </div>
          </div>
          <FrameSixtyTwoFooter40
            className="flex items-center justify-center md:px-5 w-full"
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
            imagefortyone="images/img_image41_206x190.png"
            imagefortytwo="images/img_image42.png"
            imagefortythree="images/img_image43.png"
            elevenOne="images/img_11.png"
          />
        </div>
      </div>
    </>
  );
};

export default EventsPage;
