import Link from "next/link";
import Image from "next/image";
import Illustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Bg */}
      <div className="absolute inset-0 bg-stone-800 -z-10" aria-hidden="true" />

      {/* Illustration */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={Illustration}
          alt="Footer illustration"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 border-t border-slate-700">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
            {/* Logo */}
            <Link className="block" href="/" aria-label="Cruip">
              <Image
                src="/images/logo.png"
                alt="tacoza"
                width={150}
                height={50}
              />
            </Link>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">
              Essentials
            </h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a
                  className="text-slate-400 hover:text-rose-500 transition duration-150 ease-in-out"
                  href="/about"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-rose-500 transition duration-150 ease-in-out"
                  href="/contact"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-rose-500 transition duration-150 ease-in-out"
                  href="/pricing"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-rose-500 transition duration-150 ease-in-out"
                  href="/apply"
                >
                  Register Outlet
                </a>
              </li>
              {/* <li>
                <a
                  className="text-slate-400 hover:text-rose-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Scan and Order
                </a>
              </li> */}
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Company</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a
                  className="text-slate-400 hover:text-rose-500 transition duration-150 ease-in-out"
                  href="/terms"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-rose-500 transition duration-150 ease-in-out"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-rose-500 transition duration-150 ease-in-out"
                  href="/refund-policy"
                >
                  Refund Policy
                </a>
              </li>
              {/* <li>
                <a
                  className="text-slate-400 hover:text-rose-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Diversity / Inclusion
                </a>
              </li> */}
              {/* <li>
                <a
                  className="text-slate-400 hover:text-rose-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Sustainability
                </a>
              </li> */}
            </ul>
          </div>

          {/* 4th block */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Lifestyle</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a
                  className="text-slate-400 hover:text-rose-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-rose-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Work Culture
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-rose-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div> */}

          {/* 5th block */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Company</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a
                  className="text-slate-400 hover:text-rose-500 transition duration-150 ease-in-out"
                  href="mailto:support@tacoza"
                >
                  Send us an email
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-rose-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-rose-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-rose-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Bottom area */}
        <div className="pb-4 md:pb-8 text-center">
          <div className="text-xs text-slate-500">
            Tacoza serves as an aggregator connecting customers with
            restaurants. We are not responsible for the quality, preparation, or
            hygiene of food provided by partner restaurants. For food quality
            concerns, please contact the restaurant directly. Tacoza will only
            handle issues related to payments, technical glitches, or order
            processing. Click{" "}
            <a
              className="font-medium underline hover:text-rose-500 transition duration-150 ease-in-out"
              href="/contact"
            >
              here
            </a>
            to raise a complaint.
          </div>
        </div>
      </div>
    </footer>
  );
}
