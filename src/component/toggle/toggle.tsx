"use client";
import Image from "next/image";
import Sun from "../../../public/sun.png";
import Moon from "../../../public/moon.png";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function Toggle() {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div
      className="border-2 rounded-2xl border-[#53c28b70] flex  w-[42px] h-[24px]  items-center px-0.5  justify-between  relative cursor-pointer "
      onClick={toggle}
    >
      <div>
        {" "}
        <Image src={Moon} width={17} height={17} alt="sun" />
      </div>
      <div>
        <Image src={Sun} width={16} height={16} alt="sun" />
      </div>

      <div
        className={`w-[17px] h-[17px] bg-[#53c28b] flex items-center justify-center rounded-full absolute 
    ${mode === "dark" ? "left-[1px]" : "right-[1px]"}`}
        // if mode is ===  light move the ball to the left but if mode is === to dark move the ball to the right
      ></div>
    </div>
  );
}

//   width: 17px;
//   height: 17px;
//   background-color: #53c28b;
//   border-radius: 50%;
//   position: absolute;
