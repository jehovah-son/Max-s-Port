import { notFound } from "next/navigation";
import { Frameworks } from "./data";
import Image from "next/image";
import Button from "@/component/button/Button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getData = (cat: any) => {
  const data = Frameworks[cat as keyof typeof Frameworks];
  if (data) {
    return data;
  }
  return notFound();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function CategoriesPage({ params }: any) {
  const data = getData(params.category);

  return (
    <div className="mb-10">
      <h1 className="md:text-7xl text-5xl  text-center md:text-left font-bold">
        Our Works
      </h1>
      <h1 className="text-3xl text-[#53c28b] text-center md:text-left font-bold pb-5 pt-3">
        {params.category}
      </h1>
      {data.map((item) => (
        <div
          key={item.id}
          className="flex md:flex-row  md:[&:nth-child(2n+1)]:flex-row-reverse  flex-col-reverse gap-10 md:mt-20 mt-10 justify-between"
        >
          <div className="flex-1 flex flex-col justify-center  ">
            {" "}
            <h2 className="md:text-5xl text-3xl pb-5 font-bold ">
              {item.title}
            </h2>
            <p className=" pb-4   text-justify">{item.description}</p>
            <Button href="/" text="see more" />
          </div>
          <div className="flex-1">
            {" "}
            <Image
              src={item.image}
              alt={item.title}
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
