import Link from "next/link";
import Toggle from "../toggle/toggle";
interface Props {
  id: number;
  title: string;
  href: string;
}

const Links: Props[] = [
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

export default function Navbar() {
  return (
    <section className="">
      <div className="flex justify-center md:justify-between items-center h-[100px]">
        {/* Logo */}
        <div className=" hover:text-[#53c28b] ">
          <Link href="/">
            <h1 className="text-2xl font-bold  text-center md:text-left">
              Max&apos;s Port
            </h1>
            <p className="text-sm">portfolio + personal branding</p>
          </Link>
        </div>

        {/* Navigation Links - hidden on mobile, flex on md+ */}
        <nav className="hidden md:flex gap-6 text- font-medium">
          <Toggle dark="dark" light="light" />
          {Links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="hover:text-[#53c28b] transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
