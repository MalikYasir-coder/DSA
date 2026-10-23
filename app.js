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
let a = 10;
let b = ++a;
console.log(a);
