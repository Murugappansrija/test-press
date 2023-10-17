// 1. Write a program to print the reverse of the given string.

//solution
const string = prompt("");
const reverse = string.split("").reverse().join("");
console.log(reverse);

//2. Given a number, check whether it is a prime number or not

function primeornot(num) {
  if (num == 1) {
    return console.log("1 is neither pime nor composite");
  } else if (num == 2) {
    return console.log("yes");
  } else if (num > 2) {
    for (let i = 2; num > i; i++) {
      if (num % i == 0) {
        return console.log("No");
      } else {
        return console.log("Yes");
      }
    }
  }
}

primeornot(3);
primeornot(4);

//3. Given an array of digit, arrange them in a way that it forms the maxiumvalue value.

function maxiumdig(nos) {
  if (nos.length === 0) {
    return "0";
  }

  nos.sort((a, b) => {
    const x = String(a);
    const y = String(b);

    return parseInt(y + x) - parseInt(x + y);
  });

  const maxiumvalue = nos.join("");

  return maxiumvalue;
}
const digit = [54, 546, 548, 60];
const maxiumvalue = maxiumdig(digit);
console.log(maxiumvalue);

// 4. Given a number N, print reverse of number N.

const num = prompt("");

const constr = num.toString();

let reverseno = constr.split("").reverse().join("");

reverseno = reverseno.replace(/^0+/, "");

console.log(reverseno);

//5. Given an array of digit, find the maximum and minimum element in the array.

const arrayvalue = [100, 30, 80, 3456];

const min = arrayvalue.reduce((a, b) => Math.min(a, b));
const max = arrayvalue.reduce((a, b) => Math.max(a, b));

console.log(`min value :${min}, max value :${max}`);
