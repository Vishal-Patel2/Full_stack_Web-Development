//DOM AND BOM


/* 
In JavaScript, DOM and BOM stand for:

DOM (Document Object Model):
1. Represents the structure of an HTML or XML document as a tree of objects, 
allowing you to access and manipulate its elements.
2. Provides methods and properties to interact with the document, such as adding,
removing, and modifying elements, attributes, and text content.
*/
// Get the element with id "myElement" and change its text content
const element = document.getElementById("myElement");
element.textContent = "New text";

/*
BOM (Browser Object Model):
1. Represents the browser window and provides access to browser-specific features and functionalities.
2. Enables interaction with the browser outside of the document, such as manipulating the browser history, 
navigating to different URLs, and accessing browser window properties.

*/
// Display an alert message
alert("Hello, world!");

// Get the browser's window width
const windowWidth = window.innerWidth;

/*
Key Differences:
1. Scope: DOM focuses on the document, while BOM focuses on the browser window.
2. Standardization: DOM is standardized, while BOM is not.
3. Purpose: DOM is used for manipulating document content, 
            while BOM is used for interacting with the browser itself.

*/
