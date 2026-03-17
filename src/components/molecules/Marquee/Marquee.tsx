interface MarqueeProps {
  text: string;
  speed?: number;
}

export function Marquee({ text, speed = 30 }: MarqueeProps) {
  const repeated = Array(6).fill(text);

  return (
    <div className="overflow-hidden bg-black py-4 border-y border-white/10">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-6xl md:text-8xl xl:text-9xl text-white italic font-light shrink-0"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {item}
            <span className="mx-8 opacity-60">–</span>
          </span>
        ))}
      </div>
    </div>
  );
}
