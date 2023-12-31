import classNames from "classnames";
import { H2 } from "app/components/ui-kit/typography/h2";
import { BaseText } from "app/components/ui-kit/typography/base-text";
import { Button } from "app/components/ui-kit/button";
import { FC, ReactNode } from "react";

export interface ISliderDescriptionProps {
  title: ReactNode;
  description: ReactNode;
  imageName?: string;
}

export const Description: FC<ISliderDescriptionProps> = ({
  description,
  title,
}) => {
  return (
    <div
      className={classNames(
        "flex",
        "lg:flex-row",
        "flex-col",
        "justify-end",
        "w-full",
        "h-full",
        "items-center",
      )}
    >
      <div
        className={classNames(
          "flex",
          "flex-col",
          "lg:gap-[32px]",
          "gap-[54px]",
          "lg:w-[50%]",
          "w-full",
          "pb-[81px]",
          "lg:pb-0",
          "items-center",
          "lg:items-start",
        )}
      >
        <div
          className={classNames(
            "flex",
            "flex-col",
            "lg:gap-[32px]",
            "gap-[24px]",
            "lg:max-w-[488px]",
            "w-full",
          )}
        >
          <H2
            className={classNames(
              "text-white",
              "dark:text-white",
              "text-center",
              "lg:text-left",
            )}
          >
            {title}
          </H2>
          <BaseText
            className={classNames(
              "text-white",
              "dark:text-white",
              "text-center",
              "lg:text-left",
            )}
          >
            {description}
          </BaseText>
        </div>
        <Button
          variant={"primary"}
          text={"Get started"}
          href={"https://google.com/get_started"}
        />
      </div>
    </div>
  );
};
