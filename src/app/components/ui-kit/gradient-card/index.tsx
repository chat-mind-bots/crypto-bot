import { FC, useMemo } from "react";
import classNames from "classnames";

interface IOwnProps {
  type: "blue" | "orange" | "violet" | "blue-old" | "orange-old" | "violet-old";
}

export const GradientCard: FC<IOwnProps> = ({ type }) => {
  const background = useMemo(() => {
    switch (type) {
      case "blue":
        return "bg-gradient-to-r from-bgLightBlue to-bgLightDarkBlue";
      case "orange":
        return "bg-gradient-to-bl from-rose  to-pink";
      case "violet":
        return "bg-gradient-to-tr from-bgBlue to-purple";
    }
  }, [type]);
  return (
    <div
      className={classNames("w-full", "h-full", "rounded-[40px]", background)}
    >
      cont
    </div>
  );
};
