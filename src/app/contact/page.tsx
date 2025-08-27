"use client";
import { useEffect, useState } from "react";
import Loading from "@/app/contact/loading";
import styles from "@/app/contact/page.module.css";
import PhoneCallLoop from "../../../public/oldphone.png";
import CarbonTime from "../../../public/carbontime.png";

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
        <h1 className="md:text-6xl text-4xl text-center md:text-center font-bold">
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
        <div className="flex-1 justify-between flex pt-5   flex-col gap-5">
          {/* first paragraph */}
          <div>
            {" "}
            <h1 className="text-xl font-bold text-justify">
              ✨Ready to transform your ideas into powerful digital solutions?
              Let&apos;s bring your vision to life—get in touch today and
              let&apos;s build something amazing together.
            </h1>
          </div>
          {/* number and email */}
          <div className="flex gap-3">
            <div>
              {" "}
              <Image
                src={PhoneCallLoop}
                alt="phone call loop"
                width={30}
                height={30}
                className=""
                priority
              />
            </div>
            <div>
              <h1 className="text-xl font-bold ">Contact</h1>
              <p className="pt-2">
                Call: <span>081-184-77-430</span>
              </p>
              <p>
                Mail: <span>chukwukasuccess0@gmail.com</span>
              </p>
            </div>
          </div>
          {/* working hours */}
          <div className="flex gap-3">
            <div>
              {" "}
              <Image
                src={CarbonTime}
                alt="phone call loop"
                width={30}
                height={30}
                className=""
                priority
              />
            </div>
            <div>
              <h1 className="text-xl font-bold ">Working Hours</h1>
              <p className="pt-2">
                Monday - Friday: <span>12:00am - 12:00am</span>
              </p>
              <p className="pt-2">
                Saturday - Sunday: <span>12:00am - 12:00am</span>
              </p>
            </div>
          </div>
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
