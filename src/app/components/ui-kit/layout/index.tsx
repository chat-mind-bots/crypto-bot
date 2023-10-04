import { FC, ReactNode } from "react";
import classNames from "classnames";

interface IOwnProps {
  children: ReactNode;
}
export const Layout: FC<IOwnProps> = ({ children }) => {
  return (
    <main className={classNames("max-w-[1200px]", "w-full")}>{children}</main>
  );
};
