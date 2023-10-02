"use client";
import { FC } from "react";
import Image, { ImageProps } from "next/image";
import { useTheme } from "next-themes";

interface IOwnProps {
  name: string;
  isLazy?: boolean;
  alt?: string;
  sizes?: string;
  blurDataURLDark?: string;
  blurDataURLLight?: string;
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
  blurDataURLDark,
  blurDataURLLight,
}) => {
  const { resolvedTheme } = useTheme();

  const getImageSrc = () => {
    console.log(global?.document?.querySelector("html")?.getAttribute("class"));
    return `/${name}/${
      resolvedTheme !== undefined ? resolvedTheme : "dark"
    }/${name}.png`;
  };

  const additionalProps: Partial<ImageProps> = {
    ...(isLazy ? { loading: "lazy" } : { priority: true }),
    ...(blurDataURLLight
      ? { blurDataURL: blurDataURLLight, placeholder: "blur" }
      : {}),
    ...(blurDataURLDark
      ? { blurDataURL: blurDataURLDark, placeholder: "blur" }
      : {}),
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
