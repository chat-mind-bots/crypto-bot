import { H1 } from "app/components/ui-kit/Typography/h1";
import { BaseText } from "app/components/ui-kit/Typography/base-text";
import { Button } from "app/components/ui-kit/button";
import { DynamicPng } from "app/components/images/dynamic-png";

export const LandingSection = () => {
  return (
    <section>
      <H1>
        Crypto payments for <span className="text-blue">telegram bots</span>
      </H1>
      <BaseText>
        Seamlessly accept crypto payment in your Telegram bots and services.
      </BaseText>
      <Button variant={"primary"} text={"Get started "} />
      <BaseText>Popular bots use Crypto Pay</BaseText>

      <DynamicPng
        name={"phone-mock"}
        width={336}
        height={693}
        sizes="(max-width: 768px) 100%"
        alt={"Phone"}
        priority={true}
      />
    </section>
  );
};
