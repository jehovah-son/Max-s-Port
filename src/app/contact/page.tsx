"use client";
import { useEffect, useState } from "react";
import Loading from "@/app/contact/loading";
import styles from "@/app/contact/page.module.css";

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
    <div className="pb-10 pt-2">
      <div>
        <h1 className="md:text-6xl text-4xl text-[#bbb] text-center md:text-center font-bold">
          Let&apos;s Keep in Touch
        </h1>
      </div>
      <div className="flex md:justify-between gap[100%]  pt-14 md:flex-row flex-col ">
        {/* image */}
        <div className="flex-1">
          <Image
            src={ContactImage}
            alt="Contact Image"
            width={450}
            height={500}
            className={styles.img}
            priority
          />
        </div>
        <div className="flex-1 justify-center flex pt-5  flex-col gap-5">
          <p>
            Call:<span>081-184-77-430</span>
          </p>
          <p>
            Email:<span>chukwukasuccess0@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// padding: 20px;
// background-color: transparent;
// border: none;
// outline: none;
// color: #bbb;
// border: 3px solid #bbb;
// font-size: 15px;
// font-weight: bold;
