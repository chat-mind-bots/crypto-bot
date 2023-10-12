import { LandingSection } from "app/components/sections/landing";
import { Swiper } from "app/components/sections/swiper";
import { DescriptionSection } from "app/components/sections/description";
import { QuickStartSection } from "app/components/sections/quick-start";
import { Api } from "app/components/sections/api";
import { JoinDev } from "app/components/sections/join-dev";
import { Layout } from "app/components/layout";

export default function Home() {
  return (
    <Layout>
      <LandingSection />
      <Swiper />
      <DescriptionSection />
      <QuickStartSection />
      <Api />
      <JoinDev />
    </Layout>
  );
}
