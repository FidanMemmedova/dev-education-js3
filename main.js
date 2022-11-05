// Let's say you have an array of arbitrary size filled with random numbers (one array per task). You need to:
const arr = [2, 4, 5, 9, 1];

// 1. Find the minimum element of this array
// function getMin(array) {
//     let min = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i]< min) {
//             min = array[i];
//         }
//     }
//     console.log(min);
// }
// getMin(arr);

// 2. Find the maximum element of this array
// function getMax(array) {
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (max<array[i]) {
//             max = array[i];
//         }
//     }
//     console.log(max);
// }
// getMax(arr);

// 3. Find the index of the minimum element of this array.
// function getMinIndex(array) {
//     let min = array[0];
//     let index=0;
//     for (let i = 1; i < array.length; i++) {
//         if (array[i]< min) {
//             min = array[i];
//             index=i;
//         }
//     }
//     console.log(index);
// }
// getMinIndex(arr);

// 4. Find the index of the maximum element of this array
// function getMaxIndex(array) {
//     let max = array[0];
//     let index=0;
//     for (let i = 1; i < array.length; i++) {
//         if (max<array[i]) {
//             max = array[i];
//             index=i;
//         }
//     }
//     console.log(index);
// }
// getMaxIndex(arr);

// 5. Calculate the sum of array's elements with odd indices
// let sum=0;
// function sumOfOddIndices(array){
//     for (let i = 0; i < array.length; i++) {
//         if(i%2==1){
//             sum+=array[i]
//         }
//     }
//     console.log(sum);
// }
// sumOfOddIndices(arr);

// 6. Reverse this array (array in reverse direction) - you have to create YOUR OWN function, which WILL NOT create any new array
// function reversedArray(array){
//     let i = 0
//     let j = array.length - 1;
//     for (i = 0; i < array.length / 2; i++, j--) {
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     console.log(array);;
// }
// reversedArray(arr);

// 7. Count the number of odd elements in the array
// let counter=0;
// function counterOfOddNumbers(array){
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]%2==1){
//             counter++;
//         }
//     }
//     console.log(counter);
// }
// counterOfOddNumbers(arr);

// 8. Swap the first and second half of the array, for example, for an array of 1234, the result is 3412, or for 12345 the result will be 45312.
// function swappedArray(array) {
//   let i = (array.length / 2).toFixed(0);
//   for (j = 0; j < (array.length / 2).toFixed(0); j++) {
//     if (i < array.length) {
//       let temp = array[j];
//       array[j] = array[i];
//       array[i] = temp;
//       i++;
//     }
//   }
//   console.log(array);
// }
// swappedArray(arr);

// 9. Sort the array in ascending order in one of the following ways: bubble sort, selection sort or insertion sort.
// function bubbleSortedArray(array) {
//   let temp = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
//   console.log(array);
// }
// bubbleSortedArray(arr);

// 10. Sort the array in descending order in one of the ways (different from the method taken in the 9th task): bubble sort, selection sort or insertion sort.
// function selectionSortedArray(array) {
//   let temp = 0;
//   for (let i = 0; i < array.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[minIndex]) {
//         minIndex = j;
//         temp = array[minIndex];
//         array[minIndex] = array[i];
//         array[i] = temp;
//       }
//     }
//   }
//   console.log(array);
// }
// selectionSortedArray(arr);
