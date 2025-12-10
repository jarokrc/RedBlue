import { act, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactPage from "@/pages/ContactPage";
import { renderWithProviders } from "../testUtils";

describe("ContactPage", () => {
  it("shows contact form fields and submits successfully", async () => {
    const user = userEvent.setup();

    renderWithProviders(<ContactPage />, { route: "/kontakt" });

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();

    await user.type(screen.getByLabelText(/name/i), "John Doe");
    await user.type(screen.getByLabelText(/email/i), "john@example.com");
    await user.type(screen.getByLabelText(/message/i), "Looking forward to your reply.");

    await act(async () => {
      await user.click(screen.getByRole("button", { name: /send message/i }));
    });

    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument();
    });
  });
});
