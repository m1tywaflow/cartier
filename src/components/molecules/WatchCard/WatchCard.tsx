import { Watch } from "@/components/data/Watches";
import Image from "next/image";

export default function WatchCard({ watch }: { watch: Watch }) {
  return (
    <div className="group flex flex-col w-full cursor-pointer">
      <div className="relative w-full h-[380px] overflow-hidden bg-stone-100">
        <Image
          src={watch.img}
          alt={watch.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
      </div>
      <div className="pt-4 pb-2">
        <div className="w-6 h-px bg-stone-400 mb-3" />
        <h2 className="text-base font-medium text-stone-900 tracking-wide mb-2">
          {watch.title}
        </h2>
        <p className="text-sm text-stone-400 leading-relaxed font-light line-clamp-2">
          {watch.description}
        </p>
      </div>
    </div>
  );
}
