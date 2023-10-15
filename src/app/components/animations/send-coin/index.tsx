"use client";
import React, { useEffect, useState } from "react";
import { DynamicImage } from "app/components/images/dynamic-image";
import classNames from "classnames";
import { animated, useSpring } from "@react-spring/web";
import shuffleArray from "app/helpers/shuffle-array.helper";
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
  const [elems, setElems] = useState(botMessages);
  const [lastElem, setLastElem] = useState(elems[0]);
  const [animationStart, setAnimationStart] = useState(false);

  const [initialBlock, blockApi] = useSpring(() => ({
    config: { duration: 500 },
    from: { y: 0, opacity: animationStart ? 0 : 1, width: 398 },
  }));

  console.log(initialBlock, blockApi);
  const [copyBlock, copyBlockApi] = useSpring(() => ({
    config: { duration: 500 },
    from: { y: -20, opacity: 0.1, width: 350 },
  }));

  const handleStart = () => {
    setAnimationStart(true);
    blockApi.start({
      to: [
        // { y: 0, opacity: 1 },
        {
          y: -20,
          opacity: 0.8,
          width: 350,
          onStart: handleContinue,
          onRest: () => {
            setLastElem(elems[0]);
          },
        },
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 10,
          opacity: 1,
          width: 350,
          immediate: true,
          onStart: () => {
            onShuffle();
          },
        },
        { opacity: 1, width: 398 },
      ],
    });
  };
  const handleContinue = () => {
    copyBlockApi.start({
      to: [
        { y: -20, opacity: 0, width: 350 },
        { y: -20, opacity: 0.5, width: 350 },
      ],
    });
  };

  const onShuffle = () => {
    setElems(shuffleArray(elems));
  };

  useEffect(() => {
    const interval = setInterval(handleStart, 2500);
    return () => {
      clearInterval(interval);
    };
  }, [elems, lastElem]);
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
        <animated.div
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
            zIndex: 1,
            ...initialBlock,
          }}
        >
          {/* <ButtonText className={classNames("text-dark", "dark:text-white")}>*/}
          {/*  {elems[0]}*/}
          {/* </ButtonText>*/}
          <IosMessage
            title={"Crypto bot"}
            description={elems[0].description}
            icon={"message-icon"}
            iconAlt={"ios message"}
            secondaryDescription={elems[0].secondaryDescription}
          />
        </animated.div>
        <animated.div
          className={classNames(
            "absolute",
            "w-full",
            "bottom-0",
            "ml-[56px]",
            "mr-[56px]",
            "min-w-[212px]",
            "max-w-[398px]",
            "min-h-[76px]",
            "max-h-[125px]",
            "rounded-[20px]",
            "bg-bgLight",
            "dark:bg-bgDark",
          )}
          style={{
            height: 125,
            ...copyBlock,
          }}
        >
          <IosMessage
            title={"Crypto bot"}
            description={lastElem.description}
            icon={"message-icon"}
            iconAlt={"ios message"}
            secondaryDescription={lastElem.secondaryDescription}
          />
        </animated.div>
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
