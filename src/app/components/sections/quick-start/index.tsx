import { PageHeader } from "app/components/ui-kit/page-header";
import { GradientCard } from "app/components/ui-kit/gradient-card";
import { DoubleCard } from "app/components/ui-kit/double-card";
import classNames from "classnames";

export const QuickStartSection = () => {
  return (
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
        firstContent={<div>Crypto Pay API Request</div>}
        secondContent={<GradientCard type={"orange"} />}
      />
      <DoubleCard
        firstContent={<div>Getting updates</div>}
        secondContent={<GradientCard type={"blue"} />}
      />
    </section>
  );
};
