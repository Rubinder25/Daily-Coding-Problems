/**
 *
 * @param {string} s a string to repeat
 * @param {number} n the number of characters to consider
 * @returns {number} the number of a's
 */
function repeatedString(s, n) {
  const countA = (st) => st.split('').filter((c) => c === 'a').length;

  const numberOfA = countA(s);
  const modulus = n % s.length;
  const countWholeStringA = ((n - modulus) / s.length) * numberOfA;
  const remainingA = countA(s.slice(0, modulus));

  return countWholeStringA + remainingA;
}

module.exports = repeatedString;
