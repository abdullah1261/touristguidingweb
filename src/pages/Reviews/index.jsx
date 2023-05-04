import React from "react";

import Header from "components/Header";
import Footer from "components/Footer";

const ReviewsPage = () => {
  return (
    <>
      <div className="bg-orange_200 border border-black_900 border-solid flex flex-col font-actor items-center justify-start mx-auto pb-2.5 w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="bg-lime_900 border border-lime_900 border-solid flex flex-col items-center justify-center md:px-5 shadow-bs4 w-full" />
          <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-start max-w-[1454px] mt-[65px] mx-auto md:px-5 w-full">
            <div className="bg-white_A700 h-[618px] shadow-bs1 w-[36%]"></div>
            <div className="bg-white_A700 h-[618px] w-[64%]"></div>
          </div>
          <Footer className="flex font-roboto items-center justify-center mt-[33px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ReviewsPage;
