
//Strings -->

//length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

//cutting a part
let fruits = "Apple, Banana, Kiwi";
let part = fruits.slice(7, 13);
console.log(part)

//replace an element
let line = "Please visit Microsoft!";
let newLine = line.replace("Microsoft", "W3Schools");
console.log(newLine)
//change topupper case
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2)
//trim from start
let text3 = "     Hello World!     ";
let text4 = text3.trimStart();
console.log(text4)

//Numbers --> 
let x = 0.2 + 0.1;
let y = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x , y)

// adding two  already  defined numbers 
let a = 10;
let b = 20;
let z = a + b;
console.log(z)
// as string and as number
let p = 100;         // x is a number
let q = "100";       // y is a string
console.log(p , q)

//NAN not a number

let Nan = 100 / "Apple";
console.log(Nan)

//infinity
let num1 =  2 / 0;
let num2 = -2 / 0;
console.log(num1 , num2)


//Arrays methods -->

const mixedArray = ["apple", 3, "banana", 7, "cherry", 5];

// 1. Push: Add an element to the end of the array
mixedArray.push("date");

// 2. Pop: Remove and return the last element of the array
const lastElement = mixedArray.pop();

// 3. Shift: Remove and return the first element of the array
const firstElement = mixedArray.shift();

// 4. Unshift: Add elements to the beginning of the array
mixedArray.unshift("avocado", 2);

// 5. Join: Convert the array elements into a single string with a separator
const arrayString = mixedArray.join(", ");

console.log("Modified Array:", mixedArray);
console.log("Popped Element:", lastElement);
console.log("Shifted Element:", firstElement);
console.log("Array as a String:", arrayString);


//Date methods ==> 

const currentDate = new Date();

// 1. Get Current Date and Time
const currentDateTime = currentDate.toLocaleString();

// 2. Get Current Year
const currentYear = currentDate.getFullYear();

// 3. Get Current Month
const currentMonth = currentDate.getMonth(); 

// 4. Get Current Day of the Week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

// 5. Get Current Time
const currentTime = currentDate.toLocaleTimeString();

console.log("Current Date and Time:", currentDateTime);
console.log("Current Year:", currentYear);
console.log("Current Month:", currentMonth);
console.log("Current Day of the Week:", currentDayOfWeek);
console.log("Current Time:", currentTime);


//function methods -->
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("John"); 

const multiply = function(x, y) {
    return x * y;
};
const result = multiply(5, 3); 



