import { FC, ReactNode } from "react";
import classNames from "classnames";

interface IOwnProps {
  children: ReactNode;
  className?: string;
}

export const DescriptionText: FC<IOwnProps> = ({ children, className }) => {
  return (
    <span
      className={classNames(
        "md:text-[14px]",
        "text-[12px]",
        "font-medium",
        "md:leading-[17px]",
        "leading-[15px]",
        className,
      )}
    >
      {children}
    </span>
  );
};
