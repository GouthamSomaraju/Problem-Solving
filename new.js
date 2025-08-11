// Testcase1 : 567
// Output : 18
// Explanation : Sum of the digits in the number 5+6+7 = 18, Answer is  18.

// let num=567
// let sum=0
// while(num>0){
//     digit=num%10
//     sum+=digit
//     num=Math.floor(num/10)
// }
// console.log(sum); //output=18
// ------------------------------------------

// Testcase1 : 765
// Output : 567
// Explanation : Reverse of the number 765 is 567.

let num=765
let rev=0
while(num>0){
    
}
// ------------------------------------------

// Testcase1 : 4
// Output : 24
// Explanation : Factorial of the number 4 is 4*3*2*1 = 24.

// let num=4
// factorial=1
// for(i=1;i<=num;i++){
//     factorial*=i
// }
// console.log(factorial);
// -------------------------------------

// Testcase1 : Wonder
// Output : nd

// let str='wonder'
// let mid=Math.floor(str.length/2)
// let middle=''
// for(i=0;i<str.length;i++){
//     if(str.length%2==0){
//         middle+=str[mid-1]+str[mid]
//         break
//     }else{
//         middle+=str[mid]
//         break
//     }
// }
// console.log(middle);
// ---------------------------------------------

// Testcase1 : 75547
// Output : not equal
// Explanation : Sum(7,5)=12 and Sum(6)=6, both sums are not equal.

// let num=75547
// let sum1=0
// let sum2=0
// while(num>0){
//     digit=num%10
//     sum1+=digit
//     num=Math.floor(num/10)
//     break
// }
// rev=0
// while(num>0){
//     digit=num%10
//     rev=rev*10+digit
//     num=Math.floor(num/10)
// }
// while(rev>0){
//     digit=rev%10
//     sum1+=digit
//     rev=Math.floor(rev/10)
//     break
// }
// while(rev>0){
//     digit=rev%10
//     sum2+=digit
//     rev=Math.floor(rev/10)
// }
// if(sum1==sum2){
// console.log('same');
// }else{
//     console.log('not equal');

// }
// ------------------------------------------------

// Testcase1 : 84719
// Output : true
// Explanation : The middle digits 4,7,1 are less than first digit 8 and last  digit 9 .

// let num=89719
// let first=0
// let last=0
// while(num>0){
//     last+=num%10
//     num=Math.floor(num/10)
//     break
// }
// rev=0
// while(num>0){
//     digit=num%10
//     rev=rev*10+digit
//     num=Math.floor(num/10)
// }

// while(rev>0){
//     first=rev%10
//     rev=Math.floor(rev/10)
//     break
// }
// c1=0
// c2=0
// while(rev>0){
//     digit=rev%10
//     c1++
//     rev=Math.floor(rev/10)
//     if(digit<first && digit<last){
//         c2++

//     }else{
//         console.log('not less than');

//         break
//     }
// }
// if(c1==c2){
//     console.log('are less than first and last digit');
// }
// --------------------------------------------

// Testcase1 : Helloworld
// Output : ooe
// Explanation : Vowels in the given string Helloworld are e,o,o . The  reverse order of eoo is ooe.

// let str='Helloworld'

// let vowels='aeiouAEIOU'
// let rev=''
// for(i=str.length-1;i>=0;i--){
//     if(vowels.includes(str[i])){
//         rev+=str[i]
//     }
// }
// OR
// for(i=str.length-1;i>=0;i--){
//     for(j=0;j<vowels.length;j++){
//         if(vowels[j]==str[i]){
//             rev+=str[i]
//         }
//     }
// }

// console.log(rev); // Output : ooe
// --------------------------------------------

// Testcase1 : Helloworld
// Output : eo
// Explanation : Vowels in the given string Helloworld are e,o,o . The  single vowels among them are eo .

// let str='Jacksparrow '
// let vowels='aeiouAEIOU'
// emp=''
// res=''
// count=0
// for(i=0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//         emp+=str[i]
//         count++
//     }
// }
// for(i=0;i<emp.length;i++){
//     if(!res.includes(emp[i])){
//         res+=emp[i]
//     }
// }
// console.log(res); // Output : ao
// -----------------------------------

// Testcase1 : donkey
// Output : donkey
// Explanation : In the given string there is no duplicate character.

// let str='donkey'
// res=''
// for(i=0;i<str.length;i++){
//     c=0
//     for(j=0;j<str.length;j++){
//         if(str[i]==str[j]){
//             c++
//         }
//     }
//     if(c==1){
//         res+=str[i]

//     }
// }
// console.log(res); // Output : donkey
// ------------------------------------

// Testcase1 : JohnWick
// Output : jOHNwICK
// Explanation : All the upper case letters changed to lower case and vise  versa.

// let str='JohnWick'
// res=''
// for(i=0;i<str.length;i++){
//     if(str[i]==str[i].toUpperCase()){
//         res+=str[i].toLowerCase()
//     }else{
//         res+=str[i].toUpperCase()
//     }
// }
// console.log(res); //jOHNwICK
// ------------------------------------------------

// Testcase1 : NumberOne
// Output : ONumberne
// Explanation : In the given string NumberOne, Uppercase letters are N,O.  The reverse order of them are ON next it is followed by lowe case letters  (umberne). So final string is ONumberne.
// Testcase1 : ClassLeader

// let str='ClassLeader '
// let a=''
// let b=''
// for(i=str.length-1;i>=0;i--){
//     if(str[i]==str[i].toUpperCase()){
//         a+=str[i]
//     }
// }
// for(i=0;i<str.length;i++){
//     if(str[i]==str[i].toLowerCase()){
//         b+=str[i]
//     }
// }
// console.log(a+b); // Output : LClasseader 
// --------------------------------------------

// Array-Based Questions :

// Testcase 1:
// Input: [3, 1, 4, 1, 5, 9]
// Output: 9

// function max(array){

//     let max=array[0]
//     for(i of array){
//         if(max<i){
//             max=i
//         }
//     }
//     console.log(max);
// }
// max([3, 1, 4, 1, 5, 9]) //9
// -------------------------------------

// // ● Find the Second Largest Element
// Problem: Write a function to return the second largest number in an array.
// Testcase 1:
// Input: [3, 1, 4, 1, 5, 9]
// Output: 5

// let arr=[3, 1, 4, 1, 5, 9,8,99,89,100,98,101]
// function secondMax(arr){
//     max=arr[0]
// secmax=arr[1]
// c=0
// for(i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         secmax=max
//         max=arr[i]
//     }
//     if(arr[i]>secmax&&arr[i]< max){
//         secmax=arr[i]
//     }
// }
// console.log(secmax);
// }
// secondMax(arr) //100
// ---------------------------------------

// Testcase 1:
// Input: [1, 2, 3, 4]
// Output: 10
// Explanation:
// The sum of the elements 1 + 2 + 3 + 4 = 10.

// let arr = [1, 2, 3, 4, 10, 2];
// function sum(arr) {
//   let sum = 0;
//   for (i of arr) {
//     sum = sum + i;
//   }
//   console.log(sum);
// }
// sum(arr); //22
// ----------------------

// Testcase 1:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

// let arr = [1, 2, 2, 3, 4, 4, 5];
// function removeDup(arr) {
//   let emp = [];
//   for (i = 0; i < arr.length; i++) {
//     c = 0;
//     for (j = 0; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         c++;
//       }
//     }
//     if (c == 1) {
//       emp.push(arr[i]);
//     }
//     if (c > 1) {
//       i += 1;
//       emp.push(arr[i]);
//     }
//   }
//   console.log(emp);
// }

// removeDup(arr); //[ 1, 2, 3, 4, 5 ]
// ---------------------------------------

// Input: [1, 2, 3, 4, 5]
// // Output: true
// let arr = [1, 2, 3, 4, 5];
// function Ascending(arr) {
//   isAsc = false;
//   for (i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < arr[i + 1]) {
//       isAsc = true;
//     } else {
//       isAsc = false;
//       break;
//     }
//   }
//   if (isAsc) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// Ascending(arr); //true
// ------------------------

// Write a function to reverse the elements in an array.
// Testcase 1:
// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

// let arr=[1, 2, 3, 4, 5]
// function ReverseArr(arr){
//     let emp=[]
//     for(i=arr.length-1;i>=0;i--){
//         emp.push(arr[i])
//     }
//     return emp
// }
// console.log(ReverseArr(arr)); // [5, 4, 3, 2, 1]
// ------------------------------

// Testcase 1:
// Input: [0, 1, false, 2, '', 3]
// Output: [1, 2, 3]

// let arr=[0, 1, false, 2, '', 3]
// function removeFalse(arr){
//     let a=[]
// for(i in arr){
//     if(arr[i]!== ''&& arr[i]!== false && arr[i]!== undefined && arr[i]!== null && arr[i]!== NaN){
//         a.push(arr[i])
//     }
// }
// console.log(a);
// }
// removeFalse(arr) //[ 0, 1, 2, 3 ]
// -----------------------------------

// Testcase 1:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 3, 5]

// let arr=[1, 2, 2, 3, 4, 4, 5, 5, 6]
// function UniqueNum(arr){
//     let unq=[]
// for(i=0;i<arr.length;i++){
//     c=0
//     for(j=0;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             c++
//         }
//     }
//     if(c==1){
//         unq.push(arr[i])
//     }

// }
// console.log(unq);
// }

// UniqueNum(arr) //[ 1, 3, 6 ]
// ----------------------------

// Testcase 1:
// Input: [1, 2, 3, 4, 5]
// Output: 6

// let arr=[1, 2, 3, 4, 5, 6]
// function Sum(arr){
//     let sum=0
// for( i of arr){
//     if(i%2==0){
//         sum+=i
//     }
// }
// console.log(sum);
// }
// Sum(arr) //12
// ---------------------
// String-Based Questions

// Testcase: "hello"
// Output: "olleh"

// let str="hello"
// function Reverse(str){
//     reverse=''
// for(i=str.length-1;i>=0;i--){
//     reverse+=str[i]
// }
// return reverse
// }
// console.log(Reverse(str)); //'olleh'
// ----------------------------

// Question: Write a function to check if a given string is a palindrome.
// Testcase: "racecar"
// Output: true

// let str="racecar"
// function Palindrome(str){
//     let reverse=''
//     for(i=str.length-1;i>=0;i--){
//         reverse+=str[i]
//     }
//     if(str===reverse){
//         console.log(true);

//     }else{
//         console.log(false);
//     }
// }
// Palindrome(str) //true
// ----------------------------

// Testcase: "hello world"
// Output: 3

// let str= "hello world"
// function vowelsCount(str){
//     let vowels='aeiouAEIOU'
//     let count=0
//     for(i=0;i<str.length;i++){
//         for(j=0;j<vowels.length;j++){
//             if(str[i]==vowels[j]){
//                 count++
//             }
//         }
//     }
//     return count
// }
// console.log(vowelsCount(str)); //3
// -------------------------------

// /Testcase: "hello world"
// Output: "hll wrld"

    // let str="hello world"
    // function NonVowels(str) {
    //     let vowels='aeiouAEIOU'
    //     let result=''
    // for(i=0; i<str.length;i++){
    //     c=0
    //     for(j of vowels){
    //         if(str[i]===j){
    //             c++
    //         }
    //     }
    //     if(c==0){
    //         result+=str[i]
    //     }
    // }
    // console.log(result);
    // }

    // NonVowels(str) //hll wrld
// ----------------------------

// Testcase: "hello world"
// // Output: "Hello World"

    // let str = "hello world";
    // function TitleCase(str) {
    // let res = "";
    // capital = true;
    // for (i = 0; i < str.length; i++) {
    //     if (str[i] == " ") {
    //     res += " ";
    //     capital = true;
    //     } else if (capital) {
    //     res += str[i].toUpperCase();
    //     capital = false;
    //     } else {
    //     res += str[i];
    //     }
    // }
    // console.log(res);
    // }
    // TitleCase(str); //Hello World
// ----------------------------

// testcase: "123"
// Output: 123

    // let str='123'
    // function StringToNumber(str) { 
    // let n=0
    // for( i in str){
    //     code=str.charCodeAt(i)
    //     n=n*10+(code-48)
    // }
    // console.log(n);
    // }
    // StringToNumber(str) //123
// -----------------------------

// Testcase: "12345"
// Output: true

    // let str="12345"
    // function isNumber(str){
    //     count=0
    //     for(i in str){
    //         code=str.charCodeAt(i)
    //         if(code>=48 &&code<=57){
    //             count++
    //         }
    //     }
    //     if(count==str.length){
    //         console.log(true);
    //     }
    // }

    // isNumber(str) //true
// --------------------------

// Testcase: "hello world", "l"
// Output: 3

    // function charCount(str,char) {
    //     let count=0
    //     for(i of str){
    //         if(i==char)count++
    //     }
    //     return count
        
    // }
    // console.log(charCount("hello world", "l")); //3
// ----------------------

// Testcase: [["name", "Alice"], ["age", 25]]
// Output: {name: "Alice", age: 25}

    // let arr= [["name", "Alice"], ["age", 25]]
    // function object(arr){
    //     let obj={}
    //     for(i in arr){
    //         for(j in arr[i]){
    //             obj[arr[i][0]]=arr[i][1]
    //         }
    //     }
    //     console.log(obj);
        
    // }
    // object(arr) //{ name: 'Alice', age: 25 }
// -----------------------------

// Testcase: {a: 1, b: 2}, {b: 3, c: 4}
// Output: {a: 1, b: 3, c: 4}

    // let obj1={a: 1, b: 2}
    // let obj2={b: 3, c: 4}
    // function mergeObj(obj1,obj2) {
    //     for(i in obj2){
    //         obj1[i]=obj2[i]
    //     }
    //     console.log(obj1);
        
    // }
    // mergeObj(obj1,obj2)//{ a: 1, b: 3, c: 4 }
// --------------------------

//Testcase: {a: 1, b: 2, c: 3}
// Output: 3
// Explanation: The object {a: 1, b: 2, c: 3} has 3 properties, so the output is 3.

// let obj={a: 1, b: 2, c: 3}
// function objProperties(obj){
//     count=0
//     for(i in obj){
//         count++
//     }
//     console.log(count);
// }
// objProperties(obj)//3
// ----------------

// Testcase: {a: 1, b: 2, c: 3}
// Output: ["a", "b", "c"]

    // let obj={a: 1, b: 2, c: 3}
    // function objKeys(obj){
    //     let array=[]
    //     for(i in obj){
    //         array.push(i)

    //     }
    //     console.log(array);
    // }
    // objKeys(obj) // Output: ["a", "b", "c"]
// -------------------
// Testcase: {a: 1, b: 2, c: 3}
// Output: [1, 2, 3]

    // let obj={a: 1, b: 2, c: 3}
    // function Obj(obj){
    //     let array=[]
    //     for(i in obj){
    //         array.push(obj[i])
    //     }
    //     return array
    // }
    // console.log(Obj(obj)); //[ 1, 2, 3 ]
// ------------------

// Testcase: {}
// Output: true

    // let obj={}
    // function empObj(obj){
    //     c=0
    //     for(i in obj){
    //     c++ 
    //     }
    //     if(c==0){
    //         console.log(true);
    //     }
    // }
    // empObj(obj) // Output: true

    //         OR

    // function isEmpty(obj) {
    //     return Object.keys(obj).length === 0;
    // }
    
    // console.log(isEmpty(obj)); // Output: true
// -------------------------
