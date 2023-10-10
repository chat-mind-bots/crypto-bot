import { PageHeader } from "app/components/ui-kit/page-header";
import { GradientCard } from "app/components/ui-kit/gradient-card";
import { DoubleCard } from "app/components/ui-kit/double-card";
import classNames from "classnames";
import { Section } from "app/components/ui-kit/section";

export const QuickStartSection = () => {
  return (
    <Section className={classNames("bg-bgLight", "dark:bg-bgDark")}>
      <section className={classNames("grid", "gap-[24px]", "md:gap-[40px]")}>
        <PageHeader
          title={
            <>
              Quick start using <span className="text-blue">Crypto Pay</span>
            </>
          }
        />
        <DoubleCard
          firstContent={<div>Authorizing your app</div>}
          secondContent={<GradientCard type={"violet"} />}
        />
        <DoubleCard
          firstContent={<GradientCard type={"orange"} />}
          secondContent={<div>Crypto Pay API Request</div>}
        />
        <DoubleCard
          firstContent={<div>Getting updates</div>}
          secondContent={<GradientCard type={"blue"} />}
        />
      </section>
    </Section>
  );
};
