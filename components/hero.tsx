import Link from "next/link";
import Image from "next/image";
import Illustration from "@/public/images/hero-illustration.svg";
import HeroImage from "@/public/images/new/hero-bg-1.png";
import { FlipWords } from "./ui/flip-words";

export default function Hero() {
  const words = ["intelligent", "efficient", "strategic"];
  return (
    <section className="relative">
      {/* Bg */}
      <div
        className="absolute inset-0 rounded-bl-[100px] mb-28 md:mb-0 bg-gradient-to-tr from-rose-600 to-rose-500 pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
                Restaurant operations <FlipWords words={words} /> <br /> enough
                to drive growth, not complexity.
              </h1>
              <p
                className="text-lg text-rose-200 mb-8 mr-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Meet Tacoza – the comprehensive restaurant management platform
                built for operators who understand that efficiency drives
                profitability. From independent establishments to multi-location
                enterprises, we deliver the operational intelligence you need to
                scale systematically.
                <br className="hidden md:block" />
              </p>

              {/* Buttons */}
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div>
                  <Link
                    className="btn-sm w-full inline-flex items-center text-slate-100 bg-stone-800 hover:bg-stone-900 group shadow-sm"
                    href="/apply"
                  >
                    Begin Implementation
                    <span className="tracking-normal text-rose-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                      <svg
                        className="fill-current"
                        width="12"
                        height="10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                      </svg>
                    </span>
                  </Link>
                </div>
                <div>
                  <Link
                    className="btn-sm w-full inline-flex items-center text-white bg-gradient-to-tr from-rose-400 hover:bg-rose-500 shadow-sm relative before:absolute before:inset-0 before:bg-rose-400 before:bg-opacity-60 before:-z-10 before:rounded-full"
                    href="#capabilities"
                    // scroll={true}
                  >
                    View Capabilities
                  </Link>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="max-w-sm mx-auto md:max-w-none md:absolute md:left-[600px] md:top-0 -mb-12 md:-mt-12 md:mb-0">
              <div className="relative -ml-3 -mr-24 md:mx-0">
                <Image
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mt-16 md:mt-0 pointer-events-none -z-10 max-w-none mix-blend-lighten"
                  src={Illustration}
                  priority
                  alt="Hero illustration"
                  aria-hidden="true"
                />
                <Image
                  src={HeroImage}
                  className="md:max-w-none"
                  width="620"
                  height="620"
                  alt="Restaurant management system dashboard"
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
