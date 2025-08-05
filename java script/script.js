function countAdjacentSums(arr, num) {
  if (!Array.isArray(arr)) throw new Error("הקלט אינו מערך");
  for (const el of arr) {
    if (typeof el !== 'number') throw new Error("כל הערכים במערך חייבים להיות מספרים");
  }
  let count = 0;
  for (let start = 0; start < arr.length; start++) {
    let sum = arr[start];
    for (let end = start + 1; end < arr.length; end++) {
      sum += arr[end];
      if (sum === num) {
        count++;
      }
    }
  }
  return count;
}
