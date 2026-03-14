"use client";

import { useEffect, useState, ReactNode } from "react";

interface FirstVisitLoaderProps {
  children: ReactNode;
}

export default function FirstVisitLoader({ children }: FirstVisitLoaderProps) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-1000">
          <h1 className="text-white text-5xl font-mono tracking-wide animate-pulse">
            Cartier
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
