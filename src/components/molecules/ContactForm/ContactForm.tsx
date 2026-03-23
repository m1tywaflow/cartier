"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  type ContactFormValues,
} from "@/components/atoms/Zod/schemas";
import { useState } from "react";

export const ContactForm = () => {
  const [focused, setFocused] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((r) => setTimeout(r, 1500));
    console.log(data);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#fff] overflow-hidden py-20 px-4">
      <div className="pointer-events-none absolute inset-0"></div>

      <div className="relative w-full max-w-xl">
        <div className="mb-10 text-center">
          <p className="text-black text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Get in touch
          </p>
          <h2
            className="text-4xl font-light text-black tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Let's talk
          </h2>
          <div className="mt-4 mx-auto w-12 h-px bg-gradient-to-r from-transparent via-black to-transparent" />
        </div>
        <div
          className="relative rounded-3xl p-8 backdrop-blur-xl border border-black/[0.08]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
            boxShadow:
              "0 32px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent rounded-full" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {(
                [
                  { id: "firstName", label: "First name", placeholder: "John" },
                  { id: "lastName", label: "Last name", placeholder: "Doe" },
                ] as const
              ).map(({ id, label, placeholder }) => (
                <div key={id} className="group relative">
                  <label
                    className={`absolute left-0 text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                      focused === id
                        ? "text-black -top-5"
                        : "text-black/40 -top-5"
                    }`}
                  >
                    {label}
                  </label>
                  <input
                    type="text"
                    placeholder={placeholder}
                    {...register(id)}
                    onFocus={() => setFocused(id)}
                    onBlur={() => setFocused(null)}
                    className="mt-1 w-full bg-white/[0.04] border border-black/10 rounded-xl px-4 py-3 text-black placeholder:text-black/20 text-sm outline-none transition-all duration-300 focus:border-black/30 focus:bg-black/[0.07] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.08)]"
                  />
                  {errors[id] && (
                    <span className="absolute -bottom-5 left-0 text-red-400/80 text-xs">
                      {errors[id]?.message}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="relative pt-4">
              <label
                className={`absolute left-0 top-0 text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                  focused === "email" ? "text-black" : "text-black/30"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className="mt-6 w-full bg-white/[0.04] border border-black/10 rounded-xl px-4 py-3 text-black placeholder:text-black/20 text-sm outline-none transition-all duration-300 focus:border-black/30 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.08)]"
              />
              {errors.email && (
                <span className="mt-1 block text-red-400/80 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="relative pt-4">
              <label
                className={`absolute left-0 top-0 text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                  focused === "message" ? "text-black" : "text-black/30"
                }`}
              >
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows={5}
                {...register("message")}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className="mt-6 w-full bg-white/[0.04] border border-black/10 rounded-xl px-4 py-3 text-black placeholder:text-black/20 text-sm outline-none transition-all duration-300 focus:border-black/30 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.08)] resize-none"
              />
              {errors.message && (
                <span className="mt-1 block text-red-400/80 text-xs">
                  {errors.message.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting || isSubmitSuccessful}
              className="cursor-pointer relative w-full mt-2 py-3.5 rounded-xl text-sm font-medium tracking-widest uppercase overflow-hidden transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed group"
              style={{
                background: "#000",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <span className="relative text-white">
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Sending…
                  </span>
                ) : isSubmitSuccessful ? (
                  "✓ Message Sent"
                ) : (
                  "Send Message"
                )}
              </span>
            </button>
          </form>
        </div>
        <p className="mt-6 text-center text-black/40 text-xs tracking-wide">
          We'll reply within 24 hours
        </p>
      </div>
    </section>
  );
};
