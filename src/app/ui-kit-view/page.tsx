import classNames from "classnames";
import { Button } from "app/components/ui-kit/button";
import { Link } from "app/components/ui-kit/link";
import { Tag } from "app/components/ui-kit/tag";
import { H1 } from "app/components/ui-kit/Typography/h1";
import { H2 } from "app/components/ui-kit/Typography/h2";
import { H3 } from "app/components/ui-kit/Typography/h3";
import { H4 } from "app/components/ui-kit/Typography/h4";
import { BaseText } from "app/components/ui-kit/Typography/base-text";
import { DescriptionText } from "app/components/ui-kit/Typography/description-text";
import { Layout } from "app/components/layout";
import { ButtonText } from "app/components/ui-kit/Typography/button-text";
import { Card } from "app/components/ui-kit/card";

export default function UiKit() {
  return (
    <Layout>
      <div
        className={classNames("flex", "flex-col", "min-h-screen", "gap-2.5")}
      >
        <Button variant={"primary"} text={"Get started 1"} />
        <Button variant={"secondary"} text={"Get started"} />
        <Button variant={"outlined"} text={"Get started"} />
        <Tag text={"ETH"} />
        <Link text={"Link"} href={"https://google.com"} title={"Google link"} />
        <H1>H1 header</H1>
        <H2>H2 header</H2>
        <H3>H3 header</H3>
        <H4>H4 header</H4>
        <BaseText>Base text</BaseText>
        <ButtonText>Button text</ButtonText>
        <DescriptionText>DESCRIPTION</DescriptionText>
        <Card
          title={"Accept a wide range of cryptocurrencies"}
          description={
            <span>
              Bill any supported cryptocurrencies with asset parameter in{" "}
              <Link
                text={"GetInvoice"}
                title={"Get invoice method"}
                href={"https://google.com"}
              />{" "}
              method
            </span>
          }
        />
      </div>
    </Layout>
  );
}
