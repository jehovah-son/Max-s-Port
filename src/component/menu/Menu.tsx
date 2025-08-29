"use client";
import OpenMenu from "../../../public/menu.png";
import CloseMenu from "../../../public/cancle.png";
import Image from "next/image";
import { useState } from "react";
import Toggle from "../toggle/toggle";

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
        <div className="absolute bg-[#194c33] top-24 left-0 w-full flex flex-col gap-4 justify-center item-center ">
          <ul className="flex flex-col gap-4">
            {Links.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
          <Toggle />
        </div>
      )}
    </div>
  );
}
