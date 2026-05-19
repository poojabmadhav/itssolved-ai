"use client";

import { useState, useRef } from "react";
import { Upload, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const LIMITS = { name: 30, tagline: 80, description: 200, builtBy: 40 };

function Counter({ current, limit }: { current: number; limit: number }) {
  const remaining = limit - current;
  return (
    <span className={`text-xs tabular-nums ${remaining < 10 ? "text-red-400" : "text-black/25"}`}>
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

export default function ShowcasePage() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [builtBy, setBuiltBy] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageError, setImageError] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageError("");
    if (file.size > 2 * 1024 * 1024) {
      setImageError("Image must be under 2MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => setImagePreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Required";
    if (!url.trim()) e.url = "Required";
    else if (!/^https?:\/\/.+/.test(url.trim())) e.url = "Must be a full URL starting with https://";
    if (!tagline.trim()) e.tagline = "Required";
    if (!description.trim()) e.description = "Required";
    if (!builtBy.trim()) e.builtBy = "Required";
    if (!confirmed) e.confirmed = "Please confirm your product meets all four requirements";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#FFFFFC] flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <CheckCircle2 className="w-14 h-14 text-[#00C49A] mb-6" />
        <h2 className="text-3xl font-bold text-[#156064] mb-3">Submission received</h2>
        <p className="text-[#000000]/50 max-w-md leading-relaxed mb-8">
          Thanks for submitting <strong className="text-[#000000]/70">{name}</strong>. We&apos;ll review it against our requirements and reach out if it&apos;s a good fit for the site.
        </p>
        <Link href="/" className="text-sm text-[#156064] hover:text-[#00C49A] transition-colors">
          ← Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFFFC] flex-1">

      {/* Form + Preview */}
      <section className="px-6 md:px-10 pt-10 pb-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#000000]/50 text-sm leading-relaxed mb-10 max-w-xl">
            We feature tools that are <span className="text-[#156064] font-medium">completely free, browser-based, and need no account or downloads</span> — no freemium, no paywalls, no exceptions. Think yours qualifies? Fill in the details below.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start">

              {/* Left: form fields */}
              <div className="flex flex-col gap-6">

                <Field label="App name" counter={<Counter current={name.length} limit={LIMITS.name} />} error={errors.name}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value.slice(0, LIMITS.name)); setErrors((p) => ({ ...p, name: "" })); }}
                    placeholder="e.g. Penny Pincher"
                    className={inputBase}
                  />
                </Field>

                <Field label="Product URL" error={errors.url}>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => { setUrl(e.target.value); setErrors((p) => ({ ...p, url: "" })); }}
                    placeholder="https://your-app.com"
                    className={inputBase}
                  />
                </Field>

                <Field label="Tagline" counter={<Counter current={tagline.length} limit={LIMITS.tagline} />} error={errors.tagline}>
                  <input
                    type="text"
                    value={tagline}
                    onChange={(e) => { setTagline(e.target.value.slice(0, LIMITS.tagline)); setErrors((p) => ({ ...p, tagline: "" })); }}
                    placeholder="One punchy line describing what it does"
                    className={inputBase}
                  />
                </Field>

                <Field label="Description" counter={<Counter current={description.length} limit={LIMITS.description} />} error={errors.description}>
                  <textarea
                    value={description}
                    onChange={(e) => { setDescription(e.target.value.slice(0, LIMITS.description)); setErrors((p) => ({ ...p, description: "" })); }}
                    placeholder="What does it do? What problem does it solve? Who is it for?"
                    rows={4}
                    className={`${inputBase} resize-none`}
                  />
                </Field>

                <Field label="Built by" counter={<Counter current={builtBy.length} limit={LIMITS.builtBy} />} error={errors.builtBy}>
                  <input
                    type="text"
                    value={builtBy}
                    onChange={(e) => { setBuiltBy(e.target.value.slice(0, LIMITS.builtBy)); setErrors((p) => ({ ...p, builtBy: "" })); }}
                    placeholder="Your name or handle"
                    className={inputBase}
                  />
                </Field>

                {/* Screenshot upload */}
                <Field label="Screenshot" hint="optional">
                  <label className="block border-2 border-dashed border-[#156064]/20 hover:border-[#00C49A]/50 transition-colors cursor-pointer group">
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      className="sr-only"
                      onChange={handleImage}
                    />
                    {imagePreview ? (
                      <img src={imagePreview} alt="Screenshot preview" className="w-full h-40 object-cover object-top" />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-2 py-10 text-black/30 group-hover:text-[#00C49A] transition-colors">
                        <Upload className="w-5 h-5" />
                        <span className="text-sm">Click to upload</span>
                      </div>
                    )}
                  </label>
                  <div className="text-xs text-black/30 leading-relaxed">
                    PNG, JPG or WebP · Max 2MB · Recommended <strong className="text-black/40">1200×900px (4:3 landscape)</strong> · Capture the most useful view of your app — dashboard or main feature, not a landing page
                  </div>
                  {imageError && <p className="text-xs text-red-500">{imageError}</p>}
                  {imagePreview && (
                    <button type="button" onClick={removeImage} className="text-xs text-black/30 hover:text-red-400 transition-colors text-left w-fit">
                      Remove image
                    </button>
                  )}
                </Field>

                {/* Confirmation */}
                <div className="flex flex-col gap-1.5 pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={confirmed}
                      onChange={(e) => { setConfirmed(e.target.checked); setErrors((p) => ({ ...p, confirmed: "" })); }}
                      className="mt-0.5 w-4 h-4 accent-[#00C49A] flex-shrink-0"
                    />
                    <span className="text-sm text-black/55 leading-relaxed">
                      I confirm this product is completely free, works in the browser with no downloads, requires no account, and has no freemium or hidden payment flows.
                    </span>
                  </label>
                  {errors.confirmed && <p className="text-xs text-red-500 ml-7">{errors.confirmed}</p>}
                </div>

                <button
                  type="submit"
                  className="bg-[#156064] text-[#FFFFFC] px-8 py-4 text-sm font-semibold tracking-wide hover:bg-[#00C49A] transition-colors w-full md:w-auto"
                >
                  Submit for Review
                </button>

              </div>

              {/* Right: live preview card */}
              <div className="flex flex-col gap-3 md:sticky md:top-24">
                <p className="text-xs tracking-[0.2em] text-[#156064] uppercase font-semibold">
                  Live preview
                </p>
                <div className="bg-[#156064] shadow-lg">
                  <div className="h-44 bg-[#00C49A] p-3">
                    <div className="w-full h-full overflow-hidden">
                      {imagePreview ? (
                        <img src={imagePreview} alt="" className="w-full h-full object-cover object-top" />
                      ) : (
                        <div className="w-full h-full bg-[#156064]/20 flex items-center justify-center">
                          <span className="text-[#156064]/35 text-xs tracking-wide text-center px-4">
                            Screenshot will appear here
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-4">
                      <span className="text-[10px] tracking-[0.2em] bg-[#F8E16C]/50 text-black px-2.5 py-1 font-bold uppercase">
                        Pending review
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-[#FFFFFC] mb-1 min-h-[1.75rem]">
                      {name || <span className="text-[#FFFFFC]/20 font-normal">App name</span>}
                    </h2>
                    <p className="text-[10px] tracking-[0.12em] text-[#00C49A] uppercase mb-3 min-h-[1rem]">
                      {tagline || <span className="text-[#00C49A]/25">Tagline</span>}
                    </p>
                    <p className="text-xs text-[#FFFFFC]/45 leading-relaxed min-h-[2.5rem]">
                      {description || <span className="text-[#FFFFFC]/15">Description</span>}
                    </p>
                    {builtBy && (
                      <p className="text-[10px] text-[#FFFFFC]/25 mt-4 pt-3 border-t border-[#FFFFFC]/10">
                        Built by {builtBy}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-xs text-black/25 leading-relaxed">
                  This is how your product will appear on the site once approved.
                </p>
              </div>

            </div>
          </form>
        </div>
      </section>

    </div>
  );
}
