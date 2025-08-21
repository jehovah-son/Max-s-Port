"use client";
import Image from "next/image";
import Button from "@/component/button/Button";
import Hero from "@/../public/hero.png";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import styles from "../app/page.module.css";

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
    <div className=" flex items-center md:gap-25 gap-10 md:flex-row flex-col-reverse mb-15 ">
      <div className="flex-1 flex flex-col gap-10">
        <h1 className="md:text-7xl md:text-left text-center text-5xl font-bold  bg-gradient-to-b from-[#53c28b] to-[#00CCFF] bg-clip-text text-transparent inline-block">
          Better design for your digital products.
        </h1>
        <p className=" text-xl">
          Transforming your ideas into engaging digital experiences that connect
          with audiences everywhere.
        </p>
        <Button href="/portfolio" text="See Our Works" />
      </div>
      <div className="flex-1">
        <Image
          src={Hero}
          alt="Hero Image"
          width={485}
          height={485}
          className={styles.img}
          priority
        />
      </div>
    </div>
  );
}
