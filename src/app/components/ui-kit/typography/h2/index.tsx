import { FC, ReactNode } from "react";
import classNames from "classnames";

interface IOwnProps {
  children: ReactNode;
  className?: string;
}

export const H2: FC<IOwnProps> = ({ children, className }) => {
  return (
    <h2
      className={classNames(
        "md:text-[56px]",
        "text-[32px]",
        "font-[629]",
        "md:leading-[61px]",
        "leading-[35px]",
        className,
      )}
    >
      {children}
    </h2>
  );
};
