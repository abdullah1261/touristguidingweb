import React from "react";

import Header from "components/Header";
import { Text, Img } from "components";
import Footer from "components/Footer";

const KahaniPage = () => {
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
          className="font-medium font-playfairdisplay leading-[42.00px] md:ml-[0] ml-[58px] mt-[60px] text-gray_900 text-left text-shadow-ts5"
          as="h5"
          variant="h5"
        >
          <>
            A defeated king
            <br />A funeral pyre
          </>
        </Text>
        <div className="flex flex-col items-center w-full">
          <div className="h-[949px] md:px-5 relative w-full">
            <Text
              className="font-actor font-normal leading-[42.00px] mb-[-24.31px] ml-auto mr-9 not-italic text-black_900 text-left z-[1]"
              variant="body9"
            >
              <>
                Then there are those tales that have no landmarks to pay them
                mute testimony; that are
                <br />
                remembered only distantly, if at all. One such tale is that of
                Raja Jaipal.
                <br />
                The next time you find yourself between Bhaati Gate and Mori
                Gate on the circular road,
                <br />
                transport yourself over a thousand years into the past and
                imagine a scene of despair
                <br />
                and defeat. There stood the Hindushahi King Raja Jaipal, in full
                military regalia. Hiding
                <br />
                great shame and sorrow behind a stoic face, he lit a pyre and
                climbed onto it,
                <br />
                immolating himself in full view of a crowd of onlookers. This
                was Jauhar, an act of self-
                <br />
                immolation usually committed by the women of the martial Rajputs
                in order to avoid the
                <br />
                shame of being captured by an invading army. What drove a king
                to do such a thing?
                <br />
                The answer is: defeat. This proud king had fought war after war
                against the Afghan
                <br />
                invader Subuktagin, only to suffer incredible losses every time.
                Even the death of his
                <br />
                great rival did not deliver him, as on November 27, 1001, Jaipal
                was thoroughly beaten
                <br />
                by Subuktagin’s son, Mahmud of Ghazni. Though he won his freedom
                after paying a<br />
                huge ransom, this proud Punjabi king could not bear the loss and
                ended his life on a<br />
                flaming pyre. Until not too long ago, there stood a Pipal tree
                at the spot that was known
                <br />
                as the Jauhar tree. Did those who had sheltered beneath its
                branches know the
                <br />
                sacrifice it marked?
              </>
            </Text>
            <Img
              src="images/img_image139_526x418.png"
              className="h-[526px] mb-[-32.31px] ml-[68px] mt-[99px] object-cover w-[27%] z-[1]"
              alt="image139"
            />
            <Footer className="flex font-roboto items-center justify-center mt-auto mx-auto w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default KahaniPage;
