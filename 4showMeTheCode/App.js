import React from "react";
import ReactDOM from "react-dom/client";
import foodVillaImage from "./images/foodVilla.png";
import burgerKingImage from "./images/burgerKing.png";

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

const JsxExample = () => {
  return (
    <>
      <a href="/">
        <img id="logo" src={foodVillaImage} alt="logo" />
      </a>

      <h1 id="title" key="h1">
        Food Villa
      </h1>
    </>
  );
};

const Header = () => {
  return (
    <div className="header">
      {<JsxExample />}
      <div className="nav-items">
        <ul style={{ color: "green" }}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Dynamic UI
// config driven UI(we dont create different websites for different cities/states
// rather we create config driven UI which will adjust itself as per the location).
// backend is driving the config
const burgerKing = {
  name: "Burger King",
  image: `${burgerKingImage}`,
  cusines: ["Burger", "American"],
  rating: "4.2",
};
// use .join('joiner') to join array items.

// here the RestrauntCard is hard-coded
// we need to make it dynamic using javascript inside html and create restraunts objects.
const RestrauntCard = () => {
  return (
    <div className="card">
      <img src={burgerKing.image} alt="burger-king" />
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.cusines}</h3>
      <h4>{burgerKing.rating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restrau">
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
    </div>
  );
};
const Footer = () => <h3>footer</h3>;

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
