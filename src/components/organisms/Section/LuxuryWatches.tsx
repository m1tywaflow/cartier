import MostCovated from "@/components/atoms/Typography/MostCovated";
import WatchCard from "@/components/molecules/WatchCards/WatchCard";
import { cards } from "@/components/molecules/WatchCards/watchData";
export default function LuxuryWatches() {
  return (
    <section className="w-full p-20 bg-white">
      <MostCovated />

      <div className="flex gap-2 justify-between mt-8 ">
        {cards.map((card) => (
          <WatchCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}
