// Testcase1	:  rebels
// Output     	:  true

// let str='rebels'
// let vowels='aeiouAEIOU'
// let mid=Math.floor(str.length/2)
// let first=''
// let second=''

// if(str.length%2==0){
//     for(i=0;i<str.length;i++){
//         if(i<mid)first+=str[i]
//         else second+=str[i]
//     }
//     c1=0,c2=0
//     for(i of first){
//         if(vowels.includes(i)) c1++
//     }
//     for(i of second){
//         if(vowels.includes(i)) c2++
//     }
//     if(c1==c2) console.log(true);
//     else console.log(false);

// }else{
//     console.log('String length is not even to divide it into equal parts');

// }
// --------------------------------

// Testcase1	:  [ 34, 88, 423, 121, 2382, 10]
// Output     	:  3
// let arr= [ 34, 88, 423, 121, 2382, 10]
// count=0
//     for(j of arr){
//         let c=j
//         let rev=0
//         while(j>0){
//             digit=j%10
//             rev=rev*10+digit
//             j=Math.floor(j/10)
//         }
//         let a=0
//         let b=0
//         while(rev>0){
//             digit1=rev%10
//             a+=digit1
//             break
//         }
//         while(c>0){
//             digit2=c%10
//             b+=digit2
//             break
//         }

//         if(a==b){
//             count++
//         }
//     }
// console.log(count); // Output: 3
// ----------------------------

// Testcase1	:  [ 7, 4, 7, 23, 10 ]
// Output     	:  4 10

// let arr=[ 7, 4, 7, 23, 10 ]
// for( j of arr){
//     let num=j+1
//     fact=0
//     for(i=2;i<num;i++){
//         if(num%i==0){
//             fact++
//             break
//         }
//     }
//     if(fact==0){
//         console.log(j); // Output :  4 10
//     }
// }
// --------------------------

// Testcase1	:  [ 61, 4, 6, 7, 120 , 10 ]
// Input :  5
// Output     	: 4

// let arr=[ 61, 4, 6, 7, 120 , 10 ]
// let input=5
// let fact=1
// for(i=1;i<=input;i++){
//     fact*=i
// }
// exist=false
// index=0
// for(i in arr){
//     if(arr[i]==fact){
//         index=i
//         exist=true
//         break
//     }else{
//         exist=false
//     }
// }
// if(exist){
//     console.log(index);

// }else{
//     console.log('factorial of  the number is not present in array');

// } //Output: 4
// ------------------

// Testcase1	:  7473183
// Output     	:  10
// let num=7473183
// let num1=num
// let num2=num
// let sum=0
// let occurrence=[]
// while(num1>0){
//     digit=num1%10 //3 8 1 3 7 4 7
//     temp=num2 //7473183
//     c=0
//     while(temp>0){
//         digit2=temp%10 //3 8 1 7 3 7 4
//         if(digit==digit2){ //3==3 3==8 3==1 3==7 3==3 3==7 3==4
//             c++ //1 2
//         }
//         temp=Math.floor(temp/10) //747318
//     }
//     if(c>1 && !occurrence.includes(digit)){
//         sum+=digit //3
//         occurrence.push(digit)
//     }
//  num1=Math.floor(num1/10)//747318 74731 7473 747 74 7 0
// }
// console.log(sum); //Output: 10
// -------------------------------------

// Testcase1	:  [ 64, 1, 2, 7, 79, 7, 7, 1, 22]
// Output     	:  Second duplicate number is 7 and it is occurred 3 times

// let arr=[ 64, 1, 2, 7, 79, 7, 7, 1, 22 ]

// for(i of arr){
//     let count=0
//     for(j of arr){
//         if(i==j){
//             count++ //1 2 3
//         }
//     }
//     if(count==3){
//         console.log(`Second duplicate number is ${i} and it is occurred ${count} times`);
//         break
//     }
// } // Output:  Second duplicate number is 7 and it is occurred 3 times
// ---------------------------------

// Testcase1	:  Enter number of rows: 4
// Output     	:

// 1
// 1 2
// 1 2 3
// 1 2 3 4

// let rows=4
// s=''
// for(i=1;i<=rows;i++){
//     s+=i+' '
//     console.log(s);
// }
// Output:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// --------------

// let rows=4
// for(i=1;i<=rows;i++){
//     s=''
//     for(j=rows;j>=i;j--){
//         s+=j+' '
//     }
//     console.log(s);
// }
// Output:
// 4 3 2 1
// 4 3 2
// 4 3
// 4
// -----------
// Testcase1	:  Enter number of rows: 4
// Output     	:

// 1 1
// 1 2 3
// 1 2 3 6
// 1 2 3 4 10
// let r=4
// for(i=1;i<=r;i++){
//     s=''
//     cols=i<=r?i:i+1
//     for(j=1;j<=i+1;j++){
//         if(j<=i){
//             s+=j+' '
//         }else{
//             s+=i*(i+1)/2+' '
//         }

//     }
//     console.log(s);

// }
// Output:
// 1 1
// 1 2 3
// 1 2 3 6
// 1 2 3 4 10
// ----------------

// Testcase1	:  Enter number of rows: 3
// Output     	:

//       1
//     1   2
//   1   2   3

// let r=3
// for(i=1;i<=r;i++){
//     s=''
//     for(sp=0;sp<r-i;sp++){
//         s+=' '
//     }
//     for(j=1;j<=i;j++){
//         s+=j+' '
//     }
//     console.log(s);

// }
// Output:
//     1
//    1 2
//   1 2 3
// ----------------

// Testcase1	:  Enter number of rows: 4
// Output     	:

// 1+
// 12++
// 123+++
// 1234++++
// let r=4
// for(i=1;i<=r;i++){
//     s=''
//     for(j=1;j<=i+i;j++){
//         s+=(j<=i)?j:'+'
//     }
//     console.log(s);

// }
// // Output:
// 1+
// 12++
// 123+++
// 1234++++
// ----------------

// Testcase1	:  Enter number of rows: 4
// Output     	:

// +1
// ++2
// +++3
// ++++4

// let r=4
// for(i=1;i<=r;i++){
//     s=''
//     for(j=1;j<=i+1;j++){
//         s+=(j<=i)?'+':i
//     }
//     console.log(s);

// }
// // Output:
// +1
// ++2
// +++3
// ++++4
// ----------------

// Testcase1	:  Enter number of rows: 4
// Output     	:

// +1
// ++12
// +++123
// ++++1234
// ------------

// let r=4
// for(i=1;i<=r;i++){
//     s=''
//     for(j=1;j<=i+i;j++){
//         s+=(j<=i)?'+':j-i
//     }
//     console.log(s);

// }
// // Output:
// +1
// ++12
// +++123
// ++++1234
// ----------------

// Testcase1	:  Enter number of rows: 4
// Output     	:

// A
// AB
// ABC
// ABCD

// let rows=4
// let s=''
// let code=65
// for(i=0;i<rows;i++){
//     s+=String.fromCharCode(code+i)
//     console.log(s);

// }
// // Output:
// A
// AB
// ABC
// ABCD
// ----------------

// Testcase1	:  Enter number of rows: 3
// Output     	:

//    A
//  A  B
// A  B  C

// let rows=3
// for(i=1;i<=rows;i++){
//     let code=65
//     let s=''
//     for(sp=0;sp<rows-i;sp++){
//         s+=' '
//     }
//     for(j=1;j<=i;j++){
//         s+=String.fromCharCode(code)+' '
//         code++
//     }
//     console.log(s);

// }
// // Output:
//     A
//   A  B
//  A  B  C
// ----------------

// Testcase1	:  Enter number of rows: 4
// Output     	:

// A1
// AB12
// ABC123
// ABCD1234

// let rows=4
// for(i=1;i<=rows;i++){
//     let s=''
//     let code=65
//     for(j=1;j<=i+i;j++){
//         if(j<=i){
//             s+=String.fromCharCode(code)
//             code++
//         }else{
//             s+=j-i
//         }
//     }
//     console.log(s);

// }
// // Output:
// A1
// AB12
// ABC123
// ABCD1234
// ----------------
// Testcase1	:  Enter number of rows: 4
// Output     	:

// A
// ab
// ABC
// abcd

// let rows=4
// for(i=1;i<=rows;i++){
//     let s=''
//     for(j=1;j<=i;j++){
//         if(i%2==0){
//             s+=String.fromCharCode(97+j-1)
//         }else{
//             s+=String.fromCharCode(65+j-1)
//         }
//     }
//     console.log(s);
// }
// // Output:
// A
// ab
// ABC
// abcd
// ----------------------------
// ----------------------------

// Array-Based Questions

// Rotate an Array
// Problem: Write a function that rotates an array to the right by a given number of steps.
// Testcase 1:
// Input: [1, 2, 3, 4, 5], 2
// Output: [4, 5, 1, 2, 3]

// function rotateArray(nums, k) {
//   const n = nums.length;
//   k %= n;
//   console.log(k);
//   for (let i = 0; i < k; i++) {
//     let last = nums[n - 1];
//     for (let j = n - 1; j > 0; j--) {
//       nums[j] = nums[j - 1];
//     }
//     nums[0] = last;
//   }
//   return nums;
// }
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
// ----------------------------

// Intersection of Two Arrays

// Problem: Write a function that returns the common elements between two arrays.
// Testcase 1:
// Input: [1, 2, 3], [2, 3, 4]
// Output: [2, 3]
// let arr1=[1, 2, 3]
// let arr2=[2, 3, 4]
// let result=[]
// for(i of arr1){
//     for(j of arr2){
//         if(i==j){
//            result.push(i)
//         }
//     }
// }
// console.log(result); // Output: [2, 3]
// ----------------------------
// Find Missing Number

// Problem: Given an array of consecutive numbers with one missing, find the missing number.
// Testcase 1:
// Input: [1, 2, 4, 5]
// Output: [3]
// let arr=[1, 2, 4, 5, 7]
// let missing=[]
// for(i=0;i<=arr.length;i++){
//     if((arr[i+1]-arr[i]!==1)){
//         missing.push(arr[i]+1)
//         break
//     }
// }
// console.log(missing);// Output: [3]
// ----------------------------

// Find the Maximum Product of Two Elements

// Problem: Write a function to find the maximum product of two elements in an array.
// Testcase 1:
// Input: [3, 5, -2, 8, 11]
// Output: 8 * 11 → 88

// let arr = [3, 5, -2, 8, 11];
// function maxProduct(arr) {
//   let max = arr[0];
//   let secmax = arr[1];
//   for (i of arr) {
//     if (i > max) {
//       secmax = max;
//       max = i;
//     } else if (i < max && i > secmax) {
//       secmax = i;
//     }
//   }
//   let maxProduct = max * secmax;
//   console.log(maxProduct);
// }
// maxProduct(arr); // Output: 88
// ----------------------------

// Move Zeros to End

// Problem: Write a function that moves all zeros in an array to the end while maintaining the order of other elements.
// Testcase 1:
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

// let arr = [0, 1, 0, 3, 12];
// function zerosToEnd(arr) {
//   let result = [];
//   for (i of arr) {
//     if (i !== 0) {
//       result.push(i);
//     }
//   }
//   let zeros = arr.length - result.length;
//   while (zeros > 0) {
//     result.push(0);
//     zeros--;
//   }
//   console.log(result);
// }
// zerosToEnd(arr); // Output: [1, 3, 12, 0, 0]
// ----------------------------

// Pair Sum
// Problem: Write a function to find all pairs in an array whose sum is equal to a given target.
// Testcase 1:
// Input: [2, 4, 3, 5, 7, 8, 9], 7
// Output: [[4, 3], [2, 5]]

// let arr=[2, 4, 3, 5, 7, 8, 9, -2]
// let sum=7
// function pairSum(arr,sum){
// let result=[]
// for(i=0;i<arr.length;i++){
//     let temp=[]
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]==sum){
//             temp.push(arr[i],arr[j])
//         }
//     }
//     if(temp.length>0){
//         result.push(temp)
//     }
// }
// console.log(result);
// }
// pairSum(arr,sum)  // Output: [ [ 2, 5 ], [ 4, 3 ], [ 9, -2 ] ]
// ----------------------------

// Find the First Duplicate

// Problem: Write a function to return the first duplicate value in an array.
// Testcase 1:
// Input: [2, 1, 3, 5, 3, 2]
// Output: 3

let arr=[2, 1, 3, 5, 3, 2]
let result=[]
for(i of arr){
    if(result.includes(i)){
        result.push(i)
        break
    }else{
        result.push(i)
    }
}   

console.log(result); // Output: 3