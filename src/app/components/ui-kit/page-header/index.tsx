import { FC, ReactNode } from "react";
import { H2 } from "app/components/ui-kit/typography/h2";
import { BaseText } from "app/components/ui-kit/typography/base-text";
import classNames from "classnames";

export interface IOwnProps {
  title: ReactNode | string;
  description?: string;
}
export const PageHeader: FC<IOwnProps> = ({ title, description }) => {
  return (
    <div className={classNames("flex", "flex-col", "gap-[24px]")}>
      <H2>{title}</H2>
      {description && (
        <BaseText className={"md:max-w-[590px]"}>{description}</BaseText>
      )}
    </div>
  );
};
