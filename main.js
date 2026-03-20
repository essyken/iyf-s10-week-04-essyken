// Variable declarations
let name = "Your Name";
let age = 25;
const birthYear = 1999;


// typeof operator
console.log(typeof name);    // string
console.log(typeof age);     // number
console.log(typeof true);    // boolean

// let vs const
let score = 100;
score = 150;  // Works!

const PI = 3.14159;
// PI = 3;  // Error! const cannot be reassigned

letname = "Esther";  // Works!
console.log(name);  // Output: Esther
letage = 35;  // Works!
console.log(age);  // Output: 35
let isstudent = true;  // Works!
console.log(isstudent);  // Output: true
let favouritecolor = "blue,red,grey";  // Works!
console.log(favouritecolor);  // Output: blue,red,greygit
let todaydate = "2026-03-12";  // Works!
console.log(todaydate);  // Output: 2026-03-12

// Number operations - Basic maths
let a = 10;
let b = 3;

console.log(a + b);   // Addition
console.log(a - b);   // Subtraction
console.log(a * b);   // Multiplication
console.log(a / b);   // Division
console.log(a % b);   // Modulus (remainder)
console.log(a ** b);  // Exponentiation

// Increment/Decrement
let count = 0;
count++;  // count is now 1
count--;  // count is now 0

// string operations
let firstName = "John";
let lastName = "Doe";

// Concatenation
let fullName = firstName + " " + lastName;

// Template literals (preferred)
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

// String methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("John"));

//comparison and logical operators
// Comparison
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true (strict equality)
console.log(5 == "5"); // true (loose equality - avoid!)
console.log(5 !== 3);  // true

// Logical
console.log(true && true);   // AND
console.log(true || false);  // OR
console.log(!true);          // NOT

// age in days
let ageInYears = 35;
let ageInDays = ageInYears * 365;

console.log(`If you are ${ageInYears} years old, you are about ${ageInDays} days old.`);

//age in hours
let ageInHours = ageInDays * 24;
console.log(`If you are ${ageInYears} years old, you are about ${ageInHours} hours old.`);

// the year you will turn 100
let currentYear = new Date().getFullYear();
let yearsUntil100 = 100 - ageInYears;
let yearTurning100 = currentYear + yearsUntil100;
console.log(`You will turn 100 years old in the year ${yearTurning100}.`);

//Functions -Functions Declaration


    



