import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Please enter a phone number."),
  message: z.string().trim().min(10, "Please share a little more detail."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function submitContactForm(
  data: ContactFormValues,
  brandSlug: string,
): Promise<{ success: boolean; message: string }> {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("message", data.message);

  const response = await fetch(
    "https://multi-brand-pharmacy-api.onrender.com/api/v1/contact",
    {
      method: "POST",
      headers: {
        "X-Brand": brandSlug, // "curemed" أو "saimz"
      },
      body: formData,
    },
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || "Failed to send message. Please try again.",
    );
  }

  const result = await response.json();
  return {
    success: true,
    message:
      result.message || "Thanks for reaching out. We will follow up soon.",
  };
}
