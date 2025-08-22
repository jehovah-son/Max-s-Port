"use server";

interface Blog {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export default async function BlogData(): Promise<Blog[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {});

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return data;
}
