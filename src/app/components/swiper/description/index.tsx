import classNames from "classnames";
import { H2 } from "app/components/ui-kit/typography/h2";
import { BaseText } from "app/components/ui-kit/typography/base-text";
import { Button } from "app/components/ui-kit/button";
import { FC, ReactNode } from "react";

export interface ISliderDescriptionProps {
  title: ReactNode;
  description: ReactNode;
}

export const Description: FC<ISliderDescriptionProps> = ({
  description,
  title,
}) => {
  return (
    <div
      className={classNames("flex", "flex-col", "md:gap-[32px]", "gpa-[54px]")}
    >
      <div
        className={classNames(
          "flex",
          "flex-col",
          "md:gap-[32px]",
          "gpa-[24px]",
          "md:max-w-[488px]",
          "w-full",
        )}
      >
        <H2 className={classNames("text-white", "dark:text-white")}>{title}</H2>
        <BaseText className={classNames("text-white", "dark:text-white")}>
          {description}
        </BaseText>
      </div>
      <Button
        variant={"primary"}
        text={"Get started"}
        href={"https://google.com/get_started"}
      />
    </div>
  );
};
