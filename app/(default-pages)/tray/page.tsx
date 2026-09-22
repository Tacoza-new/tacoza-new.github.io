import Link from "next/link";

export const metadata = {
  title: "Tacoza Tray — Print Bills Directly from Your Browser",
  description:
    "Install Tacoza Tray once on your computer and print customer bills automatically every time an order is placed. Works with all popular thermal printers.",
};

const VERSION = "1.0.0";
const GH_RELEASE = `https://github.com/cafekonekt/tray.tacoza/releases/download/v${VERSION}`;

const downloads = [
  {
    platform: "Windows",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
      </svg>
    ),
    files: [
      { label: "Setup Installer (.exe)", url: `${GH_RELEASE}/Tacoza-Tray-Setup-${VERSION}.exe`, recommended: true },
      { label: "Portable (.exe)", url: `${GH_RELEASE}/Tacoza-Tray-${VERSION}-portable.exe`, recommended: false },
    ],
  },
  {
    platform: "macOS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
      </svg>
    ),
    files: [
      { label: "macOS Installer (.dmg)", url: `${GH_RELEASE}/Tacoza-Tray-${VERSION}.dmg`, recommended: true },
    ],
  },
  {
    platform: "Linux",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.504 0c-.155 0-.315.008-.480.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.354 1.611-.268 2.285.086.674.32 1.193.599 1.566.279.373.619.5.83.5.211 0 .415-.086.536-.2.121-.114.158-.213.158-.213s-.083.079.186-.096c.27-.175.67-.574 1.03-1.25.72-1.35 1.24-3.354 1.24-5.073 0-1.72-.52-3.724-1.24-5.073-.36-.676-.76-1.075-1.03-1.25-.27-.175-.186-.096-.186-.096s-.037-.099-.158-.213c-.121-.114-.325-.2-.536-.2-.211 0-.551.127-.83.5-.279.373-.513.892-.599 1.566-.086.674-.01 1.453.268 2.285.59 1.77 1.832 3.47 2.716 4.521.75 1.067.974 1.928 1.05 3.02.065 1.491-1.056 5.965 3.17 6.298.165.013.325.021.48.021.155 0 .315-.008.48-.021 4.226-.333 3.105-4.807 3.17-6.298.076-1.092.3-1.953 1.05-3.02.885-1.051 2.127-2.75 2.716-4.521.278-.832.354-1.611.268-2.285-.086-.674-.32-1.193-.599-1.566-.279-.373-.619-.5-.83-.5-.211 0-.415.086-.536.2-.121.114-.158.213-.158.213s.083-.079-.186.096c-.27.175-.67.574-1.03 1.25-.72 1.35-1.24 3.354-1.24 5.073 0 1.72.52 3.724 1.24 5.073.36.676.76 1.075 1.03 1.25.27.175.186.096.186.096s.037.099.158.213c.121.114.325.2.536.2z" />
      </svg>
    ),
    files: [
      { label: "AppImage (.AppImage)", url: `${GH_RELEASE}/Tacoza-Tray-${VERSION}.AppImage`, recommended: true },
      { label: "Debian Package (.deb)", url: `${GH_RELEASE}/tacoza-tray_${VERSION}_amd64.deb`, recommended: false },
    ],
  },
];

const features = [
  {
    icon: "🖨️",
    title: "Works with your existing printer",
    desc: "Epson, Star, Bixolon, TVS, and all major thermal printer brands. If it prints receipts, it works with Tacoza Tray.",
  },
  {
    icon: "⚡",
    title: "Bills print in seconds",
    desc: "The moment an order is placed, the bill prints automatically — no clicking, no waiting, no manual steps.",
  },
  {
    icon: "🔌",
    title: "Network & USB printers",
    desc: "Connect your printer over your restaurant's Wi-Fi network or directly via USB. Both work seamlessly.",
  },
  {
    icon: "🔄",
    title: "Starts automatically",
    desc: "Tacoza Tray launches silently when you turn on your computer. You never need to open it manually.",
  },
  {
    icon: "🔒",
    title: "Completely private",
    desc: "The app works entirely on your local network. Your billing data never leaves your restaurant.",
  },
  {
    icon: "🖥️",
    title: "Works in the background",
    desc: "It sits quietly in your taskbar, using almost no resources, so your computer stays fast.",
  },
];

const steps = [
  {
    number: "1",
    title: "Download & Install",
    desc: "Click the download button for your computer below. Run the installer — it takes less than a minute.",
  },
  {
    number: "2",
    title: "Add your printer",
    desc: "Click the Tacoza Tray icon in your taskbar, open Settings, and add your thermal printer using its IP address or name.",
  },
  {
    number: "3",
    title: "Connect to Tacoza",
    desc: "Copy the Auth Token from Settings and paste it into your Tacoza Seller dashboard under Print Settings. That's it.",
  },
];

const faqs = [
  {
    q: "Which thermal printers are supported?",
    a: "Any ESC/POS compatible printer works — this covers nearly all thermal receipt printers from Epson, Star, Bixolon, TVS, RP, and similar brands. If you're unsure, just reach out to us.",
  },
  {
    q: "Does it work without internet?",
    a: "Once connected to Tacoza, printing itself happens over your local restaurant network — so even if your internet is slow, bills print instantly.",
  },
  {
    q: "What happens if I restart my computer?",
    a: "Nothing — Tacoza Tray is set to start automatically when your computer turns on. Printing resumes the moment the computer is ready.",
  },
  {
    q: "Can I use one printer for all orders?",
    a: "Yes. You can configure a single printer to receive all bills, or set up multiple printers for different sections like Kitchen, Bar, and Billing.",
  },
  {
    q: "What if the bill doesn't print?",
    a: "Check that your printer is powered on and connected to the same network as your computer. You can test the connection from the Tacoza Tray Settings screen.",
  },
  {
    q: "Is it free?",
    a: "Yes. Tacoza Tray is completely free for all Tacoza customers.",
  },
];

export default function TrayPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative">
        <div
          className="absolute inset-0 rounded-bl-[100px] mb-16 md:mb-0 bg-gradient-to-tr from-rose-600 to-rose-500 pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div className="max-w-6xl min-h-[55vh] md:min-h-[35vh] mx-auto px-4 sm:px-6">
          <div className="pt-36 md:pt-40 pb-12 md:pb-20">
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
              <div className="md:w-[680px]">
                <div
                  className="inline-flex items-center gap-2 bg-rose-700/40 text-rose-100 text-sm font-medium px-3 py-1 rounded-full mb-5"
                  data-aos="fade-up"
                >
                  <span className="w-2 h-2 rounded-full bg-rose-200 inline-block" />
                  Free for all Tacoza restaurants
                </div>
                <h1
                  className="h1 text-white mb-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Print bills directly from your browser
                </h1>
                <p
                  className="text-lg text-rose-100 mb-8 leading-relaxed"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Tacoza Tray is a small app you install once on your computer.
                  It connects your thermal printer to Tacoza — so every order
                  prints automatically, the moment it's placed.
                </p>
                <div
                  className="flex flex-wrap gap-3"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <a
                    href={`${GH_RELEASE}/Tacoza-Tray-Setup-${VERSION}.exe`}
                    className="btn group bg-white text-rose-600 hover:bg-rose-50 shadow-sm inline-flex items-center gap-2"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                    </svg>
                    Download for Windows
                  </a>
                  <a
                    href={`${GH_RELEASE}/Tacoza-Tray-${VERSION}.dmg`}
                    className="btn group bg-stone-800 text-white hover:bg-stone-900 shadow-sm inline-flex items-center gap-2"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                    </svg>
                    Download for Mac
                  </a>
                </div>
                <p className="text-rose-200 text-sm mt-4" data-aos="fade-up" data-aos-delay="400">
                  Version {VERSION} &nbsp;·&nbsp; Windows 10/11 &nbsp;·&nbsp; macOS 12+ &nbsp;·&nbsp; Free
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="h2 text-slate-800 mb-4">Set up in 3 simple steps</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            No technical knowledge needed. If you can install WhatsApp, you can set up Tacoza Tray.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-8"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="w-12 h-12 rounded-full bg-rose-500 text-white text-xl font-bold flex items-center justify-center mb-5">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-500 font-[350] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="h2 text-slate-800 mb-4">Everything your kitchen needs</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Built specifically for restaurants. No complicated settings, no IT support required.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6"
                data-aos="fade-up"
                data-aos-delay={i * 75}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">{f.title}</h3>
                <p className="text-slate-500 font-[350] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Downloads ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24" id="download">
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="h2 text-slate-800 mb-4">Download Tacoza Tray</h2>
          <p className="text-slate-500 text-lg">
            Current version: <span className="font-semibold text-slate-700">v{VERSION}</span>
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {downloads.map((platform, i) => (
            <div
              key={platform.platform}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="text-slate-700">{platform.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800">{platform.platform}</h3>
              </div>
              <div className="space-y-3">
                {platform.files.map((file) => (
                  <a
                    key={file.label}
                    href={file.url}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      file.recommended
                        ? "bg-rose-500 text-white hover:bg-rose-600"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    <span>{file.label}</span>
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Release notes */}
        <div className="mt-12 bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8" data-aos="fade-up">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-800 text-lg">v{VERSION} — Latest Release</h3>
            <span className="text-xs text-slate-400 bg-white border border-slate-200 rounded-full px-3 py-1">June 2025</span>
          </div>
          <ul className="space-y-2">
            {[
              "Initial release — Windows, macOS, and Linux support",
              "Network TCP printer support (Epson, Star, and all ESC/POS printers)",
              "Windows printer driver support (USB & shared printers)",
              "Auto-launch on startup",
              "Secure token-based connection to Tacoza Seller dashboard",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-600 font-[350]">
                <svg className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="h2 text-slate-800 mb-4">Frequently asked questions</h2>
            <p className="text-slate-500 text-lg">Everything restaurant owners ask before getting started.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-slate-200 p-6"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <h3 className="font-semibold text-slate-800 mb-2">{faq.q}</h3>
                <p className="text-slate-500 font-[350] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-16 md:py-24">
        <div
          className="absolute inset-0 bg-gradient-to-tr from-rose-600 to-rose-500 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="h2 text-white mb-5" data-aos="fade-up">
            Ready to stop printing bills manually?
          </h2>
          <p className="text-rose-100 text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
            Download Tacoza Tray, add your printer, and bills start printing automatically — today.
          </p>
          <div className="flex flex-wrap justify-center gap-3" data-aos="fade-up" data-aos-delay="200">
            <a
              href={`${GH_RELEASE}/Tacoza-Tray-Setup-${VERSION}.exe`}
              className="btn bg-white text-rose-600 hover:bg-rose-50 shadow-sm inline-flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
              </svg>
              Download for Windows
            </a>
            <a
              href={`${GH_RELEASE}/Tacoza-Tray-${VERSION}.dmg`}
              className="btn bg-stone-800 text-white hover:bg-stone-900 shadow-sm inline-flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
              </svg>
              Download for Mac
            </a>
            <Link
              href="/contact"
              className="btn text-white border border-rose-300 hover:bg-rose-600/30 inline-flex items-center gap-2"
            >
              Need help? Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
