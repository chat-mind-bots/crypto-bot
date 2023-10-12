import classNames from "classnames";
import { Indicator } from "app/components/ui-kit/indicator";
import { H3 } from "app/components/ui-kit/typography/h3";
import { List } from "app/components/ui-kit/list";
import { FC, ReactNode } from "react";
import { BaseText } from "app/components/ui-kit/typography/base-text";

interface IOwnProps {
  title: string;
  description?: string[];
  num: number;
  list: ReactNode[];
  mode: "disc" | "decimal";
}

export const Step: FC<IOwnProps> = ({
  mode,
  list,
  description,
  title,
  num,
}) => {
  return (
    <div
      className={classNames(
        "flex",
        "gap-[16px]",
        "md:gap-[20px]",
        "md:flex-col",
        "flex-row",
      )}
    >
      <Indicator text={num} />
      <div
        className={classNames(
          "flex",
          "flex-col",
          "gap-[16px]",
          "md:gap-[20px]",
        )}
      >
        <H3>{title}</H3>
        {description && (
          <div>
            {description.map((d) => (
              <BaseText key={d}>{d}</BaseText>
            ))}
          </div>
        )}
        <List mode={mode} list={list} key={title} />
      </div>
    </div>
  );
};
