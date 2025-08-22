import Image from "next/image";
import WebSite from "../../../../public/screenshot.png";
import BlogDataId from "@/data/blogDataId";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function PageId({ params }: any) {
  const data = await BlogDataId(params.id);
  return (
    <div className="pb-10">
      <div className="flex justify-between">
        {/* title desc username */}
        <div className="flex-1 flex-col flex justify-between">
          <p className="text-4xl font-bold">{data.title}</p>
          <p>{data.body}</p>
          <div className="flex gap-3 items-center">
            <div className="w-[35px] h-[35px] rounded-full overflow-hidden relative">
              <Image
                src={WebSite}
                alt="user pic"
                fill
                priority
                className="object-cover"
              />
            </div>
            <p>Maxwell</p>
          </div>
        </div>
        {/* image */}
        <div className="flex-1">
          <Image
            src={WebSite}
            alt="title img"
            width={1000}
            height={1000}
            className="w-full h-full display-contain"
            priority
          />
        </div>
      </div>
      {/* text content */}
      <div className="pt-16">
        <p>
          body:est rerum tempore vitae\nsequi sint nihil reprehenderit dolor
          beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil
          molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque
          nisi nulla <br /> body:est rerum tempore vitae\nsequi sint nihil
          reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis
          voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non
          debitis possimus qui neque nisi nulla <br /> body:est rerum tempore
          vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores
          neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut
          reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla
          body:est rerum tempore vitae\nsequi sint nihil reprehenderit dolor
          beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil
          molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque
          nisi nulla <br /> body:est rerum tempore vitae\nsequi sint nihil
          reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis
          voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non
          debitis possimus qui neque nisi nulla <br /> body:est rerum tempore
          vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores
          neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut
          reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla
          body:est rerum tempore vitae\nsequi sint nihil reprehenderit dolor
          beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil
          molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque
          nisi nulla <br /> body:est rerum tempore vitae\nsequi sint nihil
          reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis
          voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non
          debitis possimus qui neque nisi nulla <br /> body:est rerum tempore
          vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores
          neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut
          reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla
          body:est rerum tempore vitae\nsequi sint nihil reprehenderit dolor
          beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil
          molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque
          nisi nulla <br /> body:est rerum tempore vitae\nsequi sint nihil
          reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis
          voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non
          debitis possimus qui neque nisi nulla <br /> body:est rerum tempore
          vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores
          neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut
          reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla
          body:est rerum tempore vitae\nsequi sint nihil reprehenderit dolor
          beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil
          molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque
          nisi nulla <br /> body:est rerum tempore vitae\nsequi sint nihil
          reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis
          voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non
          debitis possimus qui neque nisi nulla <br /> body:est rerum tempore
          vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores
          neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut
          reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla
          body:est rerum tempore vitae\nsequi sint nihil reprehenderit dolor
          beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil
          molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque
          nisi nulla <br /> body:est rerum tempore vitae\nsequi sint nihil
          reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis
          voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non
          debitis possimus qui neque nisi nulla <br /> body:est rerum tempore
          vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores
          neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut
          reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla
        </p>
      </div>
    </div>
  );
}
