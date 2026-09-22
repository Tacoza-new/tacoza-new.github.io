import Image from "next/image";
import QuoteAuthor from "@/public/images/quote-author-02.jpg";
import Features from "@/public/images/new/Screenshot from 2025-02-20 23-23-21.png";

export default function Section03() {
  return (
    <section className="mt-12 md:mt-20" data-aos-id-3>
      <h2
        className="text-center h1 mb-8"
        data-aos="fade-up"
        data-aos-anchor="[data-aos-id-4]"
        data-aos-delay="100"
      >
        Serving features so fresh,
        <br /> even your chef will approve!
      </h2>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-gradient-to-b from-slate-100 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-6 pt-12 md:pt-20 flex flex-col space-y-8">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-end">
              {/* Content */}
              <div className="w-[512px] max-w-full shrink-0 md:order-1">
                {/* Copy */}
                <span className="px-4 py-2 border rounded-full border-black">
                  Seamless Order Management
                </span>
                <h2
                  className="h2 text-3xl my-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="100"
                >
                  Seamless Orders, Satisfied Customers!
                </h2>
                <p
                  className=" text-slate-500 mb-8"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="200"
                >
                  Our advanced intuitive system allows orders to flow smoothly
                  from customers to the kitchen to their table. It helps
                  restaurants to eliminate delays and errors that can disrupt
                  their operations. Whether it’s dine-in, takeaway, or delivery,
                  our platform keeps everything organised. By streamlining the
                  process, Tacoza not only enhances your team’s productivity but
                  also ensures your customers enjoy a flawless dining
                  experience, every time.{" "}
                </p>

                <ul
                  className="inline-flex flex-col text-slate-500 space-y-2 mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-2]"
                  data-aos-delay="300"
                >
                  <li className="flex items-center">
                    <svg
                      className="shrink-0 mr-3"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="fill-rose-100"
                        cx="10"
                        cy="10"
                        r="10"
                      />
                      <path
                        className="fill-rose-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                      />
                    </svg>
                    <span>Error-Free Ordering</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="shrink-0 mr-3"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="fill-rose-100"
                        cx="10"
                        cy="10"
                        r="10"
                      />
                      <path
                        className="fill-rose-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                      />
                    </svg>
                    <span>Multi-Channel Support</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="shrink-0 mr-3"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="fill-rose-100"
                        cx="10"
                        cy="10"
                        r="10"
                      />
                      <path
                        className="fill-rose-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                      />
                    </svg>
                    <span>Real-Time Updates</span>
                  </li>
                </ul>
              </div>

              {/* Image */}
              <div className="w-full max-w-sm md:max-w-none md:mr-8 mt-8 md:mt-0">
                <div className="relative -mx-8 md:mx-0">
                  <Image
                    src={Features}
                    className="md:max-w-none"
                    width={496}
                    height={496}
                    alt="Features 03"
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-3]"
                  />
                </div>
              </div>
            </div>
            <hr />

            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-end">
              {/* Content */}
              <div className="w-[512px] max-w-full shrink-0 md:order-1">
                {/* Copy */}
                <span className="px-4 py-2 border rounded-full border-black">
                  Inventory Tracking
                </span>
                <h2
                  className="h2 text-3xl my-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="100"
                >
                  Smart Inventory to Minimise Waste!
                </h2>
                <p
                  className=" text-slate-500 mb-8"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="200"
                >
                  Inventory tracking is the backbone of smooth restaurant
                  operations and we ensure that you never run out of stock or
                  overspend on unnecessary items. With Tacoza’s smart inventory
                  tracking, you can keep a close eye on the restaurant’s
                  ingredients, monitor usage patterns, and predict future needs
                  with accuracy. You can get real-time updates and automated
                  alerts which eliminates the guesswork and helps you maintain
                  an optimal stock level.
                </p>

                <ul
                  className="inline-flex flex-col text-slate-500 space-y-2 mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-2]"
                  data-aos-delay="300"
                >
                  <li className="flex items-center">
                    <svg
                      className="shrink-0 mr-3"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="fill-rose-100"
                        cx="10"
                        cy="10"
                        r="10"
                      />
                      <path
                        className="fill-rose-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                      />
                    </svg>
                    <span>Monitor stock levels</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="shrink-0 mr-3"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="fill-rose-100"
                        cx="10"
                        cy="10"
                        r="10"
                      />
                      <path
                        className="fill-rose-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                      />
                    </svg>
                    <span>Automated alerts</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="shrink-0 mr-3"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="fill-rose-100"
                        cx="10"
                        cy="10"
                        r="10"
                      />
                      <path
                        className="fill-rose-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                      />
                    </svg>
                    <span>Cost-saving insights</span>
                  </li>
                </ul>
              </div>
              {/* Image */}
              <div className="w-full max-w-sm md:max-w-none md:mr-8 mt-8 md:mt-0">
                <div className="relative -mx-8 md:mx-0">
                  <Image
                    src={Features}
                    className="md:max-w-none rounded-xl"
                    width={496}
                    height={496}
                    alt="Features 03"
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-3]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
