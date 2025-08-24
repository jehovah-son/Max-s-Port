"use server";

interface Blog {
  _id: number;
  title: string;
  desc: string;
  img: string;
}

export default async function BlogData(): Promise<Blog[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return data;
}
