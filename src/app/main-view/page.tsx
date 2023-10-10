import { Layout } from "app/components/layout";
import { LandingSection } from "app/components/sections/landing";
import { DescriptionSection } from "app/components/sections/description";
import { QuickStartSection } from "app/components/sections/quick-start";
import { Api } from "app/components/sections/api";
import { JoinDev } from "app/components/sections/join-dev";

export default function MainView() {
  return (
    <Layout>
      <LandingSection />
      <DescriptionSection />
      <QuickStartSection />
      <Api />
      <JoinDev />
    </Layout>
  );
}
