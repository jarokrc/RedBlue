import { screen } from "@testing-library/react";
import Layout from "@/components/Layout";
import { renderWithProviders } from "../testUtils";

describe("Layout navigation and footer", () => {
  it("renders services dropdown links and footer links", () => {
    renderWithProviders(
      <Layout>
        <div data-testid="content">Content</div>
      </Layout>,
      { route: "/" }
    );

    const servicesToggle = screen.getByRole("button", { name: /služby|services/i });
    servicesToggle.click();

    expect(screen.getByRole("link", { name: /web riešenia|web solutions/i })).toHaveAttribute("href", "/web-riesenia");
    expect(screen.getByRole("link", { name: /marketing/i })).toHaveAttribute("href", "/marketing");
    expect(screen.getByRole("link", { name: /techcare|support/i })).toHaveAttribute("href", "/podpora");
    expect(screen.getByRole("link", { name: /ochrana osobných údajov|privacy|datenschutz/i })).toHaveAttribute(
      "href",
      "/zasady-ochrany-osobnych-udajov"
    );
    expect(screen.getByRole("link", { name: /cookies|cookie politika/i })).toHaveAttribute("href", "/cookies");
  });
});
