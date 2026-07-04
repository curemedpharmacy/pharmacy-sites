import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Please enter a phone number."),
  message: z.string().trim().min(10, "Please share a little more detail."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
