import { FC } from "react";
import classNames from "classnames";

interface IOwnProps {
  text: string;
}

export const Tag: FC<IOwnProps> = ({ text }) => {
  return <span className={classNames("text-[14px]", "text-gray")}>{text}</span>;
};
