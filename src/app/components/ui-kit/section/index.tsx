import { FC, ReactNode } from "react";
import classNames from "classnames";

interface IOwnProps {
  children: ReactNode;
  className?: string;
}

export const Section: FC<IOwnProps> = ({ children, className }) => {
  return (
    <section
      className={classNames(
        "w-full",
        "grid",
        "place-items-center",
        "px-[20px]",
        "md:gap-[120px]",
        "gap-[80px]",
        className,
      )}
    >
      <div
        className={classNames(
          "min-[1240px]:max-w-[1200px]",
          "max-w-[calc(100vw_-_40px)]",
          "w-full",
        )}
      >
        {children}
      </div>
    </section>
  );
};
