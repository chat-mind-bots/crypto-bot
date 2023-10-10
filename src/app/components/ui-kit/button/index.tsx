import classNames from "classnames";
import { FC, useMemo } from "react";
import { ButtonText } from "app/components/ui-kit/typography/button-text";

type ButtonVariant = "primary" | "secondary" | "outlined";
interface IOwnProps {
  variant: ButtonVariant;
  text: string;
}

const getClassNamesByVariant = (variant: ButtonVariant): string[] => {
  switch (variant) {
    case "secondary":
      return ["bg-blue/[.12]", "hover:bg-blue/[.16]", "text-deepBlue"];
    case "primary":
      return ["bg-blue", "hover:bg-deepBlue", "text-white"];
    case "outlined":
      return [
        "border",
        "border-white",
        "border-solid",
        "hover:border-white/[.60]",
        "text-white",
      ];
  }
};
export const Button: FC<IOwnProps> = ({ variant, text }) => {
  const memoizedClassNames = useMemo(
    () => [
      "md:w-[193px]",
      "md:h-[60px]",
      "rounded-[900px]",
      "w-[163px]",
      "h-[46px]",
      ...getClassNamesByVariant(variant),
    ],
    [variant],
  );

  return (
    <button className={classNames(memoizedClassNames)}>
      <ButtonText>{text}</ButtonText>
    </button>
  );
};
