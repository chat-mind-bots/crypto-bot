"use client";
import { Pagination, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Description,
  ISliderDescriptionProps,
} from "app/components/swiper/description";
import classNames from "classnames";
import { SwiperNavigation } from "app/components/swiper/navigation";
import { FC } from "react";
import { Content } from "app/components/swiper/content";

const slides: ISliderDescriptionProps[] = [
  {
    title: (
      <>
        <span className="text-blue">Instant</span>
        <br className={classNames("hidden", "lg:block")} />{" "}
        <span className="text-blue">Auto Sales:</span>
        <br className={classNames("hidden", "lg:block")} /> Boost conversion
      </>
    ),
    description:
      "Immediately deliver digital products and services to your users.",
    imageName: "instant-sales",
  },
  {
    title: (
      <>
        <span className="text-blue">Channels</span>
        <br className={classNames("hidden", "lg:block")} />{" "}
        <span className="text-blue">integration: </span>
        <br className={classNames("hidden", "lg:block")} /> Seamless access
      </>
    ),
    description: "Automatically unlock exclusive content to your users.",
    imageName: "channel-integration",
  },
  {
    title: (
      <>
        <span className="text-blue">Endless</span>
        <br className={classNames("hidden", "lg:block")} />{" "}
        <span className="text-blue">customization: </span>
        <br className={classNames("hidden", "lg:block")} /> with Webhooks
      </>
    ),
    description:
      "Receive successful payment notifications in real-time. Integrate to any scenario of your service.",
    imageName: "endless-customization",
  },
];

interface IOwnProps {
  isMobileView: boolean;
}

export const SwiperComponent: FC<IOwnProps> = ({ isMobileView }) => {
  return (
    <div className={classNames("lg:h-[488px]", "h-[718px]")}>
      <Swiper
        direction={isMobileView ? "horizontal" : "vertical"}
        modules={[Pagination, Mousewheel]}
        mousewheel={true}
        className={classNames(
          "lg:h-[488px]",
          "h-[718px]",
          "w-auto",
          "relative",
        )}
        slidesPerView={1}
      >
        <Content />
        {slides.map((slide, index) => (
          <SwiperSlide
            key={`swiper-slide-${index}`}
            className={classNames("relative", "flex", "justify-center")}
          >
            <Description {...slide} />
          </SwiperSlide>
        ))}
        <SwiperNavigation slidesCount={slides.length - 1} />
      </Swiper>
    </div>
  );
};
