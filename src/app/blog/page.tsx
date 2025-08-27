import React from "react";
import BlogData from "../../data/blogData";
import Link from "next/link";
import Image from "next/image";

export default async function Blogs() {
  const data = await BlogData();
  return (
    <div className="">
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className="" key={item._id}>
          <div className="flex md:justify-between md:flex-row flex-col md:gap-20 py-5">
            <div className=" flex-1">
              <Image
                src={item.img}
                alt="img"
                width={500}
                height={333}
                className="w-full object-cover"
                priority
              />
            </div>

            <div className="flex-1 flex flex-col md:gap-10 gap-4">
              <h1 className="text-justify text-2xl font-bold md:pt-0 pt-3">
                {item.title}
              </h1>
              <p className=" text-justify md:pb-0 pb-3 ">{item.desc}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

//  <div className="flex-1">
//       <Image
//         src={data.img}
//         alt="title img"
//         width={1000}
//         height={1000}
//         className="w-full h-full display-contain"
//         priority
//       />
//     </div>
