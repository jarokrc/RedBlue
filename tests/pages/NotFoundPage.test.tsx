import { screen } from "@testing-library/react";
import NotFoundPage from "@/pages/NotFoundPage";
import { renderWithProviders } from "../testUtils";

describe("NotFoundPage", () => {
  it("renders not found title and back link", () => {
    renderWithProviders(<NotFoundPage />, { route: "/neexistuje" });
    expect(screen.getByRole("heading", { level: 1, name: /page not found/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /back to home/i })).toHaveAttribute("href", "/");
  });
});
