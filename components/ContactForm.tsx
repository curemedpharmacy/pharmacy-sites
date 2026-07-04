"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { BrandConfig } from "@/lib/brands/types";
import { contactFormSchema, type ContactFormValues } from "@/lib/contact";

type ContactFormProps = {
  brand: BrandConfig;
};

export function ContactForm({ brand }: ContactFormProps) {
  const [submitMessage, setSubmitMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (_values: ContactFormValues) => {
    // TODO: wire this to the Laravel backend once the endpoint is ready.
    setSubmitMessage("Thanks for reaching out. We will follow up soon.");
    reset();
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <span className="font-mono text-xs uppercase tracking-wider text-amber-dark">
          Contact
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
          We’re here to help
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/70">
          Call {brand.phone} or send a message with your prescription question,
          refill request, or service request.
        </p>

        <div className="mt-8 rounded-md border border-ink/10 bg-tan/40 p-8">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Visit us
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/70">
            {brand.address.street}
            <br />
            {brand.address.city}, {brand.address.state} {brand.address.zip}
          </p>
          <p className="mt-4 text-sm text-ink/70">
            <a href={`tel:${brand.phone}`} className="hover:text-amber">
              {brand.phone}
            </a>
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-md border border-ink/10 bg-paper p-8 shadow-sm"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm text-ink/80">
            <span className="mb-2 block font-medium">Name</span>
            <input
              {...register("name")}
              className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 outline-none transition focus:border-amber"
              placeholder="Your name"
            />
            {errors.name ? (
              <p className="mt-2 text-sm text-amber-dark">
                {errors.name.message}
              </p>
            ) : null}
          </label>

          <label className="text-sm text-ink/80">
            <span className="mb-2 block font-medium">Email</span>
            <input
              type="email"
              {...register("email")}
              className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 outline-none transition focus:border-amber"
              placeholder="you@example.com"
            />
            {errors.email ? (
              <p className="mt-2 text-sm text-amber-dark">
                {errors.email.message}
              </p>
            ) : null}
          </label>
        </div>

        <label className="mt-5 block text-sm text-ink/80">
          <span className="mb-2 block font-medium">Phone</span>
          <input
            type="tel"
            {...register("phone")}
            className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 outline-none transition focus:border-amber"
            placeholder="973-555-0100"
          />
          {errors.phone ? (
            <p className="mt-2 text-sm text-amber-dark">
              {errors.phone.message}
            </p>
          ) : null}
        </label>

        <label className="mt-5 block text-sm text-ink/80">
          <span className="mb-2 block font-medium">Message</span>
          <textarea
            rows={5}
            {...register("message")}
            className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 outline-none transition focus:border-amber"
            placeholder="Tell us what you need help with"
          />
          {errors.message ? (
            <p className="mt-2 text-sm text-amber-dark">
              {errors.message.message}
            </p>
          ) : null}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-8 rounded-full bg-amber px-5 py-3 font-mono text-xs uppercase tracking-wider text-paper transition hover:bg-amber-dark disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </button>

        {submitMessage ? (
          <p className="mt-4 text-sm text-sage">{submitMessage}</p>
        ) : null}
      </form>
    </div>
  );
}
