import { DynamicISvg } from "app/[lang]/components/images/dynamic-svg";

export const SwitchImage = () => {
  return (
    <DynamicISvg
      name={"theme"}
      alt={"theme switch"}
      width={32}
      height={32}
      sizes={"(max-width: 768px) 100%"}
    />
  );
};
