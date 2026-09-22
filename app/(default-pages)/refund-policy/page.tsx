import Link from "next/link";

export const metadata = {
  title: "Refund - Tacoza",
  description:
    "Empower your business with Tacoza’s all-in-one solution, built to optimize your ordering process and management.",
};

export default function Refund() {
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
                  Refund Policy
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
          At Tacoza, we prioritize customer satisfaction and strive to provide a
          seamless experience. However, we understand that there may be
          instances where refunds are necessary. This Refund Policy outlines the
          circumstances under which refunds may be issued and the process to
          request a refund. Please review this policy carefully to ensure
          clarity on our practices. Your continued use of our services
          constitutes acceptance of this policy.
        </p>{" "}
        <hr className="my-4" />{" "}
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          1. Aggregator Role Disclaimer
        </h1>{" "}
        <p className="text-slate-500 font-[350]">
          Tacoza acts solely as an aggregator and facilitator, providing a
          platform for users to order food and consumable items from partner
          restaurants. We do not prepare, handle, or control the food,
          beverages, or consumable items that are offered for sale through our
          platform. As a result, Tacoza is not liable for any issues related to
          food quality, hygiene, or taste. If you encounter problems related to
          the quality of the food, such as contamination, improper preparation,
          or failure to meet your expectations, you must contact the restaurant
          directly for resolution.
        </p>{" "}
        <p className="text-slate-500 font-[350]">
          By using our services, you acknowledge and agree that any complaints
          or disputes regarding the quality of food must be addressed with the
          restaurant that prepared your order. Tacoza will not issue refunds
          based on food quality concerns. However, if there are operational
          issues related to payments, order processing, or technical glitches,
          Tacoza may facilitate the refund process as outlined in this policy.
        </p>{" "}
        <hr className="my-4" />{" "}
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          2. Failed Transactions and Technical Issues
        </h1>{" "}
        <p className="text-slate-500 font-[350]">
          We understand that technical issues can occasionally occur, leading to
          failed transactions or order cancellations. If a payment is
          successfully initiated but fails to process due to technical errors on
          Tacoza's platform or with our payment partners, a refund will be
          initiated within 7 business days to the original source of payment
          (e.g., your credit/debit card, bank account, or digital wallet). In
          some cases, you may receive a refund in the form of a coupon code,
          which can be redeemed on future purchases.
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          2.1 Refund Timeframe
        </h3>{" "}
        <ul className="text-slate-500 font-[350] list-disc ml-6">
          {" "}
          <li>
            Refunds for failed transactions will be processed within 7 business
            days from the date of the failed transaction.
          </li>{" "}
          <li>
            If you do not receive your refund within 7 days, you can raise a
            dispute with Tacoza by contacting our customer support team.
          </li>{" "}
          <li>
            Refunds may be issued either to the original payment source or via
            coupon code, depending on the situation.
          </li>{" "}
        </ul>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          2.2 Dispute Resolution
        </h3>{" "}
        <p className="text-slate-500 font-[350]">
          If you believe that your refund has not been processed within the
          stated timeframe, or if there are other issues related to the refund
          process, you can raise a dispute by contacting us at{" "}
          <Link
            href="/"
            className="text-slate-500 underline hover:text-rose-500 font-[350]"
          >
            support@tacoza.com
          </Link>
          . We will work to resolve the issue promptly and ensure that any
          eligible refund is issued as per this policy.
        </p>{" "}
        <hr className="my-4" />{" "}
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          3. Order Confirmation and Payments
        </h1>{" "}
        <p className="text-slate-500 font-[350]">
          An order will be considered successfully placed and confirmed only
          when Tacoza receives the payment in full from our payment partners. If
          payment is not successfully received, the order will not be processed
          or delivered.
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          3.1 Payment Verification
        </h3>{" "}
        <ul className="text-slate-500 font-[350] list-disc ml-6">
          {" "}
          <li>
            Payments are verified by our trusted payment partners. Only after
            successful verification will the order be deemed confirmed.
          </li>{" "}
          <li>
            In the event of technical issues, hacking attempts, or glitches,
            Tacoza reserves the right to cancel the order and refund only the
            amount confirmed by the bank or payment partner.
          </li>{" "}
          <li>
            If we identify any suspicious or fraudulent activity related to your
            order, Tacoza may cancel the order without prior notice and initiate
            a refund for the confirmed payment amount only.
          </li>{" "}
        </ul>{" "}
        <p className="text-slate-500 font-[350]">
          We recommend monitoring your email for confirmation messages once your
          order is placed. If you do not receive a confirmation message, it may
          indicate that payment was not successfully received, and your order
          has not been processed. In such cases, please reach out to Tacoza
          support for clarification.
        </p>{" "}
        <hr className="my-4" />{" "}
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          4. Cancellations by Customers
        </h1>{" "}
        <p className="text-slate-500 font-[350]">
          If you wish to cancel your order after it has been placed, you may do
          so within a limited timeframe. Orders can only be cancelled if the
          restaurant has not yet started preparing the food. Once the
          preparation process has begun, cancellations are no longer possible.
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          4.1 Cancellation Process
        </h3>{" "}
        <ul className="text-slate-500 font-[350] list-disc ml-6">
          {" "}
          <li>
            To cancel an order, please contact our customer support team
            immediately.
          </li>{" "}
          <li>
            If the restaurant has not started preparing your order, we will
            process a full refund to the original payment source.
          </li>{" "}
          <li>
            If the food is already being prepared, cancellations and refunds
            will not be possible.
          </li>{" "}
        </ul>{" "}
        <hr className="my-4" />{" "}
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          5. Contacting the Restaurant for Quality Issues
        </h1>{" "}
        <p className="text-slate-500 font-[350]">
          As previously mentioned, Tacoza is not responsible for the quality,
          taste, or hygiene of the food items prepared by the restaurant. If you
          have any concerns regarding the quality of your order, you must
          contact the restaurant directly. Each restaurant is solely responsible
          for the preparation and handling of food items ordered through our
          platform.
        </p>{" "}
        <h3 className="text-xl font-semibold text-slate-700 mt-2">
          5.1 Restaurant Contact Information
        </h3>{" "}
        <p className="text-slate-500 font-[350]">
          Restaurant contact information is provided on the order confirmation
          page. If you encounter issues with your order, such as incorrect
          items, poor quality, or incomplete orders, please reach out to the
          restaurant using the provided contact details. Tacoza will not process
          refunds for issues related to food quality.
        </p>{" "}
        <hr className="my-4" />{" "}
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          6. Contact Us
        </h1>{" "}
        <p className="text-slate-500 font-[350]">
          For any questions, concerns, or disputes related to refunds, failed
          payments, or cancellations, please reach out to our support team. We
          aim to respond to all inquiries within 48 hours. You can contact us at{" "}
          <Link
            href="/"
            className="text-slate-500 underline hover:text-rose-500 font-[350]"
          >
            support@tacoza.com
          </Link>
          .
        </p>
      </div>
    </>
  );
}
