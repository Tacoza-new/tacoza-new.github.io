export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20" data-aos="fade-up">
          {/* Section header */}
          <div className="pb-12">
            <h2 className="h2">FAQs</h2>
          </div>

          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">How does Tacoza’s QR code ordering work?</h4>
                <p className="text-slate-500">
                Customers scan a QR code at their table, browse the menu, and place orders directly from their smartphones, reducing wait times.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">What type of businesses can use Tacoza?</h4>
                <p className="text-slate-500">
                Tacoza is perfect for restaurants, cafes, bars, food trucks, and more, offering tailored solutions for every type of outlet.                  ad minim veniam.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Can I manage multiple locations with Tacoza?</h4>
                <p className="text-slate-500">
                Yes, our dashboard allows seamless management of multiple outlets from one central interface, making it easy to track all operations.                  ad minim veniam.
                </p>
              </div>
            </div>

            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">How does Tacoza help with inventory management?</h4>
                <p className="text-slate-500">
                Tacoza automatically tracks inventory usage based on orders, providing real-time updates and alerts to help you maintain optimal stock levels.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">What AI insights does Tacoza offer?</h4>
                <p className="text-slate-500">
                Our AI provides insights into customer preferences, popular items, peak hours, and sales trends to help you make data-driven decisions.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Is Tacoza easy to integrate with existing systems?</h4>
                <p className="text-slate-500">
                Yes, Tacoza can integrate smoothly with most POS systems, ensuring a hassle-free setup and operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}