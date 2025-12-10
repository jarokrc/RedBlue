import { screen } from "@testing-library/react";
import PrivacyPage from "@/pages/PrivacyPage";
import CookiesPage from "@/pages/CookiesPage";
import { renderWithProviders } from "../testUtils";

describe("Privacy and Cookies pages", () => {
  it("renders Privacy page heading and link to cookies", () => {
    renderWithProviders(<PrivacyPage />, { route: "/privacy" });
    expect(screen.getByRole("heading", { level: 1, name: /privacy policy/i })).toBeInTheDocument();
    const cookieLink = screen.getByRole("link", { name: /cookie policy/i });
    expect(cookieLink).toHaveAttribute("href", "/cookies");
  });

  it("renders Cookies page heading", () => {
    renderWithProviders(<CookiesPage />, { route: "/cookies" });
    expect(screen.getByRole("heading", { level: 1, name: /cookie policy/i })).toBeInTheDocument();
  });
});
