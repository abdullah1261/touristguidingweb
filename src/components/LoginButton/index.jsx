import React from "react";

import { Text } from "components";

const LoginButton = (props) => {
  return (
    <>
      <Text className={props.className} variant="body17">
        {props?.button}
      </Text>
    </>
  );
};

LoginButton.defaultProps = {};

export default LoginButton;
