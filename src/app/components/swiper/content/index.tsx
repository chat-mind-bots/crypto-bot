import {
  GradientCard,
  GradientCardType,
} from "app/components/ui-kit/gradient-card";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

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
        "md:w-[488px]",
        "md:h-full",
        "h-[50%]",
      )}
    >
      <GradientCard
        type={getGradientTypeByIndex(activeIndex)}
        // className={classNames("h-[50%]", "h-full")}
      >
        card
      </GradientCard>
    </div>
  );
};
