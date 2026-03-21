"use client";

import { useState } from "react";

const sections = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
    content: `By accessing or using our services, you confirm that you are at least 18 years of age, have read and understood these Terms, and agree to be bound by them. If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.

These Terms constitute a legally binding agreement between you and our company. If you do not agree with any part of these Terms, you must discontinue use of our services immediately.`,
  },
  {
    id: "services",
    number: "02",
    title: "Description of Services",
    content: `We provide a platform that enables users to create, manage, and distribute digital content. Our services include but are not limited to: content creation tools, storage solutions, collaboration features, and analytics dashboards.

We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of services.`,
  },
  {
    id: "accounts",
    number: "03",
    title: "User Accounts",
    content: `You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other breach of security.

We reserve the right to terminate accounts, remove content, and cancel subscriptions at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, third parties, or for any other reason.`,
  },
  {
    id: "intellectual",
    number: "04",
    title: "Intellectual Property",
    content: `All content, features, and functionality of our services — including but not limited to text, graphics, logos, icons, images, audio clips, and software — are the exclusive property of our company and are protected by international copyright, trademark, and other intellectual property laws.

You retain ownership of content you create using our services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content solely for the purpose of providing our services.`,
  },
  {
    id: "privacy",
    number: "05",
    title: "Privacy & Data",
    content: `Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. We collect and use your data as described in our Privacy Policy, and by agreeing to these Terms, you consent to such collection and use.

We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security of your information.`,
  },
  {
    id: "liability",
    number: "06",
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by law, our company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with your use of our services.

Our total liability to you for any claims arising under these Terms shall not exceed the amounts paid by you to us in the twelve months preceding the claim.`,
  },
  {
    id: "changes",
    number: "07",
    title: "Changes to Terms",
    content: `We reserve the right to update these Terms at any time. We will notify you of significant changes via email or a prominent notice on our platform at least 30 days before the changes take effect.

Your continued use of our services after the effective date of revised Terms constitutes your acceptance of the changes. If you do not agree to the updated Terms, you must stop using our services.`,
  },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#e8e4dc] font-['Georgia',_serif]">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" />
      {/* header */}
      <header className="relative z-10 border-b border-[#ffffff0f] px-8 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-[#c8a96e]" />
          <span className="text-sm tracking-[0.2em] uppercase text-[#c8a96e] font-['system-ui']">
            Acme Corp
          </span>
        </div>
        <span className="text-xs tracking-widest uppercase text-[#ffffff30] font-['system-ui']">
          Legal
        </span>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-8 pb-24">
        {/* hero */}
        <div className="pt-20 pb-16 border-b border-[#ffffff0a]">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c8a96e] mb-6 font-['system-ui']">
            Effective January 1, 2025
          </p>
          <h1
            className="text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-normal text-[#e8e4dc] mb-8"
            style={{ letterSpacing: "-0.02em" }}
          >
            Terms of
            <br />
            <em className="not-italic text-[#c8a96e]">Service</em>
          </h1>
          <p className="max-w-xl text-[#ffffff55] text-base leading-relaxed font-['system-ui'] font-light">
            Please read these terms carefully before using our platform. They
            govern your access to and use of all our products and services.
          </p>
        </div>

        <div className="flex gap-16 pt-16">
          {/* sidebarnav */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-12">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#ffffff25] mb-6 font-['system-ui']">
                Contents
              </p>
              <nav className="flex flex-col gap-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setActiveSection(s.id)}
                    className={`group flex items-center gap-3 py-2 text-sm transition-all duration-200 font-['system-ui'] ${
                      activeSection === s.id
                        ? "text-[#c8a96e]"
                        : "text-[#ffffff30] hover:text-[#ffffff70]"
                    }`}
                  >
                    <span className="text-[10px] text-[#ffffff20] group-hover:text-[#c8a96e40] transition-colors">
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
            {sections.map((section, i) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-16 pb-16 border-b border-[#ffffff08] last:border-0"
                onMouseEnter={() => setActiveSection(section.id)}
              >
                <div className="flex items-start gap-8">
                  <span className="hidden sm:block text-[4rem] leading-none font-normal text-[#ffffff08] select-none shrink-0 mt-1">
                    {section.number}
                  </span>
                  <div>
                    <h2
                      className="text-2xl font-normal text-[#e8e4dc] mb-6"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {section.title}
                    </h2>
                    {section.content.split("\n\n").map((para, j) => (
                      <p
                        key={j}
                        className="text-[#ffffff50] leading-[1.85] text-[15px] mb-5 last:mb-0 font-['system-ui'] font-light"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
            ))}

            {/* cta */}
            <div className="mt-8 p-8 border border-[#c8a96e20] bg-[#c8a96e06] rounded-sm">
              <p className="text-[#ffffff40] text-sm leading-relaxed font-['system-ui'] font-light mb-6">
                If you have any questions about these Terms, please contact our
                legal team at{" "}
                <a
                  href="mailto:legal@acme.com"
                  className="text-[#c8a96e] hover:underline"
                >
                  legal@acme.com
                </a>
                . We aim to respond within 5 business days.
              </p>
              <div className="flex items-center gap-6">
                <button className="px-6 py-3 bg-[#c8a96e] text-[#0c0c0e] text-sm tracking-wider uppercase font-['system-ui'] hover:bg-[#d4b87a] transition-colors">
                  Accept Terms
                </button>
                <a
                  href="#"
                  className="text-sm text-[#ffffff25] hover:text-[#ffffff50] tracking-wider uppercase font-['system-ui'] transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="relative z-10 border-t border-[#ffffff08] px-8 py-8 max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-[11px] text-[#ffffff20] tracking-widest uppercase font-['system-ui']">
          © 2025 Acme Corp. All rights reserved.
        </span>
        <div className="flex gap-6">
          {["Privacy", "Cookies", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[11px] text-[#ffffff20] hover:text-[#ffffff50] tracking-widest uppercase font-['system-ui'] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
