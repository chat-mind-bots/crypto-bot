"use client";
import { FC } from "react";
import Image, { ImageProps } from "next/image";
import { useTheme } from "next-themes";

export interface IDynamicImageProps {
  name: string;
  isLazy?: boolean;
  alt: string;
  sizes?: string;
  blurDataURLDark?: string;
  blurDataURLLight?: string;
  width: number;
  height: number;
  ext: string;
}
export const DynamicImage: FC<IDynamicImageProps> = ({
  name,
  isLazy,
  alt,
  width,
  height,
  sizes,
  blurDataURLDark,
  blurDataURLLight,
  ext,
}) => {
  const { resolvedTheme } = useTheme();

  const getImageSrc = () => {
    return `/${name}/${
      // resolvedTheme !== undefined ? resolvedTheme : "dark"
      resolvedTheme !== undefined ? resolvedTheme : "light"
    }/${name}.${ext}`;
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
      alt={alt}
      {...additionalProps}
      width={width}
      height={height}
      sizes={sizes}
    />
  );
};
