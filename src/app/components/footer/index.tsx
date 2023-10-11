import classNames from "classnames";
import { DynamicISvg } from "app/components/images/dynamic-svg";
import { Navigation } from "app/components/navigation";
import { Button } from "app/components/ui-kit/button";
import { ButtonText } from "app/components/ui-kit/typography/button-text";

export const Footer = () => {
  return (
    <footer
      className={classNames(
        "md:pt-[120px]",
        "md:pb-[40px]",
        "pt-[56px]",
        "pb-[32px]",
        "relative",
        "bg-darkBlue",
        "grid",
        "place-items-center",
      )}
    >
      <div
        className={classNames(
          "flex",
          "flex-col",
          "gap-[24px]",
          "max-w-[1240px]",
          "w-full",
        )}
      >
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
          <Navigation
            textClassName={classNames("text-white", "dark:text-white")}
          />
          <div className={classNames("flex", "gap-[8px]", "items-center")}>
            <Button
              variant={"outlined"}
              text={"Get started"}
              href={"https://google.com/get_started"}
            />
          </div>
        </div>
        <ButtonText
          className={classNames("px-[20px]", "text-white", "dark:text-white")}
        >
          ©2023 Crypto Bot
        </ButtonText>
      </div>
    </footer>
  );
};
