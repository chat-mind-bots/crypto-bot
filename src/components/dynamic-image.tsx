"use client";
import { FC } from "react";
import Image, { ImageProps } from "next/image";
import { useTheme } from "next-themes";

interface IOwnProps {
  name: string;
  isLazy?: boolean;
  alt?: string;
  sizes?: string;
  blurDataURL?: string;
  width: number;
  height: number;
}
export const DynamicImage: FC<IOwnProps> = ({
  name,
  isLazy,
  alt,
  width,
  height,
  sizes,
  blurDataURL,
}) => {
  const { resolvedTheme } = useTheme();

  const getImageSrc = () => {
    return `/${name}/${resolvedTheme}/${name}.png`;
  };

  const additionalProps: Partial<ImageProps> = {
    ...(isLazy ? { loading: "lazy" } : { priority: true }),
    ...(blurDataURL ? { blurDataURL, placeholder: "blur" } : {}),
  };

  return (
    <Image
      src={getImageSrc()}
      alt={alt ?? ""}
      {...additionalProps}
      width={width}
      height={height}
      sizes={sizes}
    />
  );
};
