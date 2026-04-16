import Image from "next/image";
import WatchBanner from "../MouseMoveSec/BannerMouseMove";

export default function WhiteSection() {
  return (
    <section className="w-full relative py-16 md:py-24 lg:py-32">
      <Image
        src="/bg/bgWhite.jpg"
        alt="background"
        fill
        className="object-cover"
      />
      <div className="relative z-10 max-w-3xl mx-auto text-center font-serif px-5 sm:px-8 text-black">
        <h1 className="text-2xl sm:text-3xl md:text-4xl leading-snug">
          I purchased my new watch from this website and I couldn&apos;t be
          happier with my experience. The customer service was{" "}
          <em>top-notch</em>, with helpful and knowledgeable staff who were able
          to answer all of my questions.
        </h1>
        <div className="pt-8 sm:pt-10 md:pt-14">
          <p className="text-xl sm:text-2xl">Sarah Smith</p>
          <p className="text-base sm:text-xl text-gray-500">CEO of Juicy Watches</p>
        </div>
      </div>
      <div className="pt-10 sm:pt-14 md:pt-20">
        <WatchBanner />
      </div>
    </section>
  );
}