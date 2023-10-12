"use client";

import { FC, ReactElement, useEffect, useLayoutEffect, useState } from "react";
import { ShuffleDirectionEnum } from "constants/shuffle-direction.enum";
import classNames from "classnames";
import usePrevious from "app/hooks/usePrevious";
import { calculateBoundingBoxes } from "app/helpers/calculateBoundingBoxes.helper";
import { animate } from "app/helpers/animate";

interface IShufflerProps {
  direction: ShuffleDirectionEnum;
  children: ReactElement[];
  className?: string;
  isFixed?: boolean;
  isOpacityEnable?: boolean;
}

export const Shuffler: FC<IShufflerProps> = ({
  children,
  className,
  direction,
  isFixed,
  isOpacityEnable,
}) => {
  const [boundingBox, setBoundingBox] = useState<Record<string, DOMRect>>({});
  const [prevBoundingBox, setPrevBoundingBox] = useState<
    Record<string, DOMRect>
  >({});

  const prevChildren = usePrevious(children);

  useLayoutEffect(() => {
    const newBoundingBox = calculateBoundingBoxes(children) as Record<
      string,
      DOMRect
    >;
    setBoundingBox(newBoundingBox);
  }, [children]);

  useLayoutEffect(() => {
    const prevBoundingBox = calculateBoundingBoxes(prevChildren) as Record<
      string,
      DOMRect
    >;
    setPrevBoundingBox(prevBoundingBox);
  }, [prevChildren]);

  useEffect(() => {
    const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;
    if (hasPrevBoundingBox) {
      animate(
        prevBoundingBox,
        boundingBox,
        children,
        direction === ShuffleDirectionEnum.HORIZONTAL,
        isOpacityEnable,
        isFixed,
      );
    }
  }, [boundingBox, prevBoundingBox, children]);

  return <div className={classNames(className)}>{children}</div>;
};
