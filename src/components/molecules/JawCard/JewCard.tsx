"use client";

import { useState } from "react";
import { Jewelry } from "@/components/data/jewelry";
import Image from "next/image";

export default function JewCard({ jewelry }: { jewelry: Jewelry }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="group relative flex flex-col w-full cursor-pointer">
        <div className="relative w-full h-[380px] overflow-hidden bg-stone-100">
          <Image
            src={jewelry.img}
            alt={jewelry.title}
            fill
            className={`object-cover transition duration-500 ${
              open ? "blur-sm scale-105" : "group-hover:scale-105"
            }`}
          />
          <div
            className={`absolute inset-0 transition duration-300 ${
              open ? "bg-black/40" : "bg-black/0 group-hover:bg-black/10"
            }`}
          />
        </div>
        <div className="pt-4 pb-2">
          <div className="w-6 h-px bg-stone-400 mb-3" />
          <h2 className="text-base font-medium text-stone-900 tracking-wide mb-2">
            {jewelry.title}
          </h2>
          <p className="text-sm text-stone-400 leading-relaxed font-light line-clamp-2">
            {jewelry.description}
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setOpen(true)}
            className="bg-black text-white border px-6 py-2 transition hover:bg-stone-800 cursor-pointer duration-200 "
          >
            Open
          </button>
        </div>
        {open && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-[80%] max-w-sm text-center animate-fadeIn">
              <h2 className="text-base font-medium text-stone-900 mb-2">
                {jewelry.title}
              </h2>
              <p className="text-sm text-stone-500 mb-4">
                {jewelry.description}
              </p>

              <button
                onClick={() => setOpen(false)}
                className="mt-2 text-sm text-white bg-black px-6 py-2 hover:bg-white cursor-pointer duration-200 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
