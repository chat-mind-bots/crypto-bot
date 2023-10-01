import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={"./phone-mock.png"}
        alt={"phone mock"}
        priority
        width={300}
        height={"900"}
      />
    </main>
  );
}
