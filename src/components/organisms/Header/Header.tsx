"use client";

import { useState } from "react";
import Link from "next/link";
import { HeaderMenu } from "./components/HeaderMenu";
import Button from "@/components/atoms/Button/ButtonViewAll";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a] border-b border-white/10">
        <div className="flex items-center justify-between px-8 h-[60px]">
          <Link
            href="/"
            className="text-white text-2xl"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: "italic",
            }}
          >
            Cartier
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/shop">
              <Button>SHOP NOW</Button>
            </Link>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex flex-col justify-center items-center cursor-pointer gap-[5px] w-8 h-8"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-px bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <HeaderMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
