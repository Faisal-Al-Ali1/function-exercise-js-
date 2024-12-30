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

function alphabetical(str) {
  const string = str.toLowerCase();
  const sortedStr = string.split("").sort().join("");
  console.log(sortedStr);
}
alphabetical("Orange");

// Q4








// Q5

function Agechecker(age) {
  age >= 18 ? console.log("The user is Adult") : console.log("The user is Minor");
}
Agechecker(23);