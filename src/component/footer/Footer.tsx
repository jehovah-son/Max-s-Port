import Image from "next/image";
import LinkedIn from "../../../public/linkedin.png";
import IG from "../../../public/2.png";
import X from "../../../public/3.png";
import YouTube from "../../../public/4.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" flex justify-between items-center md:mb-5 mb-16">
      <div className="text-xs ">
        © 2025 Max&apos;s Port. All rights reserved.
      </div>
      <div className=" opacity-75 flex gap-3 justify-center items-center cursor-pointer">
        <Link href="https://www.linkedin.com/in/chukwuka-success/">
          <Image
            src={LinkedIn}
            width={16}
            height={16}
            className=""
            alt="linkedIn"
          />
        </Link>
        <Link href="https://www.instagram.com/jehovah_son67?igsh=MWg2cGh1MGM4emlrdQ%3D%3D&utm_source=qr">
          {" "}
          <Image src={IG} width={16} height={16} className="" alt="instagram" />
        </Link>
        <Link href="https://x.com/maxnextjs">
          {" "}
          <Image src={X} width={16} height={16} className="" alt="twitter" />
        </Link>
        <Link href="">
          {" "}
          <Image
            src={YouTube}
            width={16}
            height={16}
            className=""
            alt="youtube"
          />
        </Link>
      </div>
    </div>
  );
}
