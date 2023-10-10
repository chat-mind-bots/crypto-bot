import { FC } from "react";
import classNames from "classnames";

interface IOwnProps {
  text: string | number;
}
export const Indicator: FC<IOwnProps> = ({ text }) => {
  return (
    <div
      className={classNames(
        "md:w-[64px]",
        "min-w-[36px]",
        "w-[36px]",
        "h-[36px]",
        "md:h-[64px]",
        "dark:bg-white",
        "dark:bg-none",
        "bg-[linear-gradient(220deg,_#010417_10.26%,_#2B333F_84.25%),_linear-gradient(46deg,_#000_15.89%,_#434343_171.16%)]",
        "flex",
        "justify-center",
        "items-center",
        "rounded-full",
        "shadow-[0px_0px_8px_0px_rgba(182,_186,_191,_0.04),_0px_2px_3px_0px_rgba(0,_0,_0,_0.02)]",
      )}
    >
      <span
        className={classNames(
          "md:text-[42px]",
          "text-[24px]",
          "text-white",
          "dark:text-dark",
          "leading-[110%]",
        )}
      >
        {text}
      </span>
    </div>
  );
};
