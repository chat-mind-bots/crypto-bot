import { FC, ReactNode } from "react";
import { DescriptionText } from "app/components/ui-kit/typography/description-text";

interface IOwnProps {
  children: ReactNode;
}

export const Number: FC<IOwnProps> = ({ children }) => {
  return <DescriptionText>{children}</DescriptionText>;
};
