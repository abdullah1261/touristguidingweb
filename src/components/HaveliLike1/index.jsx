import React from "react";

import { Img } from "components";

const HaveliLike1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_favorite.svg"
          className="h-[33px] w-auto"
          alt="favorite"
        />
      </div>
    </>
  );
};

HaveliLike1.defaultProps = {};

export default HaveliLike1;
