"use client";
import { useEffect, useState } from "react";
import Loading from "@/app/contact/loading";
import Link from "next/link";

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading == true) {
    return <Loading />;
  }

  return (
    <div className="pb-10">
      <h1 className="md:text-8xl text-6xl text-[#bbb] text-center md:text-left font-bold">
        Our Works
      </h1>
      <h2 className="text-3xl text-[#bbb] text-center md:text-left font-bold pb-5 pt-7">
        Choose a category
      </h2>
      <div className="flex md:flex-row flex-col md:justify-between gap-5 md:items-center items-center">
        {/* Nextjs */}
        <Link href="/portfolio/nextjs">
          <div className="rounded-2xl border-2 w-[250px] h-[300px] border-grey-400 relative cursor-pointer [&:nth-child(1)]:bg-[url('/next-logo.png')] bg-contain bg-center"></div>
        </Link>
        {/* React */}
        <Link href="/portfolio/react">
          <div className=" rounded-2xl border-2 w-[250px] h-[300px] border-grey-400 relative cursor-pointer bg-no-repeat [&:nth-child(1)]:bg-[url('/react-logo.png')] bg-cover bg-center"></div>
        </Link>
        {/* typescript */}
        <Link href="/portfolio/typescript">
          <div className=" rounded-2xl border-2 w-[250px] h-[300px] border-grey-400 relative cursor-pointer [&:nth-child(1)]:bg-[url('/typescript-logo.png')] bg-contain bg-center"></div>
        </Link>
        {/* flutter */}
        <Link href="/portfolio/flutter">
          <div className=" rounded-2xl border-2 w-[250px] h-[300px] border-grey-400 relative cursor-pointer [&:nth-child(1)]:bg-[url('/flutter-logo.png')] bg-contain  bg-center"></div>
        </Link>
      </div>
    </div>
  );
}
