import React from "../_snowpack/pkg/react.v17.0.2.js";
import "./button.css.proxy.js";
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: ["storybook-button", `storybook-button--${size}`, mode].join(" "),
    style: {backgroundColor},
    ...props
  }, label);
};
