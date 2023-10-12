import classNames from "classnames";
import { FC } from "react";

interface IOwnProps {
  activeIndex: number;
  index: number;
  onClick(): void;
}

export const Stick: FC<IOwnProps> = ({ activeIndex, onClick, index }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <span
      className={classNames(
        "flex-1",
        "h-[4px]",
        "lg:w-[4px]",
        "bg-[rgba(255,_255,_255,_0.24)]",
        "rounded-[90px]",
        "cursor-pointer",
        "transition",
        "duration-400",
        {
          "bg-blue": activeIndex === index,
        },
      )}
      onClick={onClick}
    ></span>
  );
};
