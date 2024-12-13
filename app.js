import React from "react";
import ReactDOM from "react-dom/client";

// Creates an <h1> React element with the text "Hello world from React!"
const heading = React.createElement("h1", {}, "Hello world from React!");

// Finds the <div> with id "root" and prepares it for rendering React components 
// ReactDOM.createRoot is a function provided by React 18 that creates a root to manage the rendering of your React components.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renders the 'heading' element inside the 'root' div
root.render(heading);
