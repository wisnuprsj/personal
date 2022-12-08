function threeNumberSum(array, targetSum) {
  // Write your code here.
  let tempArray = array.sort((a, b) => a - b);
  let results = [];
  for (let i = 0; i < tempArray.length; i++) {
    let startIndex = i + 1;
    let endIndex = tempArray.length - 1;

    while (startIndex < endIndex) {
      let sum = tempArray[i] + tempArray[startIndex] + tempArray[endIndex];
      if (sum == targetSum) {
        results.push([
          tempArray[i],
          tempArray[startIndex],
          tempArray[endIndex],
        ]);
        startIndex++;
        endIndex--;
      } else if (sum < targetSum) {
        startIndex++;
      } else {
        endIndex--;
      }
    }
  }

  return results;
}

let results = threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
console.log(results);
