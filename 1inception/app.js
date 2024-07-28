// // not rendered is used to see whether the app is working correctly or not.
// // and if everything is correct then it will render.
// const heading = React.createElement(
//   "h1",
//   { id: "title", style: { color: "blue" } },
//   "Namaste Everyone!"
// ); // it takes 3 arguments(tag that you want to create, {}, what you want to put inside the h1 tag)
// // now heading is a React Element
// // and React Element is an object
// // now React has created a object of type:"h1"
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // React will override everything inside the root and will only show what is passed inside the render().

// // now we have to put heading inside root
// root.render(heading);
// // render() takes in react Element and modifies our DOM.

// // in very big big applications we will have almost: 1 root and 1 render method
// // and everything we built using React will go inside root

const heading1 = React.createElement("h1", { id: "head1" }, "heading 1");
const heading2 = React.createElement("h2", { id: "head2" }, "heading 2");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
// if we want to pass multiple children then we have to use array

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
