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
          name="descrition"
          content="Our privacy and data handling practices"
        />
      </Head>
      <main className="max-w-3xl mx-auto py-30 px-4">
        <h1 className="text-4xl">Privacy Policy</h1>
        <p className="text-lg text-gray-700 py-6">
          Last updated: March 20, 2026
        </p>
        <div className="space-y-8">
          {sections.map(({ id, title, content }) => (
            <section key={id}>
              <h1 className="text-xl font-semibold mb-2">{title}</h1>
              <p className="text-gray-600 leading-relaxed">{content}</p>
            </section>
          ))}
        </div>
      </main>
    </>
  );
};

export default PrivacyPage;
