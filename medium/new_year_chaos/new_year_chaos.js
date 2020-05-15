/**
 * return -1 if the line configuration is not possible
 * @param {number[]} q
 * @returns {number}
 */
function new_year_chaos(q) {
  let nBribes = 0;

  for (let i = 0; i < q.length; i++) {
    if (q[i] - i > 3) {
      return -1;
    }

    for (let j = q[i] - 2; j < i; j++) {
      if (q[j] > q[i]) {
        nBribes++;
      }
    }
  }

  return nBribes;
}

module.exports = new_year_chaos;
