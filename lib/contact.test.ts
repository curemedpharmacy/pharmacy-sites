import { describe, expect, it } from "vitest";
import { contactFormSchema } from "./contact";

describe("contact form validation", () => {
  it("rejects an invalid submission and accepts a valid one", () => {
    const invalid = contactFormSchema.safeParse({
      name: "A",
      email: "not-an-email",
      phone: "",
      message: "too short",
    });

    expect(invalid.success).toBe(false);

    const valid = contactFormSchema.safeParse({
      name: "Taylor",
      email: "taylor@example.com",
      phone: "973-555-1234",
      message: "I would like to transfer a prescription.",
    });

    expect(valid.success).toBe(true);
  });
});
