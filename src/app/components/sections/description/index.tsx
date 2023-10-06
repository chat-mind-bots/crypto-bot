import classNames from "classnames";
import { Card } from "app/components/ui-kit/card";

export const DescriptionSection = () => {
  return (
    <section
      className={classNames(
        "grid",
        "md:grid-areas-description",
        "md:grid-cols-description",
        "md:grid-rows-description",
        "grid-areas-descriptionMobile",
        "grid-cols-descriptionMobile",
        "grid-rows-descriptionMobile",
        "gap-[16px]",
        "md:gap-[20px]",
        "w-full",
      )}
    >
      <Card
        title={"Accept a wide range of cryptocurrencies"}
        description={
          "Bill any supported cryptocurrencies with asset parameter in GetInvoice method"
        }
        className={"grid-in-currency"}
      />
      <Card
        title={"One click to start"}
        description={
          "Open @CryptoBot, go to Crypto Pay and tap Create App to get API Token"
        }
        className={"grid-in-click"}
      />
      <Card
        title={"Payment statistics"}
        description={
          "Open @CryptoBot, go to Crypto Pay and My Apps, App Name to get Statistics"
        }
        className={"grid-in-stat"}
      />
      <Card
        title={"Real-time exchange rates"}
        description={
          "Request up to date currency rate with the getExchangeRates API method"
        }
        className={"grid-in-exchange"}
      />
      <Card
        title={"Send coins to users"}
        description={"Automate payouts to users with transfer API method"}
        className={"grid-in-send"}
      />
      <Card
        title={"Anonymous payments"}
        description={
          "Use allow_anonymous parameter in createInvoice method to give user an option to remain private"
        }
        className={"grid-in-payment"}
      />
    </section>
  );
};
