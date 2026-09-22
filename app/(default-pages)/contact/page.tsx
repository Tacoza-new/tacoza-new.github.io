import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Pricing - Tacoza",
  description:
    "Empower your business with Tacoza’s all-in-one solution, built to optimize your ordering process and management.",
};

export default function Pricing() {
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
                  Contact Us
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
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Email</h1>{" "}
        <p className="text-slate-500 font-[350]">
          support@tacoza.co
        </p>{" "}
        <hr className="my-4" /> <h1 className="text-2xl font-bold text-slate-800 mb-4">Phone</h1>{" "}
        <p className="text-slate-500 font-[350]">
          +91-8878249595
        </p>{" "}
        <hr className="my-4" /> <h1 className="text-2xl font-bold text-slate-800 mb-4">Chat Support</h1>{" "}
        <p className="text-slate-500 font-[350]">
          You can access our live chat support by clicking on the chat icon in the bottom right corner of the screen.
        </p>
      </div>
      <Script src="//code.tidio.co/lcekra8hwvljv0noe7nw4xj0v1navebu.js" async />
    </>
  );
}
