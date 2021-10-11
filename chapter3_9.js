"use strict";

// FizzBuzzプログラムの実装
// 数値が３と５で割り切れればFizzBuzzと返す
// 数値が3で割り切れればFizzと返す
// 数値が5で割り切れればBuzzと返す
// どちらでも割り切れなければ数値を返す

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0){
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

// 1~100の間でFizzBuzzプログラムを実行する
let i = 1;
while (i <= 100) {
  console.log(fizzBuzz(i));
  i += 1;
}
