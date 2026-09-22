"use client";

import { useState } from "react";

// Apps Script web app URL. Not a secret — the endpoint is public by design
// (see google-apps-script/README.md). Replace after deploying the script.
const ENDPOINT = "PASTE_APPS_SCRIPT_EXEC_URL_HERE";

const OUTLET_OPTIONS = ["1", "2-5", "6-20", "20+"];

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setErrorMsg("");

    try {
      const fd = new FormData(e.currentTarget);
      const payload = {
        fullName: fd.get("fullName") || "",
        email: fd.get("email") || "",
        phone: fd.get("phone") || "",
        restaurant: fd.get("restaurant") || "",
        city: fd.get("city") || "",
        outlets: fd.get("outlets") || "",
        message: fd.get("message") || "",
        company_website: fd.get("company_website") || "",
      };

      // text/plain keeps this a "simple request" so the browser skips the
      // CORS preflight, which Apps Script cannot answer. Do not change to
      // application/json — the form breaks with an opaque CORS error.
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!result || result.status !== "ok") {
        throw new Error((result && result.message) || "Submission failed");
      }
      setSubmitted(true);
    } catch (err) {
      setErrorMsg(
        "Something went wrong — please try again, or email us at support@tacoza.com.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Thanks — we got it.</h2>
        <p className="text-slate-500 font-[350] mb-4">
          Someone from the Tacoza team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-rose-500 font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none transition-colors focus:border-rose-400 focus:bg-white";

  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Send us a message</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
            Name <span className="text-rose-500">*</span>
          </label>
          <input id="fullName" name="fullName" type="text" required className={inputClass} />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email <span className="text-rose-500">*</span>
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
            Phone <span className="text-rose-500">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClass} />
        </div>

        <div>
          <label htmlFor="restaurant" className="block text-sm font-medium text-slate-700 mb-1">
            Restaurant name
          </label>
          <input id="restaurant" name="restaurant" type="text" className={inputClass} />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">
            City
          </label>
          <input id="city" name="city" type="text" className={inputClass} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="outlets" className="block text-sm font-medium text-slate-700 mb-1">
            Number of outlets
          </label>
          <select id="outlets" name="outlets" defaultValue="" className={inputClass}>
            <option value="">Select…</option>
            {OUTLET_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
            Message
          </label>
          <textarea id="message" name="message" rows={4} className={inputClass} />
        </div>
      </div>

      {/* Honeypot — hidden from real users, bots fill it in and get a silent no-op. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {errorMsg && (
        <p role="alert" className="mt-4 text-sm text-rose-600">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 rounded-lg bg-rose-500 px-6 py-3 font-medium text-white transition-colors hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
