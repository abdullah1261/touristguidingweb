import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineBluegray10003:
    "bg-white_A700 border border-blue_gray_100_03 border-solid shadow-bs",
  OutlineGray500: "bg-white_A700 border border-gray_500 border-solid",
};
const shapes = { RoundedBorder8: "rounded-lg", RoundedBorder4: "rounded" };
const sizes = { sm: "p-[13px]" };

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,

      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder8", "RoundedBorder4"]),
  variant: PropTypes.oneOf(["OutlineBluegray10003", "OutlineGray500"]),
  size: PropTypes.oneOf(["sm"]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
