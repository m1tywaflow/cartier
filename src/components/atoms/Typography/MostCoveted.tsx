import { Imperial_Script } from "next/font/google";
import Button from "../Button/ButtonViewAll";
import { div } from "motion/react-client";
const imperial = Imperial_Script({
  subsets: ["latin"],
  weight: "400",
});
export default function MostCoveted() {
  return (
    <div className="flex justify-between">
      <div className="text-black text-4xl">
        <h1 className="font-serif ">The Most Coveted</h1>
        <h1 className={` ${imperial.className} text-6xl`}>Luxury Watches</h1>
      </div>
      <Button />
    </div>
  );
}
