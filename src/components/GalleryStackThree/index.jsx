import React from "react";

import { Img, Text } from "components";

const GalleryStackThree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bottom-[6%] md:h-[575px] h-[576px] inset-x-[0] mx-auto w-full">
          <div className="absolute h-[575px] inset-[0] justify-center m-auto w-full">
            <div className="absolute md:h-[500px] h-[575px] inset-[0] justify-center m-auto w-[99%] md:w-full">
              <div className="absolute bg-gray_800_e8 md:h-[290px] h-[575px] inset-[0] justify-center m-auto p-[73px] md:px-10 sm:px-5 w-full">
                <Img
                  src="images/img_ellipse16.svg"
                  className="absolute h-[290px] right-[16%] top-[13%] w-auto"
                  alt="ellipseSixteen"
                />
                <div className="absolute bottom-[26%] md:h-[213px] h-[243px] right-[10%] shadow-bs5 w-[44%] md:w-full">
                  <Text
                    className="absolute font-librebodoni left-[1%] not-italic text-center text-shadow-ts1 text-white_A700 top-[0] w-auto"
                    variant="body16"
                  >
                    {props?.lahore}
                  </Text>
                  <Text
                    className="absolute bottom-[0] font-lucidahandwriting font-normal inset-x-[0] italic mx-auto text-center text-shadow-ts1 text-white_A700 w-full"
                    variant="body2"
                  >
                    {props?.throughlens}
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_3.png"
                className="absolute h-[500px] object-cover right-[0] top-[2%] w-[35%]"
                alt="Three"
              />
            </div>
            <Img
              src="images/img_group2089.svg"
              className="absolute h-[575px] inset-y-[0] my-auto right-[0] w-auto"
              alt="group2089"
            />
          </div>
          <div className="absolute bg-gray_900 flex flex-col h-max inset-y-[0] items-start justify-start left-[0] my-auto shadow-bs5 w-[6%]">
            <div className="bg-gray_900 h-[575px] shadow-bs5 w-[73%]"></div>
          </div>
        </div>
        <div className="absolute flex md:flex-col flex-row md:gap-10 h-full inset-[0] items-start justify-center m-auto w-full">
          <div className="h-[668px] md:mt-0 mt-16 relative shadow-bs5 w-[29%] md:w-full">
            <Img
              src="images/img_image40.png"
              className="absolute h-[668px] inset-[0] justify-center m-auto object-cover w-full"
              alt="imageForty"
            />
            <Img
              src="images/img_image7.png"
              className="absolute h-[537px] inset-[0] justify-center m-auto object-cover rounded-[29px] w-[68%]"
              alt="imageSeven"
            />
          </div>
          <div className="h-[214px] relative shadow-bs5 w-[27%] md:w-full">
            <div className="absolute h-[214px] inset-y-[0] my-auto right-[0] w-[68%]">
              <Img
                src="images/img_image41_214x236.png"
                className="absolute h-[214px] inset-y-[0] my-auto object-cover right-[0] w-[82%]"
                alt="imageFortyOne"
              />
              <Img
                src="images/img_image42_93x125.png"
                className="absolute bottom-[22%] h-[93px] left-[0] object-cover w-[44%]"
                alt="imageFortyTwo"
              />
            </div>
            <Img
              src="images/img_image43_92x180.png"
              className="absolute bottom-[22%] h-[92px] left-[0] object-cover w-[42%]"
              alt="imageFortyThree"
            />
          </div>
        </div>
      </div>
    </>
  );
};

GalleryStackThree.defaultProps = {
  lahore: "Lahore",
  throughlens: "through lens",
};

export default GalleryStackThree;
