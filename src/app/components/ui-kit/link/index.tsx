import { FC } from "react";
import classNames from "classnames";
import NextLink from "next/link";

interface IOwnProps {
  text: string;
  title: string;
  href: string;
}

export const Link: FC<IOwnProps> = ({ text, href, title }) => {
  return (
    <NextLink
      target={"_blank"}
      title={title}
      href={href}
      className={classNames(
        "text-[18px]",
        "text-blue",
        "hover:text-deepBlue",
        "hover:underline",
        "inline-block",
      )}
    >
      {text}
    </NextLink>
  );
};
