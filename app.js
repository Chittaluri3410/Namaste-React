const heading = React.createElement("h1", {}, "Hello world from React!"); // Creates an <h1> React element with the text "Hello world from React!"

const root = ReactDOM.createRoot(document.getElementById("root")); // Finds the <div> with id "root" and prepares it for rendering React components 
//ReactDOM.createRoot is a function provided by React 18 that creates a root to manage the rendering of your React components.

root.render(heading); // Renders the 'heading' element inside the 'root' div
