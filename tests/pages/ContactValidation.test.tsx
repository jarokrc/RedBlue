import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactPage from "@/pages/ContactPage";
import { renderWithProviders } from "../testUtils";

describe("ContactPage validation", () => {
  it("shows validation errors for empty submit", async () => {
    const user = userEvent.setup();
    renderWithProviders(<ContactPage />, { route: "/kontakt" });

    await act(async () => {
      await user.click(screen.getByRole("button", { name: /send message/i }));
    });

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/valid email required/i)).toBeInTheDocument();
    expect(screen.getByText(/please add a few more details/i)).toBeInTheDocument();
  });
});
