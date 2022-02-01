import React, { PropsWithChildren } from "react";

import { classnames } from "../utils/helper";

export type Props = {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDoubleClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  disabled?: boolean;
  label?: string | null;
  type?: "button" | "submit" | "reset";
};

function Button({
  onClick,
  onDoubleClick,
  className,
  type,
  label = null,
  disabled,
  children,
}: PropsWithChildren<Props>) {
  return (
    <button
      className={classnames({
        [`${className ?? ""}`]: className,
      })}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      disabled={disabled}
      type={type}
    >
      {label && label}
      {children && children}
    </button>
  );
}

export default Button;
