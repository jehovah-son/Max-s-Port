"use client";
import { useEffect, useState } from "react";
import Loading from "@/app/contact/loading";

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
          priority
        />
        <div className="absolute md:bottom-5 md:left-5 bottom-2 left-2 bg-[#53c28b] md:p-2 p-1 ">
          <h1 className="text-white md:text-2xl text-xl font-bold">
            🚀 Building the Future
          </h1>
          <p className="text-white md:text-xl font-bold">
            One Line of Code at a Time,Handcrafting digital experiences
          </p>
        </div>
      </div>
      {/* text */}
      <div className="flex md:justify-between gap-16 pt-14 md:flex-row flex-col ">
        <div className="flex-1">
          <h1 className="text-3xl  font-bold pb-5">Who Am I?</h1>
          <p className="text-justify ">
            Hi, I&apos;m Success Chukwuka, a Frontend Developer with over 2
            years of hands-on, self-taught experience in building modern web
            applications. I specialize in creating user-friendly, responsive,
            and visually appealing websites that provide seamless experiences
            across all devices.
            <br />
            <br />
            My core skills include HTML, CSS, JavaScript, React, and React-based
            frameworks, which I use to transform ideas into engaging digital
            products that not only look great but also deliver real value to
            users. <br /> <br />
            I&apos;m passionate about crafting clean, efficient, and scalable
            code, while focusing on UI/UX best practices to ensure every project
            connects with its audience. <br />
            <br />✨ Let&apos;s work together to bring your ideas to life and
            create digital experiences that truly stand out.
          </p>
        </div>
        {/* what we do */}
        <div className="flex-1">
          <h1 className="text-3xl  font-bold pb-5">What I Do?</h1>
          <p className="text-justify pb-5">
            I create modern, responsive, and user-friendly websites using HTML,
            CSS, JavaScript, React, and modern frameworks,tailwind css. My focus
            is on clean design, smooth functionality, and performance,
            delivering digital experiences that work beautifully across devices.
            <br /> <br /> Responsive Websites – clean, modern, and optimized for
            all devices <br />
            <br /> Dynamic Web Apps – built with React and modern frameworks
            <br />
            <br />
            Frontend Development – fast, functional, and performance-driven{" "}
            <br />
            <br /> Mobile Apps - in progress...
          </p>
          <Button href="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
}
