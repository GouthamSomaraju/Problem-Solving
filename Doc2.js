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

// Find Peak Element

// Problem: Write a function to find a peak element in an array. An element is a peak if it is not smaller than its neighbours.
// Testcase 1:
// Input: [1, 3, 20, 4, 1, 0]
// Output: 20
// let arr=[201, 3, 2011, 4, 9001, 0]
// function peakElement(arr){
//     let res=0
//     for (i=0;i<arr.length;i++){
//         if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
//             if(arr[i]>res){
//                 res=arr[i]
//             }
//         }
//     }
//     console.log(res);
// }
// peakElement(arr)

// ----------------------------
// Find the First Duplicate

// Problem: Write a function to return the first duplicate value in an array.
// Testcase 1:
// Input: [2, 1, 3, 5, 3, 2]
// Output: 3

// let arr=[2, 4, 1, 4, 3, 1, 1, 5, 3, 2]
// let result=[]
// for(i of arr){
//     if(!result.includes(i)){
//         result.push(i)
//     }
// }
// console.log(result);
// let f=0
// for(i of result) { //[ 2, 1, 3, 5 ]
//     c=0
//     n=0
//     for(j of arr){ //[2, 1, 3, 1, 2, 1, 5, 3, 2]
//         if(i==j){  //2==2 2==1 2==3 2==2
//             c++   //1  2
//         }else{
//             n++  //1  2
//         }

//         if(c==2 && (c+n)!==arr.length){  //c==2 && 2+2!=8
//             // console.log(i);
//             f=i
//             break
//         }

//     }
//     if(f!==0){
//         break
// }
// }
// console.log(f);

// 22/4/2025

// Find the First Non-Repeating Character

// Problem: Write a function to find the first non-repeating character in a string.
// Testcase 1:
// Input: "swiss"
// Output: 'w'
arr=[2,1,3,5,3,2]
 res=[]
 for(i of arr){
     if(!res.includes(i)){
         console.log(i)
         break;
     }
     else
     {
         res.push(i)
     }
 }
// ----------------------------------------------
// Find the Longest Word

// Problem: Write a function to find the longest word in a string.
// Testcase 1:
// Input: "The quick brown fox jumps over the lazy dog"
// Output: "jumps"
// let str = "The quick brown fox jumps over the lazy dog";
// function longest(str) {
//   let arr = str.split(" ");
//   len = 0;
//   long = "";
//   for (i of arr) {
//     if (i.length >= len) {
//       len = i.length;
//       long = i;
//     }
//   }
//   console.log(long);
// }
// longest(str)
// // output:'jumps'

// -----------------------------------
// Implement a Basic Calculator

// Problem: Write a function that takes two numbers and an operator (+, -, *, /) and returns the result.
// Testcase 1:
// Input: 2, 3, '+'
// Output: 5
// let num1 = 10;
// let num2 = 20;
// let operator = "*";
// function Calculator(a, b, operator) {
//   ans = 0;
//   switch (operator) {
//     case "+":
//       ans = a + b;
//       break;
//     case "-":
//       ans = a - b;
//       break;
//     case "*":
//       ans = a * b;
//       break;
//     case "/":
//       ans = a / b;
//       break;
//     default:
//       "Invalid input";
//   }
//   console.log(ans);
// }
// Calculator(num1, num2, operator);

// ------------------------------------------------------------------
// FizzBuzz

// Problem: Write a program that prints the numbers from 1 to 100. For multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
// Testcase 1:

// Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz

// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// ...

// let three='Fizz'
// let five='Buzz'
// for(i=1;i<=100;i++){
//     if(i%3==0&&i%5==0){
//         console.log(three+five);

//     }else if(i%3==0){
//         console.log(three);

//     }else if(i%5==0){
//         console.log(five);

//     }else{
//         console.log(i);

//     }
// }
// // output:1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz ....
// ----------------------------------
// Generate Fibonacci Sequence

// Problem: Write a function that generates the first n numbers in the Fibonacci sequence.
// Testcase 1:
// Input: 5
// Output: [0, 1, 1, 2, 3]

// let num = 5;
// function fibinacci(num) {
//   let array = [];
//   (a = 0), (b = 1);
//   for (i = 0; i < num; i++) {
//     array.push(a);
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   console.log(array);
// }

// fibinacci(num);
// // output:[ 0, 1, 1, 2, 3 ]

// ----------------------------------------------------------
// Sum of Digits

// Problem: Write a function that takes a number and returns the sum of its digits.
// Testcase 1:
// Input: 123
// Output: 6
// let num=123
// let sum=(num)=>{
//     totalSum=0
//     while(num>0){
//         totalSum=totalSum+num%10
//         num=Math.floor(num/10)
//     }
//     return totalSum
// }
// console.log(sum(num));
// // output:6

// ------------------------------------------

// 21/4/2025
// Binary Search Algorithm

// Problem: Write a function to perform binary search on a sorted array.
// Testcase 1:
// Input: [1, 2, 3, 4, 5], 3
// Output: 2 (the index of number 3 in the array)
// let arr=[1, 2, 3, 4, 5]
// let target=3
// function binarySearch(arr,target){
//     found=false
//     indx=0
//     for(i in arr){
//         if(arr[i]===target){
//            found=true
//            indx=i
//             break
//         }
//     }
//     if(found && indx!==0){
//         console.log(indx);

//     }else{
//         console.log('target not found');

//     }

// }
// binarySearch(arr,target)
// --------------------------------------------------
// Check for Armstrong Number

// Problem: Write a function to check if a number is an Armstrong number (e.g., 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153).
// Testcase 1:
// Input: 1

// Output: true
// let num=153
// let temp=num
// let num2=num
// length=0
// while(num>0){
//     digit=num%10
//     length++
//     num=Math.floor(num/10)

// }
// check=0
// while(temp>0){
//     digit=temp%10
//     check=check+digit**length
//     temp=Math.floor(temp/10)
// }
// if(check===num2){
//     console.log(true);

// }else{
//     console.log(false);
// }
// // output: true

// ---------------------------------------------
// Check for Balanced Parentheses

// Problem: Write a function to check if a string of parentheses is balanced.
// Testcase 1:
// Input: "{[()]}"
// Output: true
// Testcase 2:
// Input: "{[(])}"
// Output: false

// let org="{[()]}"
// let str="{[(])}"
// let correct=false
// for(i in org){
//     if(org[i]==str[i]){
//         correct=true
//     }else{
//         correct=false
//         break
//     }
// }
// if(correct){
//     console.log(true);

// }else{
//     console.log(false);

// }
// output:false
// --------------------------------



// 25/04/2025
// Check for Anagrams

// Problem: Write a function to check if two strings are anagrams of each other.
// Testcase 1:
// Input: "listen", "silent"
// Output: true

// let a1='listen'
// let a2='silent'
// if(a1.length===a2.length){
// let b1=a1.split('').sort().join('')
// let b2=a2.split('').sort().join('')
// if(b1===b2){
//     console.log(true)
// }else{
//     console.log(false)
// }
// }else{
//     console.log('Not Anagram')
// }
// output:true

// let a1='listen'
// let a2='silent'
// let c=0
// for(i of a1){
//     for(j of a2){
//         if(i===j){
//             c++
//         }
//     }
// }
// if(c==a1.length){
//     console.log(true)
// }else{
//     console.log(false)
// }
// // output:true
// ---------------------------

// Find the First Non-Repeating Character

// Problem: Write a function to find the first non-repeating character in a string.
// Testcase 1:
// Input: "swiss"
// Output: 'w'
// let str = "swiss";
// for (i of str) {
//   c = 0;
//   for (j of str) {
//     if (i == j) {
//       c++;
//     }
//   }
//   if (c == 1) {
//     console.log(i);
//     break;
//   }
// }
// // output:'w'
// ------------------------------------

// Check if String is a Valid Number

// Problem: Write a function to check if a string is a valid number.
// Testcase 1:
// Input: "123.45"
// Output: true

// let str = "123.45";
// let flag = false;
// let dotcount = 0;
// for (i = 0; i < str.length; i++) {
//   let code = str.charCodeAt(i);
//   if (code >= 48 && code <= 57) {
//     flag = true;
//   } else if (code == 46) {
//     dotcount++;
//     if (dotcount > 1) {
//       flag = false;
//       break;
//     }
//   } else {
//     flag = false;
//     break;
//   }
// }
// if (flag && str !== "." && str.length > 0) {
//   console.log(true);
//   // console.log(count,str.length)
// } else {
//   console.log(false);
// }
// // Output: true

// let str="123.45a"

// OR

// let num=Number(str)
// if(isNaN(num)){
//     console.log(false)
// }else{
//     console.log(true)
// }
// -----------------------------------------

// Check if a String is a Rotation of Another String

// Problem: Write a function to check if one string is a rotation of another string.
// Testcase 1:
// Input: "abcde", "cdeab"
// Output: true

// let a="abcde"
// let b="cdeab"
// let diff=b.charCodeAt(0)-a.charCodeAt(0)
// count=0
// if(a.length==b.length){
//     for(i=0;i<a.length;i++){
//         code=a.charCodeAt(i)
//         if(String.fromCharCode(code+diff)==b[i]){
//             count++
//         }
//     }
//     if(count==a.length){
//             console.log(true)
//     }else{
//             console.log(false)

//         }
// }else{
//     console.log(false)
// }
// // Output: false
// ------------------------------
// Reverse Words in a String

// Problem: Write a function to reverse the order of words in a given string.
// Testcase 1:
// Input: "hello world"
// Output: "world hello"

// let a="hello world"
// let b=a.split(' ').reverse().join(' ')
// console.log(b)

//      OR

// let a="hello world"
// let b=a.split(' ')
// let result=''
// for(i=b.length-1;i>=0;i--){
//     result+=b[i]+' '
// }
// console.log(result.trim())

// //      OR

// let a = "hello world";
// let emp = [];
// let res = "";
// for (i = 0; i < a.length; i++) {
//   if (a[i] === " ") {
//     emp.push(res);
//     res = "";
//   } else {
//     res += a[i];
//   }
// }
// if (res !== "") {
//   emp.push(res);
// }

// let final = "";
// for (i = emp.length - 1; i >= 0; i--) {
//   final += emp[i] + " ";
// }
// console.log(final); // output: world hello
// ----------------------------------------

// String Compression
// `
// Problem: Write a function to perform basic string compression using the counts of repeated characters.
// Testcase 1:
// Input: "aabcccccaaa"
// Output: "a2b1c5a3"

// let a="aabcccccaaa"
// let res=''
// for(i=0;i<a.length;i++){
//     let count=0
//     for(j=i;j<a.length;j++){
//         if(a[i]==a[j]){
//             count++
//         }else{
//             break
//         }
//     }
//         res+=a[i]+count
//         i=j-1
// }
// console.log(res) // output:a2b1c5a3
// --------------------------------------------------

// Find All Permutations of a String

// Problem: Write a function to find all permutations of a given string.
// Testcase 1:
// Input: "abc"
// Output: ["abc", "acb", "bac", "bca", "cab", "cba"]

// let str="abc"
// function getPermutations(str){
//     if(str.length<=1) return [str]

//     let permutations =[]

//     for(let i=0;i<str.length;i++){
//         let char=str[i]
//         let remaining =str.slice(0,i)+str.slice(i+1)
//         let remainingPerms =getPermutations(remaining )

//         for(let perm of remainingPerms ){
//             permutations.push(char+perm)
//         }
//     }

//     return permutations
// }

// console.log(getPermutations('abc')) //output:[ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
// --------------------------------------------------

// Convert Roman Numerals to Integer

// Problem: Write a function to convert a Roman numeral string to an integer.

//  Testcase 1:
// Input: "MCMXCIV"
// Output: 1994

// let num = "MCMXCIV";
// let obj = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };
// let str = 0;
// for (i = 0; i < num.length; i++) {
//   if (obj[num[i]] < obj[num[i + 1]]) {
//     str = str + (obj[num[i + 1]] - obj[num[i]]);
//     i = i + 1;
//   } else {
//     str = str + obj[num[i]];
//   }
// }
// console.log(str); // output:1994
// ---------------------------------

