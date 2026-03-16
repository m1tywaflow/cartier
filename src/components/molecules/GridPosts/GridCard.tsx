import Image from "next/image";
import { Posts } from "./gridData";

export default function GridCards({ img, title, subtitle }: Posts) {
  return (
    <div className="grid grid-rows-[auto_auto] gap-4 pt-">
      <Image
        src={img}
        alt={title}
        width={400}
        height={400}
        className="object-contain w-3/4 hover:scale-90 transition-transform duration-300"
      />
      <div className="max-w-sm">
        <p className="text-black font-serif text-xl">{title}</p>
        <p className="text-gray-400 font-serif text-xl">{subtitle}</p>
      </div>
    </div>
  );
}
