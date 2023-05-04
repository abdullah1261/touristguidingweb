import React from "react";

import { Img, Text, SelectBox, Button } from "components";
import JunoonNavbar from "components/JunoonNavbar";
import FrameSixtyTwoFooter40 from "components/FrameSixtyTwoFooter40";

const ShopPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-alegreyasans items-center justify-end mx-auto w-full">
        <div className="h-[3323px] md:h-[5428px] sm:h-[9993px] md:px-5 relative w-full">
          <div className="bg-orange_200 h-[3168px] m-auto w-full"></div>
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[135px] w-full">
            <div className="bg-gray_100_01 flex flex-col items-center justify-start w-full">
              <div className="h-[494px] relative w-full">
                <Img
                  src="images/img_heromobile14d.png"
                  className="h-[494px] m-auto object-cover w-full"
                  alt="heromobile14d"
                />
                <JunoonNavbar
                  className="absolute bg-lime_900 border border-lime_900 border-solid flex flex-col font-actor inset-x-[0] items-center justify-center mx-auto shadow-bs4 top-[0] w-full"
                  events="Events"
                  kahani="Kahani"
                  eat="Eat"
                  map="Map"
                  activites="Activites"
                  gallery="Gallery"
                  user="images/img_user.svg"
                  elevenOne="images/img_11_72x241.png"
                />
                <Text
                  className="absolute bottom-[29%] leading-[37.00px] not-italic right-[7%] text-right text-white_A700 uppercase"
                  as="h2"
                  variant="h2"
                >
                  <>
                    Shop
                    <br /> Lahore
                  </>
                </Text>
              </div>
            </div>
            <div className="font-inter h-[2693px] md:h-[4799px] sm:h-[9364px] relative w-full">
              <div className="absolute flex flex-col gap-5 inset-x-[0] items-center justify-start mx-auto py-[34px] top-[0] w-[94%]">
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between w-[99%] md:w-full">
                  <div className="flex flex-row gap-[5px] items-start justify-start md:pr-10 sm:pr-5 pr-[1018px] w-3/4 md:w-full">
                    <Text
                      className="font-normal h-[19px] not-italic text-gray_800_02 text-left w-auto"
                      variant="body15"
                    >
                      90
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_800_02 text-left w-auto"
                      variant="body15"
                    >
                      products
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-between w-1/4 md:w-full">
                    <SelectBox
                      className="font-normal lowercase not-italic text-[15px] text-blue_gray_900_02 text-left w-[58%] sm:w-full"
                      placeholderClassName="text-blue_gray_900_02"
                      name="searchforoption"
                      placeholder="Sort By: Featured"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-6 w-[18px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineGray80002"
                    ></SelectBox>
                    <Button
                      className="cursor-pointer font-normal lowercase min-w-[137px] not-italic text-[13px] text-center text-gray_800_02 w-auto"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="OutlineGray80002"
                    >
                      Filter
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mb-[52px] pb-3.5 pr-3.5 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="md:h-[353px] h-[354px] relative w-[353px]">
                            <div className="absolute bg-white_A700 flex flex-col h-max inset-[0] items-end justify-start m-auto pb-[318px] md:pl-10 sm:pl-5 pl-[268.59px] pr-2 pt-2 rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                              <div className="bg-gray_100_01 flex flex-col items-start justify-start pb-[5.3px] pl-3 pr-[10.41px] pt-[5.7px] rounded self-stretch w-auto">
                                <Text
                                  className="lowercase not-italic text-gray_800_02 text-right w-auto"
                                  variant="body20"
                                >
                                  Best Seller
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_kylieskin26v.png"
                              className="absolute h-[353px] inset-[0] justify-center m-auto object-cover w-[353px]"
                              alt="kylieskin26v"
                            />
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col justify-start py-[3px] w-full">
                                <div className="flex flex-row items-end justify-start md:ml-[0] ml-[15px] pr-[4.53px] self-stretch w-auto">
                                  <Img
                                    src="images/img_divbvstars.svg"
                                    className="h-5 w-20"
                                    alt="divbvstars"
                                  />
                                  <Text
                                    className="not-italic text-gray_800_02 text-left w-auto"
                                    variant="body21"
                                  >
                                    (6692)
                                  </Text>
                                </div>
                                <div className="h-11 md:h-[55px] mb-[11px] relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-start justify-end left-[4%] w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        6 piece full size regimen set
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto pb-0.5 pr-0.5 top-[0] w-[92%]">
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        Kylie Skin Set
                                      </Text>
                                    </div>
                                    <Text
                                      className="lowercase mt-[3px] text-gray_800_02 text-left w-auto"
                                      variant="body18"
                                    >
                                      $125
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-white_A700 h-[353px] pb-[318px] md:pl-10 sm:pl-5 pl-[268.59px] pr-2 pt-2 relative rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                            <Img
                              src="images/img_ksgsloil22c.png"
                              className="h-[353px] m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"
                              alt="ksgsloil22c"
                            />
                            <Button
                              className="absolute cursor-pointer font-normal lowercase min-w-[76px] not-italic right-[2%] text-[11px] text-center text-gray_800_02 top-[2%] w-auto"
                              shape="RoundedBorder4"
                              size="sm"
                              variant="FillGray10001"
                            >
                              Best Seller
                            </Button>
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col justify-start py-[3px] w-full">
                                <div className="flex flex-row items-end justify-start md:ml-[0] ml-[15px] pr-[4.25px] self-stretch w-auto">
                                  <Img
                                    src="images/img_divbvstars.svg"
                                    className="h-5 w-20"
                                    alt="divbvstars"
                                  />
                                  <Text
                                    className="not-italic text-gray_800_02 text-left w-auto"
                                    variant="body21"
                                  >
                                    (512)
                                  </Text>
                                </div>
                                <div className="h-11 md:h-[55px] mb-[11px] relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[4%] pb-0.5 pr-0.5 w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        smooth + nourish
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto pb-0.5 top-[0] w-[92%]">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        Lip Oil Set
                                      </Text>
                                    </div>
                                    <Text
                                      className="lowercase mt-[3px] text-gray_800_02 text-left w-auto"
                                      variant="body18"
                                    >
                                      $45
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-white_A700 h-[353px] pb-[318px] md:pl-10 sm:pl-5 pl-[268.59px] pr-2 pt-2 relative rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                            <Img
                              src="images/img_kslipoilecom.png"
                              className="h-[353px] m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"
                              alt="kslipoilecom"
                            />
                            <Button
                              className="absolute cursor-pointer font-normal lowercase min-w-[76px] not-italic right-[2%] text-[11px] text-center text-gray_800_02 top-[2%] w-auto"
                              shape="RoundedBorder4"
                              size="sm"
                              variant="FillGray10001"
                            >
                              Best Seller
                            </Button>
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col justify-start py-[3px] w-full">
                                <div className="flex flex-row items-end justify-start md:ml-[0] ml-[15px] pr-[5.14px] self-stretch w-auto">
                                  <Img
                                    src="images/img_eye.svg"
                                    className="h-5 w-20"
                                    alt="eye"
                                  />
                                  <Text
                                    className="not-italic text-gray_800_02 text-left w-auto"
                                    variant="body21"
                                  >
                                    (1950)
                                  </Text>
                                </div>
                                <div className="h-11 md:h-[55px] mb-[11px] relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[4%] pb-0.5 pr-0.5 w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        SMOOTH + NOURISH
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto pb-0.5 top-[0] w-[92%]">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        Lip Oil
                                      </Text>
                                    </div>
                                    <Text
                                      className="font-semibold lowercase mt-0.5 text-gray_800_02 text-left w-auto"
                                      variant="body17"
                                    >
                                      $23
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-white_A700 h-[353px] pb-[318px] md:pl-10 sm:pl-5 pl-[254.48px] pr-2 pt-2 relative rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                            <Img
                              src="images/img_kjcmmc23clos.png"
                              className="h-[353px] m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"
                              alt="kjcmmc23clos"
                            />
                            <Button
                              className="absolute cursor-pointer font-normal lowercase min-w-[90px] not-italic right-[2%] text-[11px] text-center text-gray_800_02 top-[2%] w-auto"
                              shape="RoundedBorder4"
                              size="sm"
                              variant="FillGray10001"
                            >
                              Back in Stock
                            </Button>
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col justify-start py-[3px] w-full">
                                <div className="flex flex-row items-end justify-start md:ml-[0] ml-[15px] pr-[4.92px] self-stretch w-auto">
                                  <Img
                                    src="images/img_divbvstars.svg"
                                    className="h-5 w-20"
                                    alt="divbvstars"
                                  />
                                  <Text
                                    className="not-italic text-gray_800_02 text-left w-auto"
                                    variant="body21"
                                  >
                                    (310)
                                  </Text>
                                </div>
                                <div className="h-11 md:h-[55px] mb-[11px] relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[4%] pb-0.5 pr-0.5 w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        cleanse + nourish
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto pb-0.5 top-[0] w-[92%]">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        Makeup Melting Cleanser
                                      </Text>
                                    </div>
                                    <Text
                                      className="font-semibold lowercase mt-0.5 text-gray_800_02 text-left w-auto"
                                      variant="body17"
                                    >
                                      $29
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-white_A700 h-[353px] pb-[318px] md:pl-10 sm:pl-5 pl-[303.41px] pr-2 pt-2 relative rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                            <Img
                              src="images/img_ks8pieceminise.png"
                              className="h-[353px] m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"
                              alt="ks8pieceminise"
                            />
                            <Button
                              className="absolute cursor-pointer font-normal lowercase min-w-[41px] not-italic right-[2%] text-[11px] text-center text-gray_800_02 top-[2%] w-auto"
                              shape="RoundedBorder4"
                              size="sm"
                              variant="FillGray10001"
                            >
                              sale
                            </Button>
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col justify-start py-[3px] w-full">
                                <div className="flex flex-row items-end justify-start md:ml-[0] ml-[15px] pr-[4.19px] self-stretch w-auto">
                                  <Img
                                    src="images/img_divbvstars.svg"
                                    className="h-5 w-20"
                                    alt="divbvstars"
                                  />
                                  <Text
                                    className="not-italic text-gray_800_02 text-left w-auto"
                                    variant="body21"
                                  >
                                    (291)
                                  </Text>
                                </div>
                                <div className="h-11 md:h-[55px] mb-[11px] relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-center justify-start left-[4%] w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        love + care
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto top-[0] w-[92%]">
                                    <div className="flex flex-col items-center justify-start mb-0.5 w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        8 Piece Mini Set
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[6.5px] items-end justify-start mt-0.5 pr-[0.56px] self-stretch w-auto">
                                      <Text
                                        className="font-semibold lowercase text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        $59.50
                                      </Text>
                                      <Text
                                        className="line-through lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body19"
                                      >
                                        $85
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-white_A700 h-[353px] pb-[318px] md:pl-10 sm:pl-5 pl-[268.59px] pr-2 pt-2 relative rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                            <Img
                              src="images/img_ksvitamincse.png"
                              className="h-[353px] m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"
                              alt="ksvitamincse"
                            />
                            <Button
                              className="absolute cursor-pointer font-normal lowercase min-w-[76px] not-italic right-[2%] text-[11px] text-center text-gray_800_02 top-[2%] w-auto"
                              shape="RoundedBorder4"
                              size="sm"
                              variant="FillGray10001"
                            >
                              Best Seller
                            </Button>
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col justify-start py-[3px] w-full">
                                <div className="flex flex-row items-end justify-start md:ml-[0] ml-[15px] pr-[5.53px] self-stretch w-auto">
                                  <Img
                                    src="images/img_divbvstars.svg"
                                    className="h-5 w-20"
                                    alt="divbvstars"
                                  />
                                  <Text
                                    className="not-italic text-gray_800_02 text-left w-auto"
                                    variant="body21"
                                  >
                                    (3081)
                                  </Text>
                                </div>
                                <div className="h-11 md:h-[55px] mb-[11px] relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-center justify-end left-[4%] w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        BRIGHTEN + FIRM
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto pb-0.5 top-[0] w-[92%]">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        Vitamin C Serum
                                      </Text>
                                    </div>
                                    <Text
                                      className="font-semibold lowercase mt-0.5 text-gray_800_02 text-left w-auto"
                                      variant="body17"
                                    >
                                      $28
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-white_A700 h-[353px] pb-[318px] md:pl-10 sm:pl-5 pl-[268.59px] pr-2 pt-2 relative rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                            <Img
                              src="images/img_ksmini4piecese.png"
                              className="h-[353px] m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"
                              alt="ksmini4piecese"
                            />
                            <Button
                              className="absolute cursor-pointer font-normal lowercase min-w-[76px] not-italic right-[2%] text-[11px] text-center text-gray_800_02 top-[2%] w-auto"
                              shape="RoundedBorder4"
                              size="sm"
                              variant="FillGray10001"
                            >
                              Best Seller
                            </Button>
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col justify-start py-[3px] w-full">
                                <div className="flex flex-row items-end justify-start md:ml-[0] ml-[15px] pr-[4.72px] self-stretch w-auto">
                                  <Img
                                    src="images/img_divbvstars.svg"
                                    className="h-5 w-20"
                                    alt="divbvstars"
                                  />
                                  <Text
                                    className="not-italic text-gray_800_02 text-left w-auto"
                                    variant="body21"
                                  >
                                    (1683)
                                  </Text>
                                </div>
                                <div className="h-11 md:h-[55px] mb-[11px] relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-start justify-end left-[4%] w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        4 mini kylie essentials
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto pb-0.5 top-[0] w-[92%]">
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        4-Piece Mini Set
                                      </Text>
                                    </div>
                                    <Text
                                      className="lowercase mt-[3px] text-gray_800_02 text-left w-auto"
                                      variant="body18"
                                    >
                                      $39
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-white_A700 h-[353px] pb-[318px] md:pl-10 sm:pl-5 pl-[268.59px] pr-2 pt-2 relative rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                            <Img
                              src="images/img_kshaserumeco.png"
                              className="h-[353px] m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"
                              alt="kshaserumeco"
                            />
                            <Button
                              className="absolute cursor-pointer font-normal lowercase min-w-[76px] not-italic right-[2%] text-[11px] text-center text-gray_800_02 top-[2%] w-auto"
                              shape="RoundedBorder4"
                              size="sm"
                              variant="FillGray10001"
                            >
                              Best Seller
                            </Button>
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col justify-start py-[3px] w-full">
                                <div className="flex flex-row items-end justify-start md:ml-[0] ml-[15px] pr-1.5 self-stretch w-auto">
                                  <Img
                                    src="images/img_eye.svg"
                                    className="h-5 w-20"
                                    alt="eye"
                                  />
                                  <Text
                                    className="not-italic text-gray_800_02 text-left w-auto"
                                    variant="body21"
                                  >
                                    (868)
                                  </Text>
                                </div>
                                <div className="h-11 md:h-[55px] mb-[11px] relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-start justify-end left-[4%] w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        hydrate + plump
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto pb-0.5 top-[0] w-[92%]">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        Hyaluronic Acid Serum
                                      </Text>
                                    </div>
                                    <Text
                                      className="font-semibold lowercase mt-0.5 text-gray_800_02 text-left w-auto"
                                      variant="body17"
                                    >
                                      $28
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-white_A700 flex flex-col h-[353px] items-center justify-start rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                            <Img
                              src="images/img_ksdetoxmaske.png"
                              className="h-[353px] md:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"
                              alt="ksdetoxmaske"
                            />
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col justify-start py-[3px] w-full">
                                <div className="flex flex-row items-end justify-start md:ml-[0] ml-[15px] pr-[3.67px] self-stretch w-auto">
                                  <Img
                                    src="images/img_eye.svg"
                                    className="h-5 w-20"
                                    alt="eye"
                                  />
                                  <Text
                                    className="not-italic text-gray_800_02 text-left w-auto"
                                    variant="body20"
                                  >
                                    (508)
                                  </Text>
                                </div>
                                <div className="h-11 md:h-[55px] mb-[11px] relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[4%] pb-0.5 pr-0.5 w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        cleanse + reboot
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto pb-0.5 top-[0] w-[92%]">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        Detox Face Mask
                                      </Text>
                                    </div>
                                    <Text
                                      className="font-semibold lowercase mt-0.5 text-gray_800_02 text-left w-auto"
                                      variant="body17"
                                    >
                                      $23
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-white_A700 h-[353px] pb-[318px] md:pl-10 sm:pl-5 pl-[303.41px] pr-2 pt-2 relative rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                            <Img
                              src="images/img_ksvanillamilk.png"
                              className="h-[353px] m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"
                              alt="ksvanillamilk"
                            />
                            <Button
                              className="absolute cursor-pointer font-normal lowercase min-w-[41px] not-italic right-[2%] text-[11px] text-center text-gray_800_02 top-[2%] w-auto"
                              shape="RoundedBorder4"
                              size="sm"
                              variant="FillGray10001"
                            >
                              sale
                            </Button>
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col justify-start py-[3px] w-full">
                                <div className="flex flex-row items-end justify-start md:ml-[0] ml-[15px] pr-[4.02px] self-stretch w-auto">
                                  <Img
                                    src="images/img_eye.svg"
                                    className="h-5 w-20"
                                    alt="eye"
                                  />
                                  <Text
                                    className="not-italic text-gray_800_02 text-left w-auto"
                                    variant="body21"
                                  >
                                    (3757)
                                  </Text>
                                </div>
                                <div className="h-11 md:h-[55px] mb-[11px] relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-center justify-end left-[4%] w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        BALANCE + PREP
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto top-[0] w-[92%]">
                                    <div className="flex flex-col items-start justify-start mb-0.5 w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        Vanilla Milk Toner
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[5.06px] items-end justify-start mt-0.5 pr-[0.14px] self-stretch w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body18"
                                      >
                                        $16
                                      </Text>
                                      <Text
                                        className="line-through lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body19"
                                      >
                                        $23
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-white_A700 h-[353px] pb-[318px] md:pl-10 sm:pl-5 pl-[250.52px] pr-2 pt-2 relative rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[354px]">
                            <Img
                              src="images/img_ksfoamingfacew.png"
                              className="h-[353px] m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[354px]"
                              alt="ksfoamingfacew"
                            />
                            <Button
                              className="absolute cursor-pointer font-normal lowercase min-w-[97px] not-italic right-[2%] text-[11px] text-center text-gray_800_02 top-[2%] w-auto"
                              shape="RoundedBorder4"
                              size="sm"
                              variant="FillGray10001"
                            >
                              Our Favouritess
                            </Button>
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col justify-start py-[3px] w-full">
                                <div className="flex flex-row items-end justify-start md:ml-[0] ml-[15px] pr-[5.36px] self-stretch w-auto">
                                  <Img
                                    src="images/img_eye.svg"
                                    className="h-5 w-20"
                                    alt="eye"
                                  />
                                  <Text
                                    className="not-italic text-gray_800_02 text-left w-auto"
                                    variant="body21"
                                  >
                                    (6526)
                                  </Text>
                                </div>
                                <div className="h-11 md:h-[55px] mb-[11px] relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-start justify-end left-[4%] w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        cleanse + replenish
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto pb-0.5 top-[0] w-[92%]">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        Foaming Face Wash
                                      </Text>
                                    </div>
                                    <Text
                                      className="font-semibold lowercase mt-0.5 text-gray_800_02 text-left w-auto"
                                      variant="body17"
                                    >
                                      $25
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-black_900_01 flex flex-col items-start justify-start pb-[318px] md:pl-10 sm:pl-5 pl-[268.59px] pr-2 pt-2 rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                            <Button
                              className="cursor-pointer font-normal lowercase min-w-[76px] not-italic text-[11px] text-center text-gray_800_02 w-auto"
                              shape="RoundedBorder4"
                              size="sm"
                              variant="FillGray10001"
                            >
                              Best Seller
                            </Button>
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col justify-start py-[3px] w-full">
                                <div className="flex flex-row items-end justify-start md:ml-[0] ml-[15px] pr-[4.45px] self-stretch w-auto">
                                  <Img
                                    src="images/img_eye.svg"
                                    className="h-5 w-20"
                                    alt="eye"
                                  />
                                  <Text
                                    className="not-italic text-gray_800_02 text-left w-auto"
                                    variant="body21"
                                  >
                                    (17)
                                  </Text>
                                </div>
                                <div className="h-11 md:h-[55px] mb-[11px] relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-center justify-end left-[4%] w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        cleanse + glow
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto pb-0.5 top-[0] w-[92%]">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        Glow Powder Cleanser
                                      </Text>
                                    </div>
                                    <Text
                                      className="font-semibold lowercase mt-0.5 text-gray_800_02 text-left w-auto"
                                      variant="body17"
                                    >
                                      $32
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-white_A700 h-[353px] pb-[318px] md:pl-10 sm:pl-5 pl-[268.59px] pr-2 pt-2 relative rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                            <Img
                              src="images/img_kjshaglowmas.png"
                              className="h-[353px] m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"
                              alt="kjshaglowmas"
                            />
                            <div className="absolute bg-black_900_01 flex flex-col h-full inset-[0] items-end justify-center m-auto p-2 rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                              <Button
                                className="cursor-pointer font-normal lowercase mb-[310px] min-w-[76px] not-italic text-[11px] text-center text-gray_800_02 w-auto"
                                shape="RoundedBorder4"
                                size="sm"
                                variant="FillGray10001"
                              >
                                Best Seller
                              </Button>
                            </div>
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col justify-start py-[3px] w-full">
                                <div className="flex flex-row items-end justify-start md:ml-[0] ml-[15px] pr-[5.28px] self-stretch w-auto">
                                  <Img
                                    src="images/img_divbvstars.svg"
                                    className="h-5 w-20"
                                    alt="divbvstars"
                                  />
                                  <Text
                                    className="not-italic text-gray_800_02 text-left w-auto"
                                    as="h3"
                                    variant="h3"
                                  >
                                    (11)
                                  </Text>
                                </div>
                                <div className="h-11 md:h-[55px] mb-[11px] relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-center justify-start left-[4%] w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        REFINE + GLOW
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto pb-0.5 top-[0] w-[92%]">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        AHA Enzyme Glow Mask
                                      </Text>
                                    </div>
                                    <Text
                                      className="lowercase mt-[3px] text-gray_800_02 text-left w-auto"
                                      variant="body18"
                                    >
                                      $35
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-white_A700 h-[353px] pb-[318px] md:pl-10 sm:pl-5 pl-[268.59px] pr-2 pt-2 relative rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                            <Img
                              src="images/img_4064941032175k.png"
                              className="h-[353px] m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"
                              alt="4064941032175k"
                            />
                            <div className="absolute bg-black_900_01 flex flex-col h-full inset-[0] items-end justify-center m-auto p-2 rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                              <Button
                                className="cursor-pointer font-normal lowercase mb-[310px] min-w-[76px] not-italic text-[11px] text-center text-gray_800_02 w-auto"
                                shape="RoundedBorder4"
                                size="sm"
                                variant="FillGray10001"
                              >
                                Best Seller
                              </Button>
                            </div>
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col justify-start py-[3px] w-full">
                                <div className="flex flex-row items-end justify-start md:ml-[0] ml-[15px] pr-[5px] self-stretch w-auto">
                                  <Img
                                    src="images/img_divbvstars.svg"
                                    className="h-5 w-20"
                                    alt="divbvstars"
                                  />
                                  <Text
                                    className="not-italic text-gray_800_02 text-left w-auto"
                                    variant="body21"
                                  >
                                    (201)
                                  </Text>
                                </div>
                                <div className="h-11 md:h-[55px] mb-[11px] relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-start justify-end left-[4%] w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        4 STEPS TO CLEAR SKIN
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto pb-0.5 top-[0] w-[92%]">
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        Clear & Clarify Mini Set
                                      </Text>
                                    </div>
                                    <Text
                                      className="lowercase mt-[3px] text-gray_800_02 text-left w-auto"
                                      variant="body18"
                                    >
                                      $35
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-white_A700 h-[353px] pb-[318px] md:pl-10 sm:pl-5 pl-[268.59px] pr-2 pt-2 relative rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                            <Img
                              src="images/img_kscoconutbody.png"
                              className="h-[353px] m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"
                              alt="kscoconutbody"
                            />
                            <div className="absolute bg-black_900_01 flex flex-col h-full inset-[0] items-end justify-center m-auto p-2 rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                              <Button
                                className="cursor-pointer font-normal lowercase mb-[310px] min-w-[76px] not-italic text-[11px] text-center text-gray_800_02 w-auto"
                                shape="RoundedBorder4"
                                size="sm"
                                variant="FillGray10001"
                              >
                                Best Seller
                              </Button>
                            </div>
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col justify-start py-[3px] w-full">
                                <div className="flex flex-row items-end justify-start md:ml-[0] ml-[15px] pr-[5.72px] self-stretch w-auto">
                                  <Img
                                    src="images/img_eye.svg"
                                    className="h-5 w-20"
                                    alt="eye"
                                  />
                                  <Text
                                    className="not-italic text-gray_800_02 text-left w-auto"
                                    variant="body21"
                                  >
                                    (2542)
                                  </Text>
                                </div>
                                <div className="h-11 md:h-[55px] mb-[11px] relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-center justify-start left-[4%] pb-0.5 w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body15"
                                      >
                                        moisturize + smooth
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto pb-0.5 top-[0] w-[92%]">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        Coconut Body Lotion
                                      </Text>
                                    </div>
                                    <Text
                                      className="font-semibold lowercase mt-0.5 text-gray_800_02 text-left w-auto"
                                      variant="body17"
                                    >
                                      $24
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-white_A700 h-[353px] pb-[318px] md:pl-10 sm:pl-5 pl-[254.48px] pr-2 pt-2 relative rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                            <Img
                              src="images/img_ksmakeupremovi.png"
                              className="h-[353px] m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"
                              alt="ksmakeupremovi"
                            />
                            <div className="absolute bg-black_900_01 flex flex-col h-full inset-[0] items-end justify-center m-auto p-2 rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                              <Button
                                className="cursor-pointer font-normal lowercase mb-[310px] min-w-[90px] not-italic text-[11px] text-center text-gray_800_02 w-auto"
                                shape="RoundedBorder4"
                                size="sm"
                                variant="FillGray10001"
                              >
                                Back in Stock
                              </Button>
                            </div>
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col justify-start py-[3px] w-full">
                                <div className="flex flex-row items-end justify-start md:ml-[0] ml-[15px] pr-[5.75px] self-stretch w-auto">
                                  <Img
                                    src="images/img_eye.svg"
                                    className="h-5 w-20"
                                    alt="eye"
                                  />
                                  <Text
                                    className="not-italic text-gray_800_02 text-left w-auto"
                                    variant="body21"
                                  >
                                    (2522)
                                  </Text>
                                </div>
                                <div className="h-11 md:h-[55px] mb-[11px] relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-center justify-end left-[4%] w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        cleanse + hydrate
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto pb-0.5 top-[0] w-[92%]">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        Makeup Removing Wipes
                                      </Text>
                                    </div>
                                    <Text
                                      className="font-semibold lowercase mt-0.5 text-gray_800_02 text-left w-auto"
                                      variant="body17"
                                    >
                                      $10
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-white_A700 h-[353px] pb-[318px] md:pl-10 sm:pl-5 pl-[246.69px] pr-2 pt-2 relative rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                            <Img
                              src="images/img_krislipserumkj.png"
                              className="absolute h-[353px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"
                              alt="krislipserumkj"
                            />
                            <div className="absolute bg-gray_100_01 flex flex-col items-end justify-end pb-[5.3px] pl-3.5 pr-[10.31px] pt-[5.7px] right-[2%] rounded self-stretch top-[2%] w-auto">
                              <Text
                                className="lowercase not-italic text-gray_800_02 text-right w-auto"
                                variant="body20"
                              >
                                Limited Edition
                              </Text>
                            </div>
                            <div className="absolute bg-black_900_01 h-[353px] inset-[0] justify-center m-auto rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"></div>
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col justify-start py-[3px] w-full">
                                <div className="flex flex-row items-end justify-start md:ml-[0] ml-[15px] pr-[3.64px] self-stretch w-auto">
                                  <Img
                                    src="images/img_divbvstars.svg"
                                    className="h-5 w-20"
                                    alt="divbvstars"
                                  />
                                  <Text
                                    className="not-italic text-gray_800_02 text-left w-auto"
                                    variant="body21"
                                  >
                                    (147)
                                  </Text>
                                </div>
                                <div className="h-11 md:h-[55px] mb-[11px] relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[4%] pb-0.5 pr-0.5 w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        COMFORT + SHINE
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row gap-[23px] inset-x-[0] items-start justify-between mx-auto top-[0] w-[92%]">
                                    <div className="flex flex-col items-center justify-start mb-0.5 w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        Kris Collection Anti-Aging Lip Serum
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[5.88px] items-end justify-start mt-0.5 pr-[0.67px] self-stretch w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body18"
                                      >
                                        $15
                                      </Text>
                                      <Text
                                        className="line-through lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body19"
                                      >
                                        $22
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-white_A700 h-[353px] pb-[318px] md:pl-10 sm:pl-5 pl-[268.59px] pr-2 pt-2 relative rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                            <Img
                              src="images/img_kskylieskins.png"
                              className="h-[353px] m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"
                              alt="kskylieskins"
                            />
                            <div className="absolute bg-black_900_01 flex flex-col h-full inset-[0] items-end justify-center m-auto p-2 rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                              <Button
                                className="cursor-pointer font-normal lowercase mb-[310px] min-w-[76px] not-italic text-[11px] text-center text-gray_800_02 w-auto"
                                shape="RoundedBorder4"
                                size="sm"
                                variant="FillGray10001"
                              >
                                Best Seller
                              </Button>
                            </div>
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col gap-[35px] items-center justify-start w-full">
                                <div className="h-11 relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[4%] pb-0.5 pr-0.5 w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        skincare essentials
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto top-[0] w-[92%]">
                                    <div className="flex flex-col items-start justify-start mb-0.5 w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        Kylie Skin Set with Bag
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[7.01px] items-end justify-start mt-0.5 self-stretch w-auto">
                                      <Text
                                        className="font-semibold lowercase text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        $127.50
                                      </Text>
                                      <Text
                                        className="line-through lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body19"
                                      >
                                        $147
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white_A700 flex flex-col items-center justify-start px-[15px] w-full">
                                  <div className="border border-gray_800_02 border-solid h-px rounded-[1px] w-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-white_A700 h-[353px] pb-[318px] md:pl-10 sm:pl-5 pl-[254.16px] pr-2 pt-2 relative rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                            <Img
                              src="images/img_kssugarlipsc.png"
                              className="h-[353px] m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"
                              alt="kssugarlipsc"
                            />
                            <div className="absolute bg-black_900_01 flex flex-col h-full inset-[0] items-end justify-center m-auto p-2 rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                              <Button
                                className="cursor-pointer font-normal lowercase mb-[310px] min-w-[90px] not-italic text-[11px] text-center text-gray_800_02 w-auto"
                                shape="RoundedBorder4"
                                size="sm"
                                variant="FillGray10001"
                              >
                                Award Winner
                              </Button>
                            </div>
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col justify-start py-[3px] w-full">
                                <div className="flex flex-row items-end justify-start md:ml-[0] ml-[15px] pr-[5.86px] self-stretch w-auto">
                                  <Img
                                    src="images/img_eye.svg"
                                    className="h-5 w-20"
                                    alt="eye"
                                  />
                                  <Text
                                    className="not-italic text-gray_800_02 text-left w-auto"
                                    variant="body21"
                                  >
                                    (770)
                                  </Text>
                                </div>
                                <div className="h-11 md:h-[55px] mb-[11px] relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-start justify-end left-[4%] w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        exfoliate + prep
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto pb-0.5 pr-0.5 top-[0] w-[92%]">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        Sugar Lip Scrub
                                      </Text>
                                    </div>
                                    <Text
                                      className="lowercase mt-[3px] text-gray_800_02 text-left w-auto"
                                      variant="body18"
                                    >
                                      $21
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray_300 border-solid flex flex-1 flex-col items-center justify-start rounded-lg w-full">
                          <div className="bg-white_A700 h-[353px] relative rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]">
                            <Img
                              src="images/img_ksliptrioecommpink01jpg.png"
                              className="h-[353px] m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"
                              alt="ksliptrioecommp"
                            />
                            <div className="absolute bg-black_900_01 h-[353px] inset-[0] justify-center m-auto rounded-bl-none rounded-br-none rounded-tl-[3px] rounded-tr-[3px] w-[353px]"></div>
                          </div>
                          <div className="md:h-[87px] h-[88px] relative w-full">
                            <div className="absolute bg-white_A700 h-[87px] inset-[0] justify-center m-auto w-full"></div>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col gap-[35px] items-center justify-start w-full">
                                <div className="h-11 relative w-full">
                                  <div className="absolute bottom-[0] flex md:h-11 h-[41px] inset-x-[0] justify-end mx-auto w-full">
                                    <div className="bg-white_A700 h-11 mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[5%] flex flex-col items-start justify-end left-[4%] w-auto">
                                      <Text
                                        className="font-normal lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body17"
                                      >
                                        exfoliate + hydrate + smooth
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto top-[0] w-[92%]">
                                    <div className="flex flex-col items-start justify-start mb-0.5 w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body13"
                                      >
                                        Lips Trio
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[5.77px] items-end justify-start mt-0.5 pr-[0.5px] self-stretch w-auto">
                                      <Text
                                        className="lowercase text-gray_800_02 text-left w-auto"
                                        variant="body18"
                                      >
                                        $59
                                      </Text>
                                      <Text
                                        className="line-through lowercase not-italic text-gray_800_02 text-left w-auto"
                                        variant="body19"
                                      >
                                        $66
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white_A700 flex flex-col items-center justify-start px-[15px] w-full">
                                  <div className="border border-gray_800_02 border-solid h-px rounded-[1px] w-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                imagefortyone="images/img_image41_206x193.png"
                imagefortytwo="images/img_image42.png"
                imagefortythree="images/img_image43.png"
                elevenOne="images/img_11.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
