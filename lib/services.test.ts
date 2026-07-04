import { describe, expect, it } from "vitest";
import { curemed } from "./brands/curemed";
import { saimz } from "./brands/saimz";
import { getServicesForBrand } from "./services";

describe("services routing", () => {
  it("includes the compounding page for Curemed and excludes it for Saimz", () => {
    const curemedServices = getServicesForBrand(curemed);
    const saimzServices = getServicesForBrand(saimz);

    expect(
      curemedServices.some((service) => service.slug === "compounding"),
    ).toBe(true);
    expect(
      saimzServices.some((service) => service.slug === "compounding"),
    ).toBe(false);
  });
});
