"use client";
import { useEffect, useState } from "react";
import Loading from "@/app/contact/loading";
import Button from "@/component/button/Button";
import Image from "next/image";
import ContactImage from "@/../public/contact.png";

export default function Contact() {
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
    <div>
      <div>
        <h1>Let&apos;s Keep in Touch</h1>
      </div>
      <div className="flex md:justify-between  pt-14 md:flex-row flex-col ">
        {/* image */}
        <div className="flex-1">
          <Image
            src={ContactImage}
            alt="Contact Image"
            width={450}
            height={500}
            className="object-cover"
            priority
          />
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name"
              className="border-2 border-gray-400"
              required
            />
            <input type="email" placeholder="Email" className="" required />
            <textarea
              rows={10}
              cols={30}
              placeholder="Message"
              className=""
              required
            ></textarea>
            <Button href="/" text="Send Message" />
          </form>
        </div>
      </div>
    </div>
  );
}
