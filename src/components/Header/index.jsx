import React from "react";

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[27px] mr-[35px] w-[97%]">
          <div className="header-row ">
            <Img
              src="images/img_11_72x241.png"
              className="h-[72px] md:h-auto object-cover"
              alt="Eleven"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="md:h-[30px] h-[31px] sm:hidden md:ml-[0] ml-[577px] relative w-[13%] md:w-full">
            <Text
              className="common-pointer absolute font-actor font-normal h-max inset-y-[0] my-auto not-italic right-[0] text-center text-orange_200 text-shadow-ts2 w-auto"
              variant="body8"
              onClick={() => navigate("/events")}
            >
              Events
            </Text>
            <Text
              className="common-pointer absolute font-actor font-normal h-max inset-y-[0] left-[0] my-auto not-italic text-center text-orange_200 text-shadow-ts2 w-auto"
              variant="body8"
              onClick={() => navigate("/kahanione")}
            >
              Kahani
            </Text>
          </div>
          <Text
            className="common-pointer font-actor font-normal sm:hidden not-italic text-center text-orange_200 text-shadow-ts2 w-auto"
            variant="body8"
            onClick={() => navigate("/khaabe")}
          >
            Eat
          </Text>
          <div className="flex flex-col sm:hidden justify-start w-auto">
            <Text
              className="common-pointer font-actor font-normal not-italic text-center text-orange_200 text-shadow-ts2 w-auto"
              variant="body8"
              onClick={() => navigate("/maps")}
            >
              Map
            </Text>
            <Text
              className="common-pointer font-actor font-normal md:ml-[0] ml-[72px] not-italic text-center text-orange_200 text-shadow-ts2 w-auto"
              variant="body8"
              onClick={() => navigate("/actvities")}
            >
              Activites
            </Text>
          </div>
          <Text
            className="common-pointer font-actor font-normal sm:hidden not-italic text-center text-orange_200 text-shadow-ts2 w-auto"
            variant="body8"
            onClick={() => navigate("/gallery")}
          >
            Gallery
          </Text>
          <Img
            src="images/img_mail.svg"
            className="common-pointer h-[25px] sm:hidden md:ml-[0] ml-[15px] w-auto"
            onClick={() => navigate("/contactus")}
            alt="mail"
          />
          <Img
            src="images/img_cart.svg"
            className="h-8 sm:hidden md:ml-[0] ml-[22px] w-auto"
            alt="cart"
          />
          <Img
            src="images/img_user.svg"
            className="common-pointer h-[35px] sm:hidden md:ml-[0] ml-[26px] w-auto"
            onClick={() => navigate("/login")}
            alt="user"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
