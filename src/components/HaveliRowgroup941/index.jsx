import React from "react";

import { RatingBar } from "components";

const HaveliRowgroup941 = (props) => {
  return (
    <>
      <div className={props.className}>
        <RatingBar
          className="rounded-[1px]"
          value={4}
          starCount={5}
          color="#d7d7d7"
          activeColor="#fdd836"
          size={22}
        ></RatingBar>
      </div>
    </>
  );
};

HaveliRowgroup941.defaultProps = {};

export default HaveliRowgroup941;
