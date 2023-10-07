import { FC, ReactNode } from "react";
import classNames from "classnames";

interface IOwnProps {
  children: ReactNode;
  className?: string;
}

export const BaseText: FC<IOwnProps> = ({ children, className }) => {
  return (
    <p
      className={classNames(
        "md:text-[20px]",
        "text-[18px]",
        "font-normal",
        "md:leading-[24px]",
        "leading-[22px]",
        className,
      )}
    >
      {children}
    </p>
  );
};
