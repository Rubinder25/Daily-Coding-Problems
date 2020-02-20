/**
 * @param {number[]} citations
 * @return {number}
 */
function hIndex(citations) {
  let hIndex = 0;
  let sortedCitations = citations.sort((a, b) => b - a);

  for (let i = 0; i < sortedCitations.length; i++) {
    if (i + 1 >= sortedCitations[i]) {
      return sortedCitations[i];
    }
  }
  return hIndex;
}

module.exports = hIndex;
