import { FC, ReactNode } from "react";
import classNames from "classnames";

interface IOwnProps {
  firstContent: ReactNode;
  secondContent: ReactNode;
  className?: string;
  isReverse?: boolean;
}
export const DoubleCard: FC<IOwnProps> = ({
  firstContent,
  secondContent,
  className,
  isReverse,
}) => {
  return (
    <div
      className={classNames(
        "flex",
        "flex-col-reverse",
        "md:flex-row",
        "md:justify-between",
        "w-full",
        "h-[565px]",
        "md:h-[488px]",
        "gap-[16px]",
        "md:gap-0",
        className,
      )}
    >
      <div
        className={classNames(
          "md:w-[50%]",
          "w-[100%]",
          "md:h-[100%]",
          "h-[50%]",
          "flex",
          "items-center",
          {
            "md:justify-end": isReverse,
          },
        )}
      >
        {firstContent}
      </div>
      <div
        className={classNames(
          "md:w-[50%]",
          "w-[100%]",
          "md:h-[100%]",
          "h-[50%]",
        )}
      >
        {secondContent}
      </div>
    </div>
  );
};
