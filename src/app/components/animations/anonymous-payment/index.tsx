"use client";
import React, { useEffect } from "react";
import { useMessageAnimation } from "app/hooks/useMessageAnimation";
import { animated } from "@react-spring/web";
import { DynamicPng } from "app/components/images/dynamic-png";
import classNames from "classnames";

const messages = [
  { messageName: "anonymous-payment1" },
  { messageName: "anonymous-payment2" },
  { messageName: "anonymous-payment3" },
];
const AnonymousPayment = () => {
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
        "items-center",
        "justify-center",
      )}
    >
      <DynamicPng
        className={"w-full"}
        height={404}
        width={222}
        name={"anonymous-background"}
        alt={"Message example"}
      />
      {messages.map((message, index) => (
        <animated.div
          key={message.messageName}
          style={{ ...styles[index] }}
          className={classNames("absolute", "w-full", "max-w-[360px]", "flex")}
        >
          <DynamicPng
            height={125}
            width={360}
            name={message.messageName}
            alt={"Message example"}
          />
        </animated.div>
      ))}
    </div>
  );
};

export default AnonymousPayment;
