function oddOrEven(arr) {
  let sum = arr.reduce((sum, i) => sum + i, 0);

  return sum % 2 === 0 ? "even" : "odd";
}

oddOrEven([0, 2, 7]);
