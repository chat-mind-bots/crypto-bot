"use client";

import { FC, useState } from "react";
import { DynamicISvg } from "app/components/images/dynamic-svg";
import { DescriptionText } from "app/components/ui-kit/typography/description-text";
import classNames from "classnames";

interface IOwnProps {
  iconName: string;
  altName: string;
  description?: string;
  isHoverable?: boolean;
  className?: string;
}

// Add a displayName property to your component.
const Avatar: FC<IOwnProps> = ({
  altName,
  iconName,
  isHoverable,
  description,
  className,
}) => {
  const [isHover, setIsHover] = useState(false);

  const onEnter = () => {
    setIsHover(true);
  };

  const onLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      onMouseLeave={onLeave}
      onMouseEnter={onEnter}
      className={classNames("text-center", "duration-200", className, {
        "text-gray-100": !isHover,
      })}
    >
      <div
        className={classNames(
          "duration-200",
          {
            "scale-110": isHoverable && isHover,
          },
          "w-[56px]",
          "md:w-[96px]",
        )}
      >
        <DynamicISvg
          alt={altName}
          height={96}
          width={96}
          name={iconName}
          sizes="(max-width: 768px) 100%"
        />
      </div>
      <div className={classNames("hidden md:block")}>
        {description && <DescriptionText>{description}</DescriptionText>}
      </div>
    </div>
  );
};
export default Avatar;
