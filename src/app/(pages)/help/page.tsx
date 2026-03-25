"use client";

import { useState } from "react";

const faqs = [
  {
    category: "Getting Started",
    icon: "✦",
    items: [
      {
        q: "How do I create an account on Catrier?",
        a: "Click 'Sign Up' in the top right corner, fill in your name, email, and password. You'll receive a confirmation email — click the link inside to activate your account.",
      },
      {
        q: "Is Catrier free to use?",
        a: "Catrier offers a free tier with core features. Premium plans unlock advanced analytics, priority support, and extended storage.",
      },
      {
        q: "What browsers are supported?",
        a: "Chrome, Firefox, Safari, and Edge (latest versions).",
      },
    ],
  },
  {
    category: "Account & Billing",
    icon: "◈",
    items: [
      {
        q: "How do I change my password?",
        a: "Go to Settings → Security → Change Password.",
      },
      {
        q: "How do I cancel my subscription?",
        a: "Settings → Billing → Cancel.",
      },
      {
        q: "Can I get a refund?",
        a: "We offer a 14-day refund policy.",
      },
    ],
  },
];

export default function Help() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggle = (key: string) => setOpenItem(openItem === key ? null : key);

  const filtered = faqs
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.q.toLowerCase().includes(search.toLowerCase()) ||
          item.a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter(
      (cat) =>
        cat.items.length > 0 &&
        (!activeCategory || cat.category === activeCategory)
    );

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        .serif { font-family: 'Instrument Serif', serif; }
        .sans { font-family: 'DM Sans', sans-serif; }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .faq-answer.open {
          max-height: 300px;
        }

        .faq-row:hover {
          background: #fafafa;
        }

        .cat-btn.active {
          background: black;
          color: white;
          border-color: black;
        }
      `}</style>
      <header className="border-b border-gray-200 px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="text-black text-xl">◈</span>
          <span className="serif text-xl">Catrier</span>
        </div>
        <nav className="hidden md:flex gap-8 sans text-sm text-gray-500">
          <a href="#" className="hover:text-black">
            Product
          </a>
          <a href="#" className="hover:text-black">
            Pricing
          </a>
          <a href="#" className="text-black">
            Help
          </a>
        </nav>
        <a
          href="#"
          className="sans text-sm border border-gray-300 px-4 py-2 hover:border-black hover:text-black transition"
        >
          Sign in
        </a>
      </header>
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="sans text-xs uppercase tracking-widest text-gray-500 mb-6">
          Help Center
        </p>
        <h1 className="serif text-5xl leading-tight mb-6">
          How can we <br />
          <span className="italic">help you?</span>
        </h1>
        <p className="sans text-gray-500 text-lg max-w-md mx-auto mb-10">
          Search or browse categories below.
        </p>
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-300 px-5 py-4 text-sm text-black"
          />
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setActiveCategory(null)}
            className={`cat-btn text-xs px-4 py-2 border border-gray-300 ${
              !activeCategory ? "active" : "text-gray-500"
            }`}
          >
            All
          </button>
          {faqs.map((cat) => (
            <button
              key={cat.category}
              onClick={() =>
                setActiveCategory(
                  activeCategory === cat.category ? null : cat.category
                )
              }
              className={`cat-btn text-xs px-4 py-2 border border-gray-300 ${
                activeCategory === cat.category ? "active" : "text-gray-500"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 mb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            No results found
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((cat) => (
              <div
                key={cat.category}
                className="border border-gray-200 bg-white"
              >
                <div className="px-6 pt-6 pb-4 border-b border-gray-200">
                  <span className="text-xs text-gray-500 uppercase">
                    {cat.category}
                  </span>
                </div>

                {cat.items.map((item, i) => {
                  const key = `${cat.category}-${i}`;
                  const isOpen = openItem === key;

                  return (
                    <div
                      key={i}
                      className="faq-row border-b border-gray-200 last:border-0"
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full text-left px-6 py-5 flex justify-between"
                      >
                        <span className="text-sm text-gray-800">{item.q}</span>
                        <span className="text-xs">{isOpen ? "-" : "+"}</span>
                      </button>

                      <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                        <p className="text-sm text-gray-500 px-6 pb-5">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
