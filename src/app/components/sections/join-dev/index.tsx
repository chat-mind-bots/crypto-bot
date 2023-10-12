import { Section } from "app/components/ui-kit/section";
import { PageHeader } from "app/components/ui-kit/page-header";
import classNames from "classnames";
import { Button } from "app/components/ui-kit/button";
import Avatar from "app/components/ui-kit/avatar";

const devCommunities: Array<{
  iconName: string;
  altName: string;
  description: string;
}> = [
  {
    iconName: "js-logo",
    altName: "crypto pay api",
    description: "crypto-pay-api-js",
  },
  { iconName: "dot-net-logo", altName: "CryptoPay", description: "CryptoPay" },
  {
    iconName: "php-logo",
    altName: "crypto-pay-api",
    description: "crypto-pay-api",
  },
  {
    iconName: "python-logo",
    altName: "aiocryptopay",
    description: "aiocryptopay",
  },
  {
    iconName: "go-logo",
    altName: "cryptobot-sdk-golang",
    description: "cryptobot-sdk-golang",
  },
];
export const JoinDev = () => {
  return (
    <Section>
      <div
        className={classNames(
          "flex",
          "flex-col",
          // eslint-disable-next-line sonarjs/no-duplicate-string
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
        <div
          className={classNames(
            "flex",
            "md:justify-between",
            "gap-[24px]",
            "flex-wrap",
            "items-center",
          )}
        >
          {devCommunities.map(({ iconName, altName, description }) => {
            return (
              <Avatar
                key={`dev-community--${iconName}`}
                iconName={iconName}
                altName={altName}
                description={description}
                className={classNames("flex", "flex-col", "items-center")}
              />
            );
          })}
        </div>
        <Button
          variant={"primary"}
          text={"Open Devs chat"}
          href={"https://google.com/open_dev_chat"}
        />
      </div>
    </Section>
  );
};
