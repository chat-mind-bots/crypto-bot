"use client";
import React, { createRef, useState } from "react";
import { Shuffler } from "app/components/ui-kit/shuffler";
import { ShuffleDirectionEnum } from "constants/shuffle-direction.enum";
import shuffleArray from "app/helpers/shuffle-array.helper";

const coins: Array<{
  iconName: string;
  altName: string;
  description: string;
}> = [
  { iconName: "eth", altName: "ETH logo", description: "ETH" },
  { iconName: "usdt", altName: "USDT logo", description: "USDT" },
  { iconName: "ton", altName: "TON logo", description: "TON" },
  { iconName: "btc", altName: "BTC logo", description: "BTC" },
  { iconName: "trx", altName: "TRX logo", description: "TRX" },
  { iconName: "ltc", altName: "LTC logo", description: "LTC" },
  { iconName: "usdc", altName: "USDC logo", description: "USDC" },
  { iconName: "bnb", altName: "BNB logo", description: "BNB" },
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
  return (
    <>
      <Shuffler direction={ShuffleDirectionEnum.HORIZONTAL} className={"flex"}>
        {elements.map((item) => (
          <div id={item.id} key={item.id} ref={createRef()}>
            {item.altName}
          </div>
        ))}
      </Shuffler>
      <button onClick={onShuffle}>Shuffle</button>
    </>
  );
};

export default Exchange;
