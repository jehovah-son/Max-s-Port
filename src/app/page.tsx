import Image from "next/image";
import Button from "@/component/button/Button";
import Hero from "@/../public/hero.png";

export default function Home() {
  return (
    <div className=" flex items-center md:gap-25 gap-20 md:flex-row flex-col mb-15 ">
      <div className="flex-1 flex flex-col gap-10">
        <h1 className="md:text-7xl  text-5xl font-bold leading-tight bg-gradient-to-r from-[#53c28b] to-[#00ccff] bg-clip-text text-transparent inline-block">
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
