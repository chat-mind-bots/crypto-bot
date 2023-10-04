import { Layout } from "app/components/ui-kit/layout";
import { LandingSection } from "app/components/sections/landing";
import { DescriptionSection } from "app/components/sections/description";

export default function MainView() {
  return (
    <Layout>
      <LandingSection />
      <DescriptionSection />
    </Layout>
  );
}
