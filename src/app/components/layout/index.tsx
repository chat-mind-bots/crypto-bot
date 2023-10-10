import { FC, ReactNode } from "react";
import classNames from "classnames";
import { Header } from "app/components/header";

interface IOwnProps {
  children: ReactNode;
}
export const Layout: FC<IOwnProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main
        className={classNames(
          "w-full",
          "mt-[166px]",
          "md:mt-[104px]",
          "grid",
          "place-items-center",
          "md:gap-[120px]",
          "gap-[80px]",
        )}
      >
        {children}
      </main>
    </>
  );
};
