'use strict';

// //problem 1
// const GoToPark = function (temp, raining) {
//   if (temp >= 20 && temp <= 25 && !raining) {
//     console.log('Children can go outside and play');
//   } else if (temp >= 18 && temp <= 20 && raining) {
//     console.log('children cant go outside ');
//   } else {
//     console.log('stay at home');
//   }
// };
// GoToPark(20, true);
// GoToPark(23, false);
// GoToPark(18, false);

// //problem2

// const PassMark = function (marks) {
//   return marks >= 40 ? 'pass' : 'fail';
// };
// console.log(PassMark(39));

// //problem 3

// const SumOfNumbers = function (n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// };
// console.log(SumOfNumbers(10));

// //problem 4

// const word = function (str) {
//   return str.split('').reverse().join('');
// };
// console.log(word('hello javascript'));

// //problem 5

// const largestof = function (a, b, c) {
//   return Math.max(a, b, c);
// };
// console.log(largestof(12, 15, 2));

// //problem 6

// // const patterns = function (n) {
// //   let sum = '';
// //   for (let i = 0; i <= n; i++) {
// //     sum += '*';
// //     console.log(sum);
// //   }
// // };
// // patterns(5);

// const patterns2 = function (n) {
//   for (let i = 1; i <= n; i++) {
//     for (j = 0; j < 2 * i - 1; j++) {
//       let sum = '';
//     }

//     sum += '*';
//   }
//   sum = '\n';
// };
// console.log(sum);
// patterns2(5);

// //

// const largest = function (a, b, c) {
//   let x = 0;
//   while (a && b && c) {
//     a++;
//     b++;
//     c++;
//     x--;
//   }
// };
// console.log(largest(12, 11, 10));
