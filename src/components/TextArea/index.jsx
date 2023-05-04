import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineBluegray10003:
    "bg-white_A700 border border-blue_gray_100_03 border-solid shadow-bs",
};
const shapes = { RoundedBorder8: "rounded-lg" };

const TextArea = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      children,
      shape,
      variant,

      errors,
      onChange,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${shapes[shape] || ""} ${
            variants[variant] || ""
          }`}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder8"]),
  variant: PropTypes.oneOf(["OutlineBluegray10003"]),
};

TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  shape: "",
  variant: "",
};
export { TextArea };
