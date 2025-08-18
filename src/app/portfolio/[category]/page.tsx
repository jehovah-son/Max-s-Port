import { notFound } from "next/navigation";
import { Frameworks } from "./data";
import Image from "next/image";

// define a type from the keys of Frameworks
// type FrameworkKey = keyof typeof Frameworks;

const getData = (cat: string) => {
  const data = Frameworks[cat as keyof typeof Frameworks];

  if (data) {
    return data;
  } else {
    return notFound();
  }
};

type PageProps = {
  params: {
    category: string;
  };
};

export default async function CategoriesPage({ params }: PageProps) {
  // Fetch the data based on the category
  console.log(params);
  const data = getData(params.category);

  // If data is found, return the JSX
  return (
    <div>
      <h1>{params.category}</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <Image src={item.image} alt={item.title} width={200} height={200} />
          <p>{item.link}</p>
        </div>
      ))}
    </div>
  );
}
