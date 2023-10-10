import { FC, useMemo } from "react";
import classNames from "classnames";

interface IOwnProps {
  type: "blue" | "orange" | "violet" | "blue-old" | "orange-old" | "violet-old";
}

export const GradientCard: FC<IOwnProps> = ({ type }) => {
  const background = useMemo(() => {
    switch (type) {
      case "blue":
        return "bg-[linear-gradient(0deg,_#C2E9FB_0%,_#A1C4FD_100%)]";
      case "orange":
        return "bg-[linear-gradient(207deg,_#FCB69F_0%,_#FFECD2_100%)]";
      case "violet":
        return "bg-[linear-gradient(297deg,_#8EC5FC_0%,_#E0C3FC_100%)]";
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
