import Image from "next/image";
import { Card } from "./watchData";

export default function WatchCard({ img, title, price, bgColor }: Card) {
  return (
    <div className="flex flex-col w-full">
      <div
        style={{ backgroundColor: bgColor ?? "#f5f5f5" }}
        className="w-full aspect-square flex items-center justify-center overflow-hidden"
      >
        <Image
          src={img}
          alt={title}
          width={400}
          height={400}
          className="object-contain w-3/4 h-3/4 hover:scale-90 transition-transform duration-300 cursor-grab"
        />
      </div>
      <div className="pt-3">
        <p className="text-black text-lg font-medium">{title}</p>
        <p className="text-gray-500 text-sm">{price}</p>
      </div>
    </div>
  );
}
