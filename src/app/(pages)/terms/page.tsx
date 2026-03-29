"use client";

import { useState } from "react";

const sections = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
    content: `By accessing or using our services, you confirm that you are at least 18 years of age, have read and understood these Terms, and agree to be bound by them. If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.

These Terms constitute a legally binding agreement between you and Cartier. If you do not agree with any part of these Terms, you must discontinue use of our services immediately.`,
  },
  {
    id: "services",
    number: "02",
    title: "Description of Services",
    content: `We provide a platform that enables clients to discover, purchase, and manage Cartier creations. Our services include but are not limited to: product discovery, bespoke consultation, secure transactions, and personalised account management.

We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of services.`,
  },
  {
    id: "accounts",
    number: "03",
    title: "Client Accounts",
    content: `You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other breach of security.

We reserve the right to terminate accounts, remove content, and cancel orders at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other clients, us, third parties, or for any other reason.`,
  },
  {
    id: "intellectual",
    number: "04",
    title: "Intellectual Property",
    content: `All content, features, and functionality of our services — including but not limited to text, graphics, logos, icons, imagery, and designs — are the exclusive property of Cartier International and are protected by international copyright, trademark, and intellectual property laws.

The Cartier name and all related marks are registered trademarks. Any unauthorised use of Cartier trademarks or intellectual property is strictly prohibited and may result in legal action.`,
  },
  {
    id: "privacy",
    number: "05",
    title: "Privacy & Data",
    content: `Your use of our services is governed by our Privacy Policy, which is incorporated into these Terms by reference. We collect and use your data as described in our Privacy Policy, and by agreeing to these Terms, you consent to such collection and use.

We implement the highest industry-standard security measures to protect your personal and financial data. Your trust is fundamental to the Cartier relationship, and we treat your privacy with the utmost discretion.`,
  },
  {
    id: "liability",
    number: "06",
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by law, Cartier shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with your use of our services.

Our total liability to you for any claims arising under these Terms shall not exceed the amounts paid by you to us in the twelve months preceding the claim.`,
  },
  {
    id: "changes",
    number: "07",
    title: "Changes to Terms",
    content: `We reserve the right to update these Terms at any time. We will notify you of significant changes via email or a prominent notice on our platform at least 30 days before the changes take effect.

Your continued use of our services after the effective date of revised Terms constitutes your acceptance of the changes. If you do not agree to the updated Terms, you must discontinue use of our services.`,
  },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1a1a1a] font-sans">
      <header className="relative z-10 border-b border-black/[0.07] px-8 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-[22px] font-light tracking-[0.35em] uppercase font-serif">
          C<span className="text-[#b5986b]">artier</span>
        </div>
        <span className="text-[10px] tracking-[0.35em] uppercase text-black/30">
          Legal
        </span>
      </header>
      <main className="relative z-10 max-w-7xl mx-auto px-8 pb-24">
        {/* hero */}
        <div className="pt-20 pb-16 border-b border-black/[0.06] grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <h1 className="text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.92] font-light font-serif tracking-[-0.01em] text-[#1a1a1a]">
            Terms of
            <br />
            <em className="not-italic text-[#b5986b]">Service</em>
          </h1>
          <div className="flex flex-col gap-5 pb-2">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#b5986b]">
              Effective January 1, 2025
            </p>
            <p className="text-[15px] leading-[1.8] text-black/45 font-light max-w-sm">
              Please read these terms carefully before using our platform. They
              govern your access to and use of all Cartier products and
              services.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 pt-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#b5986b]/30 to-transparent" />
          <div className="w-1.5 h-1.5 bg-[#b5986b] rotate-45 opacity-60" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#b5986b]/30 to-transparent" />
        </div>

        <div className="flex gap-16 pt-16">
          {/* sidebarg */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-12">
              <p className="text-[9px] tracking-[0.4em] uppercase text-black/20 mb-6">
                Contents
              </p>
              <nav className="flex flex-col gap-0.5">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setActiveSection(s.id)}
                    className={`flex items-center gap-3 py-2.5 pl-3 -ml-3 text-xs tracking-wide border-l transition-all duration-200 ${
                      activeSection === s.id
                        ? "text-[#b5986b] border-[#b5986b]"
                        : "text-black/30 border-transparent hover:text-black/60"
                    }`}
                  >
                    <span className="font-serif text-[13px] text-black/15">
                      {s.number}
                    </span>
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
          {/* content */}
          <div className="flex-1 min-w-0">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-16 pb-16 border-b border-black/[0.05] last:border-0"
                onMouseEnter={() => setActiveSection(section.id)}
              >
                <div className="flex items-start gap-10">
                  <span className="hidden sm:block text-[5rem] leading-none font-light font-serif text-[#b5986b]/[0.12] select-none shrink-0 mt-1">
                    {section.number}
                  </span>
                  <div>
                    <h2 className="font-serif text-[26px] font-normal text-[#1a1a1a] mb-6 tracking-[0.02em]">
                      {section.title}
                    </h2>
                    {section.content.split("\n\n").map((para, j) => (
                      <p
                        key={j}
                        className="text-[14px] leading-[1.9] text-black/50 mb-5 last:mb-0 font-light"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
            ))}

            {/* ctashka */}
            <div className="mt-8 p-10 border border-[#b5986b]/25 bg-gradient-to-br from-[#b5986b]/[0.04] to-[#b5986b]/[0.02] relative">
              <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-[#b5986b]/40" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-[#b5986b]/40" />
              <p className="text-[13px] leading-[1.8] text-black/45 mb-7">
                If you have any questions about these Terms, please contact our
                legal team at{" "}
                <a
                  href="mailto:legal@cartier.com"
                  className="text-[#b5986b] hover:underline"
                >
                  legal@cartier.com
                </a>
                . We aim to respond within 5 business days.
              </p>
              <div className="flex items-center gap-8 flex-wrap">
                <button className="px-9 py-3.5 bg-[#1a1a1a] text-[#faf9f7] text-[10px] tracking-[0.35em] uppercase hover:bg-[#b5986b] transition-colors duration-300">
                  Accept Terms
                </button>
                <a
                  href="#"
                  className="text-[10px] tracking-[0.35em] uppercase text-black/25 hover:text-black/55 transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="relative z-10 border-t border-black/[0.07] px-8 py-8 max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <span className="text-[10px] tracking-[0.25em] uppercase text-black/20">
          © 2025 Cartier International. All rights reserved.
        </span>
        <div className="flex gap-7">
          {["Privacy", "Cookies", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[10px] tracking-[0.25em] uppercase text-black/20 hover:text-black/50 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
