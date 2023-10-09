"use client";

import { FC, useState } from "react";
import { DynamicISvg } from "app/components/images/dynamic-svg";
import { DescriptionText } from "app/components/ui-kit/Typography/description-text";
import classNames from "classnames";

interface IOwnProps {
  iconName: string;
  altName: string;
  description?: string;
  isHoverable?: boolean;
}

export const Avatar: FC<IOwnProps> = ({
  isHoverable,
  iconName,
  altName,
  description,
}) => {
  const [isHover, setIsHover] = useState(false);
  const onEnter = () => {
    setIsHover(true);
  };
  const onLeave = () => {
    setIsHover(false);
  };
  console.log(altName, iconName);
  return (
    <div
      onMouseLeave={onLeave}
      onMouseEnter={onEnter}
      className={"text-center"}
    >
      <div
        className={classNames("duration-200", {
          "scale-125": isHoverable && isHover,
        })}
      >
        <DynamicISvg
          alt={altName}
          height={96}
          width={96}
          name={iconName}
          sizes="(max-width: 768px) 100%"
        />
      </div>
      {description && <DescriptionText>{description}</DescriptionText>}
    </div>
  );
};