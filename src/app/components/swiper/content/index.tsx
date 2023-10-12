import {
  GradientCard,
  GradientCardType,
} from "app/components/ui-kit/gradient-card";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { DynamicImage } from "app/components/images/dynamic-image";

const slides = [
  {
    imageName: "instant-sales",
  },
  {
    imageName: "channel-integration",
  },
  {
    imageName: "endless-customization",
  },
];

const getGradientTypeByIndex = (num: number): GradientCardType => {
  switch (num) {
    case 0:
      return "pink";
    case 1:
      return "yellow";
    case 2:
      return "blue-swiper";
    default:
      return "pink";
  }
};
export const Content = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiper = useSwiper();

  useEffect(() => {
    swiper?.on("slideChange", (swipe) => {
      setActiveIndex(swipe.activeIndex);
    });
  }, [swiper]);

  return (
    <div
      className={classNames(
        "absolute",
        "top-0",
        "left-0",
        "w-full",
        "lg:w-[488px]",
        "lg:h-full",
        "h-[50%]",
      )}
    >
      <GradientCard
        type={getGradientTypeByIndex(activeIndex)}
        className={classNames("flex", "items-center", "justify-center")}
      >
        <DynamicImage
          name={slides[activeIndex].imageName}
          ext={"png"}
          className={classNames("absolute")}
          alt={"Telegram message"}
          width={400}
          height={400}
        />
      </GradientCard>
    </div>
  );
};
