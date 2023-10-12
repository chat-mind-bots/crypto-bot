"use client";

import { useTheme } from "next-themes";
import classNames from "classnames";
import { SwitchImage } from "app/[lang]/components/theme-switcher/image";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const themeSwitch = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      onClick={themeSwitch}
      className={classNames(
        "w-[24px]",
        "h-[24px]",
        "md:w-[40px]",
        "md:h-[40px]",
      )}
    >
      <SwitchImage />
    </button>
  );
};
