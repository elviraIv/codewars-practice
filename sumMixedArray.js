// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x) {
  let digits = [];

  for (let el of x) {
    if (typeof el === "string") {
      digits.push(Number.parseInt(el));
    } else {
      digits.push(el);
    }
  }

  return digits.reduce((acc, curr) => curr + acc, 0);
}
