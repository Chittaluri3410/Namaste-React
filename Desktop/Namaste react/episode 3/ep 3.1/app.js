import React from "react";
import ReactDOM from "react-dom/client";

// Creates an <h1> React element with the text "Hello world from React!"
const heading = React.createElement("h1", {}, "Hello world from React!");

// Finds the <div> with id "root" and prepares it for rendering React components 
const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX element
const Vardhan = <h1> Hi this text is from Jsx</h1>;

// First functional component
const HeadingComponent = () => {
    return <h1>tHIS tEXT iS fROM fUNCTIONAL COMPONENT</h1>;
};

// Second functional component
const HeadingComponent1 = () => <h1>tHIS tEXT iS fROM fUNCTIONAL COMPONENT</h1>;

// Parent component to merge both components
const HeadingComponent2 = () => (
    <div>
        <HeadingComponent1 />
        {Vardhan}
        <h1>tHIS tEXT iS fROM fUNCTIONAL COMPONENT 2</h1>
    </div>
);

// Render the parent component inside the 'root' div
root.render(<HeadingComponent2 />);
