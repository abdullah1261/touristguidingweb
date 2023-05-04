import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder4: "rounded" };
const variants = {
  FillGray10001: "bg-gray_100_01 text-gray_800_02",
  OutlineBlack900:
    "bg-lime_800 border border-black_900 border-solid shadow-bs1 text-black_900",
  OutlineGray80002: "border border-gray_800_02 border-solid text-gray_800_02",
  icbFillRed90001: "bg-red_900_01",
};
const sizes = { sm: "p-1.5", smIcn: "p-1.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder4"]),
  variant: PropTypes.oneOf([
    "FillGray10001",
    "OutlineBlack900",
    "OutlineGray80002",
    "icbFillRed90001",
  ]),
  size: PropTypes.oneOf(["sm", "smIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
