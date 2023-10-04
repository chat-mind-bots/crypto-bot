import { FC, ReactNode } from "react";
import { BaseText } from "app/components/ui-kit/Typography/base-text";
import { H2 } from "app/components/ui-kit/Typography/h2";
import classNames from "classnames";

interface IOwnProps {
  title: string;
  description: ReactNode;
  topContent?: ReactNode;
  bottomContent?: ReactNode;
}

export const Card: FC<IOwnProps> = ({
  bottomContent,
  topContent,
  description,
  title,
}) => {
  return (
    <div
      className={classNames(
        "bg-bgLight",
        "dark:bg-bgDark",
        "rounded-[32px]",
        "md:px-[56px]",
        "md:py-[42px]",
        "p-[32px]",
        "gap-[24px]",
      )}
    >
      {topContent}
      <div
        className={classNames(
          "flex",
          "flex-col",
          "md:gap-[20px]",
          "gap-[16px]",
        )}
      >
        <H2>{title}</H2>
        <BaseText>{description}</BaseText>
      </div>
      {bottomContent}
    </div>
  );
};
