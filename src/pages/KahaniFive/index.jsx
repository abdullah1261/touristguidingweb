import React from "react";

import Header from "components/Header";
import { Text, Img } from "components";
import Footer from "components/Footer";

const KahaniFivePage = () => {
  return (
    <>
      <div className="bg-orange_200 flex flex-col font-actor items-start justify-start mx-auto pb-1.5 w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-lime_900 border border-lime_900 border-solid flex flex-col items-center justify-center md:px-5 shadow-bs4 w-full" />
        </div>
        <div className="flex flex-col font-playfairdisplay items-end mt-28 md:px-10 sm:px-5 px-[113px] w-full">
          <Text
            className="text-gray_900 text-left text-shadow-ts5 w-auto"
            as="h1"
            variant="h1"
          >
            Legends of Lahore
          </Text>
        </div>
        <div className="flex flex-col font-georgia gap-[55px] items-center mt-[46px] w-full">
          <Text
            className="font-normal text-gray_800_01 text-left w-auto"
            variant="body3"
          >
            Welcome to a city steeped in history, where every street has a story
            to tell…
          </Text>
          <div className="h-[1055px] md:px-5 relative w-full">
            <Text
              className="font-medium font-playfairdisplay leading-[42.00px] mb-[undefinedpx] ml-[127px] mt-[5px] text-gray_900 text-left text-shadow-ts5 z-[1]"
              as="h5"
              variant="h5"
            >
              <>
                Mosque
                <br />
                that
                <br />
                shouldn’t
                <br />
                be there
              </>
            </Text>
            <Text
              className="font-actor font-normal leading-[42.00px] mb-[-17.31px] ml-auto mr-9 not-italic text-black_900 text-left z-[1]"
              variant="body9"
            >
              <>
                Next time you visit the newly constructed food street, opt to
                get a bird’s eye view by
                <br />
                choosing to eat at one of the rooftop restaurants. Then, when
                you look down at the
                <br />
                breathtaking view of the iconic Badshahi Mosque in all its
                splendour, just pause to
                <br />
                consider that it was never even supposed to exist! So where did
                the Badshahi Mosque
                <br />
                come from, you ask? Well herein lies the first of the tales we
                have to tell…
                <br />
                Hark back to a time when Emperor Shah Jehan’s son Dara Shikoh
                was prince of
                <br />
                Lahore. Famed for his devotion to Sufi saint Hazrat Mian Mir,
                Dara decided to honour
                <br />
                the saint by building a path from the Akbari gate to the saint’s
                shrine in Taslimpur (near
                <br />
                modern-day cantt). Ordinary bricks simply wouldn’t do for this
                purpose and so Dara
                <br />
                Shikoh imported red sandstone tiles all the way from Jaipur. But
                no sooner had the
                <br />
                bricks arrived that his brother Aurangzeb killed him, while
                imprisoning his father Shah
                <br />
                Jehan. Having settled matters of succession in this fratricidal
                fashion, Aurangzeb took
                <br />
                one look at the massive pile of bricks and decided that, instead
                of a pathway, he would
                <br />
                build a mosque fit for an emperor. Had Aurangzeb lost that
                struggle, and had Dara
                <br />
                Shikoh built his pathway, Lahore’s entire urban structure would
                be completely different!
                <br />
                And you, while sitting at that rooftop restaurant, would be
                staring down at a very
                <br />
                different city.
              </>
            </Text>
            <Img
              src="images/img_image139_2.png"
              className="h-[526px] mb-[-67.31px] ml-[94px] mt-60 object-cover w-[26%] z-[1]"
              alt="image139"
            />
            <Footer className="flex font-roboto items-center justify-center mt-auto mx-auto w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default KahaniFivePage;
