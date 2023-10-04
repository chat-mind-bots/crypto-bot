import { FC, ReactNode } from "react";
import classNames from "classnames";

interface IOwnProps {
  children: ReactNode;
}

export const H4: FC<IOwnProps> = ({ children }) => {
  return (
    <h3
      className={classNames(
        "md:text-[32px]",
        "text-[24px]",
        "font-[629]",
        "md:leading-[35px]",
        "leading-[26px]",
      )}
    >
      {children}
    </h3>
  );
};
