import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export default function Button({ href, text }: Props) {
  return (
    <Link href={href}>
      <button
        className=" p-5 cursor-pointer bg-[#53c28b] border-none text-white w-max rounded-2xl
       "
      >
        {text}
      </button>
    </Link>
  );
}
