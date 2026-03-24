import Head from "next/head";

const sections = [
  {
    id: "data-collection",
    title: "1. Data We Collect",
    content: `We collect information you provide directly to us, such as when you create an account,
    make a purchase, or contact us for support. This includes your name, email address, and usage data.`,
  },
  {
    id: "data-use",
    title: "2. How We Use Your Data",
    content: `We use collected information to provide and improve our services, process transactions,
    send notifications, and comply with legal obligations.`,
  },
  {
    id: "data-sharing",
    title: "3. Data Sharing",
    content: `We do not sell your personal data. We may share it with trusted third-party providers
    who assist in operating our platform, subject to confidentiality agreements.`,
  },
  {
    id: "cookies",
    title: "4. Cookies",
    content: `We use cookies to improve your experience. You can control cookie settings
    through your browser preferences at any time.`,
  },
  {
    id: "your-rights",
    title: "5. Your Rights",
    content: `You have the right to access, correct, or delete your personal data.
    To exercise these rights, contact us at privacy@example.com.`,
  },
];

const PrivacyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Our privacy and data handling practices"
        />
      </Head>
      <section className="bg-[#f8f8f7] text-black min-h-screen">
        <main className="max-w-4xl mx-auto py-24 px-6">
          <div className="mb-16">
            <h1
              className="text-5xl mb-4"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 tracking-wide uppercase">
              Last updated — March 24, 2026
            </p>
          </div>
          <div className="space-y-8">
            {sections.map(({ id, title, content }) => (
              <section
                key={id}
                className="bg-white/70 backdrop-blur-sm border border-black/5 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
              >
                <h2
                  className="text-lg mb-3"
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontStyle: "italic",
                  }}
                >
                  {title}
                </h2>

                <p className="text-gray-700 leading-relaxed text-[15px]">
                  {content}
                </p>
              </section>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-black/10">
            <p className="text-xs text-gray-500 leading-relaxed">
              If you have any questions regarding this Privacy Policy, please
              contact us.
            </p>
          </div>
        </main>
      </section>
    </>
  );
};

export default PrivacyPage;
