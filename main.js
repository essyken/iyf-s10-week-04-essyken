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
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// calculateArea(width, height) - returns area of rectangle
const calculateArea = (width, height) => width * height;
console.log(calculateArea(5, 10));  // Output: 50

//celsiusToFahrenheit(celsius) - converts temperature
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
console.log(celsiusToFahrenheit(0));   // Output: 32
console.log(celsiusToFahrenheit(100)); // Output: 212

//isEven(number) - returns true if even, false if odd
const isEven = (number) => number % 2 === 0;
console.log(isEven(4));  // Output: true
console.log(isEven(7));  // Output: false

//getInitials(fullName) - returns initials (e.g., "John Doe" → "JD")
const getInitials = (fullName) => {
    const names = fullName.split(" ");
    let initials = "";
    for (let name of names) {
        initials += name.charAt(0).toUpperCase();
    }
    return initials;
};
console.log(getInitials("John Doe"));  // Output: JD

//reverseString(str) - reverses a string
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("Hello"));  // Output: olleH

//Default Parameters
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());              // Hello, Guest!
console.log(greet("Alice"));       // Hello, Alice!
console.log(greet("Bob", "Hi"));   // Hi, Bob!

//function calculateTip(bill, tipPercent = 15) that returns the tip amount.
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}
console.log(calculateTip(100));          // 15
console.log(calculateTip(100, 20));    // 20

// Control flow - if-else statements
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// switch statement
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2: 
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

// loops
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
letcount = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// For...of (arrays)
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

//Print numbers 1-100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

//Print only even numbers 1-50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//FizzBuzz (print "Fizz" for multiples of 3, "Buzz" for 5, "FizzBuzz" for both)
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }   
}

//Print a triangle of stars
let rows = 5;
for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
}

//Mini-Project: Calculator
function addnum(a, b) {
    return a + b;  // Your code
}

function subtractnum(a, b) {
  return a - b;  // Your code
}

function multiplynum(a, b) {
    return a * b;  // Your code
}

function dividenum(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
    return (0)// Your code (handle zero!)
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        // Add remaining cases
        default:
            return "Invalid operator";
    }
}

console.log(calculate(10, "+", 5));  // Output: 15
console.log(calculate(10, "-", 5));  // Output: 5
console.log(calculate(10, "*", 5));  // Output: 50
console.log(calculate(10, "/", 5));  // Output: 2
console.log(calculate(10, "/", 0));  // Output: Error: Division by zero is not allowed.

//Array of Objects-working with real data
const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

//get all students names
const studentNames = students.map(student => student.name);
console.log(studentNames);  // Output: ["Alice", "Bob", "Charlie", "Diana", "Eve"]

//Get students with grade > 80
const result = students.filter(s => s.grade > 80);
console.log(result);

// Find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");
console.log(charlie);  // Output: {name: "Charlie", age: 23, grade: 90, major: "CS"}

// Calculate average grade
const averageGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log(averageGrade);  // Output: 86

// Get names of CS majors
const csMajors = students.filter(student => student.major === "CS").map(student => student.name);
console.log(csMajors);  // Output: ["Alice", "Charlie", "Eve"]

//Sort by grade (highest first)
const sortedByGrade = students.slice().sort((a, b) => b.grade - a.grade);
console.log(sortedByGrade);  // Output: [{name: "Eve", ...}, {name: "Charlie", ...}, {name: "Diana", ...}, {name: "Alice", ...}, {name: "Bob", ...}]

//Check if any student has grade > 90
const hasTopGrade = students.some(student => student.grade > 90);
console.log(hasTopGrade);  // Output: true (Eve has 95)

//Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);
console.log(allPassing);  // Output: true (all students have grade >= 60)

// Students Grade Tracker -Build a student grade management system.
const gradeTracker = {
    students: [],

     // Get a student by name
    getStudent(name) {
        return this.students.find(s => s.name === name) || null;
    },
    
    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;

        const scores = Object.values(student.grades);
        const avg = scores.reduce((sum, val) => sum + val, 0) / scores.length;
        return avg;
    },
    
    // Get class average for a subject
    getSubjectAverage(subject) {
        const scores = this.students
            .map(s => s.grades[subject])
            .filter(score => score !== undefined);

        if (scores.length === 0) return null;

        return scores.reduce((sum, val) => sum + val, 0) / scores.length;
    },
    
    // Get top performer
    getTopStudent() {
        if (this.students.length === 0) return null;

        return this.students.reduce((top, student) => {
            const avg = this.getStudentAverage(student.name);
            const topAvg = this.getStudentAverage(top.name);
            return avg > topAvg ? student : top;
        });
    },
    
    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students.filter(student => 
            this.getStudentAverage(student.name) < 70
        );
    },
    
    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found";

        const avg = this.getStudentAverage(name);
        const letter = this.getLetterGrade(avg);

        let report = `Report Card for ${student.name}\n`;
        report += "-------------------------\n";

        for (let subject in student.grades) {
            report += `${subject}: ${student.grades[subject]}\n`;
        }

        report += "-------------------------\n";
        report += `Average: ${avg.toFixed(2)}\n`;
        report += `Grade: ${letter}`;

        return report;
    }
};

gradeTracker.addStudent("Alice", { math: 85, english: 90, science: 88 });
gradeTracker.addStudent("Bob", { math: 60, english: 65, science: 58 });
gradeTracker.addStudent("Charlie", { math: 95, english: 92, science: 96 });
gradeTracker.addStudent("Diana", { math: 70, english: 75, science: 72 });

console.log(gradeTracker.getStudentAverage("Alice")); 
console.log(gradeTracker.getSubjectAverage("math")); 
console.log(gradeTracker.getTopStudent()); 
console.log(gradeTracker.getStrugglingStudents()); 
console.log(gradeTracker.generateReportCard("Alice"));




    



