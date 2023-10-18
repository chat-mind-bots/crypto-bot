"use client";

import React, { createRef, useEffect, useState } from "react";
import shuffleArray from "app/helpers/shuffle-array.helper";
import { DynamicImage } from "app/components/images/dynamic-image";
import classNames from "classnames";
import { Shuffler } from "app/components/ui-kit/shuffler";
import { ShuffleDirectionEnum } from "constants/shuffle-direction.enum";

const background: { imageName: string; alt: string } = {
  imageName: "tg-chat-background",
  alt: "Telegram bot",
};
const botMessages: Array<{
  messageName: string;
  buttonsName: string;
}> = [
  {
    messageName: "commission-message3",
    buttonsName: "commission-buttons3",
  },
  {
    messageName: "commission-message2",
    buttonsName: "commission-buttons2",
  },
  {
    messageName: "commission-message1",
    buttonsName: "commission-buttons1",
  },
];

const PaymentStatistic = () => {
  const [elems, setElems] = useState(botMessages);

  const onShuffle = () => {
    setElems(shuffleArray(elems));
  };

  useEffect(() => {
    const interval = setInterval(onShuffle, 2500);
    return () => {
      clearInterval(interval);
    };
  }, [elems]);
  const sizes = "(max-width: 768px) 100%";
  return (
    <div className="flex justify-center items-center h-screen max-h-[500px] md:max-h-[500px]">
      <div className={classNames("relative", "w-full", "h-full")}>
        <DynamicImage
          name={background.imageName}
          height={580}
          width={526}
          ext={"png"}
          className={classNames(
            "rounded-[24px]",
            "w-full",
            "h-full",
            "absolute",
            "top-0",
          )}
          alt={background.alt}
          sizes={sizes}
        />
        <Shuffler
          className={classNames(
            "flex",
            "w-full",
            "h-full",
            "justify-center",
            "items-center",
          )}
          direction={ShuffleDirectionEnum.HORIZONTAL}
          isFixed
          isOpacityEnable
        >
          {elems.map(({ messageName, buttonsName }, index) => {
            return (
              <div
                key={`payment-statistic--${messageName}`}
                className={classNames("absolute")}
                ref={createRef()}
              >
                <DynamicImage
                  name={"commission-empty"}
                  alt={"Telegram message"}
                  ext={"png"}
                  width={431}
                  height={220}
                  className={classNames(
                    "absolute",
                    "-z-10",
                    "mb-[5px]",
                    // "top-0",
                  )}
                  sizes={sizes}
                />

                <DynamicImage
                  name={messageName}
                  alt={"Telegram message"}
                  ext={"png"}
                  width={431}
                  height={220}
                  className={classNames(
                    "transition-opacity",
                    index !== elems.length - 1 ? "opacity-0" : "opacity-100",
                  )}
                  sizes={sizes}
                />
                <DynamicImage
                  name={buttonsName}
                  alt={"Telegram buttons"}
                  ext={"png"}
                  width={431}
                  height={205}
                  sizes={sizes}
                />
              </div>
            );
          })}
        </Shuffler>
      </div>
    </div>
  );
};

export default PaymentStatistic;
