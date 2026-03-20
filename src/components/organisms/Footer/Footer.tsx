import Link from "next/link";
import {
  EXPLORE_LINKS,
  CUSTOMER_LINKS,
  COMPANY_LINKS,
} from "./components/FooterNavLinks";
export function Footer() {
  const columns = [
    { title: "Explore", links: EXPLORE_LINKS },
    { title: "Customer care", links: CUSTOMER_LINKS },
    { title: "Company", links: COMPANY_LINKS },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 justify-between mb-24">
          <div className="flex flex-col sm:flex-row gap-16 lg:gap-32">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-6">
                <span
                  className="text-white text-sm tracking-widest uppercase"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  {col.title}
                </span>
                <div className="flex flex-col">
                  {col.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-white/70 hover:text-white hover:underline text-base transition-colors duration-200 py-3 border-b border-white/10"
                      style={{
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        fontStyle: "italic",
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 max-w-sm w-full">
            <span
              className="text-white text-sm tracking-widest uppercase"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Stay Up-to-Date
            </span>
            <div className="flex border border-white/30">
              <input
                type="email"
                placeholder="EMAIL*"
                className="bg-transparent flex-1 px-4 py-3 text-white text-xs tracking-widest placeholder:text-white/50 outline-none"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              />
              <button
                className="bg-white text-black px-5 py-3 text-xs tracking-widest hover:bg-white/90 transition-colors duration-200"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                SUBSCRIBE
              </button>
            </div>
            <p
              className="text-white/40 text-xs leading-relaxed"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              By subscribing you agree to our{" "}
              <Link href="/privacy" className="underline hover:text-white/70">
                Privacy Policy
              </Link>{" "}
              and receive updates.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <span
            className="text-5xl text-white"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            Cartier
          </span>
        </div>

        <div className="border-t border-white/20 pt-6">
          <p
            className="text-white/40 text-xs"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: "italic",
            }}
          >
            2023 Luxury Watches. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
