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
// const array = [1, 5, 10];
// const isEvenIncluded = (inputArray) =>{
//     // const numJudge = inputArray.some(num => {
//     //     return num % 2 === 0;
//     // });
//     const numJudge = inputArray.some(num => num % 2 === 0);
//     console.log("numJudgeの値:", numJudge);  // ← これを追加
//     console.log("numJudgeの型:", typeof numJudge);  // ← これも
//     if(numJudge === true){
//         return "配列に偶数が含まれます。";
//     }else{
//         return "配列に奇数が含まれます。";
//     }
// };

// console.log(isEvenIncluded(array));

// continue文
// const isEven = (num) => num % 2 === 0;
// const filterEven = (numbers) => {
//     const result = [];
//     for (let i = 0; i < numbers.length; i++){
//        const num = numbers[i];
//         if(!isEven(num)){
//             continue;
//         }
//         result.push(num);
//     }
//     return result;
// };
// const array = [1, 5, 10, 15, 20];
// console.log(filterEven(array));

//filterメソッド
// const array = [1, 5, 10, 15, 20];
// const isEven = (num) => num % 2 === 0;
// const result = array.filter(isEven);
// console.log(result);

// //for...in文
// const obj = {
//     "a": 1,
//     "b": 2,
//     "c": 3
// };

// for(const key in obj){
//     const value = obj[key];
//     console.log(`key:${key}, value:${value}`);
// }

// Object.keys(obj).forEach(key => {
//     const value = obj[key];
//     console.log(`key:${key}, value:${value}`);
// });

// const array = [1, 2, 3];
// for(const value of array){
//     console.log(value);
// }

// const array2 = "あいうえお";
// for(const value of array2){
//     console.log(value);
// }

//配列
//分割代入
// const array = ["one", "two", "three"];
// const [first, second, third] = array;
// console.log(first);
// console.log(second);
// console.log(third);

// //Object.hasOwn静的メソッド
// const denseArray = [1, undefined, 3];
// const sparseArray = [1, , 3];
// console.log(Object.hasOwn(denseArray, 1));
// console.log(Object.hasOwn(sparseArray, 1));

//インデックスを取得
// const array = ["Java", "JavaScript", "Ruby", "JavaScript"];
// const indexOfJs = array.indexOf("JavaScript");
// console.log(indexOfJs);

// const lastIndexOfJs = array.lastIndexOf("JavaScript");
// console.log(lastIndexOfJs);

// console.log(array[indexOfJs]);
// console.log(array[lastIndexOfJs]);

//findindexjメソッド
// const colors = [
//     {"color": "red"},
//     {"color": "green"},
//     {"color": "blue"}
// ];
// const indexOfBlue = colors.findIndex((obj) =>{
//     return obj.color == "blue";
// });
// console.log(indexOfBlue);
// console.log(colors[indexOfBlue]);

// //条件に一致する要素を検索
// const records = [
//     { date: "2020/12/1", count: 5 },
//     { date: "2020/12/2", count: 11 },
//     { date: "2020/12/3", count: 9 },
//     { date: "2020/12/4", count: 12 },
//     { date: "2020/12/5", count: 3 }
// ];
// const fistRecordIndex = records.findIndex((record) =>{
//     return record.count > 10;
// });
// const lastRecordIndex = records.findLastIndex((record) =>{
//     return record.count > 10;
// });
// const dateRecordIndex = records.findIndex((record) =>{
//     return record.date === "2020/12/5";
// });
// console.log(fistRecordIndex);
// console.log(records[fistRecordIndex]);
// console.log(lastRecordIndex);
// console.log(records[lastRecordIndex]);
// console.log(dateRecordIndex);

// //指定範囲の要素を取得
// const array = ["A", "B", "C", "D", "E"];

// console.log(array.slice(0, 2));
// console.log(array.slice(2, 4));
// console.log(array.slice(0));
// console.log(array.slice(0, 4));
// console.log(array.slice(0, 5));
// console.log(array.slice(1, 1));
// console.log(array.slice(4, 1));

//includesメソッド
// const array = ["Java", "JavaScript", "Ruby"];

// if(array.includes("JavaScript")){
//     console.log(("配列にJavaScriptが含まれている"));
// }
// console.log(array.includes("JavaScript"));
//someメソッド
// const colors = [
//     { "color": "red" },
//     { "color": "green" },
//     { "color": "blue" }
// ];
// const isIncludedBlueColor = colors.some(obj => {
//     return obj.color === "blue";
// });
// console.log(isIncludedBlueColor);

//追加と削除
//末尾へ（push, pop）
// const array = ["A", "B", "C"];
// array.push("D", "E");
// console.log(array);
// const poppedItem = array.pop();
// console.log(poppedItem);
// console.log(array);
//先頭へ（unshift, shift）
// const array = ["A", "B", "C"];
// array.unshift(0);
// console.log(array);
// const shiftedItem = array.shift();
// console.log(array);

// //配列同士を結合
// const array = ["A", "B", "C"];
// const array2 = ["D", "E"];
// //下でもう一度結合するためにletにしている
// let newArray = array.concat(array2);
// console.log(newArray);
// //任意の値を結合
// newArray = array.concat("新しい要素");
// console.log(newArray);
// //spread構文の結合
// const array = ["A", "B", "C"];
// const newArray = ["X", "Y", "Z", ...array];
// //concatの結合
// const newArrayConcat = ["X", "Y", "Z"].concat(array);
// console.log(newArray);
// console.log(newArrayConcat);
// //任意の位置
// const newArray2 = ["X", ...array, "Y", "Z"];
// console.log(newArray2);

// ///任意の要素を削除
    // const array = ["a", "b", "c",];
    // const arrayConcat = ["D", "E", "F"];
    // const arrayRM = array.splice(0, 1, ...arrayConcat);
    // console.log(arrayRM);
    // console.log(array);

    // //配列の要素をすべて削除
    // // spliceメソッドを使う方法
    // const array = ["a", "b", "c",];
    // array.splice(0, array.length);
    // console.log(array);
    // //lengthを0にする方法
    // const array2 = ["a", "b", "c",];
    // array2.length = 0;
    // console.log(array2);

    // //空の配列を代入
    // let array = [1, 2, 3];
    // console.log(array.length);
    // array = [];
    // console.log(array.length);

//破壊的メソッドと非破壊的メソッド
// const array  = ["A" , "B", "C"];
// const result = array.push("D");
// console.log(result);
// console.log(array);

// const result = array.concat(["D", "E"]);
// console.log(result);
// console.log(array);
// console.log(result === array);

// //破壊的メソッド
// //`array`の`index`番目の要素を削除知った配列を返す関数
// //引数の`array`は破壊的に変更される
// function removeAtIndex(array, index){
//     array.splice(index, 1);
//     console.log(array);     //デバック
//     return array;
// }
// const array = ["A", "B", "C"];
// const newArray = removeAtIndex(array, 1)
// console.log(array);
// console.log(newArray);

// // `array`の`index`番目の要素を削除した配列を返す関数
// function removeAtIndex(array, index) {
//     // コピーを作成してから変更する
//     const copiedArray = array.slice();
//     console.log(copiedArray);
//     copiedArray.splice(index, 1);
//     return copiedArray;
// }
// const array = ["A", "B", "C"];
// // `array`から1番目の要素を削除した配列を取得
// const newArray = removeAtIndex(array, 1);
// console.log(newArray); // => ["A", "C"]
// // 元の`array`には影響がない
// console.log(array); // => ["A", "B", "C"]

// //非破壊的なバージョン
// function removeAtIndex(array, index){
//     return array.toSpliced(index, 1);
// }
// const array = [1, 2, 3];
// const newArray = removeAtIndex(array, 1);
// console.log(array);
// console.log(newArray);

///配列を反復処理するメソッド
    ///forEach()
    // const array = [1, 2, 3];
    // array.forEach((currentValue, index, array) => {
    //     console.log(currentValue, index, array);
    // });

    //map
    // const array = [1, 2, 3];
    // const newArray = array.map((currentValue, index, array) => {
    //     return currentValue * 10;
    // });
    // console.log(newArray);
    // console.log((array === newArray));

    //filter
    // const array = [1, 2, 3];
    // const newArray = array.filter((currentValue, index, array) => {
    //     return currentValue % 2 === 1;
    // });
    // console.log(newArray);
    // console.log(array === newArray);

    // reduce
    // const array = [1, 2, 3];
    // const totalValue = array.reduce((accumulator, currentValue, index, array) => {
    //     return accumulator + currentValue;
    // }, 0);
    // console.log(totalValue);

    //flat
    // const array = [[["A"], "B"], "C"];
    // console.log(array.flat());
    // console.log(array.flat(1));

    // console.log(array.flat(2));
    // console.log(array.flat(Infinity));
    // console.log(array);

    // ///flatMap
    // const array = [1, 2, 3];
    // const doubled = array.flatMap((value) => {
    //     return [value, value * 2];
    // });
    // console.log(doubled);

    // //Object.groupBy静的メソッド
    // const array = [1, 2, 3, 4, 5];
    // const grouped = Object.groupBy(array, (currentValue) => {
    //     return currentValue % 2 === 0 ? "even" : "odd";
    // });
    // console.log(grouped.even);
    // console.log(grouped.odd);
        // //Array.prototype.reduceメソッドで実装
        // const array = [1, 2, 3, 4, 5];
        // const grouped = array.reduce((accumulator, currentValue) => {
        //     const key = currentValue % 2 === 0 ? "even" : "odd";
        //     if(!accumulator[key]){
        //         accumulator[key] = [];
        //     }
        //     accumulator[key].push(currentValue);
        //     return accumulator;
        // }, {});
        // console.log(grouped.even);
        // console.log(grouped.odd);

    // Array-likeオブジェクト（argumentsメソッド）
    // function myFunc(){
    //     console.log(arguments[0]);
    //     console.log(arguments[1]);
    //     console.log(arguments[2]);
    //     console.log(typeof arguments.forEach);
    // }
    // myFunc("a", "b", "c");

    //メソッドチェーンと高階関数
    // const array = ["a"].concat("b").concat("c");
    // console.log(array);

    // const ECMAScriptVersions = [
    // { name: "ECMAScript 1", year: 1997 },
    // { name: "ECMAScript 2", year: 1998 },
    // { name: "ECMAScript 3", year: 1999 },
    // { name: "ECMAScript 5", year: 2009 },
    // { name: "ECMAScript 5.1", year: 2011 },
    // { name: "ECMAScript 2015", year: 2015 },
    // { name: "ECMAScript 2016", year: 2016 },
    // { name: "ECMAScript 2017", year: 2017 },
    // ];

    // const versionNames = ECMAScriptVersions
    //     .filter(ECMAScript => ECMAScript.year <= 2000)
    //     .map(ECMAScript => ECMAScript.name);

    // console.log(versionNames);

//15 文字列
//正規表現オブジェクト
// const  pattern = /a+/;
// console.log(pattern);

//
// function main() {
//     conost invalidPattern = new RegExp("[");
// }
// main();

// //
// const spaceCount = 3;
// const pattern = new RegExp(`¥¥s{${spaceCount}}`);

// //マッチした文字列の一部を取得
// const pattern = /ECMAScript (¥d+)/;
// const [all, capture1] = "ECMAScript 6".match(pattern);
// console.log(all);
// console.log(caputure1);

// //matchAllメソッド
// const str = "ABC あいう DE えお";
// const alphabetsPattern = /[a-zA-Z]+/g;

// const matchesIterator = str.matchAll(alphabetsPattern);
// for(const match of matchesIterator){
//     console.log(`match: "${match[0]}", index:${match.index}, input: "${match.input}"`);
// }

// //RegExpの`exec`メソッド
// const str = "ABC あいう DE えお";
// const alphabetsPattern = /[a-zA-Z]+/;

// const results = alphabetsPattern.exec(str);
// console.log(results.length);
// console.log(results[0]);

// console.log(results.index);

// console.log(results.input);

//RegExpの`exec`メソッドを`matchAll`のようにするには`while`をつかう
// const str = "ABC あいう DE えお";
// const alphabetsPattern = /[a-zA-Z]+/g;
// let matches;
// while(matches = alphabetsPattern.exec(str)){
//      console.log(`match: ${matches[0]}, index: ${matches.index}, lastIndex: ${alphabetsPattern.lastIndex}`);
// }

// //文字列の置換/削除
// const toDateJa = (dateString) => {
//     return dateString.replace(/(\d{4})-(\d{2})-(\d{2})/g, (all, year, month, day) => {
//         return `${year}年${month}月${day}日`;
//     });
// }

// console.log(toDateJa("本日ハ晴天ナリ"));
// console.log(toDateJa("今日は2017-03-01です"));

// //URL文字列の結合
// function getResource(baseURL, pathname){
//     const url = baseURL + pathname;
//     console.log(url);
// }

// const baseURL = "http://example.com/resources";
// const pathname = "/example.js";
// getResource(baseURL, pathname);

// ベースURLとパスを結合した文字列を返す
// function baseJoin(baseURL, pathname) {
//     // 末尾に / がある場合は、/ を削除してから結合する
//     const stripSlashBaseURL = baseURL.replace(/\/$/, "");
//     return stripSlashBaseURL + pathname;
// }
// // `baseURL`と`pathname`にあるリソースを取得する
// function getResource(baseURL, pathname) {
//     const url = baseJoin(baseURL, pathname);
//     // baseURLの末尾に / があってもなくても同じ結果となる
//     console.log(url); // => "http://example.com/resources/example.js"
//     // 省略) リソースを取得する処理...
// }
// const baseURL = "http://example.com/resources/";
// const pathname = "/example.js";
// getResource(baseURL, pathname);

//12 オブジェクト
// // 問題1
// const user = {
//     name: "太郎",
//     age: 25,
//     email: "taro@example.com"
// };
// console.log(Object.keys(user));

// console.log(Object.values(user));

// console.log(Object.entries(user));


// // 問題2
// const defaultSettings = {
//     theme: "light",
//     language: "ja",
//     notifications: true
// };

// const userSettings = {
//     theme: "dark",
//     notifications: false
// };

// const finalSettings = {
//     ...defaultSettings,
//     ...userSettings
// };

// console.log(finalSettings);


// // 問題3
// const product = {
//     id: 1,
//     name: "ノートPC",
//     price: 100000
// };

// product.stock = 10;
// console.log(product);

// delete(product.price);
// console.log(product);


// // 問題4
// const apiResponse = {
//     data: {
//         user: {
//             name: "花子"
//         }
//     }
// };

// const emptyResponse = {};

// const name1 = apiResponse?.data?.user?.name;
// const name2 = emptyResponse?.data?.user?.name;

// console.log(name1);
// console.log(name2);


// // 問題5
// const isAdmin = true;
// const isPremium = false;

// const user = {
//     name: "次郎",
//     ...(isAdmin ? { role: "admin" } : {}),
//     ...(isPremium ? { role: "Premium"} : {})
// };

// console.log(user);


// // 問題6
// const users = [
//     { id: 1, name: "太郎", age: 25 },
//     { id: 2, name: "花子", age: 30 },
//     { id: 3, name: "次郎", age: 22 }
// ];

// const formatted = users.map(user => {
//     const name = user.name;
//     const age = user.age;

//     return `${name}: ${age}歳`;
// });

// console.log(formatted);

// // 問題7
// const formData = {
//     username: "taro123",
//     email: "taro@example.com",
//     password: "pass123"
// };

// const requiredFields = ["username", "email", "password"];



// const isValid = requiredFields.every(field => {
//         //Object.hasOwn
//         // return Object.hasOwn(formData, field)
//         //in演算子
//         return  field in formData;
//     });

//     console.log(isValid);


// // 問題8
// const user = {
//     id: 1,
//     name: "太郎"
// };

// const profile = {
//     age: 25,
//     city: "東京"
// };

// const settings = {
//     theme: "dark",
//     language: "ja"
// };

// const merged = {
//     ...user,
//     ...profile,
//     ...settings,
//     email: "taro@example.com"
// };

// console.log(merged);


// //JSON
// const json = `{"id":1, "name": "js-primer"}`;
// const obj = JSON.parse(json);
// console.log(obj.id);
// console.log(obj.name);

//     //オブジェクトをJSON
//     const j_obj = { id: 1, name: "js-primer", bio: null };
//     console.log(JSON.stringify(j_obj));

//     const replacer = (key, value) => {
//         if(value == null){
//             return undefined;
//         }
//         return value;
//     };
//     console.log(JSON.stringify(obj, replacer));

//     //

//export/import基礎編
// // //問題1
// import { add, multiply } from "./module/utils.js";

// console.log(add(2, 3));
// console.log(multiply(4, 5));

// //問題２
// import myModule from "./module/Button.js";
// console.log(myModule);

// //問題3
// import UserCard from "./module/UserCard.js";
// import { formatName } from "./module/UserCard.js";

// console.log(UserCard({ name: "太郎" }));
// console.log(formatName( "太郎", "山田" ));


//非同期処理

    // //同期処理
    // function taskA() {
    //     console.log("タスクAを実行 at " + Date.now());
    // }
    // function taskB() {
    //     console.log("タスクBを実行 at " + Date.now());
    // }

    // function blockTime(timeout) {
    //     const startTime = Date.now();

    //     while (true) {
    //         const diffTime = Date.now() - startTime;
    //         if (diffTime >= timeout) {
    //             return;
    //         }
    //     }
    // }
    // taskA();
    // blockTime(1000);
    // taskB();

    // //非同期処理
    // function taskC() {
    //     console.log("タスクCを実行 at " + Date.now());
    // }
    // function taskD() {
    //     console.log("タスクDを実行 at " + Date.now());
    // }
    // function taskAsync() {
    //     console.log("非同期のタスクを実行 at " + Date.now());
    // }

    // taskC();
    // setTimeout(() => {
    //     taskAsync();
    // }, 1000);
    // taskD();


//非同期処理
    // //問題１
    // function wait1Second() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve("成功");
    //         }, 1000);
    //     });
    // }

    // function randomPromise() {
    //     return new Promise((resolve, reject) => {
    //         if(Math.random() > 0.5){
    //             resolve("成功");
    //         }else{
    //             reject(new Error("失敗"));
    //         }
    //     });
    // }

    // wait1Second().then((result) => {
    //     console.log(result);
    // });

    // randomPromise()
    // .then((result) => console.log("成功：", result))
    // .catch((error) => console.log("失敗：", error))

    // //問題２
    // function fetchUser(UserId) {
    //     return Promise.resolve({id:UserId, name:"太郎"});
    // }

    // function fetchPosts(userId) {
    //     return Promise.resolve([
    //         {id: 1, title: "投稿１"},
    //         {id: 2, title: "投稿２"}
    //     ]);
    // }

    // fetchUser(1)
    // .then((user) => {
    //     console.log("ユーザー：", user.name);
    //     return fetchPosts(user.id);
    // })
    // .then((posts) => {
    //     console.log("投稿数：", posts.length);
    // })

    // //問題３
    // function fetchUser(userId) {
    // return Promise.resolve({ id: userId, name: "太郎" });
    // }

    // function fetchPosts(userId) {
    //     return Promise.resolve([
    //         { id: 1, title: "投稿1" },
    //         { id: 2, title: "投稿2" }
    //     ]);
    // }

    // async function getUserPosts(UserId) {
    //     const user = await fetchUser(UserId);
    //     console.log("ユーザー：", user.name);

    //     const posts = await fetchPosts(user.id);
    //     console.log("投稿数：", posts.length);

    //     return posts;
    // }

    // getUserPosts(1).then((posts) => {
    //     console.log(posts);
    // });

    // //問題４
    // function fetchData(url) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if(url.startsWith("http")){
    //                 resolve({data: "成功"});
    //             }else{
    //                 reject(new Error("無効なURL"));
    //             }
    //         }, 1000);
    //     });
    // }

    // async function getData(url) {
    //     try {
    //         const data = await fetchData(url);
    //         console.log("成功：", data);
    //         return data;
    //     } catch (error) {
    //         console.log("エラー：", error.message);
    //         return null;
    //     }
    // }

    // getData("http://example.com");
    // getData("invalid-url");

    // //問題５
    // function fetchUsers() {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve([{id: 1, name: "太郎"}]);
    //         }, 1000);
    //     });
    // }

    // function fetchPosts() {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve([{id: 1, title: "投稿１"}]);
    //         },1000 );
    //     });
    // }

    // function fetchComments() {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //            resolve([{id: 1, text: "コメント1"}]);
    //         }, 1000);
    //     });
    // }

    // async function fetchAllData() {
    //     const [users, posts, comments] = await Promise.all([
    //         fetchUsers(), 
    //         fetchPosts(), 
    //         fetchComments()
    //     ]);
    //     return {users, posts, comments};
    // }

    // fetchAllData().then((result) => {
    //     console.log("全データ:", result);
    // });

    // //問題６
    // function fetchA() {
    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve("A");
    //     }, 1000);  // 1秒かかる
    //     });
    // }

    // function fetchB() {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve("B");
    //         }, 1000);  // 1秒かかる
    //     });
    // }

    // function fetchC() {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve("C");
    //         }, 1000);  // 1秒かかる
    //     });
    // }

    // async function  patternA() {
    //     const a = await fetchA();
    //     const b = await fetchB();
    //     const c = await fetchC();
    //     return [a, b, c];
    // }

    // async function patternB() {
    //     const [a, b, c] = await Promise.all([
    //         fetchA(),
    //         fetchB(),
    //         fetchC()
    //     ]);
    //     return [a, b, c];
    // }

    //非同期処理 総合演習
    //課題１
    function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: "太郎", age: 25 });
            } else {
                reject(new Error("ユーザーが見つかりません"));
            }
            }, 1000);
        });
    }

    function fetchUserPosts(userId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, title: "投稿1", likes: 10 },
                    { id: 2, title: "投稿2", likes: 20 },
                    { id: 3, title: "投稿3", likes: 15 }
                ]);
            }, 1000);
        });
    }

    function fetchPostComments(postId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, text: "コメント1" },
                    { id: 2, text: "コメント2" }
                ]);
            }, 500);
        });
    }

    async function getUserProfile(userId) {
        try {
            const user = await fetchUser(userId);
            const posts = await fetchUserPosts(user.id);
            return {user, posts};
        }catch(error){
            throw error;
        }
    }

    getUserProfile(1).then((profile) => {
    console.log("ユーザー:", profile.user.name);
    console.log("投稿数:", profile.posts.length);
    });

    // 失敗する場合
    getUserProfile(999).then((profile) => {
        console.log("成功:", profile);
    }).catch((error) => {
        console.log("エラー:", error.message);
    });

    //課題２
    async function getUserStats(UserId) {
        const profile = await getUserProfile(UserId);
        const postCount = profile.posts.length;
        const totalLikes = profile.posts.reduce((sum, post) => {
                return sum + post.likes;
            }, 0);
        const avgLikes = totalLikes / postCount;
        return {postCount, totalLikes, avgLikes};
    }
    
    getUserStats(1).then((stats) => {
        console.log("統計：", stats);
    });

    //課題３
    async function getAllUsersStats(userIds){
        const promises = userIds.map((userId) => {
            return getUserStats(userId).catch((error) => null);
        });
        const results = await Promise.all(promises);
        return results;
    }

    getAllUsersStats([1, 999, 1]).then((allStats) => {
        console.log("全ユーザー統計：", allStats);
    });

    //問題４
    async function getPostWithCommentCount(userId) {
        const profile = await getUserProfile(userId);
        const posts = profile.posts;

        const promises = posts.map((post) => {
            return fetchPostComments(post.id);
        });
        const commentsArray = await Promise.all(promises);
        
        const postsWithCommentCount = posts.map((post, index) => {
            const comments = commentsArray[index];
            return {
                ...post,
                commentCount: comments.length
            };
        });
        return postsWithCommentCount;
    }

    getPostWithCommentCount(1).then((posts) => {
        console.log("投稿とコメント数：", posts);
    });