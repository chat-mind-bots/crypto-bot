"use client";
import React, { useEffect } from "react";
import { DynamicImage } from "app/components/images/dynamic-image";
import classNames from "classnames";
import { animated, useSpring } from "@react-spring/web";
import IosMessage from "app/components/ui-kit/ios-message";

const botMessages: Array<{
  description: string;
  secondaryDescription?: string;
}> = [
  {
    description: "You received 2300 TON ($1000) from @CryptoBot #A820",
    secondaryDescription: "We appreciate your interest",
  },
  {
    description: "You received 3448 TON ($5000) from @CryptoBot #A777",
    secondaryDescription: "Design contest award",
  },
  {
    description: "You recived 8478 TON ($10000) from @CryptoBot #A878",
    secondaryDescription: "Congrats! You are a winner ",
  },
];

const SendCoin = () => {
  const sizes = "(max-width: 768px) 100%";

  const initial = {
    opacity: 1,
    y: 0,
    zIndex: 2,
  };

  const hidden = {
    y: -20,
    scale: 0.9,
    opacity: 0.2,
    zIndex: 0,
  };

  const end = {
    display: "block",
    y: 20,
    opacity: 0,
    zIndex: -1,
  };

  const [firstBlock, apiFirstBlock] = useSpring(() => ({
    from: { ...initial },
    config: { duration: 500 },
  }));
  const [secondBlock, apiSecondBlock] = useSpring(() => ({
    from: { ...end },
    config: { duration: 500 },
  }));
  const [thirdBlock, apiThirdBlock] = useSpring(() => ({
    from: { ...end },
    config: { duration: 500 },
  }));

  const styles = [firstBlock, secondBlock, thirdBlock];

  const firstTick = () => {
    apiFirstBlock.start({ to: { ...hidden } });
    apiSecondBlock.start({ to: { ...initial } });
    apiThirdBlock.start({ to: { ...end } });
    secondTick();
  };

  const secondTick = () => {
    apiFirstBlock.start({ to: { ...end }, delay: 2000 });
    apiSecondBlock.start({ to: { ...hidden }, delay: 2000 });
    apiThirdBlock.start({ to: { ...initial }, delay: 2000 });
    thirdTick();
  };

  const thirdTick = () => {
    apiFirstBlock.start({ to: { ...initial }, delay: 4000 });
    apiSecondBlock.start({ to: { ...end }, delay: 4000 });
    apiThirdBlock.start({ to: { ...hidden }, delay: 4000 });
  };

  useEffect(() => {
    const interval = setInterval(firstTick, 6000);
    return () => {
      clearInterval(interval);
    };
  }, [firstTick]);
  return (
    <div
      className={classNames(
        "relative",
        "flex",
        "justify-center",
        "flex-col",
        "w-full",
        "items-center",
      )}
    >
      <DynamicImage
        height={400}
        width={474}
        ext={"png"}
        sizes={sizes}
        alt={"mockup"}
        className={classNames(
          "w-full",
          "top-0",
          "mt-[20px]",
          "md:mt-0",
          // "md:pl-[56px]",
          // "md:pr-[56px]",
        )}
        name={"half-mockup"}
      />
      <div
        className={classNames("absolute", "flex", "w-full", "justify-center")}
      >
        {botMessages.map((message, index) => (
          <animated.div
            key={message.description}
            className={classNames(
              "absolute",
              "bottom-[0]",
              "w-full",
              "bottom-0",
              "ml-[56px]",
              "mr-[56px]",
              "min-w-[212px]",
              "max-w-[398px]",
              "min-h-[76px]",
              "max-h-[125px]",
              "rounded-[20px]",
              "bg-messageBgLight",
              "dark:bg-messageBgDark",
            )}
            style={{
              height: 125,
              width: "100%",
              ...styles[index],
            }}
          >
            <IosMessage
              title={"Crypto bot"}
              description={message.description}
              icon={"message-icon"}
              iconAlt={"ios message"}
              secondaryDescription={message.secondaryDescription}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default SendCoin;
