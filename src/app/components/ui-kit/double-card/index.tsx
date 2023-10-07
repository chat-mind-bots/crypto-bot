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
        "h-[565px]",
        "md:h-[488px]",
        "grid-rows-doubleCardMobile",
        "md:grid-rows-doubleCard",
      )}
    >
      {firstContent}
      {secondContent}
    </div>
  );
};
