import { FC } from "react";
import Image from "next/image";
import * as process from "process";

interface IOwnProps {
  name: string;
}
export const DynamicImage: FC<IOwnProps> = ({ name }) => {
  const getImageSrc = () => {
    const prefix = process.env.MODE === "DEVELOP" ? "/" : "./";
    return `${prefix}${name}`;
  };

  return (
    <Image
      src={getImageSrc()}
      alt={"phone mock"}
      className="dark:invert"
      priority
      width={336}
      height={693}
    />
  );
};
