import React from "react";

import Header from "components/Header";
import { Img, Text, List } from "components";
import FrameSixtyTwoFooter40 from "components/FrameSixtyTwoFooter40";

const ActvitiesPage = () => {
  return (
    <>
      <div className="bg-orange_200 border border-black_900 border-solid flex flex-col font-actor gap-[23px] items-center justify-start mx-auto w-full">
        <Header className="bg-lime_900 border border-lime_900 border-solid flex flex-col items-center justify-center md:px-5 shadow-bs4 w-full" />
        <div className="sm:h-[1129px] md:h-[2773px] h-[6259px] md:px-5 relative w-full">
          <div className="bg-orange_200 flex flex-col md:gap-10 gap-[154px] h-full items-center justify-start m-auto pb-[130px] md:px-10 sm:px-5 px-[130px] w-full">
            <div className="md:h-[2603px] h-[845px] relative w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="h-[839px] relative w-[32%] md:w-full">
                    <Img
                      src="images/img_image124.png"
                      className="h-[839px] m-auto object-cover w-full"
                      alt="image124"
                    />
                    <div className="absolute bottom-[16%] flex flex-col gap-9 inset-x-[0] justify-start mx-auto w-[88%]">
                      <Img
                        src="images/img_image121.png"
                        className="h-[314px] md:h-auto object-cover rounded-[59px] w-full"
                        alt="image121"
                      />
                      <Text
                        className="font-normal leading-[56.00px] md:ml-[0] ml-[67px] not-italic text-center text-gray_900 text-shadow-ts2 w-[71%] sm:w-full"
                        variant="body1"
                      >
                        Historical Site Visit
                      </Text>
                    </div>
                  </div>
                  <div className="h-[839px] relative w-[35%] md:w-full">
                    <Img
                      src="images/img_image126.png"
                      className="h-[839px] m-auto object-cover w-full"
                      alt="image126"
                    />
                    <div className="absolute bottom-[17%] flex flex-col gap-8 inset-x-[0] items-center justify-start mx-auto w-4/5">
                      <Img
                        src="images/img_image122.png"
                        className="h-[314px] md:h-auto object-cover rounded-[59px] w-full"
                        alt="image122"
                      />
                      <Text
                        className="font-normal leading-[56.00px] not-italic text-center text-gray_900 text-shadow-ts2 w-[71%] sm:w-full"
                        variant="body1"
                      >
                        Adrenaline Rush
                      </Text>
                    </div>
                  </div>
                  <div className="h-[845px] relative w-[32%] md:w-full">
                    <Img
                      src="images/img_image125.png"
                      className="h-[845px] m-auto object-cover w-full"
                      alt="image125"
                    />
                    <Img
                      src="images/img_image123.png"
                      className="absolute h-[314px] inset-[0] justify-center m-auto object-cover rounded-[59px] w-[88%]"
                      alt="image123"
                    />
                    <Text
                      className="absolute bottom-[17%] font-normal leading-[56.00px] not-italic right-[0] text-center text-gray_900 text-shadow-ts2 w-[95%] sm:w-full"
                      variant="body1"
                    >
                      Shopping
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="absolute inset-x-[0] mx-auto not-italic text-center text-gray_900 text-shadow-ts2 top-[9%] w-max"
                as="h2"
                variant="h2"
              >
                Activities
              </Text>
            </div>
            <List
              className="flex-col md:gap-10 gap-[136px] grid items-center mb-64 w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                  <Text
                    className="font-normal leading-[56.00px] not-italic text-center text-gray_900 text-shadow-ts2 w-[68%] sm:w-full"
                    variant="body1"
                  >
                    Historical Site Visit
                  </Text>
                  <div className="flex flex-col font-librebodoni items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="bg-gray_900_ad flex md:flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-[77px] w-[48%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-start w-[96%] md:w-full">
                          <Img
                            src="images/img_image118.png"
                            className="h-[377px] sm:h-auto object-cover rounded-[49px] w-[55%] md:w-full"
                            alt="image118"
                          />
                          <div className="flex flex-col gap-[21px] items-center justify-start w-auto sm:w-full">
                            <Text
                              className="font-normal not-italic text-center text-white_A700 w-full"
                              variant="body3"
                            >
                              Wazir Khan Mosque
                            </Text>
                            <Text
                              className="font-normal not-italic text-center text-orange_200 w-[85%] sm:w-full"
                              variant="body17"
                            >
                              The Wazir Khan Mosque is a 17th-century mosque
                              located in old Lahore. The mosque was commissioned
                              during the reign of the Mughal Emperor Shah Jahan
                              as a part of an ensemble of buildings that also
                              included the nearby Shahi Hammam baths
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray_900_ad flex md:flex-1 flex-col items-center justify-start mb-2.5 p-[29px] sm:px-5 rounded-[77px] w-[48%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-[21px] items-start justify-start w-[94%] md:w-full">
                          <Img
                            src="images/img_image119.png"
                            className="h-[369px] sm:h-auto object-cover rounded-[49px] w-[56%] md:w-full"
                            alt="image119"
                          />
                          <div className="flex flex-col gap-[29px] items-center justify-start sm:mt-0 mt-[75px] w-auto sm:w-full">
                            <Text
                              className="font-normal not-italic text-center text-white_A700 w-full"
                              variant="body3"
                            >
                              Gali Surjan Singh
                            </Text>
                            <Text
                              className="font-normal not-italic text-center text-orange_200 w-[89%] sm:w-full"
                              variant="body17"
                            >
                              Gali Surjan Singh was named after Hakim Surjan
                              Singh, the 19th century physician who lived in the
                              street. He had cured many royals and that is why
                              the street was named after him and because of his
                              popularity, the street was named after him.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_900_ad flex flex-col items-center justify-start mt-[65px] p-[29px] sm:px-5 rounded-[77px] w-[48%] md:w-full">
                      <div className="flex sm:flex-col flex-row gap-[38px] items-center justify-start w-[93%] md:w-full">
                        <Img
                          src="images/img_image119_369x293.png"
                          className="h-[369px] sm:h-auto object-cover rounded-[49px] w-[56%] md:w-full"
                          alt="image119_One"
                        />
                        <div className="flex flex-col gap-[23px] items-start justify-start w-auto sm:w-full">
                          <Text
                            className="font-normal not-italic text-center text-white_A700 w-[96%] sm:w-full"
                            variant="body3"
                          >
                            Shalamar Gardens
                          </Text>
                          <Text
                            className="font-normal not-italic text-center text-orange_200 w-full"
                            variant="body17"
                          ></Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[58px] w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[7px] w-[48%] md:w-full">
                        <div className="bg-gray_900_ad flex flex-col items-end justify-start p-2 rounded-[77px] w-full">
                          <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-end ml-auto my-[21px] w-[93%] md:w-full">
                            <Img
                              src="images/img_image119_1.png"
                              className="h-[369px] sm:h-auto object-cover rounded-[49px] w-[52%] md:w-full"
                              alt="image119_Two"
                            />
                            <div className="flex flex-col gap-12 justify-start w-auto sm:w-full">
                              <Text
                                className="not-italic text-center text-white_A700 w-auto"
                                variant="body4"
                              >
                                Lahore Railway Station
                              </Text>
                              <Text
                                className="font-normal ml-5 md:ml-[0] not-italic text-center text-orange_200 w-3/4 sm:w-full"
                                variant="body17"
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
                      </div>
                      <div className="bg-gray_900_ad flex md:flex-1 flex-col items-center justify-start mb-[7px] p-[29px] sm:px-5 rounded-[77px] w-[48%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-[38px] items-start justify-start w-[93%] md:w-full">
                          <Img
                            src="images/img_image119_2.png"
                            className="h-[369px] sm:h-auto object-cover rounded-[49px] w-[56%] md:w-full"
                            alt="image119_Three"
                          />
                          <div className="flex flex-col gap-7 items-center justify-start sm:mt-0 mt-[60px] w-auto sm:w-full">
                            <Text
                              className="font-normal not-italic text-center text-white_A700 w-auto"
                              variant="body3"
                            >
                              Food Street
                            </Text>
                            <Text
                              className="font-normal not-italic text-center text-orange_200 w-[98%] sm:w-full"
                              variant="body17"
                            ></Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-8 items-center justify-start w-full">
                    <Text
                      className="font-normal leading-[56.00px] not-italic text-center text-gray_900 text-shadow-ts2 w-[68%] sm:w-full"
                      variant="body1"
                    >
                      Adrenaline Rush
                    </Text>
                    <div className="flex md:flex-col flex-row font-librebodoni md:gap-10 items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[18px] w-[47%] md:w-full">
                        <div className="bg-gray_900_ad flex flex-col items-center justify-start p-[29px] sm:px-5 rounded-[77px] w-full">
                          <div className="flex sm:flex-col flex-row gap-[34px] items-center justify-start w-[92%] md:w-full">
                            <Img
                              src="images/img_image119_3.png"
                              className="h-[369px] sm:h-auto object-cover rounded-[49px] w-[57%] md:w-full"
                              alt="image119"
                            />
                            <div className="flex flex-col gap-3.5 items-center justify-start w-auto sm:w-full">
                              <Text
                                className="not-italic text-center text-white_A700 w-auto"
                                variant="body4"
                              >
                                Joyland{" "}
                              </Text>
                              <Text
                                className="font-normal not-italic text-center text-orange_200 w-full"
                                variant="body17"
                              >
                                Joyland is a Pakistani amusement park company
                                based in Lahore, Punjab, Pakistan. The park,
                                adjacent to Fortress Stadium, was established in
                                1977 and is one of the largest recreation parks
                                in the city. It is spread out over an area of 6
                                acres.
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start mb-[18px] w-[47%] md:w-full">
                        <div className="bg-gray_900_ad flex sm:flex-col flex-row gap-[34px] items-center justify-start p-[29px] sm:px-5 rounded-[77px] w-full">
                          <Img
                            src="images/img_image119_4.png"
                            className="sm:flex-1 h-[369px] md:h-auto sm:ml-[0] ml-[21px] object-cover rounded-[49px] w-[52%] sm:w-full"
                            alt="image119_One"
                          />
                          <div className="md:h-[149px] h-[190px] relative w-[34%] sm:w-full">
                            <Text
                              className="absolute inset-x-[0] mx-auto not-italic text-center text-white_A700 top-[0] w-max"
                              variant="body4"
                            >
                              Laser Tag
                            </Text>
                            <Text
                              className="absolute bottom-[0] font-normal inset-x-[0] mx-auto not-italic text-center text-orange_200 w-full"
                              variant="body17"
                            >
                              Located in emporium mall, packages mall and mall
                              of Lahore is one of the most fun games; Laser Tag.
                              Laser tag is a recreational shooting sport where
                              participants use infrared-emitting light guns to
                              tag designated targets.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-librebodoni items-center justify-start md:ml-[0] ml-[381px] mt-8 w-[47%] md:w-full">
                    <div className="bg-gray_900_ad flex flex-col items-center justify-start p-[29px] sm:px-5 rounded-[77px] w-full">
                      <div className="flex sm:flex-col flex-row gap-[34px] items-start justify-start w-[95%] md:w-full">
                        <Img
                          src="images/img_image119_5.png"
                          className="h-[369px] sm:h-auto object-cover rounded-[49px] w-[55%] md:w-full"
                          alt="image119_Two"
                        />
                        <div className="flex flex-col gap-3.5 justify-start sm:mt-0 mt-[69px] w-auto sm:w-full">
                          <Text
                            className="ml-2.5 md:ml-[0] not-italic text-center text-white_A700 w-auto"
                            variant="body4"
                          >
                            Go Karting
                          </Text>
                          <Text
                            className="font-normal not-italic text-center text-orange_200 w-full"
                            variant="body17"
                          >
                            Are you ready to start your engines and race at
                            Pakistan’s first International Level Go Karting
                            Track? The 2F2F Formula Karting track has got you
                            covered. You can fuel your need for speed by racing
                            at the largest go Karting Track in Pakistan. Whether
                            you are an adult, or a youngster looking for some
                            extreme sport, 2F2F Karting has excellent
                            opportunities for you.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-librebodoni md:gap-10 items-center justify-between mt-[37px] w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start mb-[13px] w-[47%] md:w-full">
                      <div className="bg-gray_900_ad flex flex-col items-end justify-start p-4 rounded-[77px] w-full">
                        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-end ml-auto my-[13px] w-[94%] md:w-full">
                          <Img
                            src="images/img_image119_6.png"
                            className="h-[369px] sm:h-auto object-cover rounded-[49px] w-[53%] md:w-full"
                            alt="image119_Three"
                          />
                          <div className="flex flex-col gap-2 items-center justify-start w-auto sm:w-full">
                            <Text
                              className="not-italic text-center text-white_A700"
                              variant="body4"
                            >
                              <>
                                Gymkhana <br />
                                Golf Resort
                              </>
                            </Text>
                            <Text
                              className="font-normal not-italic text-center text-orange_200 w-3/4 sm:w-full"
                              variant="body17"
                            >
                              One of the oldest golf courses of the city. A
                              great get away in the heart of blustering city of
                              Lahore. Good restaurants most sports. Swimming and
                              lot more. Must go for visitors.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_900_ad flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[13px] p-[29px] sm:px-5 rounded-[77px] w-[47%] md:w-full">
                      <div className="flex sm:flex-col flex-row gap-[38px] items-center justify-start w-[93%] md:w-full">
                        <Img
                          src="images/img_image119_7.png"
                          className="h-[369px] sm:h-auto object-cover rounded-[49px] w-[56%] md:w-full"
                          alt="image119_Four"
                        />
                        <div className="flex flex-col gap-[34px] items-center justify-start w-auto sm:w-full">
                          <Text
                            className="font-normal not-italic text-center text-white_A700 w-auto"
                            variant="body3"
                          >
                            Oasis
                          </Text>
                          <Text
                            className="font-normal not-italic text-center text-orange_200 w-full"
                            variant="body17"
                          >
                            There’s an OASIS of fun at the edge of Lahore. A
                            true sanctuary of hearty merriment for the whole
                            family, located in the peaceful outskirts of Lahore
                            along the main Multan Road, Opposite Honda Cars, The
                            Oasis Golf & Aqua Resort is an idyllic members-only
                            haven that gives a new meaning to family
                            entertainment.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-14 items-center justify-start w-full">
                    <Text
                      className="font-normal leading-[56.00px] not-italic text-center text-gray_900 text-shadow-ts2 w-[68%] sm:w-full"
                      variant="body1"
                    >
                      Shopping
                    </Text>
                    <div className="flex md:flex-col flex-row font-librebodoni md:gap-10 items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-start mb-2 w-[47%] md:w-full">
                        <div className="bg-gray_900_ad flex flex-col items-center justify-start p-[29px] sm:px-5 rounded-[77px] w-full">
                          <div className="flex sm:flex-col flex-row gap-[34px] items-start justify-start w-[92%] md:w-full">
                            <Img
                              src="images/img_image119_8.png"
                              className="h-[369px] sm:h-auto object-cover rounded-[49px] w-[57%] md:w-full"
                              alt="image119"
                            />
                            <div className="flex flex-col items-center justify-start sm:mt-0 mt-[78px] w-auto sm:w-full">
                              <Text
                                className="not-italic text-center text-white_A700 w-auto"
                                variant="body4"
                              >
                                AnarKali{" "}
                              </Text>
                              <Text
                                className="font-normal mt-1 not-italic text-center text-orange_200 w-full"
                                variant="body17"
                              >
                                This bazaar is well worth a visit. You need to
                                witness the frenzy of activity to believe it.
                                Shopping, eating or just watching the locals go
                                about their business its an eye opener.For
                                foodies, there is a spot selling the most insane
                                chole abature which is definitely the in Lahore.
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-2 w-[47%] md:w-full">
                        <div className="bg-gray_900_ad flex sm:flex-col flex-row gap-3.5 items-center justify-start p-[29px] sm:px-5 rounded-[77px] w-full">
                          <Img
                            src="images/img_image119_9.png"
                            className="sm:flex-1 h-[369px] md:h-auto sm:ml-[0] ml-[21px] object-cover rounded-[49px] w-[52%] sm:w-full"
                            alt="image119_One"
                          />
                          <div className="md:h-[137px] h-[168px] relative w-[41%] sm:w-full">
                            <Text
                              className="absolute inset-x-[0] mx-auto not-italic text-center text-white_A700 top-[0] w-max"
                              variant="body4"
                            >
                              Liberty Market
                            </Text>
                            <Text
                              className="absolute bottom-[0] font-normal inset-x-[0] mx-auto not-italic text-center text-orange_200 w-[83%] sm:w-full"
                              variant="body17"
                            >
                              It’s one of the most famous and historic markets
                              in the city with tones of eateries, shopping
                              outlets, and other attractions.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-librebodoni items-center justify-start md:ml-[0] ml-[397px] mt-[35px] w-[47%] md:w-full">
                    <div className="bg-gray_900_ad flex flex-col items-center justify-start p-[18px] rounded-[77px] w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mb-[22px] w-[94%] md:w-full">
                        <Img
                          src="images/img_image119_10.png"
                          className="h-[369px] sm:h-auto object-cover rounded-[49px] w-[54%] md:w-full"
                          alt="image119_Two"
                        />
                        <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[3px] sm:mt-0 mt-[99px] w-auto sm:w-full">
                          <Text
                            className="not-italic text-center text-white_A700"
                            variant="body4"
                          >
                            <>
                              Emporium
                              <br /> Mall
                            </>
                          </Text>
                          <Text
                            className="font-normal not-italic text-center text-orange_200 w-[83%] sm:w-full"
                            variant="body17"
                          >
                            Located near expo center ,this mall offers a unique
                            experience of shopping, dining and fun for the kids.
                            You cal find all sorts of modern and cultural stuff
                            here.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-librebodoni md:gap-10 items-center justify-between mt-[51px] w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start mb-[13px] w-[47%] md:w-full">
                      <div className="bg-gray_900_ad flex flex-col items-center justify-start p-[29px] sm:px-5 rounded-[77px] w-full">
                        <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-start w-[95%] md:w-full">
                          <Img
                            src="images/img_image119_11.png"
                            className="h-[369px] sm:h-auto object-cover rounded-[49px] w-[55%] md:w-full"
                            alt="image119_Three"
                          />
                          <div className="flex flex-col gap-[52px] justify-start w-auto sm:w-full">
                            <Text
                              className="not-italic text-center text-white_A700 w-auto"
                              variant="body4"
                            >
                              Akbari Market
                            </Text>
                            <Text
                              className="font-normal ml-2.5 md:ml-[0] not-italic text-center text-orange_200 w-[87%] sm:w-full"
                              variant="body17"
                            >
                              Anyone approaching Delhi Gate will be hit by a
                              strong scent that travels up the nostrils and does
                              not leave till it makes the visitor’s eyes all
                              watery. The scent bringing tears to the eyes of
                              all comers emanates from the range of spices
                              available at Lahore’s Akbari Mandi.It is
                              considered one of the largest spice markets in
                              Asia and offers a panorama of colours.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_900_ad flex md:flex-1 flex-col items-end justify-start md:mt-0 mt-[13px] p-5 rounded-[77px] w-[47%] md:w-full">
                      <div className="flex sm:flex-col flex-row gap-[33px] items-start justify-end ml-auto my-[9px] w-[95%] md:w-full">
                        <Img
                          src="images/img_image119_12.png"
                          className="h-[369px] sm:h-auto object-cover rounded-[49px] w-[53%] md:w-full"
                          alt="image119_Four"
                        />
                        <div className="flex flex-col gap-[27px] items-start justify-start sm:mt-0 mt-[66px] w-auto sm:w-full">
                          <Text
                            className="font-normal md:ml-[0] ml-[5px] not-italic text-center text-white_A700 w-auto"
                            variant="body3"
                          >
                            ShahAlam Market
                          </Text>
                          <Text
                            className="font-normal not-italic text-center text-orange_200 w-full"
                            variant="body17"
                          ></Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
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

export default ActvitiesPage;
