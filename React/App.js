// Create heading1 element
const heading1 = document.createElement("h1");
heading1.id = "title";
heading1.textContent = "Heading 1";

// Create heading2 element
const heading2 = document.createElement("h2");
heading2.id = "title";
heading2.textContent = "Heading 2";

// Create container element
const container = document.createElement("div");
container.id = "container";

// Append headings to the container
container.appendChild(heading1);
container.appendChild(heading2);

// Find the root element and append the container to it
const root = document.getElementById("root");
root.innerHTML = "";  // Clear the existing content
root.appendChild(container);
