import React from "react";

import { Img } from "components";

const LoginSignup = (props) => {
  return (
    <>
      <div className={props.className}>
        {!!props?.logofacebookone ? (
          <Img
            src={props?.logofacebookone}
            className="h-9 w-9"
            alt="logofacebookOne"
          />
        ) : null}
      </div>
    </>
  );
};

LoginSignup.defaultProps = {};

export default LoginSignup;
