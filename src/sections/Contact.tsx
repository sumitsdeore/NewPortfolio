"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SITE } from "@/data/site";
import { Loader2, Check } from "lucide-react";

const fieldClass =
  "peer w-full rounded-xl border border-[var(--border)] bg-white/[0.02] px-4 pb-2.5 pt-5 text-sm text-white outline-none transition-colors focus:border-blue placeholder-transparent";

const labelClass =
  "pointer-events-none absolute left-4 top-4 text-sm text-muted transition-all peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-blue peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[11px]";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:deoresumit09@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("sent");
      // Reset fields
      (document.getElementById("name") as HTMLInputElement).value = "";
      (document.getElementById("email") as HTMLInputElement).value = "";
      (document.getElementById("message") as HTMLTextAreaElement).value = "";
      
      // Reset status back to idle after a few seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-32">
      <Reveal>
        <span className="eyebrow">Contact</span>
        <h2 className="mt-3 text-balance text-4xl font-medium text-white sm:text-5xl">
          Let&apos;s build something{" "}
          <span className="text-gradient">intelligent</span> together.
        </h2>
        <p className="mt-4 max-w-lg text-muted">
          Have a project in mind, or just want to talk shop about AI and
          software? My inbox is open.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <form onSubmit={handleSubmit} className="glass mt-12 rounded-3xl p-6 sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative">
              <input
                id="name"
                required
                placeholder=" "
                className={fieldClass}
              />
              <label htmlFor="name" className={labelClass}>
                Name
              </label>
            </div>
            <div className="relative">
              <input
                id="email"
                type="email"
                required
                placeholder=" "
                className={fieldClass}
              />
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
            </div>
          </div>

          <div className="relative mt-5">
            <textarea
              id="message"
              required
              rows={5}
              placeholder=" "
              className={`${fieldClass} resize-none`}
            />
            <label htmlFor="message" className={labelClass}>
              Tell me about your project
            </label>
          </div>

          <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-muted space-y-1">
              <p>
                Email:{" "}
                <a href={`mailto:${SITE.email}`} className="text-white underline underline-offset-4">
                  {SITE.email}
                </a>
              </p>
              {SITE.phone && (
                <p>
                  Phone:{" "}
                  <a href={`tel:${SITE.phone}`} className="text-white underline underline-offset-4">
                    {SITE.phone}
                  </a>
                </p>
              )}
            </div>

            <MagneticButton variant="primary">
              <motion.span
                key={status}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2"
              >
                {status === "loading" && (
                  <Loader2 size={15} className="animate-spin" />
                )}
                {status === "sent" && <Check size={15} />}
                {status === "idle" && "Send Message"}
                {status === "loading" && "Sending..."}
                {status === "sent" && "Sent"}
              </motion.span>
            </MagneticButton>
          </div>
        </form>
      </Reveal>
    </section>
  );
}
