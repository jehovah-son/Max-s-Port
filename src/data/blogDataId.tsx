"use server";
import { notFound } from "next/navigation";

interface Blog {
  _id: number;
  img: string;
  desc: string;
  title: string;
  username: string;
  content: string;
}

// that  means your BlogDataId is returning an array of blogs (Blog[]) instead of a single blog object.
// Make your BlogDataId return only one blog:

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogDataId(id: any): Promise<Blog> {
  const res = await fetch(`http://localhost:5000/api/posts/${id}`);

  const data = await res.json();

  if (!res.ok) {
    return notFound();
  }

  return data;
}
