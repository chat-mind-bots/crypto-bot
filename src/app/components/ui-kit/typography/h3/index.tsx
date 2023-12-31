import { FC, ReactNode } from "react";
import classNames from "classnames";

interface IOwnProps {
  children: ReactNode;
  className?: string;
}

export const H3: FC<IOwnProps> = ({ children, className }) => {
  return (
    <h3
      className={classNames(
        "md:text-[42px]",
        "text-[28px]",
        "font-[629]",
        "md:leading-[46px]",
        "leading-[30px]",
        className,
      )}
    >
      {children}
    </h3>
  );
};
