import PricingTable from "@/components/pricing-table";
import Link from "next/link";

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
                  Pricing
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
      <div className="grid items-center max-w-6xl mx-auto mb-12 md:mt-12 p-4 sm:px-6">
        <div className="mb-8 inline-flex items-center justify-center text-2xl font-semibold py-1.5 px-3 bg-rose-500 text-white rounded-full shadow-sm shadow-slate-950/5">
          We are in BETA mode, every seller plan is available for FREE till
          limited time
        </div>
        <div className="cursor-not-allowed opacity-30">
          <PricingTable />
        </div>
      </div>
    </>
  );
}
