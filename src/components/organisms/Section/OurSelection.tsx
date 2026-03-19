"use client";

import dynamic from "next/dynamic";
import { slidesData } from "@/components/data/slidesData";
import SelectionText from "@/components/atoms/Typography/OurSelection";
import WhiteSection from "@/components/molecules/WhiteSection/WhiteSection";

const StickyScroll = dynamic(
  () =>
    import("@/components/molecules/StickyScroll/StickyScroll").then(
      (mod) => mod.StickyScroll
    ),
  { ssr: false }
);

export default function OurSelection() {
  return (
    <section>
      <SelectionText />
      <StickyScroll
        title="Shop Our Selection of"
        titleItalic="Luxury Watches"
        titleEnd="by Category"
        slides={slidesData}
      />
      <WhiteSection />
    </section>
  );
}
