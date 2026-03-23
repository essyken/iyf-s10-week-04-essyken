# iyf-s10-week-04-essyken{Javascript fundamentas}

## Author
- **Name:** ESTHER WANJIRU NJOROGE
- **GitHub:** [@essyken](https://github.com/essyken)
- **Date:** 23rd March, 2026


## Project Description
- Interactive Calculator (basic math operations)
- Student Grade Tracker (arrays, objects, data manipulation)
- All exercises from Lessons 7 & 8.

## Technologies Used
### 1. Frontend (Client-Side Technologies)
These run in the browser and control what users see.
- HTML → structure of the webpage
- Cascading Style Sheets → styling and layout
- React → builds interactive user interfaces
- Angular → full frontend framework
- Vue.js → lightweight UI framework
---
### 2. Backend (Server-Side JavaScript)
_JavaScript can also run on servers.

- Node.js → runs JS outside the browser
- Express.js → builds APIs and servers
---
### 3. Databases (Used with JavaScript Apps)
- MongoDB → NoSQL database (very common with JS)
- MySQL → relational database
---
### 4. Package Managers (Dependency Tools)
- npm → installs libraries
- Yarn → alternative to npm
---
### 5. Version Control
- Git → tracks code changes
- GitHub → stores and shares code
---
### 6. Build Tools & Bundlers
- Webpack → bundles JS files
- Vite → fast modern build tool
---
### 7. APIs & Data Handling
- REST API → communication between apps
- JSON → data format used in JS
---
### 8. Testing Tools
- Jest → test JavaScript code
- Mocha → another testing tool
---
### 10. Full Stack Combinations
A popular stack:
- MERN Stack
- MongoDB
- Express
- React
- Node.js
---

## Features
### 1. Variables & Data Types
Used to store and manage data.

let name = "Claris";   // string
let age = 22;          // number
let isStudent = true;  // boolean

*- 👉 JS supports:*
- String
- Number
- Boolean
- Array
- Object
- Null / Undefined
---
### 2. Functions
Reusable blocks of code.
function greet() {
   console.log("Hello!");
}
greet();

Modern (arrow function):

const greet = () => console.log("Hello");
---
### 3. DOM Manipulation
---
Used to control web pages dynamically.

document.getElementById("title").textContent = "Welcome";

👉 This lets you:

- Change text
- Add elements
- Update styles
---
### 4. Events Handling
Respond to user actions.

button.addEventListener("click", () => {
  alert("Button clicked!");
});

👉 Common events:

- click
- submit
- hover
- keypress
---
### 5. Conditional Statements

Make decisions in code.

if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

### 6. Loops

Repeat actions.

for (let i = 0; i < 5; i++) {
  console.log(i);
}
7. Arrays & Objects

Store collections of data.

let colors = ["red", "blue"];

let person = {
  name: "Claris",
  age: 22
};
---
### 8. Array Methods (Very Important)

Used for real-world data processing.

let numbers = [1,2,3];

numbers.map(n => n * 2);
numbers.filter(n => n > 1);
---
### 9. Asynchronous Programming

Handles tasks like fetching data.

fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data));

Modern version:

async function getData() {
  let res = await fetch("url");
  let data = await res.json();
}
#### 10. ES6 Features (Modern JavaScript)
let & const
Arrow functions
Template literals
let name = "Claris";
console.log(Hello ${name});
### 11. Error Handling
try {
  riskyCode();
} catch (error) {
  console.log(error);
}
---
### 12. Modules

Split code into files.

export function add(a, b) {
  return a + b;
}

---
## How to Run
1. Clone this repository
2. Open index.html in your browser
   OR
   Run npm install then npm start
---
## Lessons Learned
What did you learn while building this project?

### 1. Understanding the Basics is Critical

Before advanced topics, you must be solid in:

- Variables (let, const)
- Data types
- Functions
- Conditions and loops

  ### problems encountered
  - syntax errors
  - unable to open in the console
  #### how i solved
  - checking whether the codes have been declared.
  - tried opening in different browsers
