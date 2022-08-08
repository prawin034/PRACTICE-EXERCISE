'use strict';

// for (let i = 1; i < 5; i++) {
//   console.log('outer loop ' + i);

//   for (let j = 0; j < 1; j++) {
//     console.log('inner loop ' + i);
//   }
// }

// //odd or even

// const oddoreven = function (num) {
//   if (num % 2 == 0) {
//     console.log('even number ' + num);
//   } else {
//     console.log('odd number ' + num);
//   }
// };
// oddoreven(121);

// //reverse a string

// const reverb = function (str) {
//   let output = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     output += str[i];
//   }
//   console.log(output);
// };
// reverb('vinitha');

// //finding maximum porfit stock
// // 1. first lets buy stock in less price
// // 2. lets  create a loop which have the stocks
// // 3. then find the maximum profit stock
// // 4. store it in new  variable

// const ProfitMax = function (stocks) {
//   let buyStock = stocks[0];
//   let profit = 0;

//   for (let i = 1; i < stocks.length; i++) {
//     if (buyStock > stocks[i]) {
//       buyStock = stocks[i];
//     } else {
//       (profit = stocks[i] - buyStock), profit;
//     }
//   }
//   return profit;
// };

// console.log(ProfitMax([100, 180, 260, 310, 40, 535, 695]));

// //lets reverse an array using loop and reverse mathod

// //.1 loop method

// const reverb2 = function (arr) {
//   let result = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }
//   console.log(result);
// };
// reverb2([1, 2, 3, 4, 5]);

// reversing  sub array and sorting
// const reversearary = function (arr) {
//   let sorted = [];
//   let startindex = arr[0];
//   let endindex;
//   for (let i = 0; i < arr.length; i++) {
//     if (startindex < arr[i]) {
//       startindex = arr[i];
//       break;
//     }
//   }
//   for (let i = startindex; i < startindex - 1; i++) {
//     if (arr[i] < startindex) {
//       arr[i] = startindex;
//     }
//   }
// };

// reversearary([1, 2, 5, 4, 3]);

// //
