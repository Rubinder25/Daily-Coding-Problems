/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function smallestSortWindow(arr) {
  let s = -1;
  let f = -1;

  for (let i = 0; i < arr.length; i++) {
    if (s !== -1) {
      if (arr[s] > arr[i]) {
        f = i;
      } else if (arr[i] > arr[i + 1]) {
        f = i + 1;
      }
    } else if (arr[i] > arr[i + 1]) {
      s = i;
    }
  }

  return [s, f];
}

module.exports = smallestSortWindow;
