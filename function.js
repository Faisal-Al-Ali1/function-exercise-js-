// Q1

function reverse(num) {
  let numStr = num.toString();
  let reversed = " ";
  for (i = numStr.length - 1; i >= 0; i--) {
    reversed += numStr[i];
  }
  return console.log(parseInt(reversed));
}

reverse(12345);

// Q2

function odd_even() {
  for (i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even.`);
    } else {
      console.log(`${i} is odd.`);
    }
  }
}

odd_even();

// Q3

function alphabit_order(str) {
  let fstr = str.toLowerCase();
  let result = "";

  for (i = 0; i < str.length; i++) {
    let min = fstr[0];
    for (j = 1; j < fstr.length; j++) {
      if (min > fstr[j]) {
        min = fstr[j];
      }
    }
    result += min;
    fstr = fstr.replace(min, "");
  }
  return console.log(result);
}
alphabit_order("Orange");

// Q4

function dashInsert(input) {
  let inputString = input.toString();
  let result = [];

  for (let i = 0; i < inputString.length; i++) {
    result.push(inputString[i]);

    if (
      i < inputString.length - 1 &&
      inputString[i] % 2 === 0 &&
      inputString[i + 1] % 2 === 0
    ) {
      result.push("-");
    }
  }
  return result.join("");
}

let input = prompt("Enter a number:");
let output = dashInsert(input);
console.log(output);

// Q5

function Agechecker(age) {
  age >= 18
    ? console.log("The user is Adult")
    : console.log("The user is Minor");
}
Agechecker(23);
