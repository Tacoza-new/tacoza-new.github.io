import Image from "next/image";
import Pricing01 from "@/public/images/pricing-01.png";
import Pricing02 from "@/public/images/pricing-02.png";
import Pricing03 from "@/public/images/pricing-03.png";
import Pricing04 from "@/public/images/pricing-04.png";

export default function Section07() {
  return (
    <section>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 border-2 border-slate-100 pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-gradient-to-t from-white pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
              {/* Section header */}
              <div className="md:max-w-3xl mb-12 md:mb-20" data-aos="fade-up">
                <h2 className="h2 mb-4">
                  Scalable Solutions for Every Operation
                  <br />
                  From Startup to Enterprise
                </h2>
                <p className="text-lg text-slate-500 mb-8">
                  Choose the implementation that aligns with your current needs and growth trajectory. Each tier is designed to deliver measurable ROI while providing the foundation for sustainable expansion.
                </p>
              </div>

              {/* Pricing tables */}
              <div
                className="max-w-sm md:max-w-2xl xl:max-w-none mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* Pricing table 1 */}
                <div className="relative flex flex-col h-full rounded-br-[100px] py-5 px-6 border-2 border-green-200 bg-green-50">
                  <div className="absolute top-0 right-0 -translate-y-1/2 mr-6 inline-flex text-sm text-white bg-green-500 font-[550] rounded-full px-3 py-px">
                    Free Trial
                  </div>
                  <div className="mb-4">
                    <div className="text-lg font-bold text-center mb-3">
                      Pilot Program
                    </div>
                    <Image
                      className="w-full rounded-lg"
                      src={Pricing01}
                      width={210}
                      height={124}
                      alt="Trial Package"
                    />
                  </div>
                  <div className="mb-5">
                    <div className="text-2xl text-stone-800 font-bold text-center mb-4">
                      Free for 30 Days
                    </div>
                    <a
                      className="btn-sm w-full inline-flex items-center text-white bg-green-500 hover:bg-green-600 shadow-sm"
                      href="/apply"
                    >
                      Start Evaluation
                    </a>
                  </div>
                  <div className="text-stone-800 font-medium mb-4">
                    Full Platform Access
                  </div>
                  <ul className="text-slate-500 text-left space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Point of Sale System</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Billing & Kitchen Order Management</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Inventory & Recipe Management</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Digital Order Management</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Core Platform Features</span>
                    </li>
                  </ul>
                </div>

                {/* Pricing table 2 */}
                <div className="relative flex flex-col h-full bg-gradient-to-b from-rose-100 to-rose-50 rounded-br-[100px] py-5 px-6">
                  <div className="absolute top-0 right-0 -translate-y-1/2 mr-6 inline-flex text-sm text-white bg-red-500 font-[550] rounded-full px-3 py-px">
                    Popular
                  </div>
                  <div className="mb-4">
                    <div className="text-lg font-bold text-center mb-3">
                      Growth Accelerator
                    </div>
                    <Image
                      className="w-full rounded-lg"
                      src={Pricing02}
                      width={210}
                      height={124}
                      alt="Standard Plan"
                    />
                  </div>
                  <div className="mb-5">
                    <div className="text-2xl text-stone-800 font-bold text-center mb-4">
                      ₹7,999/yr
                      <div className="text-sm text-slate-500 font-normal">per outlet</div>
                    </div>
                    <a
                      className="btn-sm w-full inline-flex items-center text-slate-100 bg-stone-800 hover:bg-slate-900 shadow-sm"
                      href="/apply"
                    >
                      Deploy Solution
                    </a>
                  </div>
                  <div className="text-stone-800 font-medium mb-4">
                    Complete Operational Suite
                  </div>
                  <ul className="text-slate-500 text-left space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-red-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>CRM & Customer Management</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-red-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Tax & Accounting Management</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-red-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Daily Sales & Business Reports</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-red-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Admin Mobile App</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-red-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Table & Menu Management</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-red-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Cloud Dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-red-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited Terminal Support</span>
                    </li>
                  </ul>
                </div>

                {/* Pricing table 3 */}
                <div className="relative flex flex-col h-full rounded-br-[100px] py-5 px-6 border-2 border-purple-200 bg-purple-50">
                  <div className="mb-4">
                    <div className="text-lg font-bold text-center mb-3">
                      Enterprise
                    </div>
                    <Image
                      className="w-full rounded-lg"
                      src={Pricing03}
                      width={210}
                      height={124}
                      alt="Enterprise"
                    />
                  </div>
                  <div className="mb-5">
                    <div className="text-2xl text-stone-800 font-bold text-center mb-4">
                      Custom Pricing
                      <div className="text-sm text-slate-500 font-normal">Contact for quote</div>
                    </div>
                    <a
                      className="btn-sm w-full inline-flex items-center text-white bg-purple-500 hover:bg-purple-600 shadow-sm"
                      href="/contact"
                    >
                      Discuss Requirements
                    </a>
                  </div>
                  <div className="text-stone-800 font-medium mb-4">
                    Advanced Integration & Custom Development
                  </div>
                  <ul className="text-slate-500 text-left space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-purple-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Kitchen Display System (KDS)</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-purple-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>AI Waiter & Recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-purple-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Smart Catalogue (Kiosk)</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-purple-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>QR & Captain Ordering Apps</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-purple-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Marketing & SMS Campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-purple-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Customer Loyalty & Feedback</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-purple-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Complete Website Integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
