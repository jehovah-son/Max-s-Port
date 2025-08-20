"use client";
import Image from "next/image";
import Button from "@/component/button/Button";
import Hero from "@/../public/hero.png";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

export default function Home() {
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
    <div className=" flex items-center md:gap-25 gap-20 md:flex-row flex-col mb-15 ">
      <div className="flex-1 flex flex-col gap-10">
        <h1 className="md:text-7xl  text-5xl font-bold leading-tight bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent inline-block">
          Better design for your digital products.
        </h1>
        <p className="text-gray-400 text-xl">
          Transforming your ideas into engaging digital experiences that connect
          with audiences everywhere.
        </p>
        <Button href="/portfolio" text="See Our Works" />
      </div>
      <div className="flex-1">
        <Image
          src={Hero}
          alt="Hero Image"
          width={500}
          height={500}
          className="object-cover "
        />
      </div>
    </div>
  );
}
