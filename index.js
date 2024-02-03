// const plusOne = function (digits: number[]): number[] {
//   if (digits.length === 0) {
//     return [1]
//   }
//   const last_digist = digits[digits.length - 1]
//   digits[digits.length - 1] = last_digist + 1
//   for (let i = digits.length - 1; i > 0 && digits[i] === 10; i--) {
//     digits[i] = 0
//     digits[i - 1]++
//   }
//   if (digits[0] === 10) {
//     digits[0] = 0;
//     digits.unshift(1);
//   }
//   return digits
// }
// const result_digist: number[] = [1, 2, 3];
// const result: number[] = plusOne(result_digist)
// console.log(result)
//================================ 2-chi savol ===============================================//
// function fn(arr: number[]): [number, number] {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   let count_small = 0;
//   let count_large = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < max) {
//       count_small++;
//     }
//     if (arr[i] > min) {
//       count_large++;
//     }
//   }
//   return [count_small, count_large];
// }
// const arr = [5, 2, 8, 43, 53, 6, 4, 2];
// const result = fn(arr);
// console.log(`Arrayning max qiymatdan 🤍 ${result[0]} ta kichik element bor`);
// console.log(`Arrayning min qiymatdan 🤍 ${result[1]} ta katta element bor`);
// ================================ 3-chi savol ====================================//
// function fn(arr: any[], parametr: any): number {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === parametr) {
//       return i;
//     }
//   }
//       return -1; 
// }
// const arr = [5, 2, "Hello", true, 10, 3];
// const parametr = "Hello";
// const result = fn(arr, parametr);
// if (result === -1) {
//   console.log("Javob topilmad");
// } else {
//   console.log(`Javob ${result} index da joylawgan`);
// }
// ============================ 4-chi savol ========================================//
// function fn(arr: number[], number: number): boolean {
//   return arr.includes(number);
// }
// const array: number[] = [5, 2, 8, 1, 10, 3];
// const number: number = 8; 
// const result: boolean = fn(array, number);
// if (result) {
//   console.log(`wu ${number} son arr da bor`);
// } else {
//   console.log(`wu ${number} son arr da yoq`);
// }   
