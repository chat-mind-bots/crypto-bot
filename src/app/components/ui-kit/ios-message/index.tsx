import React from "react";
import classNames from "classnames";
import { DynamicPng } from "app/components/images/dynamic-png";

interface MessageProps {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  secondaryDescription?: string;
}
const IosMessage = ({
  description,
  secondaryDescription,
  title,
  icon,
  iconAlt,
}: MessageProps) => {
  return (
    <div
      className={classNames(
        "flex",
        "relative",
        "h-full",
        "mt-[5px]",
        "px-[5px]",
        "gap-[5px]",
        "h-[90px]",
        "md:px-[19px]",
        "md:mt-[10px]",
        "md:gap-[8px]",
        "md:h-[125px]",
      )}
    >
      <div className={classNames("flex", "items-center")}>
        <DynamicPng
          className={classNames(
            "max-w-[49px]",
            "min-w-[25px]",
            "w-[25px]",
            "md:w-[49px]",
          )}
          alt={iconAlt}
          width={49}
          height={47}
          name={icon}
        />
      </div>
      <div className={classNames("md:w-full", "w-[minmax(150px, 100%)]")}>
        <div className={classNames("text-[11px]", "md:text-[16px]")}>
          {title}
        </div>
        <div
          className={classNames(
            "flex",
            "gap-[10px]",
            "flex-col",
            "mt-[7px]",
            "md:w-full",
          )}
        >
          <div className={classNames("text-[11px]", "md:text-[15px]")}>
            {description}
          </div>
          <div className={classNames("text-[13px]", "md:text-[15px]")}>
            {secondaryDescription}
          </div>
        </div>
      </div>
      <div className={classNames("text-[12px]", "md:text-[13px]")}>now</div>
    </div>
  );
};

export default IosMessage;
