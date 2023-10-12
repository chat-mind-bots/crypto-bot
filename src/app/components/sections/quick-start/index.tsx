import { PageHeader } from "app/components/ui-kit/page-header";
import { GradientCard } from "app/components/ui-kit/gradient-card";
import { DoubleCard } from "app/components/ui-kit/double-card";
import classNames from "classnames";
import { Section } from "app/components/ui-kit/section";
import { Step } from "app/components/ui-kit/step";
import { BaseText } from "app/components/ui-kit/typography/base-text";
import { Link } from "app/components/ui-kit/link";
import { DynamicImage } from "app/components/images/dynamic-image";

export const QuickStartSection = () => {
  const styles = [
    "content-center",
    "items-center",
    "align-middle",
    "justify-center",
  ];
  return (
    <Section
      className={classNames("bg-bgLight", "dark:bg-bgDark")}
      id={"how-to-start"}
    >
      <div className={classNames("grid", "gap-[24px]", "md:gap-[40px]")}>
        <PageHeader
          title={
            <>
              Quick start using <span className="text-blue">Crypto Pay</span>
            </>
          }
        />
        <DoubleCard
          firstContent={
            <Step
              title={"Authorizing your app"}
              num={1}
              mode={"decimal"}
              list={[
                <BaseText key={`list-text-Authorizing-your-app-1`}>
                  Open{" "}
                  <Link
                    text={"@CryptoBot"}
                    title={"Cryptobot open link"}
                    href={"https://t.me/CryptoBot"}
                  />
                </BaseText>,
                <BaseText key={`list-text-Authorizing-your-app-1`}>
                  Go to{" "}
                  <Link
                    text={"Crypto Pay"}
                    title={"Crypto Pay link"}
                    href={"https://t.me/CryptoBot"}
                  />
                </BaseText>,
                <BaseText key={`list-text-Authorizing-your-app-1`}>
                  Tap{" "}
                  <Link
                    text={"Create App"}
                    title={"Create App link"}
                    href={"https://google.com"}
                  />
                </BaseText>,
                <BaseText key={`list-text-Authorizing-your-app-1`}>
                  Get{" "}
                  <Link
                    text={"API Token"}
                    title={"API Token link"}
                    href={"https://google.com"}
                  />
                </BaseText>,
              ]}
            />
          }
          secondContent={
            <GradientCard
              type={"violet"}
              className={classNames("flex", ...styles)}
            >
              <DynamicImage
                width={392}
                height={253}
                name={"authorizing"}
                alt={"Telegram message"}
                ext={"png"}
              />
            </GradientCard>
          }
        />
        <DoubleCard
          firstContent={
            <Step
              title={"Crypto Pay API Request"}
              description={[
                "Requests are only served over HTTPS",
                "To pass parameters use:",
              ]}
              num={2}
              mode={"disc"}
              list={[
                <BaseText key={`list-text-Authorizing-your-app-1`}>
                  <Link
                    text={"getInvoices"}
                    title={"getInvoices link"}
                    href={"https://google.com/getInvoices"}
                  />{" "}
                  method to get a list of created invoices.
                </BaseText>,
                <BaseText key={`list-text-Authorizing-your-app-1`}>
                  <Link
                    text={"Webhooks"}
                    title={"Webhooks link"}
                    href={"https://google.com/Webhooks"}
                  />{" "}
                  to receive updates in realtime.
                </BaseText>,
              ]}
            />
          }
          secondContent={
            <GradientCard
              type={"orange"}
              className={classNames("flex", ...styles)}
            >
              <DynamicImage
                width={392}
                height={253}
                name={"api-request"}
                alt={"api"}
                ext={"png"}
              />
            </GradientCard>
          }
          className={"md:flex-row-reverse"}
          isReverse={true}
        />
        <DoubleCard
          firstContent={
            <Step
              title={"Getting updates"}
              description={[
                "There are two ways of receiving updates for your app:",
              ]}
              num={3}
              mode={"disc"}
              list={[
                <Link
                  text={"URL query string"}
                  title={"URL query string link"}
                  href={"https://google.com/URL_query_string"}
                  key={"list-link-URL query string"}
                />,
                <Link
                  text={"application/json"}
                  title={"application/json link"}
                  href={"https://google.com/application_json "}
                  key={"list-link-application/json"}
                />,
                <Link
                  text={"application/x-www-form-urlencoded"}
                  title={"application/x-www-form-urlencoded link"}
                  href={"https://google.com/application_x-www-form-urlencoded"}
                  key={"list-link-application/x-www-form-urlencoded"}
                />,
                <Link
                  text={"multipart/form-data"}
                  title={"multipart/form-data link"}
                  href={"https://google.com/multipart_form-data"}
                  key={"list-link-multipart/form-data"}
                />,
              ]}
            />
          }
          secondContent={
            <GradientCard
              type={"blue"}
              className={classNames("flex", ...styles)}
            >
              <DynamicImage
                width={392}
                height={253}
                name={"requests"}
                alt={"Telegram message"}
                ext={"png"}
              />
            </GradientCard>
          }
        />
      </div>
    </Section>
  );
};
