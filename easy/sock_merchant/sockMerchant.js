/**
 * @param {number} n
 * @param {number[]} arr
 * @returns {number}
 */
function sockMerchant(n, arr) {
  const sockPairs = {};
  let c = 0;

  arr.forEach((color) => {
    if (sockPairs[color]) {
      delete sockPairs[color];
      c++;
      return;
    }

    sockPairs[color] = color;
  });

  return c;
}

module.exports = sockMerchant;
