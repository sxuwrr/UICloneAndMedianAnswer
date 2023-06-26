const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  // Sort the array in ascending order
  const sortedArray = input.sort((a, b) => a - b);

  const length = sortedArray.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    // If array length is even
    return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
  } else {
    // If array length is odd
    return sortedArray[middleIndex];
  }
}

console.log(result(input)); // Output: 7
