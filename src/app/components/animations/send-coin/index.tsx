"use client";
import React, { useEffect } from "react";
import { DynamicImage } from "app/components/images/dynamic-image";
import classNames from "classnames";
import { animated } from "@react-spring/web";
import IosMessage from "app/components/ui-kit/ios-message";
import { useMessageAnimation } from "app/hooks/useMessageAnimation";

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
    description: "You received 8478 TON ($10000) from @CryptoBot #A878",
    secondaryDescription: "Congrats! You are a winner ",
  },
];

const SendCoin = () => {
  const { styles, firstTick } = useMessageAnimation();

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
        sizes={"(max-width: 768px) 100%"}
        alt={"mockup"}
        className={classNames(
          "w-full",
          "max-w-[474px]",
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
              "w-full",
              "top-[-60px]",
              "md:top-[-90px]",
              "mx-[10px]",
              "max-w-fit",
              "min-h-fit",
              "md:max-w-[398px]",
              "rounded-[20px]",
              "bg-messageBgLight",
              "dark:bg-messageBgDark",
            )}
            style={{
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
