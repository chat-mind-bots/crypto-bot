"use client";
import React, { createRef, useEffect, useState } from "react";
import { Shuffler } from "app/components/ui-kit/shuffler";
import { ShuffleDirectionEnum } from "constants/shuffle-direction.enum";
import shuffleArray from "app/helpers/shuffle-array.helper";
import Avatar from "app/components/ui-kit/avatar";
import classNames from "classnames";
import { DynamicISvg } from "app/components/images/dynamic-svg";

const coins: Array<{
  iconName: string;
  altName: string;
  background: string;
}> = [
  {
    iconName: "usdt",
    altName: "USDT logo",
    background: "empty-usdt",
  },
  {
    iconName: "ton",
    altName: "TON logo",
    background: "empty-ton",
  },
  {
    iconName: "btc",
    altName: "BTC logo",
    background: "empty-btc",
  },
];

const Exchange = () => {
  const [elems, setElems] = useState(coins);
  const elements = elems.map((elem) => {
    return {
      id: elem.iconName,
      ...elem,
    };
  });
  const onShuffle = () => {
    setElems(shuffleArray(elems));
  };

  useEffect(() => {
    const interval = setInterval(onShuffle, 2500);
    return () => {
      clearInterval(interval); // Clear the interval on unmount
    };
  }, [elems]);

  return (
    <div className={classNames("flex items-center relative")}>
      <Shuffler
        direction={ShuffleDirectionEnum.HORIZONTAL}
        className={classNames(
          "flex",
          "relative",
          "w-[120px]",
          "sm:w-[130px]",
          "md:w-[140px]",
          "lg:w-[160px]",
          "h-[100%]",
        )}
      >
        {elements.map((item, index) => (
          <div
            id={item.id}
            key={`exchange--${item.id}`}
            ref={createRef()}
            className={classNames("absolute")}
            style={{ left: `${index * 28}px` }}
          >
            <div
              className={classNames("flex items-center rounded-[900px] ")}
              style={{
                filter:
                  "drop-shadow(0px 0px 8px rgba(182, 186, 191, 0.04)) drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.02))",
              }}
            >
              <Avatar
                iconName={item.background}
                altName={item.altName}
                className={classNames(
                  "outline outline-4 outline-bgLight dark:outline-bgDark",
                  "rounded-[900px]",
                  "absolute",
                )}
              />
              <Avatar
                iconName={item.iconName}
                altName={item.altName}
                className={classNames(
                  "outline outline-4 outline-bgLight dark:outline-bgDark",
                  "rounded-[900px]",
                  "z-10",
                  "relative",
                  index !== elements.length - 1 ? "opacity-0" : "opacity-100",
                )}
              />
            </div>
          </div>
        ))}
      </Shuffler>
      <div className={"flex items-center relative"}>
        <button
          className={classNames(
            "border-solid border-bgLight dark:border-bgDark bg-white/60 dark:bg-[rgba(17,_17,_17,_0.4)]  flex flex-col w-10 h-6 items-center py-1 border rounded-[19px] absolute -left-[25px]",
          )}
          onClick={onShuffle}
        >
          <DynamicISvg
            name={"exchange-arrow"}
            alt={"arrow"}
            className={"rotate-180"}
            width={13}
            height={6}
          />
          <DynamicISvg
            name={"exchange-arrow"}
            alt={"arrow"}
            width={13}
            height={6}
          />
        </button>
        <Avatar iconName={"dollar"} altName={"Dollar logo"} />
      </div>
    </div>
  );
};

export default Exchange;
