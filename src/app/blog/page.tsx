import React from "react";
import BlogData from "../../data/blogData";
import Link from "next/link";
import Image from "next/image";
import WebSite from "../../../public/websites.jpg";

export default async function Blogs() {
  const data = await BlogData();
  return (
    <div className="">
      {data.map((item) => (
        <Link href="/blog/blogId" className="" key={item.id}>
          <div className="flex justify-between gap-20 py-5">
            <div className="">
              <Image
                src={WebSite}
                alt="img"
                width={400}
                height={250}
                className=""
              />
            </div>
            <div className="">
              <p>{item.userId}</p>
              <h1 className="">{item.title}</h1>
              <p className="">{item.body}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
