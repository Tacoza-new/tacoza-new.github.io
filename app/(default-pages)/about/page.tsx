import Link from "next/link";

export const metadata = {
  title: "About - Tacoza",
  description:
    "Empower your business with Tacoza’s all-in-one solution, built to optimize your ordering process and management.",
};

export default function About() {
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
                  About Us
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
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h1>{" "}
        <p className="text-slate-500 font-[350]">
          At Tacoza, we are dedicated to revolutionizing the food and beverage
          industry with modern digital tools. Our goal is to provide
          restaurants, cafes, bars, and food trucks with an all-in-one
          management solution to optimize their daily operations and elevate
          customer experiences.
        </p>{" "}
        <hr className="my-4" /> <h1 className="text-2xl font-bold text-slate-800 mb-4">Our Story</h1>{" "}
        <p className="text-slate-500 font-[350]">
          Tacoza was born from the need to simplify restaurant management. We
          observed the growing complexities of handling orders, inventory, and
          customer service in today’s fast-paced world, and set out to build a
          solution that merges convenience and efficiency.
        </p>{" "}
        <hr className="my-4" /> <h1 className="text-2xl font-bold text-slate-800 mb-4">What We Offer</h1>{" "}
        <h3 className="text-xl font-semibold text-slate-700">- Streamlined Ordering with QR Codes</h3>{" "}
        <p className="text-slate-500 font-[350]">
          Customers can scan, browse, and place orders without waiting for
          service. Our system enhances convenience and speeds up the ordering
          process.
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700">- Advanced Dashboard for Business Owners</h3>{" "}
        <p className="text-slate-500 font-[350]">
          With a powerful dashboard, restaurant owners can track orders, monitor
          inventory, view AI-driven insights, and seamlessly manage their
          POS—all from one interface.
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700">- AI-Driven Insights</h3>{" "}
        <p className="text-slate-500 font-[350]">
          Our solution analyzes customer preferences, sales patterns, and
          operational data to give you actionable insights that drive business
          growth and efficiency.
        </p>{" "}
        <hr className="my-4" /> <h1 className="text-2xl font-bold text-slate-800 mb-4">Why Tacoza?</h1>{" "}
        <p className="text-slate-500 font-[350]">
          At Tacoza, we prioritize ease of use, scalability, and efficiency.
          Whether you manage a single cafe or a chain of restaurants, our
          solution adapts to your business needs. From real-time data to
          customizable dashboards, Tacoza empowers you with tools designed for
          today’s fast-moving hospitality industry.
        </p>{" "}
        <hr className="my-4" /> <h1 className="text-2xl font-bold text-slate-800 mb-4">Our Values</h1>{" "}
        <h3 className="text-xl font-semibold text-slate-700">- Customer Focus</h3>{" "}
        <p className="text-slate-500 font-[350]">
          We believe that customer satisfaction is key to long-term success. Our
          solutions are built to not only streamline operations but also elevate
          customer experiences.
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700">- Innovation</h3>{" "}
        <p className="text-slate-500 font-[350]">
          We are constantly improving and adapting our technology to ensure your
          restaurant stays ahead in a competitive industry.
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700">- Integrity</h3>{" "}
        <p className="text-slate-500 font-[350]">
          We value transparency and reliability in our services. You can trust
          us to deliver solutions that are both efficient and dependable.
        </p>{" "}
        <hr className="my-4" /> <h1 className="text-2xl font-bold text-slate-800 mb-4">Get in Touch</h1>{" "}
        <p className="text-slate-500 font-[350]">
          Have questions or want to learn more about how Tacoza can help your
          business? Reach out to us anytime.
        </p>{" "}
        <Link
          href="/"
          className="text-slate-500 underline hover:text-rose-500 font-[350]"
        >
          Contact Us
        </Link>
        <hr className="my-4" />
      </div>
    </>
  );
}
