import { FC, ReactNode } from "react";
import { BaseText } from "app/[lang]/components/ui-kit/typography/base-text";
import classNames from "classnames";
import { H3 } from "app/[lang]/components/ui-kit/typography/h3";

interface IOwnProps {
  title: string;
  description: ReactNode;
  topContent?: ReactNode;
  bottomContent?: ReactNode;
  className?: string;
}

export const Card: FC<IOwnProps> = ({
  bottomContent,
  topContent,
  description,
  title,
  className,
}) => {
  return (
    <div
      className={classNames(
        "bg-bgLight",
        "flex",
        "flex-col",
        "dark:bg-bgDark",
        "rounded-[32px]",
        "md:px-[56px]",
        "md:py-[42px]",
        "p-[32px]",
        "gap-[24px]",
        className,
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
        <H3>{title}</H3>
        <BaseText>{description}</BaseText>
      </div>
      {bottomContent}
    </div>
  );
};
