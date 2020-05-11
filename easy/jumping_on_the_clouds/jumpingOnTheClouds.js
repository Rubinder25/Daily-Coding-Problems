/**
 *
 * @param {number} n
 * @param {number[]} clouds
 * @returns {number}
 */
function jumpingOnTheClouds(n, clouds) {
  let minSteps = 0;
  let i = 0;

  while (i !== clouds.length - 1) {
    if (clouds[i + 2] === 0) {
      i += 2;
    } else if (clouds[i + 1] === 0) {
      i += 1;
    } else {
      throw new Error('Invalid game');
    }

    minSteps++;
  }

  return minSteps;
}

module.exports = jumpingOnTheClouds;
