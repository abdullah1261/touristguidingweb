import React from "react";

import Header from "components/Header";
import { Text, Img } from "components";
import Footer from "components/Footer";

const KahaniThreePage = () => {
  return (
    <>
      <div className="bg-orange_200 flex flex-col justify-start mx-auto pb-2.5 w-full">
        <div className="flex flex-col font-actor items-center w-full">
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
        <div className="flex flex-col font-georgia items-center mt-[46px] md:px-10 sm:px-5 px-[190px] w-full">
          <Text
            className="font-normal text-gray_800_01 text-left w-auto"
            variant="body3"
          >
            Welcome to a city steeped in history, where every street has a story
            to tell…
          </Text>
        </div>
        <Text
          className="font-medium font-playfairdisplay md:ml-[0] ml-[148px] mt-[102px] text-gray_900 text-left text-shadow-ts5 w-auto"
          as="h5"
          variant="h5"
        >
          Anarkali
        </Text>
        <div className="flex flex-col items-center w-full">
          <div className="h-[1571px] md:px-5 relative w-full">
            <Text
              className="font-actor font-normal leading-[42.00px] mb-[-30.31px] ml-auto mr-[84px] not-italic text-black_900 text-left z-[1]"
              variant="body9"
            >
              <>
                The love story of Salim and Anarkali is a story that every lover
                knows. The Mughal prince Salim falling for a courtesan Anarkali
                is the stuff that legends are made of. The relationship of Salim
                and Anarkali outraged the Mughal emperor Akbar so much that both
                father and son decided to go on war.
                <br />
                According to legend, Salim, the son of the great Mughal emperor
                Akbar, fell in love with a beautiful courtesan named Anarkali as
                a young prince. Anarkali, whose title means &quot;pomegranate
                blossom&quot; (a title bestowed for her beauty) was famed for
                her dancing skills as well as her great beauty. It is believed
                that her original name was Nadira or Sharf-un-Nisa.He was
                mesmerized by her beauty and fell in love as soon as he saw her.
                But Anarkali was a mere dancing girl, and dancing girls were not
                of noble birth. They were considered to be low-born and keeping
                any relation with them were looed dow and strictly prohibited by
                the society. Anarkali knew that their romance was forbidden in
                the eyes of the prince&#39;s father, Mughal Emperor Akbar. So
                she tried to keep away from Salim. But how could she hold
                herself back from the prince&#39;s charms for long? Love knows
                no rules, and soon Anarkali too was deeply in love with Salim.
                <br />
                But such an intense love can&#39;t be concealed forever. The
                emperor could not digest the fact that his son was in love with
                an ordinary courtesan. He started pressurizing Anarkali and
                devised all sorts of tactics to make her fall in the eyes of the
                young, love smitten prince. When Salim came to know of this, he
                declared a war against his own father. But the mighty
                emperor&#39;s gigantic army proves too much for the young prince
                to handle. He gets defeated and is sentenced to death.
                <br />
                This is when Anarkali intervenes and renounces her love to save
                her beloved from the jaws of death. She is entombed alive in a
                brick wall right in front of her lover&#39;s eyes. It is,
                however, said that she did not die. The tomb was constructed on
                the opening of a secret tunnel unknown to Salim. It is said she
                escaped through that tunnel and fled the place, never to return
                again. The heartbroken Salim lives on to become emperor
                Jahangir.
                <br />
                But he could never forget his one true love Anarkali, in his
                lifetime. When he died, her name was on his lips.
                <br />
                Thus ends the tragic love story of Salim and Anarkali. Even
                today, these two lovers are remembered by people and held in
                esteem by lovers all over; such exemplary their love was.
              </>
            </Text>
            <Img
              src="images/img_image139_1.png"
              className="h-[526px] mb-[undefinedpx] ml-[66px] mt-[81px] object-cover w-[26%] z-[1]"
              alt="image139"
            />
            <Footer className="flex font-roboto items-center justify-center mt-auto mx-auto w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default KahaniThreePage;
