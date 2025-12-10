import { screen } from "@testing-library/react";
import HomePage from "@/pages/HomePage";
import { renderWithProviders } from "../testUtils";

describe("HomePage", () => {
  it("renders hero heading and primary CTA", () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/redblue/i);
    const contactLinks = screen.getAllByRole("link", { name: /contact me/i });
    expect(contactLinks.some((link) => link.getAttribute("href") === "/kontakt")).toBe(true);
  });
});
