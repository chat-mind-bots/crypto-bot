import { Section } from "app/[lang]/components/ui-kit/section";
import { PageHeader } from "app/[lang]/components/ui-kit/page-header";
import classNames from "classnames";
import { Button } from "app/[lang]/components/ui-kit/button";

export const JoinDev = () => {
  return (
    <Section>
      <div
        className={classNames(
          "flex",
          "flex-col",
          "items-center",
          "gap-[24px]",
          "md:gap-[40px]",
          "md:mb-[80px]",
          "mb-[40px]",
        )}
      >
        <PageHeader
          title={"Join dev community"}
          description={`Connect with bot developers and explore the possibilities
        our crypto payments service unlocks.`}
        />
        <Button
          variant={"primary"}
          text={"Open Devs chat"}
          href={"https://google.com/open_dev_chat"}
        />
      </div>
    </Section>
  );
};
