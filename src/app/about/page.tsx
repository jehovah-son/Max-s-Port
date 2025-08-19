"use client";
import { useEffect, useState } from "react";
import Loading from "@/app/contact/loading";
import Link from "next/link";
import Image from "next/image";
import Button from "@/component/button/Button";

export default function About() {
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
      {/* image */}
      <div className="relative w-full h-[300px] border-2  ">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="about image"
          fill // makes image stretch to fill its parent
          className="object-cover relative" // keeps image nicely cropped
        />
        <div className="absolute md:bottom-5 md:left-5 bottom-2 left-2 bg-[#53c28b] md:p-2 p-1 ">
          <h1 className="text-white md:text-2xl text-xl font-bold">
            Digital Storytellers
          </h1>
          <p className="text-white md:text-xl font-bold">
            Handcrafting award winning digital experiences
          </p>
        </div>
      </div>
      {/* text */}
      <div className="flex md:justify-between gap-16 pt-14 md:flex-row flex-col ">
        <div className="flex-1">
          <h1 className="text-3xl  font-bold pb-5">Who Are We?</h1>
          <p className="text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        {/* what we do */}
        <div className="flex-1">
          <h1 className="text-3xl  font-bold pb-5">What We Do?</h1>
          <p className="text-justify pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> <br /> - Creative Illustrations <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy <br />
            <br />- Mobile Apps
          </p>
          <Button href="/" text="Contact" />
        </div>
      </div>
    </div>
  );
}
