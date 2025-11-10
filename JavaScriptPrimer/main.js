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

    //関数式
    //functionキーワード
    const abc = function(){
        return "function"
    }
    const abcd = abc();
    console.log(abcd);
    //arrow function
    const def = () =>{
        return "arrow"
    }
    console.log(def());
        //arrow functionの省略記法
        const fnA = () => {};
        const fnB = (x) => {};
        const fnC = x => {};
        const fnD = (x,y) => {};

        const mulA = x => {return x*x};
        const mulB = x => x*x;

    //値を返すコールバック関数（function）
    const array = [1, 2, 3];
    const doubleArray = array.map(function(value){
        return value * 2;
    })
    console.log(doubleArray);

    //メソッド
    const obj = {
        method1: function(){
            return "function";
        },
        method2: () => {
            return "arrow";
        }
    };
    console.log(obj.method1());
    console.log(obj.method2());

    //メソッドの短縮記法
    const obj1 = {
        method() {
            return "this is method";
        }
    };
    console.log(obj1.method());