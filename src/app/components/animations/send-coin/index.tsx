"use client";
import React, { createRef, useEffect, useState } from "react";
import { DynamicImage } from "app/components/images/dynamic-image";
import classNames from "classnames";
import { Shuffler } from "app/components/ui-kit/shuffler";
import { ShuffleDirectionEnum } from "constants/shuffle-direction.enum";
import shuffleArray from "app/helpers/shuffle-array.helper";

const botMessages: Array<{
  messageName: string;
}> = [
  {
    messageName: "send-coins1",
  },
  // {
  //   messageName: "send-coins2",
  // },
  // {
  //   messageName: "send-coins3",
  // },
];

const SendCoin = () => {
  const [elems, setElems] = useState(botMessages);
  const sizes = "(max-width: 768px) 100%";
  const onShuffle = () => {
    setElems(shuffleArray(elems, "asc"));
  };

  useEffect(() => {
    const interval = setInterval(onShuffle, 2500);
    return () => {
      clearInterval(interval);
    };
  }, [elems]);
  return (
    <div className={classNames("relative", "w-full", "h-full")}>
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
          "md:pl-[56px]",
          "md:pr-[56px]",
        )}
        name={"half-mockup"}
      />
      <Shuffler
        className={classNames(
          "flex",
          "absolute",
          "top-0",
          "justify-center",
          "absolute",
          "w-full",
          "h-full",
          "pl-[35px]",
          "pr-[35px]",
          "mt-[20px]",
          "md:mt-0",
          "md:pl-[106px]",
          "md:pr-[106px]",
        )}
        direction={ShuffleDirectionEnum.VERTICAL}
        isOpacityEnable={false}
        isFixed={false}
      >
        {elems.map(({ messageName }, index) => {
          return (
            <div
              key={`send-coin--${messageName}`}
              ref={createRef()}
              className={classNames(
                index === elems.length - 1 ? "opacity-100" : "opacity-50",
              )}
              style={{
                top: `${index * 24}px`,
                zIndex: `${index}`,
              }}
            >
              <DynamicImage
                height={125}
                width={320}
                ext={"png"}
                sizes={sizes}
                alt={"Telegram message"}
                name={messageName}
              />
            </div>
          );
        })}
      </Shuffler>
    </div>
  );
};

export default SendCoin;
