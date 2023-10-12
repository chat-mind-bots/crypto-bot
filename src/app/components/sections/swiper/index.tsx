import classNames from "classnames";
import { Section } from "app/components/ui-kit/section";
import { SwiperComponent } from "app/components/swiper";
import { headers } from "next/headers";

export const Swiper = () => {
  const headersList = headers();
  const userAgent = headersList.get("user-agent");
  const isMobileView = userAgent!.match(
    /Android|BlackBerry|iPhone|IPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
  );

  return (
    <Section
      className={classNames("bg-darkBlue", "dark:bg-bgDark", "md:py-[196px]")}
      id={"cases"}
    >
      <SwiperComponent isMobileView={!!isMobileView} />
    </Section>
  );
};
