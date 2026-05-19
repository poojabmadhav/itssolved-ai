"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const LIMITS = { problem: 500, workaround: 300 };

const FREQUENCY_OPTIONS = [
  "Multiple times a day",
  "Daily",
  "A few times a week",
  "Weekly",
  "Monthly",
  "Occasionally",
];

function Counter({ current, limit }: { current: number; limit: number }) {
  const remaining = limit - current;
  return (
    <span className={`text-xs tabular-nums ${remaining < 20 ? "text-red-400" : "text-black/25"}`}>
      {remaining} left
    </span>
  );
}

function Field({
  label,
  hint,
  counter,
  error,
  children,
}: {
  label: string;
  hint?: string;
  counter?: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-baseline">
        <label className="text-sm font-semibold text-[#000000]">
          {label}
          {hint && <span className="text-black/30 font-normal ml-2 text-xs">{hint}</span>}
        </label>
        {counter}
      </div>
      {children}
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  );
}

const inputBase =
  "w-full border border-black/12 px-4 py-3 text-sm text-[#000000] bg-white focus:outline-none focus:border-[#00C49A] transition-colors placeholder:text-black/25";

export default function SubmitPage() {
  const [problem, setProblem] = useState("");
  const [workaround, setWorkaround] = useState("");
  const [frequency, setFrequency] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!problem.trim()) e.problem = "Required";
    if (!workaround.trim()) e.workaround = "Required";
    if (!frequency) e.frequency = "Required";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      e.email = "Enter a valid email address";
    }
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/submit-solution", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ problem, workaround, frequency, email }),
      });
      if (!res.ok) throw new Error("failed");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#FFFFFC] flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <CheckCircle2 className="w-14 h-14 text-[#00C49A] mb-6" />
        <h2 className="text-3xl font-bold text-[#156064] mb-3">Got it, thanks.</h2>
        <p className="text-[#000000]/50 max-w-md leading-relaxed mb-8">
          We won&apos;t promise anything — but if we think we can build your solution, we&apos;ll reach out for more details.
        </p>
        <Link href="/" className="text-sm text-[#156064] hover:text-[#00C49A] transition-colors">
          ← Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFFFC] flex-1">
      <section className="px-6 md:px-10 pt-10 pb-20">
        <div className="max-w-2xl mx-auto">

          <p className="text-[#000000]/50 text-sm leading-relaxed mb-10">
            Got a mundane problem that needs solving? Tell us what you&apos;re dealing with.{" "}
            <span className="text-[#156064] font-medium">
              If we think we can build a solution, we&apos;ll get in touch for any further details.
            </span>
          </p>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-7">

            <Field
              label="What's the problem?"
              counter={<Counter current={problem.length} limit={LIMITS.problem} />}
              error={errors.problem}
            >
              <textarea
                value={problem}
                onChange={(e) => {
                  setProblem(e.target.value.slice(0, LIMITS.problem));
                  setErrors((p) => ({ ...p, problem: "" }));
                }}
                placeholder="Describe the problem you're facing. What's the task and why is it painful?"
                rows={5}
                className={`${inputBase} resize-none`}
              />
            </Field>

            <Field
              label="How do you currently deal with it?"
              counter={<Counter current={workaround.length} limit={LIMITS.workaround} />}
              error={errors.workaround}
            >
              <textarea
                value={workaround}
                onChange={(e) => {
                  setWorkaround(e.target.value.slice(0, LIMITS.workaround));
                  setErrors((p) => ({ ...p, workaround: "" }));
                }}
                placeholder="Spreadsheet? Manual steps? Just putting up with it? Tell us your current workaround."
                rows={3}
                className={`${inputBase} resize-none`}
              />
            </Field>

            <Field label="How often does this come up?" error={errors.frequency}>
              <select
                value={frequency}
                onChange={(e) => {
                  setFrequency(e.target.value);
                  setErrors((p) => ({ ...p, frequency: "" }));
                }}
                className={`${inputBase} cursor-pointer`}
              >
                <option value="">Select frequency…</option>
                {FREQUENCY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </Field>

            <Field
              label="Email"
              hint="optional"
              error={errors.email}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((p) => ({ ...p, email: "" }));
                }}
                placeholder="you@example.com"
                className={inputBase}
              />
              <p className="text-xs text-black/30 leading-relaxed">
                Only used to follow up if we decide to build your solution. Your email will never be shared with anyone.
              </p>
            </Field>

            {submitError && (
              <p className="text-sm text-red-500">{submitError}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="bg-[#156064] text-[#FFFFFC] px-8 py-4 text-sm font-semibold tracking-wide hover:bg-[#00C49A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
            >
              {submitting ? "Submitting…" : "Submit"}
            </button>

          </form>
        </div>
      </section>
    </div>
  );
}
