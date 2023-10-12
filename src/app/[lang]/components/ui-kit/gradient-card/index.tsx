import { FC, ReactNode, useMemo } from "react";
import classNames from "classnames";

export type GradientCardType =
  | "blue"
  | "orange"
  | "violet"
  | "pink"
  | "yellow"
  | "blue-swiper";

interface IOwnProps {
  type: GradientCardType;
  children: ReactNode;
  className?: string;
}

export const GradientCard: FC<IOwnProps> = ({ type, children, className }) => {
  const background = useMemo(() => {
    switch (type) {
      case "blue":
        return "bg-[linear-gradient(0deg,_#C2E9FB_0%,_#A1C4FD_100%)]";
      case "orange":
        return "bg-[linear-gradient(207deg,_#FCB69F_0%,_#FFECD2_100%)]";
      case "violet":
        return "bg-[linear-gradient(297deg,_#8EC5FC_0%,_#E0C3FC_100%)]";
      case "pink":
        return "bg-[linear-gradient(340deg,_#FAACA8_8.42%,_#DDD6F3_91.45%)]";
      case "yellow":
        return "bg-[linear-gradient(207deg,_#FCB69F_6.91%,_#FFECD2_92.45%)]";
      case "blue-swiper":
        return "bg-[linear-gradient(0deg,_#C2E9FB_-16.6%,_#A1C4FD_106.15%)]";
    }
  }, [type]);
  return (
    <div
      className={classNames(
        "w-full",
        "h-full",
        "rounded-[40px]",
        background,
        className,
      )}
    >
      {children}
    </div>
  );
};
