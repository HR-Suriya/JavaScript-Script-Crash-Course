// Task 1
// 1. Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.

// let Num1 = prompt("Write First Number");
// let Num2 = prompt("Write Second Number");
// if(Num1 > Num2){
//     console.log( Num1 );
// }
// else if(Num2 > Num1){
//     console.log( Num2 );
// }



// Task 2
// 2. Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -

// let Num1 = +prompt("Write a Number");
// if (Num1 >= +1) {
//     console.log("The Sign is +");
//     alert("The Sign is +")
// } else if (Num1 <= -1){
//     console.log("The Sign is -");
//     alert("The Sign is -")
// }



// Task 3
// 3. Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console.

// let Num1 = +prompt("Write the first number");
// let Num2 = +prompt("Write the second number");
// let Num3 = +prompt("Write the third number");
// let Num4 = +prompt("Write the fourth number");
// let Num5 = +prompt("Write the fifth number");
// if (Num1 > Num2 && Num1 > Num3 && Num1 > Num4 && Num1 > Num5) {
//     console.log(Num1);
// }
// else if (Num2 > Num3 && Num2 > Num4 && Num2 > Num5){
//     console.log(Num2);
// }
// else if ( Num3 > Num4 && Num3 > Num5){
//     console.log(Num3);
// }
// else if (Num4 > Num5){
//     console.log(Num4);
// }
// else{
//     console.log(Num5);
// }



// Task 4
// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even,
// and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even.");
//     }  
//     else {
//         console.log(i + " is odd.");
//       }    
// }



// Task 5
// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// The grades are computed as follows :
// Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A

// let userNum = prompt("Write your average marks");
// if (userNum < 60) {
//     console.log("Your Grade is F");
// }
// else if (userNum < 70) {
//     console.log("Your Grade is D");
// }
// else if (userNum < 80) {
//     console.log("Your Grade is C");
// }
// else if (userNum < 90) {
//     console.log("Your Grade is B");
// }
// else if (userNum <= 100) {
//     console.log("Your Grade is A");
// }



// Task 6
// 6. Write a JavaScript program which iterates the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

// for (let k = 1; k <= 100; k++) {
//     if (k % 3 === 0 && k % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     else if (k % 3 === 0) {
//         console.log("Fizz");
//     }
//     else if (k % 5 === 0) {
//         console.log("Buzz");
//     }  
//     else {
//         console.log(k);
//     }    
// }



// Task 7
// 7. Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

// for (let x = 1; x <= 6; x++) {
//     let z = "";
//     for (let y = 1; y < x; y++) {
//         z = z + ("*");
//     }
//     if(z != ""){
//         console.log(z);
//     }
// }