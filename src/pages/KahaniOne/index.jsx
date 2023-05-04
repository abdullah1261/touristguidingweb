import React from "react";

import Header from "components/Header";
import { Text, Img } from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const KahaniOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-orange_200 flex flex-col font-caladea sm:gap-10 md:gap-10 gap-[77px] items-center justify-start mx-auto pb-2.5 w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-lime_900 border border-lime_900 border-solid flex flex-col font-actor items-center justify-center md:px-5 shadow-bs4 w-full" />
          <Text
            className="font-playfairdisplay md:ml-[0] ml-[412px] mt-28 text-gray_900 text-left text-shadow-ts5 w-auto"
            as="h1"
            variant="h1"
          >
            Legends of Lahore
          </Text>
          <Text
            className="font-georgia font-normal md:ml-[0] ml-[222px] mt-[46px] text-gray_800_01 text-left w-auto"
            variant="body3"
          >
            Welcome to a city steeped in history, where every street has a story
            to tell…
          </Text>
        </div>
        <div className="h-[1006px] sm:h-[676px] md:h-[830px] md:px-5 relative w-full">
          <div className="h-[247px] ml-[183px] w-[26%] sm:w-full">
            <Img
              src="images/img_rectangle1285.png"
              className="common-pointer h-[247px] m-auto object-cover rounded-[73px] w-full"
              onClick={() => navigate("/kahanifour")}
              alt="rectangle1285"
            />
            <Text
              className="absolute bottom-[22%] font-normal inset-x-[0] mx-auto not-italic text-center text-orange_200 text-shadow-ts2"
              variant="body2"
            >
              <>
                Scaling the mountain of light
                <br />
              </>
            </Text>
          </div>
          <div className="absolute h-[1006px] sm:h-[676px] md:h-[830px] inset-[0] justify-center m-auto w-full">
            <div className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[0] w-[77%]">
              <div className="h-[247px] md:mt-0 mt-[429px] relative w-[33%] md:w-full">
                <Text
                  className="font-normal ml-auto mr-[43px] my-auto not-italic text-center text-orange_200 text-shadow-ts2 w-3/4 sm:w-full"
                  variant="body2"
                >
                  The Mosque that shouldn’t be there.
                </Text>
                <div className="absolute h-[247px] inset-[0] justify-center m-auto w-full">
                  <Img
                    src="images/img_rectangle1287.png"
                    className="common-pointer h-[247px] m-auto object-cover rounded-[73px] w-full"
                    onClick={() => navigate("/kahanifive")}
                    alt="rectangle1287"
                  />
                  <Text
                    className="absolute font-normal h-max inset-y-[0] my-auto not-italic right-[11%] text-center text-orange_200 text-shadow-ts2 w-3/4 sm:w-full"
                    variant="body2"
                  >
                    The Mosque that shouldn’t be there.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col md:gap-10 gap-[173px] items-center justify-start mb-[9px] w-[35%] md:w-full">
                <div className="h-[247px] relative w-[97%] sm:w-full">
                  <Img
                    src="images/img_rectangle1286.png"
                    className="common-pointer h-[247px] m-auto object-cover rounded-[73px] w-full"
                    onClick={() => navigate("/kahani")}
                    alt="rectangle1286"
                  />
                  <Text
                    className="absolute font-normal h-max inset-[0] justify-center m-auto not-italic text-center text-orange_200 text-shadow-ts2"
                    variant="body2"
                  >
                    <>
                      A defeated king
                      <br />A funeral pyre
                    </>
                  </Text>
                </div>
                <div className="h-[247px] relative w-[97%] sm:w-full">
                  <Img
                    src="images/img_rectangle1288.png"
                    className="common-pointer h-[247px] m-auto object-cover rounded-[73px] w-full"
                    onClick={() => navigate("/kahanitwo")}
                    alt="rectangle1288"
                  />
                  <Text
                    className="absolute bottom-[28%] font-normal inset-x-[0] mx-auto not-italic text-center text-orange_200 text-shadow-ts2 w-3/4 sm:w-full"
                    variant="body2"
                  >
                    Tale of Sadhu: the thief
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute h-[247px] inset-x-[0] mx-auto top-[19%] w-[26%] sm:w-full">
              <Img
                src="images/img_rectangle1289.png"
                className="h-[247px] m-auto object-cover rounded-[73px] w-full"
                alt="rectangle1289"
              />
              <div className="absolute h-[73px] inset-[0] justify-center m-auto w-3/4">
                <Text
                  className="font-normal m-auto not-italic text-center text-orange_200 text-shadow-ts2 w-full"
                  variant="body2"
                >
                  The girl who was put in the wall: Anarkali
                </Text>
                <Text
                  className="absolute font-normal h-full inset-[0] justify-center m-auto not-italic text-center text-orange_200 text-shadow-ts2 w-full"
                  variant="body2"
                >
                  The girl who was put in the wall: Anarkali
                </Text>
              </div>
            </div>
            <Footer className="absolute bottom-[0] flex font-roboto inset-x-[0] items-center justify-center mx-auto w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default KahaniOnePage;
