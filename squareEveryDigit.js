// You are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

function squareDigits(num) {
  let stringArray = num.toString().split("");

  const digitsArray = stringArray.reduce((acc, curr) => {
    acc.push(parseInt(curr));
    return acc;
  }, []);

  const resultArray = [];

  for (let el of digitsArray) {
    resultArray.push(el * el);
  }

  return Number(resultArray.join(""));
}

// function squareDigits(num){
//     let result = num
//       .toString()
//       .split("")
//       .map( num => parseInt(num) )
//       .map( num => num * num )
//       .join("")

//     return parseInt(result)
//   }
