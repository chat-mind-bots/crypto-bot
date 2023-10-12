import Link from "next/link";
import classNames from "classnames";
import { FC } from "react";
import { ButtonText } from "app/[lang]/components/ui-kit/typography/button-text";

interface IOwnProps {
  textClassName?: string;
}

export const Navigation: FC<IOwnProps> = ({ textClassName }) => {
  return (
    <nav className={classNames("hidden", "md:block")}>
      <ul className={classNames("md:flex", "gap-[32px]")}>
        <li>
          <Link href={"#cases"}>
            <ButtonText className={classNames(textClassName)}>
              Use cases
            </ButtonText>
          </Link>
        </li>
        <li>
          <Link href={"#features"}>
            <ButtonText className={classNames(textClassName)}>
              Features
            </ButtonText>
          </Link>
        </li>
        <li>
          <Link href={"#how-to-start"}>
            <ButtonText className={classNames(textClassName)}>
              How to start
            </ButtonText>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
