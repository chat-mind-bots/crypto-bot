import { FC } from "react";
import classNames from "classnames";

interface IOwnProps {
  type: "blue" | "orange" | "violet" | "blue-old" | "orange-old" | "violet-old";
}

export const GradientCard: FC<IOwnProps> = () => {
  // const background = useMemo(() => {
  //   switch (type) {
  //     case "blue-old":
  //       return "linear-gradient(0deg, #C2E9FB 0%, #A1C4FD 100%)";
  //     case "blue":
  //       // return "linear-gradient(0deg, #C2E9FB 0%, #A1C4FD 100%)";
  //       return "bg-gradient-to-r from-blue-300 to-blue-400";
  //     case "orange-old":
  //       return "linear-gradient(207deg, #FCB69F 0%, #FFECD2 100%)";
  //     case "orange":
  //       // return "linear-gradient(207deg, #FCB69F 0%, #FFECD2 100%)";
  //       return "bg-gradient-to-bl from-rose-300 via-rose-400 to-amber-200";
  //     case "violet-old":
  //       return "linear-gradient(297deg, #8EC5FC 0%, #E0C3FC 100%)";
  //     case "violet":
  //       return "linear-gradient(297deg, #8EC5FC 0%, #E0C3FC 100%)";
  //     // return "bg-gradient-to-tr from-light-blue-300 to-purple-300";
  //   }
  // }, [type]);
  return (
    <div
      className={classNames(
        "w-full",
        "h-full",
        "rounded-[40px]",
        "bg-gradient-to-bl from-white-300 via-blue-400 to-deepBlue-200",
      )}
      // style={{ background }}
      // style={{
      //   width: "590px",
      //   height: "488px",
      //   background,
      //   borderRadius: "40px",
      // }}
    >
      cont
    </div>
  );
};
