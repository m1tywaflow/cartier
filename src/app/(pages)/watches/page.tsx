import WatchCard from "@/components/molecules/WatchCard/WatchCard";
import { WatchesData } from "@/components/data/Watches";

export default function Watches() {
  return (
    <main className="min-h-screen bg-[#F5F2EE]">
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4">
          Fine Timepieces
        </p>
        <h1 className="text-[clamp(3rem,8vw,7rem)] font-light leading-none tracking-tight text-stone-900 mb-6">
          The Collection
        </h1>
        <div className="w-16 h-px bg-stone-400 mb-8" />
        <p className="max-w-md text-stone-500 text-base leading-relaxed font-light">
          A curated selection of the world's most iconic watches — each piece a
          statement of craft, heritage, and timeless design.
        </p>
      </section>
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8">
          {WatchesData.map((watch) => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>
      </section>
    </main>
  );
}
