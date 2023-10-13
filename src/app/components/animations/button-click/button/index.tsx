"use client";
import React, { useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";
import classNames from "classnames";
import { ButtonText } from "app/components/ui-kit/typography/button-text";

interface AnimatedButtonProps {
  isFirstTransitionComplete: boolean;
}
const AnimatedButton = ({ isFirstTransitionComplete }: AnimatedButtonProps) => {
  const colors = [
    "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(233deg, #9FCCFA -20.48%, #0974F1 97.38%)",
    "linear-gradient(233deg, #9FCCFA -20.48%, #0974F1 97.38%), linear-gradient(240deg, rgba(41, 126, 226, 0.12) 3.57%, rgba(24, 97, 182, 0.12) 86.24%)",
  ];
  const [springs, api] = useSpring(() => ({
    loop: true,
    background: colors[0],
    reverse: true,
  }));

  const handleClick = () => {
    api.start({
      delay: 200,
      from: {
        background: colors[1],
      },
      to: {
        background: colors[0],
      },
    });
  };

  const onStart = () => {
    handleClick();
  };

  useEffect(() => {
    if (isFirstTransitionComplete) {
      onStart();
    }
  }, [isFirstTransitionComplete]);

  return (
    <div>
      <animated.div
        className={classNames("flex", "justify-center", "items-center")}
        onClick={handleClick}
        style={{
          width: 221,
          height: 62,
          borderRadius: "17px",
          ...springs,
        }}
      >
        <ButtonText className={"text-white"}>Create App</ButtonText>
      </animated.div>
    </div>
  );
};

export default AnimatedButton;
