"use client";

import { useEffect, useState, ReactNode } from "react";
import ShinyText from "@/components/atoms/ShinyText/ShinyCode";
import { Imperial_Script } from "next/font/google";

const imperial = Imperial_Script({
  subsets: ["latin"],
  weight: "400",
});

interface FirstVisitLoaderProps {
  children: ReactNode;
}

export default function FirstVisitLoader({ children }: FirstVisitLoaderProps) {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    const hideTimer = setTimeout(() => setShowLoader(false), 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {showLoader && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-1000">
          <h1
            className={`text-white text-5xl tracking-wide animate-pulse ${imperial.className}`}
          >
            <ShinyText
              text="Cartier"
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
          </h1>
        </div>
      )}
      <div
        className={`transition-opacity duration-1000 ${
          showLoader ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
