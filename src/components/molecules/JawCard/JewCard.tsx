import { Jewelry } from "@/components/data/jewelry";
import Image from "next/image";

export default function JewCard({ jewelry }: { jewelry: Jewelry }) {
  return (
    <>
      <div className="group flex flex-col w-full cursor-pointer">
        <div className="relative w-full h-[380px] overflow-hidden bg-stone-100">
          <Image
            src={jewelry.img}
            alt={jewelry.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
        </div>
        <div className="pt-4 pb-2">
          <div className="w-6 h-px bg-stone-400 mb-3" />
          <h2 className="text-base font-medium text-stone-900 tracking-wide mb-2">
            {jewelry.title}
          </h2>
          <p className="text-sm text-stone-400 leading-relaxed font-light line-clamp-2">
            {jewelry.description}
          </p>
        </div>
      </div>
    </>
  );
}
