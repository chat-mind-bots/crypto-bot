import { DynamicISvg } from "app/[lang]/components/images/dynamic-svg";
import classNames from "classnames";
import { Navigation } from "app/[lang]/components/navigation";
import { ThemeSwitcher } from "app/[lang]/components/theme-switcher";
import { Button } from "app/[lang]/components/ui-kit/button";

export const Header = () => {
  return (
    <header
      className={classNames(
        "h-[110px]",
        "md:h-[144px]",
        "fixed",
        "pt-[44px]",
        "md:pt-[40px]",
        "top-0",
        "bg-white",
        "dark:bg-dark",
        "w-full",
        "grid",
        "place-items-center",
        "z-50",
        "md:pb-[40px]",
      )}
    >
      <div className={classNames("max-w-[1240px]", "w-full")}>
        <div
          className={classNames(
            "flex",
            "justify-between",
            "items-center",
            "px-[20px]",
          )}
        >
          <div
            className={classNames(
              "w-[46px]",
              "md:w-[64px]",
              "h-[46px]",
              "md:h-[64px]",
              "rounded-[16px]",
              "overflow-hidden",
              "flex",
              "justify-between",
            )}
          >
            <DynamicISvg
              alt={"Crypto bot logo"}
              height={64}
              width={64}
              name={"crypto-bot"}
              priority={true}
              sizes={"(max-width: 768px) 100%"}
            />
          </div>
          <Navigation />
          <div className={classNames("flex", "gap-[8px]", "items-center")}>
            <ThemeSwitcher />
            <Button
              variant={"secondary"}
              text={"Get started"}
              href={"https://google.com/get_started"}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
