// import { Watch } from "@/components/data/Watches";
// import Image from "next/image";
// import { Modal } from "@components/atoms/Modal";
// export default function WatchCard({ watch }: { watch: Watch }) {
//   return (
//     <div className="group flex flex-col w-full cursor-pointer">
//       <div className="relative w-full h-[380px] overflow-hidden bg-stone-100">
//         <Image
//           src={watch.img}
//           alt={watch.title}
//           fill
//           className="object-cover transition-transform duration-700 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
//       </div>
//       <div className="pt-4 pb-2">
//         <div className="w-6 h-px bg-stone-400 mb-3" />
//         <h2 className="text-base font-medium text-stone-900 tracking-wide mb-2">
//           {watch.title}
//         </h2>
//         <p className="text-sm text-stone-400 leading-relaxed font-light line-clamp-2">
//           {watch.description}
//         </p>
//       </div>
//       <Modal>
//         <Modal.Trigger>
//           <div className="flex justify-center mt-4">
//             <button className="bg-black text-white px-6 py-2 cursor-pointer transition duration-200 hover:bg-stone-800">
//               goo
//             </button>
//           </div>
//         </Modal.Trigger>
//         <Modal.Content>
//           <div className="flex flex-col items-center justify-center text-center p-6">
//             <h2 className="text-base font-medium text-stone-900 tracking-wide mb-2">
//               {watch.title}
//             </h2>
//             <p className="text-sm text-stone-400 leading-relaxed font-light">
//               {watch.description}
//             </p>
//           </div>
//         </Modal.Content>
//       </Modal>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { Watch } from "@/components/data/Watches";
import Image from "next/image";

export default function WatchCard({ watch }: { watch: Watch }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group relative flex flex-col w-full cursor-pointer">
      <div className="relative w-full h-[380px] overflow-hidden bg-stone-100">
        <Image
          src={watch.img}
          alt={watch.title}
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
          {watch.title}
        </h2>
        <p className="text-sm text-stone-400 leading-relaxed font-light line-clamp-2">
          {watch.description}
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white px-6 py-2 transition hover:bg-stone-800"
        >
          Open
        </button>
      </div>
      {open && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-[80%] max-w-sm text-center animate-fadeIn">
            <h2 className="text-base font-medium text-stone-900 mb-2">
              {watch.title}
            </h2>
            <p className="text-sm text-stone-500 mb-4">{watch.description}</p>

            <button
              onClick={() => setOpen(false)}
              className="mt-2 text-sm text-stone-600 hover:text-black"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
