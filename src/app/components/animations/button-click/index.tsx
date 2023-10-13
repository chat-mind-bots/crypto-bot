"use client";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { DynamicISvg } from "app/components/images/dynamic-svg";
import classNames from "classnames";
import AnimatedButton from "app/components/animations/button-click/button";

const ButtonClick = () => {
  const [firstTransitionComplete, setFirstTransitionComplete] = useState(false);
  const handleFirstTransitionComplete = () => {
    setFirstTransitionComplete(true);
  };
  const handleFirstTransitionEnded = () => {
    setFirstTransitionComplete(false);
  };

  const [springs, api] = useSpring(() => ({
    loop: true,
    x: 0,
    y: 0,
    reverse: true,
  }));
  const handleClick = () => {
    api.start({
      from: { x: 0, y: 0 },
      to: [
        {
          x: -20,
          y: -20,
          onStart: () => {
            handleFirstTransitionComplete();
          },
        },
        {
          x: 0,
          y: 0,
          onRest: () => {
            handleFirstTransitionEnded();
          },
        },
      ],
    });
  };

  const onStart = () => {
    handleClick();
  };

  useEffect(() => {
    const interval = setInterval(onStart, 2500);
    return () => {
      clearInterval(interval);
    };
  }, [onStart]);

  return (
    <div className={classNames("relative", "mb-[40px]")}>
      <AnimatedButton isFirstTransitionComplete={firstTransitionComplete} />
      <animated.div
        style={{
          ...springs,
        }}
      >
        <div className={"relative"}>
          <DynamicISvg
            alt={"cursor"}
            width={45}
            name={"cursor"}
            height={48}
            className={classNames("absolute", "right-[-50px]")}
          />
        </div>
      </animated.div>
    </div>
  );
};

export default ButtonClick;
