import { Suspense, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import React, { lazy } from "react";
import Header from "./Components/Header";
import Body from "./Components/MainContent";
import Menu from "./Components/Menu";
import About from "./Components/AboutUs";
import Contact from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
//import Grocery from "./Components/Grocery";
import ErrorPage from "./Components/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./Css/FoodOrderApp.css";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./Utils/redux/appStore";

const FoodOrderApp = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Sivananthan",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
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
      { path: "/Cart", element: <Cart /> },
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
