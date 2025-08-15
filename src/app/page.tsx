import Image from "next/image";
import Button from "@/component/button/Button";
import Hero from "@/../public/hero.png";

export default function Home() {
  return (
    <div className="flex items-center gap-20">
      <div className="flex-1 flex flex-col gap-9 ">
        <h1 className="">Better design for your digital products.</h1>
        <p className="">
          Turning your idea into reality. We bring together the teams from the
          global tech industry.
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
