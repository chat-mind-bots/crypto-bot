import { FC, ReactNode } from "react";
import classNames from "classnames";

interface IOwnProps {
  children: ReactNode;
}

export const DescriptionText: FC<IOwnProps> = ({ children }) => {
  return (
    <span
      className={classNames(
        "md:text-[14px]",
        "text-[12px]",
        "font-medium",
        "md:leading-[17px]",
        "leading-[15px]",
      )}
    >
      {children}
    </span>
  );
};
