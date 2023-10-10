import Link from "next/link";
import classNames from "classnames";
export const Navigation = () => {
  return (
    <nav className={classNames("hidden", "md:block")}>
      <ul className={classNames("md:flex", "gap-[32px]")}>
        <li>
          <p>Use cases</p>
        </li>
        <li>
          <Link href={"#features"} className={classNames("dark:text-white")}>
            Features
          </Link>
        </li>
        <li>
          <Link
            href={"#how-to-start"}
            className={classNames("dark:text-white")}
          >
            How to start
          </Link>
        </li>
      </ul>
    </nav>
  );
};
