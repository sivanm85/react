import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import React, { lazy } from "react";
import Header from "./Components/Header";
import Body from "./Components/MainContent";
import Menu from "./Components/Menu";
import About from "./Components/AboutUs";
import Contact from "./Components/ContactUs";
import Footer from "./Components/Footer";
//import Grocery from "./Components/Grocery";
import ErrorPage from "./Components/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./Css/FoodOrderApp.css";
import RestaurantMenu from "./Components/RestaurantMenu";

const FoodOrderApp = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const Grocery = lazy(() => import("./Components/Grocery"));
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <FoodOrderApp />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/Menu", element: <Menu /> },
      { path: "/About", element: <About /> },
      { path: "/Contact", element: <Contact /> },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/chennai/:resId", element: <RestaurantMenu /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);
