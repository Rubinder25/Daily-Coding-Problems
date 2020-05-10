/**
 * @param {number} n number of steps
 * @param {string} s steps
 * @returns {number} number of valleys
 */
function countingValleys(n, s) {
  let countValleys = 0;
  let position = 0;

  for (const step of s.split('')) {
    if (position === 0 && step === 'D') {
      countValleys++;
    }

    position += step === 'D' ? -1 : 1;
  }

  return countValleys;
}

module.exports = countingValleys;
