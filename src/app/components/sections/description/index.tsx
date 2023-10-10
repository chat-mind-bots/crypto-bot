import classNames from "classnames";
import { Card } from "app/components/ui-kit/card";
import { Link } from "app/components/ui-kit/link";
import Exchange from "app/components/animations/exchange";
import Avatar from "app/components/ui-kit/avatar";

export const DescriptionSection = () => {
  const coins: Array<{
    iconName: string;
    altName: string;
    description: string;
  }> = [
    { iconName: "eth", altName: "ETH logo", description: "ETH" },
    { iconName: "usdt", altName: "USDT logo", description: "USDT" },
    { iconName: "ton", altName: "TON logo", description: "TON" },
    { iconName: "btc", altName: "BTC logo", description: "BTC" },
    { iconName: "trx", altName: "TRX logo", description: "TRX" },
    { iconName: "ltc", altName: "LTC logo", description: "LTC" },
    { iconName: "usdc", altName: "USDC logo", description: "USDC" },
    { iconName: "bnb", altName: "BNB logo", description: "BNB" },
  ];
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
          <>
            Bill any supported cryptocurrencies with asset parameter in{" "}
            <Link
              text={"GetInvoice"}
              title={"Get invoice method"}
              href={"https://google.com/"}
            />{" "}
            method
          </>
        }
        bottomContent={
          <div
            className={classNames("flex", "justify-between", "sm:flex-wrap")}
          >
            {coins.map(({ iconName, altName, description }) => (
              <Avatar
                iconName={iconName}
                description={description}
                key={`description--${iconName}`}
                altName={altName}
                isHoverable
              />
            ))}
          </div>
        }
        className={classNames(
          "grid-in-currency",
          "flex-col-reverse",
          "md:flex-col",
        )}
      />
      <Card
        title={"One click to start"}
        description={
          <>
            Open{" "}
            <Link
              text={"@CryptoBot"}
              title={"Cryptobot open link"}
              href={"https://t.me/CryptoBot"}
            />
            , go to Crypto Pay and tap Create App to get API Token
          </>
        }
        className={"grid-in-click"}
      />
      <Card
        title={"Payment statistics"}
        description={
          <>
            Open{" "}
            <Link
              text={"@CryptoBot"}
              title={"Cryptobot open link"}
              href={"https://t.me/CryptoBot"}
            />
            , go to{" "}
            <Link
              text={"Crypto Pay"}
              title={"Crypto Pay"}
              href={"https://google.com"}
            />{" "}
            and My Apps, App Name to get Statistics
          </>
        }
        className={"grid-in-stat"}
      />
      <Card
        title={"Real-time exchange rates"}
        description={
          <>
            Request up to date currency rate with the{" "}
            <Link
              text={"getExchangeRates"}
              title={"Get exchange rates method link"}
              href={"https://google.com"}
            />{" "}
            API method
          </>
        }
        bottomContent={<Exchange />}
        className={"grid-in-exchange"}
      />
      <Card
        title={"Send coins to users"}
        description={
          <>
            Automate payouts to users with{" "}
            <Link
              text={"transfer"}
              title={"Transfer link"}
              href={"https://google.com/transfer"}
            />{" "}
            API method
          </>
        }
        className={"grid-in-send"}
      />
      <Card
        title={"Anonymous payments"}
        description={
          <>
            Use allow_anonymous parameter in{" "}
            <Link
              text={"createInvoice"}
              title={"CreateInvocie link"}
              href={"https://google.com/transfer"}
            />{" "}
            method to give user an option to remain private
          </>
        }
        className={"grid-in-payment"}
      />
    </section>
  );
};
