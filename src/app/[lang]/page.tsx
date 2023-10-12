import { LandingSection } from "app/[lang]/components/sections/landing";
import { Swiper } from "app/[lang]/components/sections/swiper";
import { DescriptionSection } from "app/[lang]/components/sections/description";
import { QuickStartSection } from "app/[lang]/components/sections/quick-start";
import { Api } from "app/[lang]/components/sections/api";
import { JoinDev } from "app/[lang]/components/sections/join-dev";
import { Layout } from "app/[lang]/components/layout";

export default async function Home() {
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
