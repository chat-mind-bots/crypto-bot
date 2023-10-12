import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import classNames from "classnames";

export const metadata: Metadata = {
  title: "Crypto Pay bot",
  description: "Crypto Pay bot",
  keywords: "crypto cryptobot telegram usdt ton",
  openGraph: { title: "Crypto bot" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={classNames("bg-white", "dark:bg-dark")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
