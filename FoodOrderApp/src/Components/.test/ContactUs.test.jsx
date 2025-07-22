import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom";

describe("ContactUs component", () => {
  test("renders correctly", () => {
    render(<ContactUs />);
    screen.debug(<ContactUs />);
    const heading = screen.getByRole("heading", { name: /contact us/i });
    expect(heading).toBeInTheDocument();
  });
});
