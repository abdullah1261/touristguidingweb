import React from "react";

import { Text, Input, Img } from "components";

const LoginColumnheader = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-gilroy font-semibold text-blue_gray_900 text-left w-auto"
          variant="body17"
        >
          {props?.header}
        </Text>
        <Input
          wrapClassName="flex w-full"
          className="font-gilroy font-medium leading-[normal] md:h-auto p-0 placeholder:text-gray_400 sm:h-auto text-gray_400 text-left text-xs w-full"
          name="frameThree"
          placeholder="Your email"
          prefix={
            <Img
              src="images/img_mail_blue_gray_500.svg"
              className="mt-px mb-auto mr-2.5"
              alt="mail"
            />
          }
          shape="RoundedBorder4"
          size="sm"
          variant="OutlineGray500"
        ></Input>
      </div>
    </>
  );
};

LoginColumnheader.defaultProps = { header: "Email" };

export default LoginColumnheader;
