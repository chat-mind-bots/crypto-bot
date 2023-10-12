import { FC } from "react";
import {
  DynamicImage,
  IDynamicImageProps,
} from "app/[lang]/components/images/dynamic-image";

export const DynamicISvg: FC<Omit<IDynamicImageProps, "ext">> = (props) => {
  return <DynamicImage {...props} ext={"svg"} />;
};
