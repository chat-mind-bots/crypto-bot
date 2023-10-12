import { FC } from "react";
import classNames from "classnames";

interface IOwnProps {
  num: number;
}

export const RoundedNumber: FC<IOwnProps> = ({ num }) => {
  return (
    <div
      className={classNames(
        "w-[64px]",
        "h-[64px]",
        "flex",
        "justify-center",
        "items-center",
        "rounded-full",
        "bg-gradient-to-tl",
        "from-gray-800",
        "to-gray-900",
        "bg-gradient-to-br",
        "from-black",
        "via-gray-700",
        "to-gray-800",
        "shadow-md",
        "dark:bg-white",
      )}
    >
      <p className={classNames("text-[42px]", "text-white", "dark:text-dark")}>
        {num}
      </p>
    </div>
  );
};
