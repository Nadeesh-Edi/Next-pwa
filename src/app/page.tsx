import Image from "next/image";
import Link from "next/link";
import ThemeChange from "./components/themeChange";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] dark:bg-[#000] bg-[#fff]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <Link href={`/tiktok`} className="p-2 bg-[#ff0000] dark:bg-[#f4f]">Go to page</Link>

        <ThemeChange />
      </main>
    </div>
  );
}
