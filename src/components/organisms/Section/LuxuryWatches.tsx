import MostCoveted from "@/components/atoms/Typography/MostCoveted";
import WatchCard from "@/components/molecules/WatchCards/WatchCard";
import { cards } from "@/components/molecules/WatchCards/watchData";

export default function LuxuryWatches() {
  return (
    <section className="w-full p-6 md:p-10 lg:p-20 bg-white border-b border-black">
      <MostCoveted />

      <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-4 mt-8">
        {cards.map((card) => (
          <WatchCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}
