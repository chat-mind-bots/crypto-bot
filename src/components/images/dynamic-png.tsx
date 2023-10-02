import { FC } from "react";
import {
  DynamicImage,
  IDynamicImageProps,
} from "components/images/dynamic-image";
export const DynamicPng: FC<Omit<IDynamicImageProps, "ext">> = (props) => {
  return <DynamicImage {...props} ext={"png"} />;
};
