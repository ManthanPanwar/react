// import { createElement } from "react";
import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement() => Object => HTML(DOM)
// JSX => React.createElement() => Object => HTML(DOM)

// JSX(JavaScript XML)
// jsxExample is a React Element.
const jsxExample = (
  <h1 id="title" key="key1 ">
    Namaste Monu
  </h1>
); // it is known as JSX

const Component1 = () => (
  <h1 id="title" key="key1 ">
    Namaste component inside component
  </h1>
);

// is JSX html inside javaScript --> NO
// it is html like syntax and babel understands this code.
// JSX uses React.createElement() behind the scenes(babel converts JSX code to React code)

// **********************************************

// React Components
// 1. Functional Component(new way of writing code)
// 2. Class Based Component(old way)

// functional component is nothing but a JavaScript function
// that returns some piece of JSX or a React Element or a Component itself.
// any components name starts with a capital letter(good practice).
const xyz = 10;
const HeaderComponent = () => {
  // return <h1>Namaste React Functional Component</h1>;
  // if JSX is of one line then you dont need to wrap it inside ()parenthesis.

  return (
    <div>
      {xyz}
      {jsxExample}
      <Component1 />
      {Component1()}
      <h2>Namaste Functional Component</h2>
      <h2>This is heading 2</h2>
    </div>
  );
  // but if multiple line then wrap inside parenthesis().
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering React Element
// root.render(jsxExample);

// rendering Component
root.render(HeaderComponent());

// when you want to create a 'div' and inside it 'ul' and inside it multiple 'li', then createElement() will
// become very lengthy and troublesome(createELement having array of createElement and it also has array of createElement).
// so to overcome this we have 'jsx'

// how to use React Element inside React Component
// just place the React Element inside React Component by wrapping in {}brackets.

// (Component Composition)how to use React Component inside React Component
// just place the component inside another component by using tags< theComponent /> or just call the function { theComponent() }.

// you can any javaScript code inside {}brackets.
