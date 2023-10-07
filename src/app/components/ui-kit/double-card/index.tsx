import { FC, ReactNode } from "react";
import classNames from "classnames";

interface IOwnProps {
  firstContent: ReactNode;
  secondContent: ReactNode;
}
export const DoubleCard: FC<IOwnProps> = ({ firstContent, secondContent }) => {
  return (
    <div
      className={classNames(
        "grid",
        "w-full",
        "md:grid-cols-doubleCard",
        "h-[497px]",
        "md:h-auto",
      )}
    >
      {firstContent}
      {secondContent}
    </div>
  );
};
