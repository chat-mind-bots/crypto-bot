import { H1 } from "app/components/ui-kit/typography/h1";
import { BaseText } from "app/components/ui-kit/typography/base-text";
import { Button } from "app/components/ui-kit/button";
import { DynamicPng } from "app/components/images/dynamic-png";
import { Section } from "app/components/ui-kit/section";
import classNames from "classnames";

export const LandingSection = () => {
  return (
    <Section>
      <div
        className={classNames(
          "flex",
          "md:flex-row",
          "flex-col",
          "md:justify-between",
          "items-center",
        )}
      >
        <div
          className={classNames(
            "flex",
            "flex-col",
            "md:gap-[32px]",
            "gap-[24px]",
          )}
        >
          <H1 className={classNames("text-center", "md:text-left")}>
            Crypto payments
            <br className={classNames("hidden", "md:block")} /> for{" "}
            <span className="text-blue">telegram bots</span>
          </H1>
          <div
            className={classNames(
              "flex",
              "flex-col",
              "md:gap-[32px]",
              "gap-[12px]",
              "items-center",
              "md:items-start",
            )}
          >
            <BaseText className={classNames("text-center", "md:text-left")}>
              Seamlessly accept crypto payment
              <br />
              in your Telegram bots and services.
            </BaseText>
            <Button
              variant={"primary"}
              text={"Get started "}
              href={"https://google.com/get_started"}
            />
          </div>
        </div>

        <div
          className={classNames(
            "md:w-[488px]",
            "w-full",
            "md:h-full",
            "h-[640px]",
          )}
        >
          <DynamicPng
            name={"phone-mock"}
            width={336}
            height={693}
            sizes="(max-width: 768px) 100%"
            alt={"Phone"}
            priority={true}
          />
        </div>
      </div>
    </Section>
  );
};
