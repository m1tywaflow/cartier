import SelectionText from "@/components/atoms/Typography/OurSelection";
import { StickyScroll } from "@/components/molecules/StickyScroll/StickyScroll";
export default function OurSelection() {
  return (
    <>
      <section className="pb-200">
        <SelectionText />
        <div>
          <StickyScroll
            title="Shop Our Selection of"
            titleItalic="Luxury Watches"
            titleEnd="by Category"
            slides={[
              {
                index: "01",
                category: "Haute horlogerie",
                description: "The highest standard in watchmaking.",
                image: "/hero/first-scene/watch1.png",
                bgImage: "/hero/first-scene/hero1.jpg",
              },
              {
                index: "02",
                category: "Tourbillon watches",
                description: "Designed to counteract the effects of gravity.",
                image: "/hero/second-scene/watch2.png",
                bgImage: "/hero/second-scene/hero2.jpg",
              },
              {
                index: "03",
                category: "Diamond watches",
                description:
                  "Luxury timepieces that feature diamond embellishments.",
                image: "/hero/third-scene/watch3.png",
                bgImage: "/hero/third-scene/hero3.jpg",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
