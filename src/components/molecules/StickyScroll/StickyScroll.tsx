// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// interface Slide {
//   index: string;
//   category: string;
//   description: string;
//   image: string;
//   bgImage: string;
// }

// interface StickyScrollProps {
//   title: string;
//   titleItalic: string;
//   titleEnd: string;
//   slides: Slide[];
// }

// export function StickyScroll({
//   title,
//   titleItalic,
//   titleEnd,
//   slides,
// }: StickyScrollProps) {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const imagesRef = useRef<HTMLDivElement[]>([]);
//   const labelsRef = useRef<HTMLDivElement[]>([]);
//   const numbersRef = useRef<HTMLDivElement[]>([]);
//   const bgsRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: `+=${slides.length * 1400 + 2000}`,
//           pin: true,
//           scrub: 1,
//           pinSpacing: true,
//           anticipatePin: 1,
//         },
//       });

//       slides.forEach((_, i) => {
//         if (i === 0) return;
//         tl.fromTo(
//           bgsRef.current[i],
//           { opacity: 0 },
//           { opacity: 1, duration: 1 },
//           i - 1
//         );
//         tl.to(bgsRef.current[i - 1], { opacity: 0, duration: 1 }, i - 1);

//         tl.fromTo(
//           imagesRef.current[i],
//           { yPercent: 100, opacity: 0 },
//           { yPercent: 0, opacity: 1, duration: 1 },
//           i - 1
//         );
//         tl.to(
//           imagesRef.current[i - 1],
//           { yPercent: -30, opacity: 0, duration: 1 },
//           i - 1
//         );
//         tl.fromTo(
//           numbersRef.current[i],
//           { opacity: 0, y: 40 },
//           { opacity: 1, y: 0, duration: 0.5 },
//           i - 0.5
//         );
//         tl.to(
//           numbersRef.current[i - 1],
//           { opacity: 0, y: -40, duration: 0.5 },
//           i - 0.5
//         );
//         tl.fromTo(
//           labelsRef.current[i],
//           { opacity: 0, y: 20 },
//           { opacity: 1, y: 0, duration: 0.5 },
//           i - 0.5
//         );
//         tl.to(
//           labelsRef.current[i - 1],
//           { opacity: 0, y: -20, duration: 0.5 },
//           i - 0.5
//         );
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, [slides]);

//   return (
//     <section ref={sectionRef} className="relative h-screen w-full flex">
//       {/* scene */}
//       <div className="absolute inset-0 z-0">
//         {slides.map((slide, i) => (
//           <div
//             key={i}
//             ref={(el) => {
//               if (el) bgsRef.current[i] = el;
//             }}
//             className="absolute inset-0"
//             style={{ opacity: i === 0 ? 1 : 0 }}
//           >
//             <Image
//               src={slide.bgImage}
//               alt="Watches"
//               fill
//               className="object-cover"
//               priority={i === 0}
//             />
//           </div>
//         ))}
//       </div>

//       {/* left-side */}
//       <div className="w-[52%] h-full flex flex-col justify-between p-12 z-10 relative">
//         <h2 className="text-white text-3xl font-light leading-snug max-w-xs">
//           {title}{" "}
//           <em className="font-serif italic font-normal">{titleItalic}</em>{" "}
//           {titleEnd}
//         </h2>
//         <div className="relative h-24">
//           {slides.map((slide, i) => (
//             <div
//               key={i}
//               ref={(el) => {
//                 if (el) labelsRef.current[i] = el;
//               }}
//               className="absolute bottom-0 left-0"
//               style={{ opacity: i === 0 ? 1 : 0 }}
//             >
//               <p className="text-white text-lg font-medium mb-2">
//                 {slide.category}
//               </p>
//               <div className="w-full h-px bg-white/30 mb-3" />
//               <p className="text-white/50 text-sm">{slide.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* imgs */}
//       <div className="w-[38%] h-full relative overflow-hidden z-10">
//         {slides.map((slide, i) => (
//           <div
//             key={i}
//             ref={(el) => {
//               if (el) imagesRef.current[i] = el;
//             }}
//             className="absolute inset-0"
//             style={{ opacity: i === 0 ? 1 : 0 }}
//           >
//             <Image
//               src={slide.image}
//               alt={slide.category}
//               fill
//               className="object-contain"
//               priority={i === 0}
//             />
//           </div>
//         ))}
//       </div>

//       {/* numberss */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-20">
//         {slides.map((slide, i) => (
//           <div
//             key={i}
//             ref={(el) => {
//               if (el) numbersRef.current[i] = el;
//             }}
//             className="absolute bottom-0"
//             style={{ opacity: i === 0 ? 1 : 0 }}
//           >
//             <span className="text-[12rem] font-serif italic leading-none select-none text-white">
//               {slide.index}
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Slide {
  index: string;
  category: string;
  description: string;
  image: string;
  bgImage: string;
}

interface StickyScrollProps {
  title: string;
  titleItalic: string;
  titleEnd: string;
  slides: Slide[];
}

export function StickyScroll({
  title,
  titleItalic,
  titleEnd,
  slides,
}: StickyScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const labelsRef = useRef<HTMLDivElement[]>([]);
  const numbersRef = useRef<HTMLDivElement[]>([]);
  const bgsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const SCROLL_PER_SLIDE = 600;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(slides.length - 1) * SCROLL_PER_SLIDE}`,
          pin: true,
          scrub: 1,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      slides.forEach((_, i) => {
        if (i === 0) return;

        const pos = (i - 1) * 2;

        tl.fromTo(
          bgsRef.current[i],
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          pos
        );
        tl.to(bgsRef.current[i - 1], { opacity: 0, duration: 1 }, pos);

        tl.fromTo(
          imagesRef.current[i],
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1 },
          pos
        );
        tl.to(
          imagesRef.current[i - 1],
          { yPercent: -30, opacity: 0, duration: 1 },
          pos
        );

        tl.fromTo(
          numbersRef.current[i],
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.5 },
          pos + 0.5
        );
        tl.to(
          numbersRef.current[i - 1],
          { opacity: 0, y: -40, duration: 0.5 },
          pos + 0.5
        );

        tl.fromTo(
          labelsRef.current[i],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          pos + 0.5
        );
        tl.to(
          labelsRef.current[i - 1],
          { opacity: 0, y: -20, duration: 0.5 },
          pos + 0.5
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [slides]);

  return (
    <section ref={sectionRef} className="relative h-screen w-full flex overflow-hidden">
      {/* scene */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) bgsRef.current[i] = el;
            }}
            className="absolute inset-0"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <Image
              src={slide.bgImage}
              alt="Watches"
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* left-side */}
      <div className="w-[52%] h-full flex flex-col justify-between p-12 z-10 relative">
        <h2 className="text-white text-3xl font-light leading-snug max-w-xs">
          {title}{" "}
          <em className="font-serif italic font-normal">{titleItalic}</em>{" "}
          {titleEnd}
        </h2>
        <div className="relative h-24">
          {slides.map((slide, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) labelsRef.current[i] = el;
              }}
              className="absolute bottom-0 left-0"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <p className="text-white text-lg font-medium mb-2">
                {slide.category}
              </p>
              <div className="w-full h-px bg-white/30 mb-3" />
              <p className="text-white/50 text-sm">{slide.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* imgs */}
      <div className="w-[38%] h-full relative overflow-hidden z-10">
        {slides.map((slide, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) imagesRef.current[i] = el;
            }}
            className="absolute inset-0"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <Image
              src={slide.image}
              alt={slide.category}
              fill
              className="object-contain"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* numbers */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-20">
        {slides.map((slide, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) numbersRef.current[i] = el;
            }}
            className="absolute bottom-0"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <span className="text-[12rem] font-serif italic leading-none select-none text-white">
              {slide.index}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}