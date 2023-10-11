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
  description: string;
  color: string;
}> = [
  {
    iconName: "usdt",
    altName: "USDT logo",
    description: "USDT",
    color: "green",
  },
  { iconName: "ton", altName: "TON logo", description: "TON", color: "blue" },
  { iconName: "btc", altName: "BTC logo", description: "BTC", color: "yellow" },
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
        className={classNames("flex", "relative", "w-[160px]", "h-[100%]")}
      >
        {elements.map((item, index) => (
          <div
            id={item.id}
            key={`exchange--${item.id}`}
            ref={createRef()}
            className={classNames("absolute", "ton")}
            style={{ left: `${index * 25}px` }}
          >
            <div
              className={"flex items-center rounded-[900px] stroke-bgLight"}
              style={{
                filter:
                  "drop-shadow(0px 0px 8px rgba(182, 186, 191, 0.04)) drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.02))",
                outline: "4px solid white",
              }}
            >
              <Avatar
                iconName={item.iconName}
                altName={item.altName}
                className={classNames(
                  index !== elements.length - 1 ? "opacity-10" : "",
                  "stroke-bgDark",
                  "border-1",
                  "rounded-[900px]",
                  "ring-1",
                )}
              />
            </div>
          </div>
        ))}
      </Shuffler>
      <div className={"flex items-center relative"}>
        <button
          className={classNames(
            "border-solid border-[#191919] bg-[rgba(17,_17,_17,_0.4)] flex flex-col w-10 h-6 items-center py-1 border rounded-[19px] absolute -left-[25px]",
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
