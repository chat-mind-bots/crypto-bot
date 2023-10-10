import { FC } from "react";
import Image, { ImageProps } from "next/image";
import classNames from "classnames";

export interface IDynamicImageProps {
  name: string;
  isLazy?: boolean;
  priority?: boolean;
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
  alt,
  width,
  height,
  sizes,
  blurDataURLDark,
  blurDataURLLight,
  ext,
  priority,
}) => {
  const getImageSrc = (theme: string) => {
    return `/${name}/${theme}/${name}.${ext}`;
  };

  const additionalProps: Partial<ImageProps> = {
    ...(blurDataURLLight
      ? { blurDataURL: blurDataURLLight, placeholder: "blur" }
      : {}),
    ...(blurDataURLDark
      ? { blurDataURL: blurDataURLDark, placeholder: "blur" }
      : {}),
    ...(priority ? { priority: true } : { loading: "lazy" }),
  };

  return (
    <>
      <Image
        src={getImageSrc("dark")}
        alt={alt}
        {...additionalProps}
        width={width}
        height={height}
        sizes={sizes}
        className={classNames("hidden", "dark:block")}
      />
      <Image
        src={getImageSrc("light")}
        alt={alt}
        {...additionalProps}
        width={width}
        height={height}
        sizes={sizes}
        className={classNames("dark:hidden")}
      />
    </>
  );
};
