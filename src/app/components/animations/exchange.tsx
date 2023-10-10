"use client";
import React, { createRef, useState } from "react";
import { Shuffler } from "app/components/ui-kit/shuffler";
import { ShuffleDirectionEnum } from "constants/shuffle-direction.enum";
import shuffleArray from "app/helpers/shuffle-array.helper";
import { Button } from "app/components/ui-kit/button";

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
  // const itemsRef = useRef<Map<string, HTMLDivElement> | null>(null);
  // const [prevRef, setPrevRef] = useState(itemsRef);
  console.log("elems", elems);
  // console.log("prevref", prevRef);
  // function getMap() {
  //   if (!itemsRef.current) {
  //     itemsRef.current = new Map();
  //   }
  //   return itemsRef.current;
  // }
  const elements = elems.map((elem) => {
    return {
      id: elem.iconName,
      ...elem,
    };
  });
  // const prevChildren = usePrevious<Map<string, HTMLDivElement> | null>(
  //   itemsRef,
  // );
  const onShuffle = () => {
    setElems(shuffleArray(elems));
    // setPrevRef(itemsRef);
  };
  // console.log("exchange", prevChildren, itemsRef);
  // console.log("itemsRef", itemsRef);
  return (
    <>
      <Shuffler
        direction={ShuffleDirectionEnum.HORIZONTAL}
        className={"flex"}
        // arrRef={itemsRef}
        // arrPrev={prevChildren}
      >
        {elements.map((item) => (
          <div
            id={item.id}
            key={item.id}
            // ref={(node) => {
            //   const map = getMap();
            //   if (node) {
            //     if (map) map.set(item.id, node);
            //   } else {
            //     if (map) map.delete(item.id);
            //   }
            // }}
            ref={createRef()}
          >
            {item.altName}
          </div>
        ))}
      </Shuffler>
      <button onClick={onShuffle}>
        <Button variant={"primary"} text={"Shuffle"} />
      </button>
    </>
  );
};

export default Exchange;
