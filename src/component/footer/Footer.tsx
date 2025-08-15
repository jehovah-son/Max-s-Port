import Image from "next/image";
import FaceBook from "../../../public/1.png";
import IG from "../../../public/2.png";
import X from "../../../public/3.png";
import YouTube from "../../../public/4.png";
export default function Footer() {
  return (
    <div className=" flex justify-between items-center mb-5">
      <div className="text-xs text-gray-400">
        © 2023 Max&apos;s Port. All rights reserved.
      </div>
      <div className=" opacity-50 flex gap-3 justify-center items-center cursor-pointer">
        <Image
          src={FaceBook}
          width={16}
          height={16}
          className=""
          alt="facebook"
        />
        <Image src={IG} width={16} height={16} className="" alt="instagram" />
        <Image src={X} width={16} height={16} className="" alt="twitter" />
        <Image
          src={YouTube}
          width={16}
          height={16}
          className=""
          alt="youtube"
        />
      </div>
    </div>
  );
}
