/** @vitest-environment jsdom */

import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeroSlider } from "./HeroSlider";
import { saimz } from "../lib/brands/saimz";

const brandWithoutImages = {
  ...saimz,
  heroImages: [],
};

describe("HeroSlider", () => {
  it("renders nothing when a brand has no hero images", () => {
    const { container } = render(<HeroSlider brand={brandWithoutImages} />);

    expect(container.querySelector("img")).toBeNull();
    expect(screen.queryByRole("button", { name: /show slide/i })).toBeNull();
  });
});