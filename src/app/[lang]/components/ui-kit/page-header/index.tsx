import { FC, ReactNode } from "react";
import { H2 } from "app/[lang]/components/ui-kit/typography/h2";
import { BaseText } from "app/[lang]/components/ui-kit/typography/base-text";
import classNames from "classnames";

export interface IOwnProps {
  title: ReactNode | string;
  description?: string | ReactNode;
}
export const PageHeader: FC<IOwnProps> = ({ title, description }) => {
  return (
    <div
      className={classNames("flex", "flex-col", "gap-[24px]", "items-center")}
    >
      <H2>{title}</H2>
      {description &&
        (typeof description === "string" ? (
          <BaseText className={classNames("md:max-w-[590px]", "text-center")}>
            {description}
          </BaseText>
        ) : (
          description
        ))}
    </div>
  );
};
