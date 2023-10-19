import { Section } from "app/components/ui-kit/section";
import { DynamicPng } from "app/components/images/dynamic-png";
import classNames from "classnames";
import { H3 } from "app/components/ui-kit/typography/h3";
import { BaseText } from "app/components/ui-kit/typography/base-text";
import { Button } from "app/components/ui-kit/button";

export const Api = () => {
  return (
    <Section>
      <div
        className={classNames(
          "relative",
          "w-full",
          "md:h-[550px]",
          "h-[514px]",
          "rounded-[24px]",
          "overflow-hidden",
          "bg-[linear-gradient(220deg,_#9FCCFA_-32.5%,_#0974F1_147.07%)]",
          "md:bg-[linear-gradient(233deg,_#9FCCFA_-20.48%,_#0974F1_97.38%)]",
        )}
      >
        <div
          className={classNames(
            "absolute",
            "top-0",
            "right-0",
            "hidden",
            "h-full",
            "md:block",
            "hidden",
            "md:block",
          )}
        >
          <DynamicPng
            name={"crypto-api-desktop"}
            alt={"crypto-api-desktop image"}
            width={712}
            height={550}
            className={classNames("w-auto", "h-full")}
          />
        </div>
        <div
          className={classNames(
            "absolute",
            "top-0",
            "h-full",
            "min-[376px]:hidden",
          )}
        >
          <DynamicPng
            name={"crypto-api-mobile"}
            alt={"crypto-api-mobile image"}
            width={712}
            height={550}
            // sizes={"(max-width: 768px) 100%"}
            className={classNames("w-auto", "h-full")}
          />
        </div>
        <div
          className={classNames(
            "relative",
            "z-10",
            "h-full",
            "flex",
            "flex-col",
            "md:gap-[32px]",
            "gap-[24px]",
            "md:justify-center",
            "justify-end",
            "md:p-[80px]",
            "p-[32px]",
          )}
        >
          <H3 className={classNames("text-white", "dark:text-white")}>
            Crypto Pay API
          </H3>
          <BaseText
            className={classNames(
              "max-w-[408px]",
              "text-white",
              "dark:text-white",
            )}
          >
            Explore available methods and types and integrate them in any
            programming language.
          </BaseText>
          <Button
            variant={"outlined"}
            text={"Open API Docs"}
            href={"https://google.com/open_api_docks"}
          />
        </div>
      </div>
    </Section>
  );
};
