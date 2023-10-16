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
        "px-[19px]",
        "mt-[10px]",
        "gap-[8px]",
      )}
    >
      <div className={classNames("flex", "items-center")}>
        <DynamicPng
          className={"min-w-[49px]"}
          alt={iconAlt}
          width={49}
          height={47}
          name={icon}
        />
      </div>
      <div className={"min-w-[220px]"}>
        <div className={"text-[16px]"}>{title}</div>
        <div
          className={classNames("flex", "gap-[10px]", "flex-col", "mt-[7px]")}
        >
          <div className={"text-[13px]"}>{description}</div>
          <div className={classNames("text-[13px]", "mb-[5px]")}>
            {secondaryDescription}
          </div>
        </div>
      </div>
      <div>now</div>
    </div>
  );
};

export default IosMessage;
