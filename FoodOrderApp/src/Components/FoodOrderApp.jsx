import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
// This component serves as the main entry point for the Food Order App.
// It imports and renders the Header, MainContent, and Footer components to create a complete layout
// for the application.

const FoodOrderApp = () => {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};
export default FoodOrderApp;
