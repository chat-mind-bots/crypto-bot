"use client";
import classNames from "classnames";
import { FC, useEffect, useState } from "react";
import { generateArrayNumbers } from "utils/generate-array-numbers";
import { Stick } from "app/components/swiper/navigation/stick";
import { useSwiper } from "swiper/react";

interface IOwnProps {
  slidesCount: number;
}
export const SwiperNavigation: FC<IOwnProps> = ({ slidesCount }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiper = useSwiper();

  useEffect(() => {
    swiper?.on("slideChange", (swipe) => {
      setActiveIndex(swipe.activeIndex);
    });
  }, [swiper]);

  const setSwiperStep = (step: number) => {
    swiper.slideTo(step);
  };

  const steps = generateArrayNumbers(slidesCount);

  return (
    <div
      className={classNames(
        "absolute",
        "md:top-0",
        "md:right-0",
        "md:bottom-auto",
        "bottom-0",
        "md:h-full",
        "w-full",
        "md:w-auto",
        "z-10",
        "flex",
        "md:flex-col",
        "justify-center",
        "gap-[12px]",
      )}
    >
      {steps.map((step) => (
        <Stick
          activeIndex={activeIndex}
          index={step}
          onClick={() => setSwiperStep(step)}
          key={`pagination-step-${step}`}
        />
      ))}
    </div>
  );
};
