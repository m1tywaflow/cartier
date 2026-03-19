"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

function WatchMarquee({ text }: { text: string }) {
  const repeated = Array(8).fill(text);
  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 12s linear infinite" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="shrink-0 text-5xl italic font-light text-[#7fffd4]"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {item}
            <span className="mx-6 opacity-50">–</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function WatchBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const watchRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(watchRef.current, { scale: 1.8 });
    gsap.set(marqueeRef.current, { opacity: 0, y: 20 });

    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateY = ((e.clientX - centerX) / rect.width) * 20;
      const rotateX = -((e.clientY - centerY) / rect.height) * 20;

      gsap.to(watchRef.current, {
        rotateY,
        rotateX,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to(leftRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.6,
        ease: "power3.inOut",
      });
      gsap.to(watchRef.current, {
        x: "-20%",
        scale: 1.1,
        duration: 0.6,
        ease: "power3.inOut",
      });
      gsap.to(marqueeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(leftRef.current, {
        x: "0%",
        opacity: 1,
        duration: 0.6,
        ease: "power3.inOut",
      });
      gsap.to(watchRef.current, {
        x: "0%",
        scale: 1.8,
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power3.inOut",
      });
      gsap.to(marqueeRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
      });
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <section
        ref={sectionRef}
        className="relative w-full h-[620px] overflow-hidden cursor-pointer mx-auto max-w-[95%] rounded-sm"
        style={{ perspective: "1000px" }}
      >
        <Image
          src="/bg/bgRed.jpg"
          alt="background"
          fill
          className="object-cover"
          sizes="95vw"
        />
        <div
          ref={leftRef}
          className="absolute left-0 top-0 h-full w-[45%] bg-red-700 z-10 flex flex-col justify-center px-12"
        >
          <p className="text-white/60 text-xs tracking-widest uppercase mb-3">
            Upgrade
          </p>
          <h2 className="text-white font-serif italic text-4xl leading-tight mb-4">
            Your Timepiece
            <br />
            <span className="not-italic font-light">Collection Today</span>
          </h2>
          <p className="text-white/70 text-sm max-w-xs leading-relaxed">
            Don&apos;t miss out on the opportunity to upgrade your timepiece
            collection today and add a touch of elegance to your everyday look.
          </p>
        </div>
        <div
          ref={watchRef}
          className="absolute right-0 top-0 h-full w-[70%] z-20"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src="/hero/first-scene/watch1.png"
            alt="watch"
            fill
            className="object-contain"
            sizes="70vw"
          />
        </div>
        <div
          ref={marqueeRef}
          className="absolute inset-0 flex items-center w-full z-10 overflow-hidden"
        >
          <WatchMarquee text="Shop Our Selection" />
        </div>
      </section>
    </>
  );
}
