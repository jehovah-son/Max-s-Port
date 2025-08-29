"use client";
import OpenMenu from "../../../public/menu.png";
import CloseMenu from "../../../public/cancle.png";
import Image from "next/image";
import { useState } from "react";
import Toggle from "../toggle/toggle";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Link from "next/link";

const Links = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    href: "/blog", // better to have a proper blog route
  },
  {
    id: 4,
    title: "About",
    href: "/about",
  },
  {
    id: 5,
    title: "Contact",
    href: "/contact",
  },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const { mode } = useContext(ThemeContext);

  return (
    <div>
      {!isOpen ? (
        <Image
          src={OpenMenu}
          alt="Open Menu"
          width={30}
          height={30}
          onClick={() => setIsOpen(true)}
        />
      ) : (
        <Image
          src={CloseMenu}
          alt="Close Menu"
          width={30}
          height={30}
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* create a condition here show all this below if it only open */}
      {isOpen && (
        <div
          className={`absolute   top-24 left-0 w-full h-screen   z-10 flex flex-col gap-6 items-end p-6  text-2xl transition-all duration-2000 ease-in-out   ${
            mode === "dark" ? "bg-[#111] text-[#bbb]" : "bg-white text-[#111]"
          }`}
        >
          <div
            className="  flex
          flex-col
          gap-6
          text-right
          w-full"
          >
            {Links.map((link) => (
              <Link
                href={link.href}
                key={link.id}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <Toggle />
        </div>
      )}
    </div>
  );
}
