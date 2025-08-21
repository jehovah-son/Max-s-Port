import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export default function Button({ href, text }: Props) {
  return (
    <Link href={href}>
      <button
        className=" py-4 px-7 cursor-pointer bg-gradient-to-r from-[#194c33] to-[#53c28b] border-none text-white w-max rounded-2xl
       "
      >
        {text}
      </button>
    </Link>
  );
}
