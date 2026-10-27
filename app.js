// diffrence between let and var is when we use var we can make after our first try but in let we have to make first then we try

// a = 12;
// console.log(a);
// var a;
// now sum of two numbers
// let a = 10;
// let b = 20;
// console.log(a + b);
// 10+1 = 11; it is number
// "10"+ 1 = "101"; it is string
// let a = 10;
// let b = "20";
// console.log(a + b);
// This is concatenation
// let a = 10;
// let b = 20;
// it return String
// console.log("sum of 10 and 20 is " + a + b);
// // it return number
// console.log("sum of 10 and 20 is " + (a + b));
// // it also return number because here numbers solve first
// console.log( a+b +"sum of 10 and 20 is " + a + b);
// console.log("a"-b,a-b ) it is equal here it is type conversion
// swapping variables via 3 methods
// this is first method
// let a = 10;
// let b = 20;
// let c;
// c = a;
// a = b;
// b = c;
// console.log(a);
// console.log(b);
// console.log(c);
// now second method
// a= a+b
// now third method( destructuring )
// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a, b);
// now using Math.floor for ignore decimal numbers
// let a = 7;
// let b = 3;
// console.log(Math.floor(a / b));
// in programming when we use divide it gives us a quotient and when we use mode it gives us a reminder
// console.log(a % b);
// now relational operators
// > < > >= <= == !=
// console.log(10 > 20)
// = (assigning value )
// == (left is equal to right)
// ===(checks thier type and equal also)
// console.log("12" === "12");
// logical operators
//  && ||
// (&&) it is AND operator
// console.log(10 > 2 && 5 > 1);
// (||) it is AND operator it gives true only when one or both are true even one is false it gives us a result of false
// console.log(10 < 2 || 5 < 1);
// unary operator ++ --
// ++ increment (post,pre )
// -- decrement  (post,pre
// this is post increment
// let a = 10;
// let b = a++;
// console.log(a);
// console.log(b);
// this is pre increment
// let a = 10;
// let b = ++a;
// console.log(a);
// now conditional statements if and else
// if(we have to write here condition ){
//
// }
// else{
//
// }
// let age = 12;
// if (age > 9) {
//   console.log("ur correct");
// } else {
//   console.log("shut up ");
// }
// let amount = 2300;
// console.log(amount);
// Ternary Operator ?:
// 12 > 13 ? console.log("correct") : console.log("wrong");
// Nested Ternary Operator
// let num = 12;
// console.log(num > 0 ? "positive" : num < 0 ? "Negative" : "zero");
// now Switch case
// let day = 2;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Invalid");
// }
// now when we have to compare if and switch case
// when we have to check same value or constant values then we use switch statement
// and if we cant use break it prints next line also thats why we use break
// Now Loops
// for loop while loop do while loop
// console.log("Hello");
// now for loop if loop does not exist there is no whatsapp insta facebook e commerce also
// for(start;end;change)
// for (var i = 1; i < 9; i++) {
//   console.log(i);
// }
// 200 se 100 tk
// if we not give condition of i-- or i++ it runs infinite
// if we use var we can print outside the function if we use let we cant write outside the function it gives error
// for (var i = 200; i > 99; i--) {
//   console.log(i);
// }
// sum of n
// var sum = 0;
// var n = 5;
// for (var i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log(sum);
// break and continue
// break loop ko rokta hai or continue current iteration ko skip krdeta hai
// for (var i = 1; i < 23; i++) {
//   if (i === 11) continue;
//   else console.log(i);
// }
// now while loop
// for loop is like this
// for(start,end,change){

// }
// start;
// while (end) {
//   Code;
//   change;
// }
// var i = 1;
// while (i < 23) {
//   console.log(i);
//   i++;
// }
// do while loop
// start
// do{code
//     change
// };
// while(end)
// basically do while me code 1 bar to lazmi chlega condition true ho ya false
// var i = 1;
// do {
//   console.log("Hey");
//   i++;
// } while (i > 12);
// loops;
// for (start; end; Change) {}
// start;
// while (end) {
//   code;
//   change;
// }
// start;
// do {
//   code;
//   change;
// } while (end);
// Now Pattern Programming
// process.stdout.write("hello");
// process.stdout.write("world");
// agr hmare pass 2 ya 2 se zayda output hai or hm chahte hai k sari output 1 hi line aye to hm process.stdout.write use krenge
// const prompt = require("prompt-sync")();
// let a = prompt("enter your age ");
// console.log(a);
// process.stdout.write("hey i am ");
// process.stdout.write("a yasir");
// process.stdout.write("*");
// process.stdout.write("*");
// process.stdout.write("*");
// process.stdout.write("*");
// process.stdout.write("*");
// for (var n = 1; n < 6; n++) {
//   process.stdout.write("* ");
// }
// console.log();
// for (var n = 1; n < 6; n++) {
//   process.stdout.write("* ");
// }
// console.log();
// for (var n = 1; n < 6; n++) {
//   process.stdout.write("* ");
// }
// console.log();
// for (var n = 1; n < 6; n++) {
//   process.stdout.write("* ");
// }
// console.log();
// // for (var n = 1; n < 10; n++) {
// //   process.stdout.write("* ");
// // }
// // console.log();
// // for (var n = 1; n < 10; n++) {
// //   process.stdout.write("* ");
// // }
// // console.log();
// here we use loop in loop for reducing code which makes most reusable code
// for (var i = 1; i < 7; i++) {
//   for (var j = 1; j < 7; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }
// for (var i = 1; i < 7; i++) {
//   for (var j = 1; j < i; j++) {
//     process.stdout.write("* ");
//   }
sdwke;
//   console.log();
// }
for (var i = 1; i < 6; i++) {
  for (var j = 1; j < 7 - i + 1; j++) {
    process.stdout.write(j + "");
  }
  console.log();
}
