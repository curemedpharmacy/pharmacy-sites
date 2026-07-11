"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import type { BrandConfig } from "@/lib/brands/types";
import { contactFormSchema, type ContactFormValues, submitContactForm } from "@/lib/contact";

type ContactFormProps = {
  brand: BrandConfig;
};

export function ContactForm({ brand }: ContactFormProps) {
  const isSaimz = brand.slug === "saimz";
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const mutation = useMutation({
    mutationFn: (values: ContactFormValues) => submitContactForm(values, brand.slug),
    onSuccess: () => {
      reset();
    },
    onError: (_error: Error) => {
      // الخطأ يتم التعامل معه في الـ UI
      console.error("Contact form error:", _error);
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    mutation.mutate(values);
  };

  // ===== SAIMZ FORM =====
  if (isSaimz) {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-[#0A1628] mb-1.5">
              Full Name <span className="text-[#4A9FFF]">*</span>
            </label>
            <input
              {...register("name")}
              className="w-full rounded-xl border border-[#1A4A7A]/15 bg-[#E8F0FE]/50 px-4 py-3 text-[#0A1628] outline-none transition focus:border-[#4A9FFF] focus:ring-2 focus:ring-[#4A9FFF]/20"
              placeholder="Your name"
              disabled={mutation.isPending}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0A1628] mb-1.5">
              Email Address <span className="text-[#4A9FFF]">*</span>
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full rounded-xl border border-[#1A4A7A]/15 bg-[#E8F0FE]/50 px-4 py-3 text-[#0A1628] outline-none transition focus:border-[#4A9FFF] focus:ring-2 focus:ring-[#4A9FFF]/20"
              placeholder="you@example.com"
              disabled={mutation.isPending}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#0A1628] mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            {...register("phone")}
            className="w-full rounded-xl border border-[#1A4A7A]/15 bg-[#E8F0FE]/50 px-4 py-3 text-[#0A1628] outline-none transition focus:border-[#4A9FFF] focus:ring-2 focus:ring-[#4A9FFF]/20"
            placeholder="973-555-0100"
            disabled={mutation.isPending}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#0A1628] mb-1.5">
            Message <span className="text-[#4A9FFF]">*</span>
          </label>
          <textarea
            rows={5}
            {...register("message")}
            className="w-full rounded-xl border border-[#1A4A7A]/15 bg-[#E8F0FE]/50 px-4 py-3 text-[#0A1628] outline-none transition focus:border-[#4A9FFF] focus:ring-2 focus:ring-[#4A9FFF]/20"
            placeholder="Tell us what you need help with"
            disabled={mutation.isPending}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full rounded-full bg-[#1A4A7A] hover:bg-[#0A1628] text-white px-6 py-3.5 font-mono text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {mutation.isPending ? "Sending..." : "Send Message"}
        </button>

        {mutation.isSuccess && (
          <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-center text-emerald-700 text-sm">
            Thanks for reaching out. We will follow up soon.
          </div>
        )}

        {mutation.isError && (
          <div className="mt-4 rounded-xl bg-red-50 border border-red-200 p-4 text-center text-red-700 text-sm">
            {mutation.error?.message || "Something went wrong. Please try again."}
          </div>
        )}
      </form>
    );
  }

  // ===== CUREMED FORM =====
  return (
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
            disabled={mutation.isPending}
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
            disabled={mutation.isPending}
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
          disabled={mutation.isPending}
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
          disabled={mutation.isPending}
        />
        {errors.message ? (
          <p className="mt-2 text-sm text-amber-dark">
            {errors.message.message}
          </p>
        ) : null}
      </label>

      <button
        type="submit"
        disabled={mutation.isPending}
        className="mt-8 rounded-full bg-amber px-5 py-3 font-mono text-xs uppercase tracking-wider text-paper transition hover:bg-amber-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {mutation.isPending ? "Sending..." : "Send message"}
      </button>

      {mutation.isSuccess && (
        <p className="mt-4 text-sm text-sage">
          Thanks for reaching out. We will follow up soon.
        </p>
      )}

      {mutation.isError && (
        <p className="mt-4 text-sm text-red-500">
          {mutation.error?.message || "Something went wrong. Please try again."}
        </p>
      )}
    </form>
  );
}