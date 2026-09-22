import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Tacoza",
  description:
    "Empower your business with Tacoza’s all-in-one solution, built to optimize your ordering process and management.",
};

export default function Privacy() {
  return (
    <>
      <section className="relative">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-bl-[100px] mb-16 md:mb-0 bg-gradient-to-tr from-rose-600 to-rose-500 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl min-h-[55vh] md:min-h-[30vh] mx-auto px-4 sm:px-6">
          <div className="pt-36 md:pt-40 md:pb-20">
            {/* Hero content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
              {/* Content */}
              <div className="md:w-[600px]">
                {/* Copy */}
                <h1
                  className="h1 text-white mb-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Privacy Policy
                </h1>
                <p
                  className="text-lg text-rose-200 mb-8"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Empower your business with Tacoza’s all-in-one solution,{" "}
                  <br className="hidden md:block" /> built to optimize your
                  ordering process and management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto mb-12 md:mt-12 p-4 sm:px-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Introduction</h1>{" "}
        <p className="text-slate-500 font-[350]">
          At Tacoza, we are committed to protecting your privacy. This Privacy
          Policy outlines how we collect, use, and safeguard your personal data
          when you visit or use our website and services. By accessing or using
          Tacoza, you agree to this Privacy Policy. If you do not agree, please
          refrain from using our services. We value your trust and are dedicated
          to ensuring the security and confidentiality of your data.
        </p>{" "}
        <hr className="my-4" />{" "}
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          1. Data We Collect
        </h1>{" "}
        <p className="text-slate-500 font-[350]">
          To provide you with the best possible experience on Tacoza, we may
          collect various types of data from you. This includes:
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          1.1 Personal Information
        </h3>{" "}
        <p className="text-slate-500 font-[350]">
          We collect personal data when you voluntarily provide it, such as when
          you register for an account, make a purchase, or contact customer
          support. This data may include:
        </p>{" "}
        <ul className="text-slate-500 font-[350] list-disc ml-6">
          {" "}
          <li>Your name</li> <li>Email address</li> <li>Phone number</li>{" "}
          <li>Billing and shipping address</li> <li>Payment details</li>{" "}
        </ul>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          1.2 Automatically Collected Information
        </h3>{" "}
        <p className="text-slate-500 font-[350]">
          When you visit our platform, certain information is automatically
          collected to help us improve your experience. This may include:
        </p>{" "}
        <ul className="text-slate-500 font-[350] list-disc ml-6">
          {" "}
          <li>IP address</li> <li>Browser type and version</li>{" "}
          <li>Operating system</li> <li>Pages viewed on our website</li>{" "}
          <li>Time spent on our platform</li>{" "}
        </ul>{" "}
        <hr className="my-4" />{" "}
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          2. How We Use Your Data
        </h1>{" "}
        <p className="text-slate-500 font-[350]">
          Tacoza uses your data to provide, improve, and personalize our
          services. Below are the ways in which we utilize the information we
          collect:
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          2.1 To Provide Our Services
        </h3>{" "}
        <p className="text-slate-500 font-[350]">
          We use your personal information to process your orders, manage your
          account, and deliver our products or services to you. For example, we
          may use your email address to send order confirmations or receipts.
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          2.2 To Improve Our Platform
        </h3>{" "}
        <p className="text-slate-500 font-[350]">
          We analyze how users interact with our platform to improve its
          performance and functionality. Data such as pages visited and time
          spent helps us optimize user experience.
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          2.3 Marketing and Communication
        </h3>{" "}
        <p className="text-slate-500 font-[350]">
          We may use your contact information to send promotional materials,
          special offers, or newsletters. If you prefer not to receive marketing
          emails, you can opt-out at any time by{" "}
          <Link
            href="/"
            className="text-slate-500 underline hover:text-rose-500 font-[350]"
          >
            clicking here
          </Link>
          .
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          2.4 Legal Obligations
        </h3>{" "}
        <p className="text-slate-500 font-[350]">
          In certain cases, we may be required by law to process and retain your
          personal data. This could include compliance with regulatory
          requirements, legal proceedings, or requests from government
          authorities.
        </p>{" "}
        <hr className="my-4" />{" "}
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          3. Sharing Your Information
        </h1>{" "}
        <p className="text-slate-500 font-[350]">
          We take your privacy seriously and only share your information with
          third parties in the following circumstances:
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          3.1 Service Providers
        </h3>{" "}
        <p className="text-slate-500 font-[350]">
          We may share your data with trusted service providers who assist us in
          operating our platform or conducting business activities. These
          include payment processors, hosting providers, and customer support
          tools. These third parties are bound by confidentiality agreements and
          are only allowed to use your data for the purposes we specify.
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          3.2 Legal Compliance
        </h3>{" "}
        <p className="text-slate-500 font-[350]">
          We may disclose your information when required by law, such as to
          comply with a subpoena, court order, or legal process. We may also
          disclose data if we believe it's necessary to protect our rights or
          the safety of others.
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          3.3 Business Transfers
        </h3>{" "}
        <p className="text-slate-500 font-[350]">
          In the event that Tacoza is involved in a merger, acquisition, or sale
          of assets, your personal information may be transferred as part of the
          transaction. We will notify you before any such transfer occurs and
          your data becomes subject to a different privacy policy.
        </p>{" "}
        <hr className="my-4" />{" "}
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          4. Data Security
        </h1>{" "}
        <p className="text-slate-500 font-[350]">
          We take the security of your data seriously. Tacoza implements various
          security measures, including encryption, firewalls, and secure
          servers, to protect your information from unauthorized access,
          alteration, disclosure, or destruction.
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          4.1 Security Best Practices
        </h3>{" "}
        <p className="text-slate-500 font-[350]">
          While we strive to use commercially acceptable means to protect your
          data, no method of transmission over the internet is 100% secure. We
          cannot guarantee absolute security, but we make every effort to
          protect your personal information.
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          4.2 Password Protection
        </h3>{" "}
        <p className="text-slate-500 font-[350]">
          It is your responsibility to keep your account password confidential.
          Do not share your password with anyone, and notify us immediately if
          you suspect any unauthorized use of your account.
        </p>{" "}
        <hr className="my-4" />{" "}
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          5. Data Retention
        </h1>{" "}
        <p className="text-slate-500 font-[350]">
          We will retain your personal data only for as long as is necessary for
          the purposes outlined in this Privacy Policy. In some cases, we may
          retain your data for a longer period to comply with legal obligations,
          resolve disputes, or enforce agreements.
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          5.1 Data Deletion
        </h3>{" "}
        <p className="text-slate-500 font-[350]">
          If you wish to delete your account or request that we no longer use
          your information, please contact our customer support. We will take
          reasonable steps to ensure that your personal data is deleted, unless
          we are required to retain it for legal reasons.
        </p>{" "}
        <hr className="my-4" />{" "}
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          6. Cookies and Tracking Technologies
        </h1>{" "}
        <p className="text-slate-500 font-[350]">
          Tacoza uses cookies and similar technologies to enhance your browsing
          experience. These technologies help us understand user behavior and
          remember your preferences. You can manage your cookie preferences
          through your browser settings.
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          6.1 Types of Cookies We Use
        </h3>{" "}
        <ul className="text-slate-500 font-[350] list-disc ml-6">
          {" "}
          <li>
            <strong>Essential Cookies:</strong> Necessary for the operation of
            our platform, enabling you to navigate and use features like secure
            login areas.
          </li>{" "}
          <li>
            <strong>Analytics Cookies:</strong> Help us understand how users
            interact with the site, allowing us to improve functionality and
            user experience.
          </li>{" "}
          <li>
            <strong>Marketing Cookies:</strong> Used to deliver advertisements
            relevant to your interests based on your browsing behavior.
          </li>{" "}
        </ul>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          6.2 Managing Cookies
        </h3>{" "}
        <p className="text-slate-500 font-[350]">
          You can choose to disable cookies through your browser settings.
          However, disabling certain cookies may affect your ability to use some
          features of our platform.
        </p>{" "}
        <hr className="my-4" />{" "}
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          7. Your Rights
        </h1>{" "}
        <p className="text-slate-500 font-[350]">
          Depending on your location, you may have certain rights regarding your
          personal data. These rights may include:
        </p>{" "}
        <ul className="text-slate-500 font-[350] list-disc ml-6">
          {" "}
          <li>The right to access your personal data</li>{" "}
          <li>The right to correct inaccurate data</li>{" "}
          <li>The right to request data deletion</li>{" "}
          <li>
            The right to object to or restrict the processing of your data
          </li>{" "}
          <li>The right to data portability</li>{" "}
        </ul>{" "}
        <p className="text-slate-500 font-[350]">
          If you wish to exercise any of these rights, please contact our data
          protection officer at{" "}
          <Link
            href="/"
            className="text-slate-500 underline hover:text-rose-500 font-[350]"
          >
            support@tacoza.com
          </Link>
          .
        </p>{" "}
        <hr className="my-4" />{" "}
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          8. Changes to This Privacy Policy
        </h1>{" "}
        <p className="text-slate-500 font-[350]">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or applicable laws. Any updates will be posted on
          this page, and we encourage you to review the Privacy Policy
          periodically. Your continued use of Tacoza after changes are made will
          constitute your acceptance of the new terms.
        </p>
      </div>
    </>
  );
}
