import Image from "next/image";
import ContentMenu from "../components/ContentMenu";
import Trailer from "../components/Trailer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Link href="/">
          <Image
            className="mt-6 absolute top-0"
            src="/tfclogo.svg"
            alt="Steam Logo"
            width={35}
            height={35}
            priority
          />
        </Link>
      </div>
      <div className="absolute top-0 left-0 ml-3 mt-3">
        <ContentMenu />
      </div>

      <div className="">
        <Trailer />
      </div>

      <div>
        <h2 className="mt-7 mb-7 font-semibold">
          Download The First Descendant today{" "}
        </h2>
        <div className="flex">
          <a className="ml-6"
            href="https://store.steampowered.com/app/2074920/The_First_Descendant/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="mb-3 invert"
              src="/steam-logo.svg"
              alt="Steam Logo"
              width={50}
              height={50}
              priority
            />
          </a>
          <a className="ml-10"
            href="https://www.playstation.com/en-us/games/the-first-descendant/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="invert mb-3"
              src="/playstation.svg"
              alt="PlayStation Logo"
              width={65}
              height={50}
              priority
            />
          </a>
          <a className="ml-8"
            href="https://www.xbox.com/en-us/games/store/the-first-descendant/9p8fbxkmclwc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="invert"
              src="/xbox.svg"
              alt="Xbox Logo"
              width={50}
              height={50}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
