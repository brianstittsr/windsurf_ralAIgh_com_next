import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-lg",
};
const variants = {
  fill: {
    white_A700: "bg-white-a700 text-gray-900",
    blue_50: "bg-blue-50 shadow-2xl",
    amber_200: "bg-amber-200 text-indigo-900",
    blue_400: "bg-blue-400 text-white-a700",
  },
};
const sizes = {
  xl: "h-[90px] px-[34px] text-[28px]",
  lg: "h-[72px] px-5",
  md: "h-[66px] px-3",
  xs: "h-[50px] px-[34px] text-[16px]",
  sm: "h-[60px] px-[34px] text-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "blue_400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
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
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xl", "lg", "md", "xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "blue_50", "amber_200", "blue_400"]),
};

export { Button };
