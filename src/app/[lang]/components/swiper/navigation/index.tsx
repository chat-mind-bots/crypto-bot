"use client";
import classNames from "classnames";
import { FC, useEffect, useState } from "react";
import { generateArrayNumbers } from "utils/generate-array-numbers";
import { Stick } from "app/[lang]/components/swiper/navigation/stick";
import { useSwiper } from "swiper/react";
import { Number } from "app/[lang]/components/swiper/navigation/number";

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
        "lg:top-0",
        "lg:right-0",
        "lg:bottom-auto",
        "bottom-0",
        "lg:h-full",
        "w-full",
        "lg:w-auto",
        "z-10",
        "flex",
        "lg:flex-col",
        "items-center",
        "justify-center",
        "gap-[12px]",
      )}
    >
      <Number>1</Number>
      {steps.map((step) => (
        <Stick
          activeIndex={activeIndex}
          index={step}
          onClick={() => setSwiperStep(step)}
          key={`pagination-step-${step}`}
        />
      ))}
      <Number>{slidesCount + 1}</Number>
    </div>
  );
};
