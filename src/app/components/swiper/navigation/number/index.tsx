import { FC, ReactNode } from "react";
import { DescriptionText } from "app/components/ui-kit/typography/description-text";
import classNames from "classnames";

interface IOwnProps {
  children: ReactNode;
}

export const Number: FC<IOwnProps> = ({ children }) => {
  return (
    <DescriptionText className={classNames("text-white", "dark:text-white")}>
      {children}
    </DescriptionText>
  );
};
