"use client";
import React, { useEffect, useState } from "react";
import { DynamicImage } from "app/components/images/dynamic-image";
import classNames from "classnames";
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
  const [activeElemIndex, setActiveElemIndex] = useState(0);
  const [prevActive, sePrevActive] = useState(-1);

  const counter = <T,>(activeNum: number, arr: Array<T>) => {
    return {
      prevActive: activeNum,
      activeNum: activeNum > arr.length - 1 ? 0 : activeNum + 1,
    };
  };

  const handleOnStart = () => {
    const { activeNum, prevActive } = counter(activeElemIndex, botMessages);
    setActiveElemIndex(activeNum);
    sePrevActive(prevActive);
  };

  useEffect(() => {
    const interval = setInterval(handleOnStart, 1700);
    return () => {
      clearInterval(interval);
    };
  }, [activeElemIndex]);
  console.log(activeElemIndex);
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
      <div className={classNames("absolute", "flex", "justify-center")}>
        {botMessages.map((elem, index) => {
          return (
            <div
              key={`message--${elem.description}`}
              className={classNames(
                "bg-messageBgLight",
                "dark:bg-messageBgDark",
                "absolute",
                "rounded-[13px]",
                index === activeElemIndex
                  ? "transition"
                  : index === prevActive
                  ? "onAnimation"
                  : "transition endAnimation",
                "bottom-0",
              )}
            >
              <IosMessage
                iconAlt={"iOS message"}
                icon={"message-icon"}
                title={"Crypto bot"}
                description={elem.description}
                secondaryDescription={elem.secondaryDescription}
              />
            </div>
          );
        })}
      </div>
      {/* <Shuffler*/}
      {/* className={classNames(*/}
      {/*   "flex",*/}
      {/*   "absolute",*/}
      {/*   "top-0",*/}
      {/*   "justify-center",*/}
      {/*   "absolute",*/}
      {/*   "w-full",*/}
      {/*   "h-full",*/}
      {/*   "pl-[35px]",*/}
      {/*   "pr-[35px]",*/}
      {/*   "mt-[20px]",*/}
      {/*   "md:mt-0",*/}
      {/*   "md:pl-[106px]",*/}
      {/*   "md:pr-[106px]",*/}
      {/* )}*/}
      {/* direction={ShuffleDirectionEnum.VERTICAL}*/}
      {/* isOpacityEnable={false}*/}
      {/* isFixed={false}*/}
      {/* >*/}
      {/* {elems.map(({ messageName }, index) => {*/}
      {/*   return (*/}
      {/*     <div*/}
      {/*       key={`send-coin--${messageName}`}*/}
      {/*       ref={createRef()}*/}
      {/*       className={classNames(*/}
      {/*         index === elems.length - 1 ? "opacity-100" : "opacity-50",*/}
      {/*       )}*/}
      {/*       style={{*/}
      {/*         top: `${index * 24}px`,*/}
      {/*         zIndex: `${index}`,*/}
      {/*       }}*/}
      {/*     >*/}
      {/*       <DynamicImage*/}
      {/*         height={125}*/}
      {/*         width={320}*/}
      {/*         ext={"png"}*/}
      {/*         sizes={sizes}*/}
      {/*         alt={"Telegram message"}*/}
      {/*         name={messageName}*/}
      {/*       />*/}
      {/*     </div>*/}
      {/*   );*/}
      {/* })}*/}
      {/* </Shuffler>*/}
    </div>
  );
};

export default SendCoin;
