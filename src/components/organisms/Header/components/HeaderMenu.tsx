"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { NAV_LINKS } from "./NavLinks";

interface HeaderMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HeaderMenu({ isOpen, onClose }: HeaderMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    gsap.set(menuRef.current, { autoAlpha: 0, y: -20 });
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.fromTo(
        linksRef.current,
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.07,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    } else {
      gsap.to(menuRef.current, {
        autoAlpha: 0,
        y: -20,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col justify-center px-12"
      style={{ opacity: 0, visibility: "hidden" }}
    >
      <nav className="flex flex-col gap-8">
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            ref={(el) => {
              if (el) linksRef.current[i] = el;
            }}
            onClick={onClose}
            className="text-white text-5xl md:text-6xl leading-none hover:text-white/60 transition-colors duration-200"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: "italic",
              opacity: 0,
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Link
        href="/shop"
        onClick={onClose}
        className="mt-16 self-start text-xs tracking-widest uppercase border border-white/30 text-white px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
      >
        Shop Now
      </Link>
    </div>
  );
}
