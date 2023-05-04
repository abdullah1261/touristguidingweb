import React from "react";

import { Text, Img } from "components";

const JunoonNavbar = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-lime_900 border border-lime_900 border-solid flex flex-col items-end justify-end mb-[78px] p-4 shadow-bs4 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end mr-[18px] mt-[3px] w-[46%] md:w-full">
            <div className="md:h-[30px] h-[31px] relative w-[27%] md:w-full">
              <Text
                className="absolute font-actor font-normal h-max inset-y-[0] my-auto not-italic right-[0] text-center text-orange_200 text-shadow-ts1 w-auto"
                variant="body8"
              >
                {props?.events}
              </Text>
              <Text
                className="absolute font-actor font-normal h-max inset-y-[0] left-[0] my-auto not-italic text-center text-orange_200 text-shadow-ts1 w-auto"
                variant="body8"
              >
                {props?.kahani}
              </Text>
            </div>
            <Text
              className="font-actor font-normal not-italic text-center text-orange_200 text-shadow-ts1 w-auto"
              variant="body8"
            >
              {props?.eat}
            </Text>
            <div className="flex flex-col justify-start w-auto md:w-full">
              <Text
                className="font-actor font-normal not-italic text-center text-orange_200 text-shadow-ts1 w-auto"
                variant="body8"
              >
                {props?.map}
              </Text>
              <Text
                className="font-actor font-normal md:ml-[0] ml-[72px] not-italic text-center text-orange_200 text-shadow-ts1 w-auto"
                variant="body8"
              >
                {props?.activites}
              </Text>
            </div>
            <Text
              className="font-actor font-normal not-italic text-center text-orange_200 text-shadow-ts1 w-auto"
              variant="body8"
            >
              {props?.gallery}
            </Text>
            <Img
              src="images/img_mail.svg"
              className="h-[25px] md:ml-[0] ml-[15px] md:mt-0 mt-1.5 w-auto"
              alt="mail"
            />
            <Img
              src="images/img_cart.svg"
              className="h-8 md:ml-[0] ml-[22px] md:mt-0 mt-0.5 w-auto"
              alt="cart"
            />
            <Img
              src={props?.user}
              className="h-[35px] md:ml-[0] ml-[26px] w-auto"
              alt="user"
            />
          </div>
        </div>
        {!!props?.elevenOne ? (
          <Img
            src={props?.elevenOne}
            className="h-[150px] sm:h-auto md:ml-[0] ml-[27px] mr-[1332px] object-cover w-[16%] md:w-full"
            alt="Eleven_One"
          />
        ) : null}
      </header>
    </>
  );
};

JunoonNavbar.defaultProps = {
  events: "Events",
  kahani: "Kahani",
  eat: "Eat",
  map: "Map",
  activites: "Activites",
  gallery: "Gallery",
  user: "images/img_user_orange_200.svg",
};

export default JunoonNavbar;
