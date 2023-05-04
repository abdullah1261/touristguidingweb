import React from "react";

import Header from "components/Header";
import { Text } from "components";
import Footer1 from "components/Footer1";

const LegalPolicyPage = () => {
  return (
    <>
      <div className="bg-orange_200 flex flex-col font-actor items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-lime_900 border border-lime_900 border-solid flex flex-col items-center justify-center md:px-5 shadow-bs4 w-full" />
        </div>
        <div className="flex flex-col items-end mt-[18px] md:px-10 sm:px-5 px-[548px] w-full">
          <Text
            className="not-italic text-center text-gray_900 text-shadow-ts7 w-[79%] sm:w-full"
            as="h4"
            variant="h4"
          >
            Legal Policy
          </Text>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="h-[893px] md:px-5 relative w-full">
            <Text
              className="font-actor mb-[-19.31px] ml-auto mr-[139px] not-italic text-gray_900 text-left z-[1]"
              variant="body7"
            >
              <>
                Welcome to Visit Lahore, a tourism website dedicated to
                providing accurate and reliable information about the city of
                Lahore and its attractions. We take pride in being a verified
                organization by the Department of Tourist Services of Pakistan,
                which ensures our commitment to providing reliable information
                to our visitors.
                <br />
                As a responsible and trustworthy organization, we understand the
                importance of providing accurate information to our users. We do
                not post any video or content without content review to ensure
                that all the information on our website is accurate and
                up-to-date.
                <br />
                We are an approved business that is committed to posting no
                false texts or news. We understand the significance of
                maintaining transparency in our operations, and we take this
                responsibility very seriously. Therefore, we strive to provide
                reliable and authentic information to our users to make their
                visit to Lahore an unforgettable experience.
                <br />
                We believe in providing the best possible experience to our
                visitors, and we are committed to providing high-quality content
                that is both informative and engaging. Our team of professionals
                works tirelessly to ensure that all the information on our
                website is up-to-date and accurate, so you can rely on us for
                your travel needs.
                <br />
                By using our website, you agree to abide by the terms and
                conditions of our policies. We reserve the right to modify these
                policies at any time without notice, so we encourage you to
                review them periodically to stay informed.
                <br />
                Thank you for choosing Visit Lahore as your travel guide, and we
                hope you have a pleasant and enjoyable experience in our
                beautiful city.
              </>
            </Text>
            <Footer1 className="flex font-roboto items-center justify-center mt-auto mx-auto w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalPolicyPage;
