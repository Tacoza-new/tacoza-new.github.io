"use client";

import { useState } from "react";

// Apps Script web app URL. Not a secret — the endpoint is public by
// design (see google-apps-script/README.md).
const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzZKlFustkMCXKDthLT_gEaizV3JoDMXPvNnWDxwpFiOdWovZqrJu5ObrvRnVW2Bpu3/exec";

const ROLES = ["Owner", "Chef", "Team manager", "Team member", "Other"];
const OUTLET_TYPES = ["Restaurant", "Cafe", "Bar", "Food Truck", "Food Chains"];

export default function OnboardingForm() {
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
        formType: "onboarding",
        fullName: fd.get("fullName") || "",
        phone: fd.get("phone") || "",
        email: fd.get("email") || "",
        role: fd.get("role") || "",
        outletName: fd.get("outletName") || "",
        outletType: fd.get("outletType") || "",
        city: fd.get("city") || "",
        pincode: fd.get("pincode") || "",
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
      <div className="text-center">
        <h2 className="h4 mb-2">Thanks — your application is in.</h2>
        <p className="text-slate-500 mb-4">
          Someone from the Tacoza team will be in touch shortly to get your
          outlet set up.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-rose-500 font-medium hover:underline"
        >
          Submit another outlet
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none transition-colors focus:border-rose-400 focus:bg-white";
  const labelClass = "block text-sm font-medium text-slate-700 mb-1 text-left";

  return (
    <form onSubmit={handleSubmit} className="text-left">
      <h2 className="h4 mb-5">Outlet Onboarding</h2>

      <div className="space-y-4">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="enter your full name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Mobile number <span className="text-rose-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="mobile number"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="email"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="role" className={labelClass}>
            Your role
          </label>
          <select id="role" name="role" defaultValue="" className={inputClass}>
            <option value="">select role</option>
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="outletName" className={labelClass}>
            Outlet name
          </label>
          <input
            id="outletName"
            name="outletName"
            type="text"
            placeholder="enter outlet name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="outletType" className={labelClass}>
            Outlet type
          </label>
          <select
            id="outletType"
            name="outletType"
            defaultValue=""
            className={inputClass}
          >
            <option value="">select type</option>
            {OUTLET_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className={labelClass}>
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder="city"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="pincode" className={labelClass}>
              Pincode
            </label>
            <input
              id="pincode"
              name="pincode"
              type="text"
              inputMode="numeric"
              placeholder="pincode"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Honeypot — hidden from real users, bots fill it in and get a silent no-op. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errorMsg && (
        <p role="alert" className="mt-4 text-sm text-rose-600">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn w-full mt-6 rounded-lg bg-rose-500 px-6 py-3 font-medium text-white transition-colors hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Apply"}
      </button>
    </form>
  );
}
