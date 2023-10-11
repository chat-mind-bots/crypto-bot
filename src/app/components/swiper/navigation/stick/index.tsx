import classNames from "classnames";
import { FC } from "react";

interface IOwnProps {
  activeIndex: number;
  index: number;
  onClick(): void;
}

export const Stick: FC<IOwnProps> = ({ activeIndex, onClick, index }) => {
  return (
    <button
      className={classNames(
        "w-[82px]",
        "h-[4px]",
        "md:w-[4px]",
        "md:h-[109px]",
        "bg-[rgba(255,_255,_255,_0.24)]",
        "rounded-[90px]",
        {
          "bg-blue": activeIndex === index,
        },
      )}
      onClick={onClick}
    ></button>
  );
};
