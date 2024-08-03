import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
/*
      Header
        - logo
        - Nav items(right side)
      
      Body
        - Search Bar
        - RestrauntList
          - RestrauntCard
            - images
            - name
            - rating
            - cusines
      Footer
        - links
        - copyright
      */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayout());
