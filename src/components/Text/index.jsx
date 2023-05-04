import React from "react";

const variantClasses = {
  h1: "font-medium sm:text-5xl md:text-5xl text-[98px]",
  h2: "font-normal sm:text-5xl md:text-5xl text-8xl",
  h3: "font-normal text-[9px]",
  h4: "font-normal sm:text-5xl md:text-5xl text-[71px]",
  h5: "sm:text-5xl md:text-5xl text-[64px]",
  h6: "font-normal sm:text-[41px] md:text-[47px] text-[55px]",
  body1: "text-5xl sm:text-[38px] md:text-[44px]",
  body2: "sm:text-4xl md:text-[38px] text-[40px]",
  body3: "text-4xl sm:text-[32px] md:text-[34px]",
  body4: "font-normal sm:text-3xl md:text-[32px] text-[34px]",
  body5: "font-normal md:text-3xl sm:text-[28px] text-[32px]",
  body6: "sm:text-2xl md:text-[26px] text-[28px]",
  body7: "font-normal md:text-2xl sm:text-[22px] text-[26px]",
  body8: "sm:text-[21px] md:text-[23px] text-[25px]",
  body9: "text-2xl md:text-[22px] sm:text-xl",
  body10: "font-normal text-[22px] sm:text-lg md:text-xl",
  body11: "font-normal text-xl",
  body12: "text-lg",
  body13: "font-semibold text-[17px]",
  body14: "text-base",
  body15: "text-[15px]",
  body16: "font-normal sm:text-5xl md:text-5xl text-[140px]",
  body17: "text-sm",
  body18: "font-semibold text-[13px]",
  body19: "font-normal text-xs",
  body20: "font-normal text-[11px]",
  body21: "font-normal text-[10px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
