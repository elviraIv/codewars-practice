// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let currentShortestLenght = Number.MAX_SAFE_INTEGER;
  s = s.split(" ");

  for (let word of s) {
    let size = word.length;

    if (size < currentShortestLenght) {
      currentShortestLenght = size;
    }
  }

  return currentShortestLenght;
}
