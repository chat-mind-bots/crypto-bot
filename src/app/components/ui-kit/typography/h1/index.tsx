import { FC, ReactNode } from "react";
import classNames from "classnames";

interface IOwnProps {
  children: ReactNode;
  className?: string;
}

export const H1: FC<IOwnProps> = ({ children, className }) => {
  return (
    <h1
      className={classNames(
        "md:text-[80px]",
        "text-[46px]",
        "font-[629]",
        "md:leading-[88px]",
        "leading-[51px]",
        className,
      )}
    >
      {children}
    </h1>
  );
};
