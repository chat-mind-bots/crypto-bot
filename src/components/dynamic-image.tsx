import { FC } from "react";
import Image, { ImageProps } from "next/image";
// import * as process from "process";

interface IOwnProps {
  name: string;
  isLazy?: boolean;
}
export const DynamicImage: FC<IOwnProps> = ({ name, isLazy }) => {
  const getImageSrc = () => {
    // const prefix = process.env.MODE === "DEVELOP" ? "/" : "./";
    return `/${name}`;
  };

  const additionalProps: Partial<ImageProps> = {
    ...(isLazy ? { loading: "lazy" } : { priority: true }),
  };

  return (
    <Image
      src={getImageSrc()}
      alt={"phone mock"}
      {...additionalProps}
      width={336}
      height={693}
    />
  );
};
