import { FC, ReactNode } from "react";
import classNames from "classnames";
import { Header } from "app/components/header";
import { Footer } from "app/components/footer";

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
          "mt-[150px]",
          "md:mt-[144px]",
          "grid",
          "place-items-center",
          "md:gap-[120px]",
          "gap-[80px]",
        )}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
