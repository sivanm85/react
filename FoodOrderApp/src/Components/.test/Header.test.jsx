import Header from "../Header";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../Utils/redux/appStore";
import { test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Header component renders correctly", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Check if the logo is rendered
  const logo = screen.getByAltText("Food Order Logo");
  expect(logo).toBeInTheDocument();

  // Check if the navigation links are rendered
  const homeLink = screen.getByText("Home");
  expect(homeLink).toBeInTheDocument();

  const menuLink = screen.getByText("Menu");
  expect(menuLink).toBeInTheDocument();

  const aboutLink = screen.getByText("About Us");
  expect(aboutLink).toBeInTheDocument();

  const contactLink = screen.getByText("Contact");
  expect(contactLink).toBeInTheDocument();

  const groceryLink = screen.getByText("Grocery");
  expect(groceryLink).toBeInTheDocument();

  const cartLink = screen.getByText(/Cart \(\d+ items\)/);
  expect(cartLink).toBeInTheDocument();
});
