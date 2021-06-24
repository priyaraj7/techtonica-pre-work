// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.
function logGreeting() {
  console.log("Hello!");
  return "Hello!";
}
console.log(logGreeting());

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.
function getName() {
  return "Supriya";
}
console.log(getName());

function getName2(name) {
  return name;
}
console.log(getName("Supriya"));

// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().

function logGreeting2() {
  function myName() {
    return "Supriya";
  }
  return `Hello! My name is ${myName()}.`;
}

console.log(logGreeting2());

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.

function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(1, 2, 3);
console.log(6, 20, 30);
console.log(10, 2, 30);

// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.

function discountChecker(age) {
  if (age < 15 || age >= 65) {
    return true;
  } else {
    return false;
  }
}

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.

function stringCounter(str, num) {
  let ans = "";
  for (let i = 0; i < num; i++) {
    ans += str;
  }
  return ans;
}

console.log(stringCounter("Ape", 5));
console.log(stringCounter("Cheese", 10));
console.log(stringCounter("Do", 7));

// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
  return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);

// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does
Console.log(
  `It a multiplication function, taking the value of y and multiply by 2`
);
// 2. What prints out for the value of y
console.log(`The value of y is 4`);
// 3. What prints out for the value of z
console.log(`The value of z is 8`);
// Now run the code and see if you're correct.
console.log(`Yes`);
// Were you correct? If not, what did you learn?
console.log(
  `In this function taking the y value as a argument and multiply by 2. So y value is always constant. z value is the return answer of the function`
);

// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does
console.log(`Its doing subtraction function`);
// 2. What prints out for the value of a
console.log(`10-4 = 6. So a = 6`);
// 3. What prints out for the value of b
console.log(`6 - 1 = 5. Answer is 5`);
// Now run the code and see if you're correct.
console.log(
  `This function is taking 2 arguments p1 & p2, inside the function its doing subtraction. a is the return value of the function.`
);

console.log(
  `b is the variable calling the mysteryFunction2, and its takes a and another number as a argument.`
);
// Were you correct? If not, what did you learn?

// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items
const groceryList = "eggs,carrots,orange juice";

console.log(groceryList.split(","));

// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.
const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";
let arr = mySchedule.split("--->", 2);
console.log(arr);

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//
//It was pretty easy. It was fun.

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
