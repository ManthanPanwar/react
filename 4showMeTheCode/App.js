import React from "react";
import ReactDOM from "react-dom/client";
import foodVilla from "./images/foodVilla.png";
import burgerKing from "./images/burgerKing.png";

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

const JsxExample = () => <img id="logo" src={foodVilla} alt="logo" />;

const Header = () => {
  return (
    <div className="header">
      {<JsxExample />}
      <h1 id="title" key="h1">
        Food Villa
      </h1>
      <div className="nav-items">
        {
          // inline styleing(done using JS objects)
        }
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

const RestrauntCard = () => {
  return (
    <div className="card">
      <img src={burgerKing} alt="burger-king" />
      <h2>Burger King</h2>
      <h3>Burgers, American</h3>
      <h4>4.2 stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <RestrauntCard />
    </div>
  );
};
const Footer = () => <h3>footer</h3>;

// any piece of JSX expression that you write, there can only be one parent Element
// so you must write multiple element inside a div.
const AppLayout = () => {
  return (
    // <div>
    //   <Header />
    //   <Body />
    //   <Footer />
    // </div>
    // <React.Fragment>
    //   <Header />
    //   <Body />
    //   <Footer />
    // </React.Fragment>
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// now the problem is we have (div and inside it another div and inside it we have (header, body, footer)),
// but we want to have only one div.
// to solve this we have React.Fragment(it is a component which is exported by React)
// React.Fragment is like a empty tag
// and to further simplify the code we have <> </> empty tags.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayout());
