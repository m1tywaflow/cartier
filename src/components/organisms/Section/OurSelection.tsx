// "use client";
// import SelectionText from "@/components/atoms/Typography/OurSelection";
// import { StickyScroll } from "@/components/molecules/StickyScroll/StickyScroll";
// import WhiteSection from "@/components/molecules/WhiteSection/WhiteSection";
// // import WatchBanner from "@/components/molecules/MouseMoveSec/BannerMouseMove";

// export default function OurSelection() {
//   return (
//     <>
//       <section>
//         <SelectionText />
//         <div>
//           <StickyScroll
//             title="Shop Our Selection of"
//             titleItalic="Luxury Watches"
//             titleEnd="by Category"
//             slides={[
//               {
//                 index: "01",
//                 category: "Haute horlogerie",
//                 description: "The highest standard in watchmaking.",
//                 image: "/hero/first-scene/watch1.png",
//                 bgImage: "/hero/first-scene/hero1.jpg",
//               },
//               {
//                 index: "02",
//                 category: "Tourbillon watches",
//                 description: "Designed to counteract the effects of gravity.",
//                 image: "/hero/second-scene/watch2.png",
//                 bgImage: "/hero/second-scene/hero2.jpg",
//               },
//               {
//                 index: "03",
//                 category: "Diamond watches",
//                 description:
//                   "Luxury timepieces that feature diamond embellishments.",
//                 image: "/hero/third-scene/watch3.png",
//                 bgImage: "/hero/third-scene/hero3.jpg",
//               },
//             ]}
//           />
//         </div>
//         <WhiteSection />
//         {/* <WatchBanner /> */}
//       </section>
//     </>
//   );
// }
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
  { ssr: false } // 🔥 важно!
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
