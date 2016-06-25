var React = require("react");
var ReactDom = require("react-dom");
var ListManager = require("./components/ListManager.jsx");



ReactDom.render(<ListManager title= "Ingredients" />,document.getElementById('ingredients'));
ReactDom.render(<ListManager title= "To-Do List" headingColour="grey" />,document.getElementById('todo'));
ReactDom.render(<ListManager title= "Shopping" headingColour = "maroon" />,document.getElementById('shopping'));