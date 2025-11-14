'use strict'

// console.log(typeof true);
// console.log(typeof 42);
// console.log(typeof 980071992540992n);
// console.log(typeof true);
// console.log(typeof "JavaScript"); 
// console.log(typeof Symbol("シンボル"));
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof ["配列"]);
// console.log(typeof { "key": "value" }); 
// console.log(typeof function() {});

// console.log(typeof 'abc');

// const str = "文字列";
// console.log(`これは${str}です。`);
// console.log(`これは\`コード\`です。`);

// const foo = null;
// console.log(foo);

// const obj = {
//     "key":"value"
// };
// console.log(obj.key);
// console.log(obj["key"]);

// const numberRegExp =  /\d+/;
// console.log(numberRegExp.test("123"));

// const str = new String("文字列")
// const str = "文字列";
// console.log(typeof str);
// console.log(str.length);

// console.log(10/0);

// console.log(NaN == NaN);
// console.log(typeof NaN);
// console.log(Number.isNaN(NaN));

// const obja = {},
// objb = {};

// console.log(obja === objb);
// console.log(obja !== objb);

// const value = undefined;
// if(value === null || value === undefined){
//     console.log("abc");
// }
// if(value == null){{
//     console.log("def");
// }}
// if(value == undefined){
//     console.log("ghi");
// }

// const array = [0, 1, 2];
// const [a, b, c] = array;
// console.log(a);
// console.log(b);
// console.log(c);

// const obj = {
//     "key":"value"
// };
// console.log(obj["key"]);
// const {key} = obj;
// console.log(key);

// const user_name = "入力値" ?? "名前がありません。";

// // 三項演算子
// const score = 75;
// const result = score >= 60 ? "合格" : "不合格";
// console.log(result);

// const num = 8;
// const type = num % 2 == 0 ? "偶数" : "奇数";
// console.log(type);

// const sscore = 85;
// const resultt = sscore >= 90 ? "A" : sscore >= 80 ? "B" : "C";
// console.log(resultt);

//8 関数
// function echo(x){
//     return x;
// }

// console.log(echo(1));
// console.log(echo());

// function argumentsToArray(x,y){
//     const z = x * y;
//     return z;
// }
// console.log(argumentsToArray(3,5));

//     //可変長引数
//     const max = Math.max(1, 5, 10, 20);
//     console.log(max);

//     //Rest parameters
//     function fn(...args){
//         console.log(args);
//     };
//     fn(1, 2, 3);

//     //Spread構文
//     const fnc = (a,b,c) => {
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     const array = [1, 2, 3]
//     fnc(...array);

//     function arg(){
//         console.log(arguments[0]);
//         console.log(arguments[1]);
//         console.log(arguments[2]);
//     }
//     arg("a", "b", "c");

//関数の引数と分割代入
    // const printUserId = (user) => {
    //     console.log(user.id);
    // }
    // const user = {
    //     id: 42
    // };
    // printUserId(user);
    // function printUserId({ id }) {
    // console.log(id); // => 42
    // }
    // const user = {
    //     id: 42
    // };
    // printUserId(user);

    // const {id} = user;
    // console.log(id);
    
    // const print = ([first, second]) => {
    //     console.log(first);
    //     console.log(second);
    // }
    // const array2 = [1, 5];
    // print(array2);

// //関数式
    // //functionキーワード
    // const abc = function(){
    //     return "function"
    // }
    // const abcd = abc();
    // console.log(abcd);
    // //arrow function
    // const def = () =>{
    //     return "arrow"
    // }
    // console.log(def());
    //     //arrow functionの省略記法
    //     const fnA = () => {};
    //     const fnB = (x) => {};
    //     const fnC = x => {};
    //     const fnD = (x,y) => {};

    //     const mulA = x => {return x*x};
    //     const mulB = x => x*x;

    // //値を返すコールバック関数（function）
    // const array = [1, 2, 3];
    // const doubleArray = array.map(function(value){
    //     return value * 2;
    // })
    // console.log(doubleArray);

    // //メソッド
    // const obj = {
    //     method1: function(){
    //         return "function";
    //     },
    //     method2: () => {
    //         return "arrow";
    //     }
    // };
    // console.log(obj.method1());
    // console.log(obj.method2());

    // //メソッドの短縮記法
    // const obj1 = {
    //     method() {
    //         return "this is method";
    //     }
    // };
    // console.log(obj1.method());

//条件分岐
//if文とelse文
    // const fnc = (x) => {
    //     if(x % 2 === 0){
    //         console.log("偶数")
    //     }else{
    //         console.log("奇数")
    //     }
    // };
    // fnc(5);

    // const year = new Date().getFullYear();
    // if(year % 4 === 0 && year % 100 !== 0 && year % 400 === 0){
    //     console.log(`${year}年はうるう年です。`);
    // }else{
    //     console.log(`${year}年はうるう年ではありません。`);
    // }

    // // if文とelse if文
    // const version = "ES6";
    // if(version === "ES5"){
    //     console.log("ECMAScript 5");
    // }else if(version === "ES6"){
    //     console.log("ECMAScript 2015");
    // }else if(version === "ES7"){
    //     console.log("ECMAScript 2016");
    // }else{
    //     console.log("知らないバージョンです");
    // }

    // // switch文
    // switch (version){
    //     case "ES5":
    //         console.log("ECMAScript 5");
    //         break;
    //     case "ES6":
    //         console.log("ECMAScript 2015");
    //         break;
    //     case "ES7":
    //         console.log("ECMAScript 2016");
    //         break;
    //     default:
    //         console.log("知らないバージョンです。");
    //         break;
    // }

// function getECMAScriptName(version) {
//     switch (version){
//         case "ES5":
//             return "ECMAScript 5";
//         case "ES6":
//             return "ECMAScript 2015";
//         case "ES7":
//             return "ECMAScript 2016";
//         default:
//             return "知らないバージョンです。";
//     }
// }
// console.log(getECMAScriptName("ES7"));

// //while文
// let x = 0;
// while(x < 10){
//     console.log(x);
//     x++;
// }

// //for文
// for (let y = 0; y < 10; y++){
//     console.log(y);
// }

// const sumNumber = (Narray) =>{
//     let x = 0;
//     for(let i = 0; i < Narray.length; i++){
//         x += Narray[i];
//         console.log(x);
//     }
// }

// const array = [1, 2, 3, 4, 5];
// sumNumber(array);

//foEach
// const array = [1, 2, 3, 4, 5];
// array.forEach(fnc=> {
//     console.log(fnc);
// });

// // const fnc = () =>{
// //     //空の関数
// // }

// //for文でやったやつ
// const sum = (array) => {
//     let result = 0;
//     array.forEach(num => {
//         result += num;
//     });
//     return result;
// };

// console.log(sum([1, 2, 3, 4, 5]));

//break文
// const isEvenIncluded = (array) => {
//     array.forEach(num => {
//         if(num % 2 === 0){
//             return `${num}は偶数です。`;
//         }else{
//             return `${num}は奇数です。`;
//         }
//     });
// };

// const array1 = [1, 3, 5, 8, 10]
// console.log(isEvenIncluded(array1));

// //forEachの中でbreakは使えない。
// const isEvenIncluded = (array) => {
//     array.forEach(num => {
//         if(num % 2 === 0){
//             console.log(`${num}は偶数です。`);
//             break;
//         }
//     });
// };

// const array1 = [1, 3, 5, 8, 10]
// isEvenIncluded(array1);

//成功（偶数の値を配列から見つけたらループを抜けて出力）
// const isEvenIncluded = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             return `${array[i]}は偶数です。`;
//             // break;
//         }
//     }
// };

// const array1 = [1, 3, 5, 8, 10];
// console.log(isEvenIncluded(array1));

// const array2 = [1, 3, 5, 7, 9];
// console.log(isEvenIncluded(array2));

// //練習（some, every, find）
// const users = [
//     { name: "太郎", age: 25 },
//     { name: "花子", age: 18 },
//     { name: "次郎", age: 30 }
// ];

// // some - 1人でも20歳未満がいるか
// const hasMinor = users.some(user => user.age < 20);
// console.log(hasMinor);  // 何が表示される？

// // every - 全員が20歳以上か
// const allAdults = users.every(user => user.age >= 20);
// console.log(allAdults);  // 何が表示される？

// // find - 20歳未満の最初の人
// const firstMinor = users.find(user => user.age < 20);
// console.log(firstMinor);  // 何が表示される？

//some（一つでも偶数があったらTrueを返す）
const array = [1, 5, 10];
const isEvenIncluded = (inputArray) =>{
    // const numJudge = inputArray.some(num => {
    //     return num % 2 === 0;
    // });
    const numJudge = inputArray.some(num => num % 2 === 0);
    console.log("numJudgeの値:", numJudge);  // ← これを追加
    console.log("numJudgeの型:", typeof numJudge);  // ← これも
    if(numJudge === true){
        return "配列に偶数が含まれます。";
    }else{
        return "配列に奇数が含まれます。";
    }
};

console.log(isEvenIncluded(array));