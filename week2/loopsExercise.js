// Week 2 - Loops

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let arr = [];
let n = 1;
while (n <= 5) {
  console.log(n);
  arr.push(n);
  n++;
}

console.log(arr);

// Exercise 2. Write a 'do while' loop that prints the integers (whole arrbers)
// between 1 and 5 (inclusive).
let arr2 = [];
let i = 1;
do {
  console.log(i);
  arr2.push(i);
  i++;
} while (i <= 5);

console.log(arr2);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let arr3 = [];
for (let i = 1; i <= 5; i++) {
  console.log(i);
  arr3.push(i);
}

console.log(arr3);

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let arr4While = [];
let x = 10;
while (x >= 1) {
  console.log(x);
  arr4While.push(x);
  x--;
}

let arr4DoWhile = [];
let y = 10;
do {
  console.log(y);
  arr4DoWhile.push(y);
  y--;
} while (y >= 1);

let arr4For = [];
for (let i = 10; i >= 1; i--) {
  arr4For.push(i);
  console.log(i);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let arr5While = [];
let a = 7;
while (a <= 27) {
  arr5While.push(a);
  console.log(a);
  a++;
}

let arr5DoWhile = [];
let b = 7;
do {
  arr5DoWhile.push(b);
  console.log(b);
  b++;
} while (b <= 27);

let arr5For = [];
for (let i = 7; i < 28; i++) {
  console.log(i);
  arr5For.push(i);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let arr6While = [];
let c = 10;
while (c <= 100) {
  arr6While.push(c);
  console.log(c);
  c += 10;
}

let arr6DoWhile = [];
let d = 10;
do {
  arr6DoWhile.push(d);
  console.log(d);
  d += 10;
} while (d <= 100);

let arr6For = [];
for (let i = 10; i < 101; i += 10) {
  console.log(i);
  arr6For.push(i);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1;
while (counterFour >= -100) {
  console.log(counterFour);
  console.log("HELP ME!");

  counterFour--;
}

// Previously it was infinite loop because the condition was false i.e it never less than 2.
//The loop starts at 1 then it counting down like 1, 0, -1......

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let number = 0;
while (number <= 18) {
  console.log(number);
  number++;
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
for (let i = 0; i <= 100; i++) {
  if (i === 18) {
    console.log(i + " my favorite number!");
  } else {
    console.log(i + " not my favorite number");
  }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

//I love for loop, from the past 1 year(on and off) I am using for loop because
// its easy to understand and also I can easily explain to anybody whats going on.
//it is fast and we can also use it in nested loop.
//While loop is slower and if condition is false it may endup with infinite loop

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from " + outsideCounter);
  for (
    let insideCounter = outsideCounter - 1;
    insideCounter >= 0;
    insideCounter--
  ) {
    console.log("inside " + (insideCounter + 1));
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

//Excercise 11- was hard for me. In codepen I have done so many trial and error method to get the answer, still it is tricky for me.
// For Excercise 7 I took sometime to figure out the answer.

// Email your file to us or commit your file to GitHub and email us a link.
