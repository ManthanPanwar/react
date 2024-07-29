// can't read what is import
// so we need to tell HTML that our script tag is module(not normal script tag)
// module can import and export.

// importing React
import React from "react"; // I am getting react from my node_modules.
// import ReactDOM from "react-dom"; // I am getting reactDOM from my node_modules.
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "head1", style: { color: "blue" } },
  "heading 1"
);
const heading2 = React.createElement(
  "h2",
  { id: "head2", style: { color: "red" } },
  "heading 2"
);
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
// if we want to pass multiple children then we have to use array

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
