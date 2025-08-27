import Image from "next/image";
// import WebSite from "../../../../public/screenshot.png";
import BlogDataId from "@/data/blogDataId";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function PageId({ params }: any) {
  const data = await BlogDataId(params.id);
  return (
    <div className="pb-10">
      <div className="flex md:justify-between gap-10 flex-col-reverse md:flex-row">
        {/* title desc username */}
        <div className="flex-1 flex-col flex justify-between">
          <p className="md:text-4xl text-2xl font-bold ">{data.title}</p>
          <p className="md:py-0 py-5">{data.desc}</p>
          <div className="flex gap-3 items-center">
            <div className="w-[35px] h-[35px] rounded-full overflow-hidden relative">
              <Image
                src={data.img}
                alt="user pic"
                fill
                priority
                className="object-cover"
              />
            </div>
            <p>{data.username}</p>
          </div>
        </div>
        {/* image */}
        <div className="flex-1">
          <Image
            src={data.img}
            alt="title img"
            width={1000}
            height={1000}
            className="w-full h-full display-contain "
            priority
          />
        </div>
      </div>
      {/* text content */}
      <div className="pt-16">
        <p className="text-justify">{data.content}</p>
      </div>
    </div>
  );
}
