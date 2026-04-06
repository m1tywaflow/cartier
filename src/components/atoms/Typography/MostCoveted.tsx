import { Imperial_Script } from "next/font/google";
import Button from "../Button/ButtonViewAll";

const imperial = Imperial_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function MostCoveted() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
      <div className="text-black text-4xl">
        <h1 className="font-serif ">The Most Coveted</h1>
        <h1 className={` ${imperial.className} text-6xl`}>Luxury Watches</h1>
      </div>

      <div className="w-full md:w-auto">
        <Button href="/watches" />
      </div>
    </div>
  );
}
