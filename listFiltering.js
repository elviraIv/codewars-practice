//
function filter_list(l) {
  // Return a new array with the strings filtered out
  let resultArray = [];

  for (el of l) {
    if (Number.isInteger(el)) {
      resultArray.push(el);
    }
  }

  return resultArray;
}

filter_list([1, 2, "aasf", "1", "123", 123]);
