import { FC, ReactNode } from "react";
import classNames from "classnames";

interface IOwnProps {
  list: ReactNode[];
  mode?: "disc" | "decimal";
  key: string;
}
export const List: FC<IOwnProps> = ({ list, mode, key }) => {
  return (
    <ul
      className={classNames("flex", "flex-col", "gap-[8px]", {
        "list-disc": mode === "disc",
        "list-decimal": mode === "decimal",
        "ml-[19px]": !!mode,
      })}
    >
      {list.map((element, index) => (
        <li key={`list--${key}-${index}`}>{element}</li>
      ))}
    </ul>
  );
};
