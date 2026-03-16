import { Imperial_Script } from "next/font/google";
const imperial = Imperial_Script({
  subsets: ["latin"],
  weight: "400",
});
export default function LuxuryTimepieces() {
  return (
    <div>
      <div className="text-black text-4xl">
        <h1 className="font-serif ">Experience the Finest Features</h1>
        <h1>
          in Our
          <span className={`ml-4 ${imperial.className} text-6xl`}>
            Luxury Timepieces
          </span>
        </h1>
      </div>
      <div className="mt-6">
        <button className="relative group text-black cursor-pointer">
          SHOP NOW
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-800 transition-all duration-300 group-hover:w-full" />
        </button>
      </div>
    </div>
  );
}
