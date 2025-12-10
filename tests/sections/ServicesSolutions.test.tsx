import { screen, within } from "@testing-library/react";
import HomePage from "@/pages/HomePage";
import { renderWithProviders } from "../testUtils";

describe("Services and SolutionsCTA sections", () => {
  it("renders 4 service cards and 4 solution CTAs with correct links", () => {
    renderWithProviders(<HomePage />);

    const serviceCards = screen.getAllByRole("article");
    expect(serviceCards.length).toBeGreaterThanOrEqual(4);

    const ctaButtons = screen.getAllByRole("link", { name: /see|contact|learn|pozrie|zisti/i });
    // Ensure key CTAs exist
    const hasWeb = ctaButtons.some((link) => link.getAttribute("href") === "/web-riesenia");
    const hasMarketing = ctaButtons.some((link) => link.getAttribute("href") === "/marketing");
    const hasSupport = ctaButtons.some((link) => link.getAttribute("href") === "/podpora");
    const hasEducation = ctaButtons.some((link) => link.getAttribute("href") === "/vzdelavanie");
    expect(hasWeb).toBe(true);
    expect(hasMarketing).toBe(true);
    expect(hasSupport).toBe(true);
    expect(hasEducation).toBe(true);

    // Validate services section heading
    const servicesSection = screen.getByRole("heading", { name: /what i deliver/i }).closest("section");
    expect(servicesSection).not.toBeNull();
    if (servicesSection) {
      const cardsInside = within(servicesSection).getAllByRole("article");
      expect(cardsInside.length).toBe(4);
    }
  });
});
