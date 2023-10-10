import { FC, ReactNode } from "react";
import classNames from "classnames";

interface IOwnProps {
  children: ReactNode;
}

export const ButtonText: FC<IOwnProps> = ({ children }) => {
  return (
    <span
      className={classNames(
        "md:text-[20px]",
        "text-[18px]",
        "font-medium",
        "md:leading-[24px]",
        "leading-[22px]",
      )}
    >
      {children}
    </span>
  );
};
