"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

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


function MobileSlider({
  title,
  titleItalic,
  titleEnd,
  slides,
}: StickyScrollProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, slides.length - 1));

  const slide = slides[current];

  return (
    <div className="relative w-full flex flex-col">
      <div className="px-6 pt-8 pb-4">
        <h2 className="text-white text-2xl font-light leading-snug">
          {title}{" "}
          <em className="font-serif italic font-normal">{titleItalic}</em>{" "}
          {titleEnd}
        </h2>
      </div>

      <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
        <div className="absolute inset-0">
          <Image
            src={slide.bgImage}
            alt=""
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-3/4 h-full">
            <Image
              src={slide.image}
              alt={slide.category}
              fill
              className="object-contain"
              priority={current === 0}
              sizes="75vw"
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none">
          <span className="text-[6rem] font-serif italic text-white leading-none opacity-80">
            {slide.index}
          </span>
        </div>
      </div>

      <div className="px-6 py-6 flex flex-col gap-4">
        <div>
          <p className="text-white text-lg font-medium mb-2">
            {slide.category}
          </p>
          <div className="w-full h-px bg-white/30 mb-3" />
          <p className="text-white/50 text-sm">{slide.description}</p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white disabled:opacity-30 transition-opacity"
          >
            ‹
          </button>

          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === current ? "bg-white scale-125" : "bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === slides.length - 1}
            aria-label="Next"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white disabled:opacity-30 transition-opacity"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}


function DesktopStickyScroll({
  title,
  titleItalic,
  titleEnd,
  slides,
}: StickyScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const labelsRef = useRef<HTMLDivElement[]>([]);
  const numbersRef = useRef<HTMLDivElement[]>([]);
  const bgsRef = useRef<HTMLDivElement[]>([]);

  const currentSlideRef = useRef<number>(0);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const show = (i: number) => {
      gsap.set(bgsRef.current[i], { autoAlpha: 1 });
      gsap.set(imagesRef.current[i], { autoAlpha: 1, yPercent: 0 });
      gsap.set(labelsRef.current[i], { autoAlpha: 1, y: 0 });
      gsap.set(numbersRef.current[i], { autoAlpha: 1, y: 0 });
    };

    const hide = (i: number) => {
      gsap.set(bgsRef.current[i], { autoAlpha: 0 });
      gsap.set(imagesRef.current[i], { autoAlpha: 0, yPercent: 100 });
      gsap.set(labelsRef.current[i], { autoAlpha: 0, y: 20 });
      gsap.set(numbersRef.current[i], { autoAlpha: 0, y: 40 });
    };

    slides.forEach((_, i) => (i === 0 ? show(i) : hide(i)));
  }, [slides]);

  useEffect(() => {
    const SLIDE_HEIGHT =
      typeof window !== "undefined" ? window.innerHeight : 800;

    const goTo = (next: number) => {
      const prev = currentSlideRef.current;
      if (next === prev) return;

      const forward = next > prev;

      gsap.to(bgsRef.current[prev], { autoAlpha: 0, duration: 0.5 });
      gsap.to(imagesRef.current[prev], {
        yPercent: forward ? -30 : 30,
        autoAlpha: 0,
        duration: 0.5,
      });
      gsap.to(labelsRef.current[prev], {
        autoAlpha: 0,
        y: forward ? -20 : 20,
        duration: 0.3,
      });
      gsap.to(numbersRef.current[prev], {
        autoAlpha: 0,
        y: forward ? -40 : 40,
        duration: 0.3,
      });

      gsap.fromTo(
        imagesRef.current[next],
        { yPercent: forward ? 100 : -100, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, duration: 0.5 }
      );
      gsap.to(bgsRef.current[next], { autoAlpha: 1, duration: 0.5 });
      gsap.fromTo(
        labelsRef.current[next],
        { autoAlpha: 0, y: forward ? 20 : -20 },
        { autoAlpha: 1, y: 0, duration: 0.3, delay: 0.15 }
      );
      gsap.fromTo(
        numbersRef.current[next],
        { autoAlpha: 0, y: forward ? 40 : -40 },
        { autoAlpha: 1, y: 0, duration: 0.3, delay: 0.15 }
      );

      currentSlideRef.current = next;
    };

    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrolledIntoSection = -rect.top;

      if (scrolledIntoSection < 0) {
        goTo(0);
        return;
      }

      const maxScroll = slides.length * SLIDE_HEIGHT - SLIDE_HEIGHT;
      const clamped = Math.min(scrolledIntoSection, maxScroll);
      const progress = clamped / maxScroll;
      const slideIndex = Math.min(
        Math.floor(progress * slides.length),
        slides.length - 1
      );

      goTo(slideIndex);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slides]);

  const totalHeight = slides.length * 100;

  return (
    <div
      ref={containerRef}
      style={{ height: `${totalHeight}vh` }}
      className="relative w-full"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden flex"
      >
        <div className="absolute inset-0 z-0">
          {slides.map((slide, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) bgsRef.current[i] = el;
              }}
              className="absolute inset-0"
              style={{ opacity: 0 }}
            >
              <Image
                src={slide.bgImage}
                alt=""
                fill
                className="object-cover"
                priority={i === 0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>

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
                style={{ opacity: 0 }}
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

        <div className="w-[38%] h-full relative overflow-hidden z-10">
          {slides.map((slide, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) imagesRef.current[i] = el;
              }}
              className="absolute inset-0"
              style={{ opacity: 0 }}
            >
              <Image
                src={slide.image}
                alt={slide.category}
                fill
                className="object-contain"
                priority={i === 0}
                sizes="38vw"
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          {slides.map((slide, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) numbersRef.current[i] = el;
              }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              style={{ opacity: 0 }}
            >
              <span className="text-[12rem] font-serif italic text-white leading-none">
                {slide.index}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export function StickyScroll(props: StickyScrollProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (isMobile === null) return null;

  return isMobile ? (
    <MobileSlider {...props} />
  ) : (
    <DesktopStickyScroll {...props} />
  );
}
