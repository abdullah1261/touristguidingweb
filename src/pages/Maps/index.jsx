import React from "react";

import Header from "components/Header";
import { Text, Img } from "components";
import Footer1 from "components/Footer1";

const MapsPage = () => {
  return (
    <>
      <div className="bg-orange_200 flex flex-col font-actor sm:gap-10 md:gap-10 gap-[91px] items-center justify-start mx-auto w-full">
        <Header className="bg-lime_900 border border-lime_900 border-solid flex flex-col items-center justify-center md:px-5 shadow-bs4 w-full" />
        <div className="md:h-[646px] h-[994px] md:px-5 relative w-full">
          <Text
            className="ml-[145px] mt-[111px] not-italic text-center text-gray_900 text-shadow-ts6 w-auto"
            variant="body16"
          >
            Map
          </Text>
          <div className="absolute font-roboto md:h-[646px] h-[994px] inset-[0] justify-center m-auto w-full">
            <div className="absolute bg-gray_900 h-[646px] right-[8%] shadow-bs6 top-[0] w-[46%]"></div>
            <div className="absolute flex md:flex-col flex-row md:gap-5 items-start justify-start left-[4%] top-[32%] w-[39%]">
              <Img
                src="images/img_image89.png"
                className="h-[188px] sm:h-auto mb-10 object-cover w-[79%] md:w-full"
                alt="imageEightyNine"
              />
              <Img
                src="images/img_imageremovebgpreview.png"
                className="h-[139px] sm:h-auto md:mt-0 mt-[90px] object-cover w-[22%] md:w-full"
                alt="imageremovebgpr"
              />
            </div>
            <Footer1 className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MapsPage;
